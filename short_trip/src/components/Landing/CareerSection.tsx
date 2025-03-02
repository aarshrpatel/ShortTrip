"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import career from "@/assets/landing/landing-employees.svg"; // Import the image asset

const CareerSection = () => {
  return (
    // Responsive container:
    // - On mobile: reduced padding (py-8) and smaller gap (gap-4)
    // - On larger screens: increased padding and gap.
    <motion.section
      aria-labelledby="career-heading"
      initial={{ opacity: 0, y: 40 }} // Starting animation state
      whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
      viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is visible
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-8 md:py-16 px-4 sm:px-8"
    >
      {/* Left Side: Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <h2
          id="career-heading"
          className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4 text-gray-900"
        >
          Join Our Family
        </h2>
        <p className="text-base md:text-xl font-bold text-gray-700 mb-4">
          At Short Trip, we&apos;re more than just a team—we&apos;re a family. We&apos;re
          looking for passionate, hardworking individuals who want to grow with us and make a
          difference in the communities we serve. Whether you&apos;re starting your career or
          looking for your next opportunity, we have a place for you.
        </p>
        <Link href="/career" prefetch={true}>
          <button className="bg-red text-white font-bold py-1 px-4 md:py-2 md:px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-red hover:border hover:border-red">
            Work With Us
          </button>
        </Link>
      </div>

      {/* Right Side: Image Container */}
      <div className="w-full max-w-[250px] md:max-w-sm">
        <Image
          src={career}
          alt="Two employees smiling at camera"
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </motion.section>
  );
};

export default CareerSection;
