"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side image with tilt */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <div className="absolute inset-0 transform">
          <Image
            src="/services-offered-contact-hero.jpg" // Replace with your image path
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
          {status === "loading" && (
            <p className="mt-2 text-gray-500">Sending...</p>
          )}
          {status === "success" && (
            <p className="mt-2 text-green-500">Message sent!</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-500">Error sending message.</p>
          )}
        </form>
      </div>
    </div>
  );
}
