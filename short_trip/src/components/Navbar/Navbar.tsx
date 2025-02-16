"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Logo */}
      <div className="fixed top-0 left-0 z-50 mx-6 my-5">
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={45}
        />
      </div>

      {/* Desktop and Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between backdrop-blur-lg bg-white/10 z-40">
        {/* Desktop Links */}
        <div
          className="hidden md:flex font-bold fixed top-8 left-1/2 transform -translate-x-1/2 
                     bg-mutecolor text-foreground px-4 py-2 rounded-full shadow-lg gap-6 text-lg"
        >
          <Link href="/" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Home</Link>
          <Link href="/about" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Our Story</Link>
          <Link href="/locations" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Locations</Link>
          <Link href="/contact" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Contact Us</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden fixed top-8 right-6">
          <button onClick={toggleMenu} className="text-foreground">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 right-4 w-56 bg-mutecolor rounded-lg shadow-lg z-50">
          <ul className="flex flex-col space-y-4 p-4 text-lg text-foreground">
            <li>
              <Link href="/" className="block rounded-lg px-4 py-2 hover:bg-red hover:text-mutecolor transition" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block rounded-lg px-4 py-2 hover:bg-red hover:text-mutecolor transition" onClick={toggleMenu}>
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/locations" className="block rounded-lg px-4 py-2 hover:bg-red hover:text-mutecolor transition" onClick={toggleMenu}>
                Locations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block rounded-lg px-4 py-2 hover:bg-red hover:text-mutecolor transition" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
