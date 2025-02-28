"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import stripes from "@/assets/landing/food-cards-background-stripes.svg";

const TransitionBackground = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
      className="absolute inset-x-0 top-0 h-[300px] -z-10"
    >
      <Image
        src={stripes}
        alt="Transition Background"
        fill
        className="object-cover"
      />
    </motion.div>
  );
};

export default TransitionBackground;
