"use client";
import React from "react";

const Testimonials = () => {
  return (
    // The section has a light background and vertical padding.
    // The aria-labelledby attribute ties this section to its heading for accessibility.
    <section className="bg-gray-100 py-12" aria-labelledby="testimonials-heading">
      <div className="container mx-auto text-center px-4">
        {/* Section heading for testimonials */}
        <h3 id="testimonials-heading" className="text-2xl font-semibold mb-4">
          What Our Customers Say
        </h3>
        {/* Testimonial quote */}
        <p className="text-gray-700 max-w-2xl mx-auto">
          &ldquo;The best dining experience I&apos;ve ever had. The food is phenomenal and the coffee is out of this world!&rdquo;
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
