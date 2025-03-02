"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const OurStory = () => {
  return (
    // Outer section with responsive vertical padding and gap.
    // On mobile, we use smaller padding (py-8) and smaller gap (gap-2) than on desktop.
    <section
      aria-labelledby="our-story-heading"
      className="bg-red py-8 md:py-16 px-4 sm:px-8 flex flex-col items-center text-center gap-2 md:gap-4"
    >
      {/* Animated heading with responsive font sizes:
          - Mobile: text-2xl
          - Desktop: text-4xl */}
      <motion.h2
        id="our-story-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4 text-white"
      >
        Our Story
      </motion.h2>
      {/* Animated paragraph with responsive font sizes:
          - Mobile: text-base
          - Desktop: text-xl */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-base md:text-xl font-bold text-white max-w-lg md:max-w-2xl"
      >
        At Short Trip, we&apos;re redefining convenience by bringing everything your neighborhood needs into one stop. From fuel to fresh snacks, great coffee, and everyday essentials, we&apos;re here to make your journey easier.
      </motion.p>
      {/* Call-to-action button with responsive padding:
          - Mobile: py-1 px-4
          - Desktop: py-2 px-6 */}
      <div className="bg-white text-red font-bold py-1 px-4 md:py-2 md:px-6 rounded-lg transition-all duration-300 hover:bg-red hover:text-white hover:border hover:border-white">
        <Link href="/about">Learn More</Link>
      </div>
    </section>
  );
};

export default OurStory;
