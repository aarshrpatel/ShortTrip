import { motion } from "framer-motion";
import React from "react";
import stripes from "@/assets/food-cards-background stripes.svg";
import Image from "next/image";

const TransitionSVG = () => {
  return (
    // <motion.div
    //   initial={{ scaleX: 0 }}
    //   animate={{ scaleX: 1 }}
    //   transition={{ duration: 1, ease: "easeOut" }}
    //   style={{ transformOrigin: "center", width: "100%" }}
    // >
      <Image src={stripes} alt="Transition" className="w-full" />
    // </motion.div>
  );
};

export default TransitionSVG;
