"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Import venture logos (update these paths as needed)
import venture1 from "@/assets/logo.png";
import venture2 from "@/assets/logo.png";
import venture3 from "@/assets/logo.png";
import venture4 from "@/assets/logo.png";

// Define a type for a venture
interface Venture {
  name: string;
  logo: string | StaticImageData;
}

// Array of venture data
const ventures: Venture[] = [
  { name: "Venture One", logo: venture1 },
  { name: "Venture Two", logo: venture2 },
  { name: "Venture Three", logo: venture3 },
  { name: "Venture Four", logo: venture4 },
];

const OtherVentures = () => {
  return (
    // Section element with a light background and padding; aria-label for accessibility.
    <section className="py-12 px-4 bg-gray-100" aria-label="Our Other Ventures">
      <div className="container mx-auto text-center">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Other Ventures
        </h2>
        {/* Section description */}
        <p className="text-lg text-gray-600 mb-8">
          Discover the innovative projects and brands we&apos;re proud to be a part of.
        </p>
        {/* Flex container for venture logos */}
        <div className="flex flex-wrap justify-center gap-8">
          {ventures.map((venture) => (
            // Each venture is now rendered as a static div with hover scaling
            <div
              key={venture.name}
              className="w-40 h-40 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              aria-label={venture.name}
            >
              <motion.div whileHover={{ scale: 1.1 }} className="w-32 h-32">
                <Image
                  src={venture.logo}
                  alt={venture.name}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherVentures;
