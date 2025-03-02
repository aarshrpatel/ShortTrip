"use client";

import Head from "next/head";
import Hero from "@/components/Landing/Hero";
import FoodShowcase from "@/components/Landing/Food-Cards/FoodShowcase";
import StoreSection from "@/components/Landing/StoreSection";
import CareerSection from "@/components/Landing/CareerSection";
import OurStory from "@/components/Landing/OurStory";
import OtherVentures from "@/components/Landing/OtherVentures";

export default function Home() {
  return (
    <>
      <Head>
        <title>Short Trip - Fueling Your Journey</title>
        <meta
          name="description"
          content="Short Trip offers fuel, fresh coffee, and convenience at our one-stop locations. Explore our services, our story, and join our team today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Short Trip - Fueling Your Journey" />
        <meta
          property="og:description"
          content="Short Trip offers fuel, fresh coffee, and convenience at our one-stop locations. Explore our services, our story, and join our team today."
        />
        <meta property="og:image" content="https://shorttrip.com/images/logo.png" />
        <meta property="og:url" content="https://shorttrip.com" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:title" content="Short Trip - Fueling Your Journey" />
        <meta
          name="twitter:description"
          content="Short Trip offers fuel, fresh coffee, and convenience at our one-stop locations. Explore our services, our story, and join our team today."
        />
        <meta name="twitter:image" content="https://shorttrip.com/images/logo.png" /> 
      </Head>
      <div className="w-full bg-mutecolor">
        {/* Hero Section */}
        <Hero />

        {/* Food Showcase Section */}
        <FoodShowcase />

        {/* Store Section */}
        <StoreSection />

        {/* Our Story Section */}
        <OurStory />

        {/* Career Section */}
        <CareerSection />

        {/* Other Ventures Section */}
        <OtherVentures />
      </div>
    </>
  );
}
