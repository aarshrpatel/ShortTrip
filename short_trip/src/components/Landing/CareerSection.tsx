"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import career from "@/assets/landing/landing-employees.svg"; // Import the image asset

const CareerSection = () => {
  return (
    // The motion.section element from Framer Motion adds animation to the entire section.
    // aria-labelledby provides accessibility by linking this section to its heading.
    <motion.section
      aria-labelledby="career-heading"
      initial={{ opacity: 0, y: 40 }} // Starting state for the animation (faded and shifted down)
      whileInView={{ opacity: 1, y: 0 }} // Animation state when the element is in view
      viewport={{ once: false, amount: 0.2 }} // When 20% of the section is visible, start the animation
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-16 px-4 sm:px-8"
    >
      {/* Left side: Text content */}
      <div className="max-w-lg text-center md:text-left">
        {/* The heading for this section, which is linked via aria-labelledby */}
        <h2 id="career-heading" className="text-3xl md:text-4xl font-extrabold mb-4">
          Join Our Family
        </h2>
        {/* Descriptive text about career opportunities */}
        <p className="text-lg md:text-xl font-bold text-gray-700 mb-6">
          At Short Trip, we&apos;re more than just a team—we&apos;re a family. We&apos;re looking for passionate, hardworking individuals who want to grow with us and make a difference in the communities we serve. Whether you&apos;re starting your career or looking for your next opportunity, we have a place for you.
        </p>
        {/* Link to the career page with a styled button */}
        <Link href="/career" prefetch={true}>
          <button className="bg-red text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-red hover:border hover:border-red">
            Work With Us
          </button>
        </Link>
      </div>

      {/* Right side: Image */}
      <div className="w-full max-w-sm">
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
