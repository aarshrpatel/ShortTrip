"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import stores from "@/assets/landing/landing-stores-design.svg";

const StoreSection = () => {
  return (
    <div className="my-16 mx-40 md:my-32 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        {/* Image Container: now takes up half the width */}
        <div className="w-full md:w-1/2">
          <Image
            src={stores}
            alt="Four Short Trip Stores with a Border"
            className="w-full h-auto"
          />
        </div>
        {/* Text Container with creative shaped background */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <div
            className="absolute inset-0 bg-yellow-100"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)" }}
          ></div>
          <div className="relative p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              More Than Just a Gas Station
            </h2>
            <p className="text-lg md:text-xl font-bold text-gray-700">
              We&apos;re your one-stop shop for fresh coffee, delicious snacks, and everyday essentials. Whether you&apos;re on the road or in the neighborhood, our stores are designed to make your day easier.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StoreSection;
