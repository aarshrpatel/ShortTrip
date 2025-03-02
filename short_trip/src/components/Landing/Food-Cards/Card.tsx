"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  label: string;
  imageSrc: string | StaticImageData;
}

const Card: React.FC<CardProps> = ({ label, imageSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs h-[350px] flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-3/4">
        <Image
          src={imageSrc}
          alt="Card image"
          fill
          className="object-cover"
        />
      </div>
      {/* Label Section */}
      <div className="p-4 flex flex-col justify-center h-1/4">
        <h3 className="text-xl font-bold text-red text-center">
          {label}
        </h3>
      </div>
    </motion.div>
  );
};

export default Card;
