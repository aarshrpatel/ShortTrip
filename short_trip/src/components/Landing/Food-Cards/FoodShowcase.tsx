"use client";
import React, { useState } from "react";
import Card from "./Card";
import TransitionBackground from "./TransitionBackground";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ColdDrink from "@/assets/landing/cold-drink.png";
import ChickenHotFood from "@/assets/landing/chicken-hot-food.png";
import HotCoffee from "@/assets/landing/hot-coffee.png";

const cards = [
  { label: "Hot Foods", imageSrc: ChickenHotFood },
  { label: "Cold Beverages", imageSrc: ColdDrink },
  { label: "Fresh Coffee", imageSrc: HotCoffee },
];

const FoodShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative z-0 py-12 px-4">
      <TransitionBackground />
      <div className="relative z-10">
        {/* Desktop layout */}
        <div className="hidden sm:flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <Card key={index} label={card.label} imageSrc={card.imageSrc} />
          ))}
        </div>

        {/* Mobile layout with swipe buttons */}
        <div className="relative sm:hidden flex items-center justify-center">
          <button
            onClick={prevCard}
            className="absolute left-0 z-20 bg-white/80 p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden w-64 flex justify-center">
            <Card label={cards[currentIndex].label} imageSrc={cards[currentIndex].imageSrc} />
          </div>

          <button
            onClick={nextCard}
            className="absolute right-0 z-20 bg-white/80 p-2 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
