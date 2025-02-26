"use client";

import { motion } from "framer-motion";
import React from "react";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Adjust amount to trigger earlier/later
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
