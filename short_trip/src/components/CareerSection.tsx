"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import career from "@/assets/landing-employees.svg";

const CareerSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-16 px-4 sm:px-8"
    >
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Join Our Family</h2>
        <p className="text-lg md:text-xl font-bold text-gray-700 mb-6">
          At Short Trip, we’re more than just a team—we’re a family. We’re looking for passionate, hardworking individuals who want to grow with us and make a difference in the communities we serve. Whether you're starting your career or looking for your next opportunity, we have a place for you.
        </p>
        <Link href="/career" prefetch={true}>
          <button className="bg-red text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-red hover:border hover:border-red">
            Work With Us
          </button>
        </Link>
      </div>

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
