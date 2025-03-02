"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
    
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Image with Tilt & Gradient Overlay */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red to-yellow opacity-70"></div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
        <p className="mb-8 text-lg text-gray-700 text-center">
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-red text-white p-3 rounded-lg hover:bg-white hover:border-2 hover:border-red hover:text-red hover:font-bold transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center">
              There was an error sending your message. Please try again.
            </p>
          )}
        </form>
        <p className="mt-8 text-sm text-gray-500">
          Or email us directly at{" "}
          <a href="mailto:admin@shorttrip.com" className="underline">
            admin@shorttrip.com
          </a>
        </p>
      </div>
    </div>
  );
}
