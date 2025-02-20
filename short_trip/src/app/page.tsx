"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import career from "@/assets/landing-employees.svg";
import TransitionSVG from "@/components/TransitionSVG";
import st110 from "@/assets/ST110.svg";
import stores from "@/assets/landing-stores-design.svg";
import Link from "next/link";

// Default fade-in from bottom
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Expands from center horizontally
const middleExpandVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Image */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="h-[80vh] flex flex-row items-center justify-center"
      >
        <Image
          src={st110}
          alt="Champ Chicken In Our Store with Employee Smiling"
          className="h-[90%] w-[90%]"
        />
      </motion.section>

      {/* Food, Hot Drinks, Cold Drinks Promotion */}
      <motion.div
        variants={middleExpandVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="origin-center w-full"
      >
        <TransitionSVG />
      </motion.div>

      {/* Store Images with Text */}
      <div className="my-16 md:my-32 px-4 sm:px-8 flex flex-row items-center justify-center">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src={stores}
            alt="Four Short Trip Stores with a Border"
            className="w-full max-w-4xl h-auto"
          />
          <div className="text-center px-4 sm:px-8 my-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">More Than Just a Gas Station</h2>
            <p className="text-lg md:text-xl font-bold text-gray-700 max-w-2xl mx-auto">
              We’re your one-stop shop for fresh coffee, delicious snacks, and everyday essentials. Whether you're on the road or in the neighborhood, our stores are designed to make your day easier.
            </p>
          </div>

        </motion.section>
      </div>

      {/* Our Story Section */}
      <div className="bg-red py-16 md:py-20 px-4 sm:px-8 flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Our Story</h2>
        <p className="text-lg md:text-xl font-bold text-white max-w-lg md:max-w-2xl">
          At Short Trip, we’re redefining convenience by bringing everything your neighborhood needs into one stop. From fuel to fresh snacks, great coffee, and everyday essentials, we’re here to make your journey easier. Learn more about our story, mission, and commitment to quality service.
        </p>
        <Link href="/about">
          <button className="bg-white text-red font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-red hover:text-white hover:border hover:border-white">
            Learn More
          </button>
        </Link>
      </div>

      {/* Career Description */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-16 px-4 sm:px-8"
      >
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Join Our Family</h2>
          <p className="text-lg md:text-xl font-bold text-gray-700">
            At Short Trip, we’re more than just a team—we’re a family. We’re looking for passionate, hardworking individuals who want to grow with us and make a difference in the communities we serve. Whether you're starting your career or looking for your next opportunity, we have a place for you.
          </p>
        </div>

        <div className="w-full max-w-sm">
          <Image
            src={career}
            alt="Two employees smiling at camera"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </motion.section>
    </div>
  );
}
