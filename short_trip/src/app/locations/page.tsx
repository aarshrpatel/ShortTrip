'use client'

import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const locationData = [
  // Example data for locations
  // Also hardcoded, we can change to access a json or something
  {
    name: 'Short Trip - San Francisco',
    position: [37.7749, -122.4194],
    address: '1234 Market St, San Francisco, CA 94103',
    phone: '(415) 123-4567'
  },
  {
    name: 'Short Trip - Los Angeles',
    position: [34.0522, -118.2437],
    address: '5678 Hollywood Blvd, Los Angeles, CA 90028',
    phone: '(213) 765-4321'
  },
  {
    name: 'Short Trip - New York',
    position: [40.7128, -74.0060],
    address: '9101 Wall St, New York, NY 10005',
    phone: '(212) 345-6789'
  }
];

export default function Locations() {
  const [search, setSearch] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locationData);

  useEffect(() => {
    setFilteredLocations(
      locationData.filter((loc) =>
        loc.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]); 

  return (
    <main className="relative min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-center">Our Locations</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search locations..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Grid Layout: Left -> Cards, Right -> Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left: Location Cards */}
          <div className="overflow-y-auto max-h-[500px] border-r pr-4">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <div key={location.name} className="border rounded-lg p-4 shadow mb-4">
                  <img
                    alt={location.name}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h2 className="text-xl font-semibold mt-2">{location.name}</h2>
                  <p className="text-sm text-gray-600">{location.address}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No locations found.</p>
            )}
          </div>

          {/* Right: Map */}
          <div className="h-[500px]">
            <MapContainer className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {filteredLocations.map((loc) => (
                <Marker key={loc.name} position={loc.position}>
                  <Popup>{loc.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </main>
  )
}