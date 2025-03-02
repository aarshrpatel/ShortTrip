"use client";
import React from "react";
import Card from "./Card";
import TransitionBackground from "./TransitionBackground";
import ColdDrink from "@/assets/landing/cold-drink.png";
import ChickenHotFood from "@/assets/landing/chicken-hot-food.png";
import HotCoffee from "@/assets/landing/hot-coffee.png";

const FoodShowcase = () => {
  return (
    <section className="relative z-0 py-12 px-4">
      {/* Render the animated background behind the cards */}
      <TransitionBackground />
      <div className="relative z-10">
        {/*
          Use a responsive flex layout that wraps items.
          - "justify-center" ensures that the cards are centered in each row.
          - "gap-4" is used for mobile (smaller gap), and "sm:gap-8" for larger screens.
        */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Card label="Hot Foods" imageSrc={ChickenHotFood} />
          <Card label="Cold Beverages" imageSrc={ColdDrink} />
          <Card label="Fresh Coffee" imageSrc={HotCoffee} />
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
