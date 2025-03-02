"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import stores from "@/assets/landing/landing-stores-design.svg";

const StoreSection = () => {
  return (
    // The outer section now uses smaller vertical and horizontal margins on mobile,
    // and larger margins on medium (md) screens and up.
    <section
      aria-label="Our Stores"
      className="my-8 mx-4 md:my-16 md:mx-40 px-4 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        {/* Image Container: Stays full width */}
        <div className="w-full">
          <Image
            src={stores}
            alt="Illustration of four Short Trip stores with a border design"
            className="w-full h-auto"
          />
        </div>
        {/* Text Container with creative background */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          {/* Background overlay with creative shape */}
          <div
            className="absolute inset-0 bg-yellow-100"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)" }}
          />
          {/* Text content with reduced padding and smaller text on mobile */}
          <div className="relative p-4 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 md:mb-4">
              More Than Just a Gas Station
            </h2>
            <p className="text-base md:text-lg font-bold text-gray-700">
              We&apos;re your one-stop shop for fresh coffee, delicious snacks, and everyday essentials.
              Whether you&apos;re on the road or in the neighborhood, our stores are designed to make your day easier.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StoreSection;
