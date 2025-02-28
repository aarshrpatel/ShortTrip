"use client";

import Hero from "@/components/Landing/Hero";
import FoodShowcase from "@/components/Landing/Food-Cards/FoodShowcase";
import StoreSection from "@/components/Landing/StoreSection";
import CareerSection from "@/components/Landing/CareerSection";
import OurStory from "@/components/Landing/OurStory";
import OtherVentures from "@/components/Landing/OtherVentures";

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

      {/* Other Ventures Sections */}
      <OtherVentures />
    </div>
  );
}
