"use client";
import React from "react";
import Card from "./Card";
import TransitionBackground from "./TransitionBackground";
import ColdDrink from "@/assets/cold-drink.png";
import ChickenHotFood from "@/assets/chicken-hot-food.png";
import HotCoffee from "@/assets/hot-coffee.png";

const FoodShowcase = () => {
  return (
    <section className="relative z-0 py-12 px-4">
      <TransitionBackground />
      <div className="relative z-10">
        <div className="flex flex-wrap justify-center text-red gap-8">
          <Card label="Hot Foods" imageSrc={ChickenHotFood} />
          <Card label="Hot Beverages" imageSrc={ColdDrink} />
          <Card label="Fresh Coffee" imageSrc={HotCoffee} />
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
