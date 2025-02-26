"use client";

import React, { useEffect, useState } from "react";
import { FiClock, FiPhone, FiMapPin, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { Card, Form } from "react-bootstrap";
import dynamic from "next/dynamic";

/** Lazy-load the LocationsMap component (no SSR). */
const LocationsMap = dynamic(() => import("@/components/Map/LocationsMap"), {
  ssr: false,
});

/** Example location data. Replace or fetch dynamically as needed. */
const locations = [
  {
    id: 1,
    name: "Short Trip - Ladson",
    address: "348 College Park Rd, Ladson, SC 29456",
    phone: "(843) 797-6792",
    hours: "5am - 12am, 7 days a week",
    coordinates: { lat: 33.000607, lng: -80.090925 },
  },
  {
    id: 2,
    name: "Short Trip - Sumter",
    address: "3880 Patriot Pkwy, Sumter, SC 29154",
    phone: "(803) 294-0300",
    hours: "5am - 10pm Mon-Fri, 6am - 10pm Sat, 7am - 8pm Sun",
    coordinates: { lat: 33.935857, lng: -80.441361 },
  },
  {
    id: 3,
    name: "Short Trip - Ridgeville",
    address: "3147 State Rd, Ridgeville, SC 29472",
    phone: "(843) 688-5800",
    hours: "5am - 9pm, Mon-Sat, 8am - 8pm Sun",
    coordinates: { lat: 33.173869, lng: -80.207702 },
  },
  {
    id: 4,
    name: "Short Trip - St. George",
    address: "601 N Parler Ave, St. George, SC 29477",
    phone: "(843) 563-5000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 33.207013, lng: -80.579013 },
  },
  {
    id: 5,
    name: "Short Trip - Orangeburg",
    address: "1000 Chestnut St, Orangeburg, SC 29115",
    phone: "(803) 531-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 33.496013, lng: -80.855013 },
  },
  {
    id: 6,
    name: "Short Trip - Walterboro",
    address: "1000 Sniders Hwy, Walterboro, SC 29488",
    phone: "(843) 538-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 32.905013, lng: -80.655013 },
  },
  {
    id: 7,
    name: "Short Trip - Kingstree",
    address: "1000 N Longstreet St, Kingstree, SC 29556",
    phone: "(843) 354-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 33.666013, lng: -79.850013 },
  },
  {
    id: 8,
    name: "Short Trip - Florence",
    address: "1000 S Irby St, Florence, SC 29501",
    phone: "(843) 662-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 34.196013, lng: -79.765013 },
  },
  {
    id: 9,
    name: "Short Trip - Georgetown",
    address: "1000 N Fraser St, Georgetown, SC 29440",
    phone: "(843) 546-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 33.376013, lng: -79.295013 },
  },
  {
    id: 10,
    name: "Short Trip - Conway",
    address: "1000 3rd Ave, Conway, SC 29526",
    phone: "(843) 248-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 33.836013, lng: -79.050013 },
  },
  {
    id: 11,
    name: "Short Trip - Myrtle Beach",
    address: "1000 3rd Ave, Conway, SC 29526",
    phone: "(843) 626-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 33.706013, lng: -78.890013 },
  },
  {
    id: 12,
    name: "Short Trip - Charleston",
    address: "1000 3rd Ave, Conway, SC 29526",
    phone: "(843) 723-0000",
    hours: "5am - 10pm, 7 days a week",
    coordinates: { lat: 32.796013, lng: -79.950013 },
  },
];

/** Get the geographic center to initialize the map. */
function getCenterOfLocations(locationsArray: typeof locations) {
  if (!locationsArray.length) return { lat: 0, lng: 0 };

  const latitudes = locationsArray.map((loc) => loc.coordinates.lat);
  const longitudes = locationsArray.map((loc) => loc.coordinates.lng);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  return {
    lat: (minLat + maxLat) / 2,
    lng: (minLng + maxLng) / 2,
  };
}

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  // On mount, center to all locations
  useEffect(() => {
    const center = getCenterOfLocations(locations);
    setMapCenter(center);
  }, []);

  // Filter logic
  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /** Called when user clicks a location card. */
  const handleLocationClick = (locationId: number) => {
    setSelectedLocation(locationId);
    // Optionally move the "map center" state, but not strictly required
    const loc = locations.find((l) => l.id === locationId);
    if (loc) {
      setMapCenter(loc.coordinates);
    }
  };

  /** Called when user wants Google Maps directions. */
  const handleGetDirections = (locationId: number) => {
    const loc = locations.find((l) => l.id === locationId);
    if (!loc) return;

    const { lat, lng } = loc.coordinates;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, "_blank");
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
            placeholder="Search by city, state, or zip code"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-2xl pl-10 pr-4 py-2 w-full"
          />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Location List */}
        <motion.div
          className="order-2 md:order-1 h-[auto] p-3 overflow-y-scroll max-h-[630px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredLocations.map((location) => (
            <motion.div
              key={location.id}
              onClick={() => handleLocationClick(location.id)}
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
                    <p>{location.hours}</p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pass selectedLocationId down so the map knows which marker to open */}
        <motion.div
          className="order-2 md:order-2 w-full h-[630px] rounded-lg shadow map-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LocationsMap
            mapCenter={mapCenter}
            filteredLocations={filteredLocations}
            handleGetDirections={handleGetDirections}
            selectedLocationId={selectedLocation} // <-- new prop
          />
        </motion.div>
      </div>
    </div>
  );
}