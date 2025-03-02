"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/assets/ST110.svg"; // Replace with your hero image path

const Hero = () => {
  return (
    <section className="relative h-[80vh]">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Store Image"
        fill
        className="object-cover"
      />

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-center px-4 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Fuel Your Journey with Short Trip
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white">
          Discover quality service, fresh coffee, and a one-stop destination at every visit.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/order"
            className="mt-8 inline-block px-8 py-4 bg-white text-orange-500 font-semibold rounded-full shadow-md transition hover:bg-orange-100"
          >
            Order Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
