import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import customIconUrl from "@/assets/mappin.png";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const customIcon = new L.Icon({
  iconUrl: customIconUrl.src,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface LocationsMapProps {
  mapCenter: { lat: number; lng: number };
  filteredLocations: Location[];
  handleGetDirections: (locationId: number) => void;
  selectedLocationId?: number | null;
}

export default function LocationsMap({
                                       mapCenter,
                                       filteredLocations,
                                       handleGetDirections,
                                       selectedLocationId,
                                     }: LocationsMapProps) {
  return (
    <MapContainer
      center={[mapCenter.lat, mapCenter.lng]}
      zoom={10}
      style={{ width: "100%", height: "100%" }}
      className="rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
      />

      <MapMarkers
        filteredLocations={filteredLocations}
        handleGetDirections={handleGetDirections}
        selectedLocationId={selectedLocationId}
      />

      <FitMapToBounds
        locations={filteredLocations}
        selectedLocationId={selectedLocationId}
      />
    </MapContainer>
  );
}

function MapMarkers({
                      filteredLocations,
                      handleGetDirections,
                      selectedLocationId,
                    }: {
  filteredLocations: Location[];
  handleGetDirections: (id: number) => void;
  selectedLocationId?: number | null;
}) {
  const map = useMap();
  const markerRefs = useRef<Record<number, L.Marker>>({});

  useEffect(() => {
    if (!selectedLocationId) return;

    const selectedLocation = filteredLocations.find(
      (loc) => loc.id === selectedLocationId
    );
    if (!selectedLocation) return;

    const marker = markerRefs.current[selectedLocationId];
    if (!marker) return;

    // Open the popup for this marker
    marker.openPopup();

    // Smoothly “fly” the map to the marker's location
    map.flyTo(marker.getLatLng(), 14, {
      animate: true,
      duration: 1.5, // Adjust duration for a slower or faster zoom
    });
  }, [selectedLocationId, filteredLocations, map]);

  return (
    <>
      {filteredLocations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.coordinates.lat, loc.coordinates.lng]}
          icon={customIcon}
          // Save a ref to the Leaflet Marker instance
          ref={(markerInstance) => {
            if (markerInstance) {
              markerRefs.current[loc.id] = markerInstance;
            }
          }}
        >
          <Popup>
            <div className="p-1">
              <h2 className="font-semibold text-lg mb-2">{loc.name}</h2>
              <p className="mb-2">{loc.address}</p>
              <button
                onClick={() => handleGetDirections(loc.id)}
                className="px-3 py-2 w-full bg-red text-white rounded text-sm"
              >
                Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function FitMapToBounds({
                          locations,
                          selectedLocationId,
                        }: {
  locations: Location[];
  selectedLocationId?: number | null;
}) {
  const map = useMap();

  useEffect(() => {
    // Only auto-fit if NO location is selected
    if (selectedLocationId) return;
    if (!map || locations.length === 0) return;

    if (locations.length > 1) {
      const bounds = L.latLngBounds(
        locations.map((loc) => [loc.coordinates.lat, loc.coordinates.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    } else {
      // Single location: center on it
      const singleLoc = locations[0].coordinates;
      map.setView([singleLoc.lat, singleLoc.lng], 14);
    }
  }, [map, locations, selectedLocationId]);

  return null;
}