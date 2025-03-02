"use client";

import React, {JSX, useEffect, useState } from "react";
import { FiClock, FiPhone, FiMapPin, FiSearch } from "react-icons/fi";
import { MdLocalLaundryService, MdLocalGasStation, MdLiquor, MdFastfood } from "react-icons/md";
import { ShoppingBasket } from 'lucide-react';
import { motion } from "framer-motion";
import { Card, Form } from "react-bootstrap";
import dynamic from "next/dynamic";
import { locations } from "./data/locations";

/** Lazy-load the LocationsMap component (no SSR). */
const LocationsMap = dynamic(() => import("@/components/Map/LocationsMap"), {
  ssr: false,
});

const serviceIconMap: { [key: string]: JSX.Element } = {
  "Convenience Store": <ShoppingBasket />,
  "Laundry": <MdLocalLaundryService />,
  "Gas Station": <MdLocalGasStation />,
  "Liquor": <MdLiquor />,
  "Food": <MdFastfood />,
};

/** Haversine formula to calculate distance between two coordinates */
function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371; // Radius of Earth in km
  const toRad = (x: number) => (x * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

/** Get coordinates for a given search query using OpenStreetMap's Nominatim API */
async function getCoordinates(query: string | number | boolean) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.length === 0) return null;

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
}

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [sortedLocations, setSortedLocations] = useState([...locations]);

  useEffect(() => {
    setSortedLocations([...locations]); // Default sorting (reset)
    const center = { lat: 0, lng: 0 }; // Default map center
    setMapCenter(center);
  }, []);

  const handleGetDirections = (locationId: number) => {
    const loc = locations.find((l) => l.id === locationId);
    if (!loc) return;

    const { lat, lng } = loc.coordinates;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, "_blank");
  };

  /** Handles sorting locations by closest distance */
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSortedLocations([...locations]);
      return;
    }

    const userLocation = await getCoordinates(query);
    if (!userLocation) return;

    const sorted = [...locations].sort((a, b) => {
      const distA = haversineDistance(
        userLocation.lat,
        userLocation.lng,
        a.coordinates.lat,
        a.coordinates.lng
      );
      const distB = haversineDistance(
        userLocation.lat,
        userLocation.lng,
        b.coordinates.lat,
        b.coordinates.lng
      );
      return distA - distB;
    });

    setSortedLocations(sorted);
    setMapCenter(userLocation); // Update map center to searched location
  };

  return (
    <div className="h-auto mx-auto px-8 pt-16 mt-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find a Short Trip Near You
      </motion.h1>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative rounded-2xl border-2">
          <span className="rounded-2xl absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FiSearch />
          </span>
          <Form.Control
            type="text"
            placeholder="Enter city, state, or zip code"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="rounded-2xl pl-10 pr-4 py-2 w-full"
          />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 h-screen gap-10 mb-8">
        {/* Location List */}
        <motion.div
          className="order-2 md:order-1 h-[auto] p-3 overflow-y-scroll max-h-[screen]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {sortedLocations.map((location) => (
            <motion.div
              key={location.id}
              onClick={() => setSelectedLocation(location.id)}
              className={`mb-6 cursor-pointer ${
                selectedLocation === location.id ? "ring-2 ring-red rounded-lg" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="shadow rounded-lg">
                <Card.Body className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">{location.name}</h2>
                    {location.services && location.services.length > 0 && (
                      <div className="flex items-center space-x-2 text-xl">
                        {location.services.map((service, idx) => (
                          <span key={idx}>
                          {serviceIconMap[service]}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-start mb-2 text-sm">
                    <FiMapPin className="w-5 h-5 mr-2 text-red" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-center mb-2 text-sm">
                    <FiPhone className="w-5 h-5 mr-2 text-red" />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiClock className="w-5 h-5 mr-2 text-red" />
                    <div>
                      {location.hours.split("|").map((hour, index) => (
                        <p key={index}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          className="order-2 md:order-2 w-full 
               h-[300px] md:h-full 
               rounded-lg shadow map-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LocationsMap
            mapCenter={mapCenter}
            filteredLocations={sortedLocations}
            selectedLocationId={selectedLocation} 
            handleGetDirections={handleGetDirections}
          />
        </motion.div>
      </div>
    </div>
  );
}
