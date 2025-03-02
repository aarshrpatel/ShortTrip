"use client";

import React from "react";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi"; 
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    // Footer wrapper with centered content
    <footer className="flex flex-col items-center justify-center space-y-4 bg-white pb-6">
      {/* Divider Line */}
      <hr className="w-full" />

      {/* Logo */}
      <div>
        <Image src={logo} alt="Short Trip Logo" width={45} height={45} />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4 text-xs">
        <Link href="/" className="hover:text-red hover:underline transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-red hover:underline transition-colors">
          Our Story
        </Link>
        <Link href="/locations" className="hover:text-red hover:underline transition-colors">
          Locations
        </Link>
        <Link href="/contact" className="hover:text-red hover:underline transition-colors">
          Contact Us
        </Link>
        <Link href="/career" className="hover:text-red hover:underline transition-colors">
          Career
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 text-xs">
        <Link href="https://www.facebook.com/shorttripstores/" target="_blank">
          <FiFacebook className="scale-150" />
        </Link>
        <Link href="https://www.instagram.com/shorttripstore/" target="_blank">
          <FiInstagram className="scale-150" />
        </Link>
        <Link href="https://www.linkedin.com/company/short-trip-stores/" target="_blank">
          <FiLinkedin className="scale-150" />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Short Trip. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
