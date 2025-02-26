"use client";

import Image from "next/image";
import storeImage from "@/assets/about/ST110.svg"; // Replace with actual store image
import ceo from "@/assets/about/ceo.svg"; // Replace with actual team images
import cfo from "@/assets/about/cfo.svg";
import coo from "@/assets/about/coo.svg";
import chro from "@/assets/about/chro.svg";
import cto from "@/assets/about/cto.svg";
import groupPhoto from "@/assets/about/teamhandshake.jpeg"; // Replace with the handshake image
import cloudImage from "@/assets/about/cloud-shape.png"; // Replace with cloud image
import { motion } from "framer-motion";

// Animation settings
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        {/* Store Image */}
        <Image src={storeImage} alt="Short Trip Store" layout="fill" objectFit="cover" className="opacity-50" />
      </div>

      {/* Our Story Section with Cloud Shape and Video */}
      <div className="relative flex flex-col md:flex-row items-center justify-between py-20 px-6 md:-mt-20">
        {/* Cloud Shape with Text */}
        <div className="relative w-full md:w-1/2 flex justify-start">
          <Image src={cloudImage} alt="Cloud Shape" className="absolute w-full max-w-lg" />
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-md ml-8 text-left text-white relative z-10"
          >
            <h2 className="text-4xl font-extrabold mb-4">Our Story</h2>
            <p className="text-lg font-bold">
              Short Trip isn’t just another gas station—it’s a destination. A place where convenience meets community, 
              and every stop is more than just a transaction. Our story is one of innovation, service, and commitment to quality.
            </p>
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video className="rounded-lg shadow-lg w-full max-w-md" autoPlay loop muted>
            <source src="/company-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* How It All Started Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-12">
        {/* Image */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="w-full max-w-md">
          <Image src={groupPhoto} alt="Our Founding Team" className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Text */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">How It All Started</h2>
          <p className="text-lg font-bold text-gray-700">
            The idea behind Short Trip began with a simple yet powerful vision: to redefine the gas station experience. 
            We saw an opportunity to create a place that wasn’t just about fuel but about people. A place where customers 
            could find everything they need—from fresh coffee to daily essentials—in a welcoming environment that feels like home.
          </p>
        </motion.div>
      </div>

      {/* Our Team Section */}
      <div className="text-center py-16 px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Our Team</h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center">
          {/* Team Member */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Image src={ceo} alt="Raj Patel" className="w-40 h-40 rounded-full border-4 border-red shadow-lg" />
            <h3 className="text-xl font-bold mt-4">Raj Patel</h3>
            <p className="text-gray-700">CEO</p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Image src={cfo} alt="Hitesh Patel" className="w-40 h-40 rounded-full border-4 border-red shadow-lg" />
            <h3 className="text-xl font-bold mt-4">Hitesh Patel</h3>
            <p className="text-gray-700">CFO</p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Image src={coo} alt="Suresh Patel" className="w-40 h-40 rounded-full border-4 border-red shadow-lg" />
            <h3 className="text-xl font-bold mt-4">Suresh Patel</h3>
            <p className="text-gray-700">COO</p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Image src={chro} alt="Devang Patel" className="w-40 h-40 rounded-full border-4 border-red shadow-lg" />
            <h3 className="text-xl font-bold mt-4">Devang Patel</h3>
            <p className="text-gray-700">CHRO</p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Image src={cto} alt="Dipin Patel" className="w-40 h-40 rounded-full border-4 border-red shadow-lg" />
            <h3 className="text-xl font-bold mt-4">Bipin Patel</h3>
            <p className="text-gray-700">CTO</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
