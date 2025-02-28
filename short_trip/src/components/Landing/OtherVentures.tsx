"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Example imports for venture logos (adjust paths as needed)
import venture1 from "@/assets/logo.png";
import venture2 from "@/assets/logo.png";
import venture3 from "@/assets/logo.png";
import venture4 from "@/assets/logo.png";

interface Venture {
  name: string;
  logo: string | StaticImageData;
  link?: string;
}

const ventures: Venture[] = [
  { name: "Venture One", logo: venture1, link: "/venture-one" },
  { name: "Venture Two", logo: venture2, link: "/venture-two" },
  { name: "Venture Three", logo: venture3, link: "/venture-three" },
  { name: "Venture Four", logo: venture4, link: "/venture-four" },
];

const OtherVentures = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Other Ventures</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the innovative projects and brands we&apos;re proud to be a part of.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {ventures.map((venture) => (
            <a
              key={venture.name}
              href={venture.link || "#"}
              className="w-40 h-40 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherVentures;
