"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const OurStory = () => {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="bg-red py-16 md:py-20 px-4 sm:px-8 flex flex-col items-center text-center gap-4"
    >
      <motion.h2
        id="our-story-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl md:text-4xl font-extrabold mb-4 text-white"
      >
        Our Story
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-lg md:text-xl font-bold text-white max-w-lg md:max-w-2xl"
      >
        At Short Trip, we&apos;re redefining convenience by bringing everything your neighborhood needs into one stop. From fuel to fresh snacks, great coffee, and everyday essentials, we&apos;re here to make your journey easier.
      </motion.p>
      <div className="bg-white text-red font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-red hover:text-white hover:border hover:border-white">
        <Link href="/about">Learn More</Link>
      </div>
    </section>
  );
};

export default OurStory;
