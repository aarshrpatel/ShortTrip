'use client'

import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { FiClock, FiPhone, FiMapPin, FiSearch } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Card, Form } from 'react-bootstrap'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import customIconUrl from '@/assets/mappin.png'

// Example data
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
    name: "Short Trip - Ridgeville",
    address: "3147 State Rd, Ridgeville, SC 29472",
    phone: "(843) 688-5800",
    hours: "5am - 9pm, Mon-Sat, 8am - 8pm Sun",
    coordinates: { lat: 35.173869, lng: -80.207702 },
  },
  {
    id: 5,
    name: "Short Trip - Ridgeville",
    address: "3147 State Rd, Ridgeville, SC 29472",
    phone: "(843) 688-5800",
    hours: "5am - 9pm, Mon-Sat, 8am - 8pm Sun",
    coordinates: { lat: 37.173869, lng: -80.207702 },
  },
]

// A helper component to move the map when `mapCenter` changes
function MapFlyTo({ center }: { center: { lat: number; lng: number } }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo([center.lat, center.lng], 10) // Adjust zoom level as preferred
  }, [center, map])
  return null
}

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 33.000607,
    lng: -80.090925,
  })

  // Filter locations based on the user search
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Move the map to the clicked location
  const handleLocationClick = (locationId: number) => {
    setSelectedLocation(locationId)
    const loc = locations.find((l) => l.id === locationId)
    if (loc) {
      setMapCenter(loc.coordinates)
    }
  }

  // Get directions (opens in new tab)
  const handleGetDirections = (locationId: number) => {
    const loc = locations.find((l) => l.id === locationId)
    if (!loc) return
    const { lat, lng } = loc.coordinates
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    window.open(directionsUrl, "_blank")
  }

  return (
    <div className="h-auto mx-auto px-8 pt-16 mt-16">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find a Short Trip Near You
      </motion.h1>

      {/* Search Input */}
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
        {/* List of Locations */}
        <motion.div
          className="order-2 md:order-1 h-1/2 pr-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredLocations.map((location) => (
            <motion.div
              key={location.id}
              // Click the entire card to set the map center
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
                    <FiMapPin
                      color={"red"}
                      className="w-5 h-5 mr-2 flex-shrink-0 text-red-500"
                    />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-center mb-2 text-sm">
                    <FiPhone
                      color={"red"}
                      className="w-5 h-5 mr-2 flex-shrink-0 text-red-500"
                    />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex items-center text-sm">
                    <FiClock
                      color={"red"}
                      className="w-5 h-5 mr-2 flex-shrink-0 text-red-500"
                    />
                    <p>{location.hours}</p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="order-1 md:order-2 w-full h-[630px] rounded-lg overflow-hidden shadow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MapContainer
            center={[mapCenter.lat, mapCenter.lng]}
            zoom={10}
            style={{ width: '100%', height: '100%' }}
          >
            <MapFlyTo center={mapCenter} />

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {filteredLocations.map((loc) => (
              <Marker
                key={loc.id}
                position={[loc.coordinates.lat, loc.coordinates.lng]}
              >
                <Popup>
                  <div className="p-1">
                    <h2 className="font-semibold text-lg mb-2">{loc.name}</h2>
                    <p className="mb-2">{loc.address}</p>
                    {/* Moved the "Get Directions" button into the popup */}
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
          </MapContainer>
        </motion.div>
      </div>
    </div>
  )
}
