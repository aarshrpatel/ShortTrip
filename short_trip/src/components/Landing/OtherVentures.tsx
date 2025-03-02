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
    // Outer section with responsive padding
    <section aria-label="Our Other Ventures" className="py-8 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Section heading with responsive text sizes */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
          Our Other Ventures
        </h2>
        {/* Section description with responsive text sizes */}
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
          Discover the innovative projects and brands we&apos;re proud to be a part of.
        </p>
        {/* Flex container for venture logos with smaller gaps */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {ventures.map((venture) => (
            // Each venture is rendered in a smaller container so they remain in one line.
            <div
              key={venture.name}
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              aria-label={venture.name}
            >
              {/* Inner motion div applies a hover scale effect */}
              <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 md:w-20 md:h-20">
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
