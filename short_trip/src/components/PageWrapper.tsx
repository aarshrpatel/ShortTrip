"use client";
import { motion } from "framer-motion";
import React, { ReactNode, useState, useEffect } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

// Variants for the transition animation
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PageWrapper({ children }: PageWrapperProps) {
  // State to track if the viewport is desktop (>=768px)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Function to check the viewport width
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Check viewport on initial render
    checkViewport();
    // Add an event listener to update the state on window resize
    window.addEventListener("resize", checkViewport);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <div>
      {isDesktop
        // For desktop: wrap each child in a motion.div to add the animation
        ? React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {child}
            </motion.div>
          ))
        // For mobile: render children without animation
        : children}
    </div>
  );
}
