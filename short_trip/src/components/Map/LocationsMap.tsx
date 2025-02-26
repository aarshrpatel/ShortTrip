import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import customIconUrl from "@/assets/mappin.png";
import "leaflet/dist/leaflet.css";

/** Lazy-load the MapContainer from react-leaflet (no SSR). */
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

/** Use a custom icon for markers. */
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
}

export default function LocationsMap({
                                       mapCenter,
                                       filteredLocations,
                                       handleGetDirections,
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

      {filteredLocations.map((loc) => (
        <Marker
          key={loc.id}
          position={[loc.coordinates.lat, loc.coordinates.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="p-1">
              <h2 className="font-semibold text-lg mb-2">{loc.name}</h2>
              <p className="mb-2">{loc.address}</p>
              <button
                onClick={() => handleGetDirections(loc.id)}
                className="px-3 py-2 bg-blue-500 text-white rounded text-sm"
              >
                Get Directions
              </button>
            </div>
          </Popup>
        </Marker>
      ))}

      <FitMapToBounds locations={filteredLocations} />
    </MapContainer>
  );
}

/**
 * Automatically fits the map bounds to all markers.
 * If there is only one location, sets a default zoom instead.
 */
function FitMapToBounds({ locations }: { locations: Location[] }) {
  const map = useMap();

  useEffect(() => {
    if (!map || locations.length === 0) return;

    const bounds = L.latLngBounds(
      locations.map((loc) => [loc.coordinates.lat, loc.coordinates.lng])
    );

    if (locations.length > 1) {
      map.fitBounds(bounds, { padding: [50, 50] });
    } else {
      const singleLoc = locations[0].coordinates;
      map.setView([singleLoc.lat, singleLoc.lng], 14);
    }
  }, [map, locations]);

  return null;
}