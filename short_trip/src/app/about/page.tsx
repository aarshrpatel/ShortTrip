"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// Import image assets
import storeImage from "@/assets/about/ST110.svg"; // Store background image
import ceo from "@/assets/about/ceo.png"; // Team member images
import cfo from "@/assets/about/cfo.png";
import coo from "@/assets/about/coo.png";
import chro from "@/assets/about/chro.png";
import cto from "@/assets/about/cto.png";
import groupPhoto from "@/assets/about/teamhandshake.jpeg"; // Founding team image
// Note: Update these asset paths as needed

// Animation settings for fade-in effects
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Us - Short Trip</title>
        <meta
          name="description"
          content="Learn about Short Trip, our journey, and how we redefine convenience with exceptional service, fresh coffee, and community values."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="About Us - Short Trip" />
        <meta
          property="og:description"
          content="Learn about Short Trip, our journey, and how we redefine convenience with exceptional service, fresh coffee, and community values."
        />
        <meta property="og:image" content="https://shorttrip.com/images/og-about.jpg" />
        <meta property="og:url" content="https://shorttrip.com/about" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="About Us - Short Trip" />
        <meta
          name="twitter:description"
          content="Learn about Short Trip, our journey, and how we redefine convenience with exceptional service, fresh coffee, and community values."
        />
        <meta name="twitter:image" content="https://shorttrip.com/images/og-about.jpg" />
      </Head>

      <div className="w-full">
        {/* Hero Section: Store background image with overlay */}
        <div className="relative h-[60vh] flex items-center justify-center bg-gray-900">
          <Image
            src={storeImage}
            alt="Short Trip Store"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Our Journey Section with Gradient Background */}
        <section
          className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6 bg-gradient-to-r from-yellow to-red"
          aria-label="Our Journey"
        >
          {/* Left: Story Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700">
              Short Trip began with a simple vision&mdash;to redefine convenience by creating a one-stop hub for fuel, fresh coffee, and everyday essentials. Our journey is one of innovation, community, and service. We believe that every stop should be more than just a transaction; it should be an experience that connects people and builds trust.
            </p>
          </div>
          {/* Right: Video Section */}
          <div className="w-full md:w-1/2">
            <video controls className="rounded-lg shadow-lg w-full" loop>
              <source src="/company-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* How It All Started Section with Soft Gray Background */}
        <section
          className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-6 bg-gray-50 rounded-lg shadow-inner mx-4"
          aria-label="How It All Started"
        >
          {/* Left: Founding Team Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md"
          >
            <Image
              src={groupPhoto}
              alt="Our Founding Team"
              className="rounded-lg"
            />
          </motion.div>
          {/* Right: Text */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-center md:text-left"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
              How It All Started
            </h2>
            <p className="text-lg text-gray-700">
              The idea behind Short Trip began with a simple yet powerful vision: to redefine the gas station experience. We saw an opportunity to create a place that wasn&apos;t just about fuel but about people&mdash;a place where customers could find everything they need&mdash;from fresh coffee to daily essentials&mdash;in a welcoming environment that feels like home.
            </p>
          </motion.div>
        </section>

        {/* Our Team Section: Grid with team member images and details */}
        <section className="py-16 px-6 bg-gray-100" aria-label="Our Team">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
            Our Team
          </h2>
          {/* Grid layout: 3 in one row, 2 in another */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-center mx-[10vw]">
            {/* Team Member: Raj Patel */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Image
                src={ceo}
                alt="Raj Patel"
                className="w-[30vw] h-[30vh] object-contain"
              />
              <h3 className="text-xl font-bold mt-4">Raj Patel</h3>
              <p className="text-gray-700">CEO</p>
            </motion.div>
            {/* Team Member: Hitesh Patel */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Image
                src={cfo}
                alt="Hitesh Patel"
                className="w-[30vw] h-[30vh] object-contain"
              />
              <h3 className="text-xl font-bold mt-4">Hitesh Patel</h3>
              <p className="text-gray-700">CFO</p>
            </motion.div>
            {/* Team Member: Suresh Patel */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Image
                src={coo}
                alt="Suresh Patel"
                className="w-[30vw] h-[30vh] object-contain"
              />
              <h3 className="text-xl font-bold mt-4">Suresh Patel</h3>
              <p className="text-gray-700">COO</p>
            </motion.div>
            {/* Team Member: Devang Patel */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Image
                src={chro}
                alt="Devang Patel"
                className="w-[30vw] h-[30vh] object-contain"
              />
              <h3 className="text-xl font-bold mt-4">Devang Patel</h3>
              <p className="text-gray-700">CHRO</p>
            </motion.div>
            {/* Team Member: Bipin Patel */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Image
                src={cto}
                alt="Bipin Patel"
                className="w-[30vw] h-[30vh] object-contain"
              />
              <h3 className="text-xl font-bold mt-4">Bipin Patel</h3>
              <p className="text-gray-700">CTO</p>
            </motion.div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-12 bg-red-100 text-center" aria-label="Contact Call to Action">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Learn More?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with us to discover more about our journey and how we&apos;re redefining convenience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red text-white px-8 py-3 rounded-full shadow-lg hover:bg-red-600 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
}
