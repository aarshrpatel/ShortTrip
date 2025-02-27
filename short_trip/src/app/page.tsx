"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FoodShowcase from "@/components/Food-Cards/FoodShowcase";
import Testimonials from "@/components/Testimonials";
import StoreSection from "@/components/StoreSection";
import CareerSection from "@/components/CareerSection";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
    <div className="w-full bg-mutecolor">
      {/* Hero Section */}
      <Hero />

      {/* Food Showcase Section */}
      {/* <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: false, amount: 0.4 }}
      > */}
        <FoodShowcase />
      {/* </motion.div> */}

      {/* Store Section */}
      <StoreSection />

      {/* Our Story Section */}
      <OurStory />

      {/* Career Section */}
      <CareerSection />
    </div>
  );
}
