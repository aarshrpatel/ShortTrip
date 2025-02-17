"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function for link styles
  const getLinkClass = (path: string) =>
    `relative text-lg font-medium px-4 py-2 transition-all duration-300 ${
      pathname === path
        ? "text-red after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-red after:transition-all after:duration-300"
        : "text-foreground hover:text-red"
    }`;

  return (
    <header>
      {/* Logo */}
      <div className="fixed top-0 left-0 z-50 mx-6 my-5">
        <Image src={logo} alt="logo" width={60} height={45} />
      </div>

      {/* Desktop and Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between backdrop-blur-lg bg-white/10 z-40">
        {/* Desktop Links */}
        <div
          className="hidden md:flex font-bold fixed top-8 left-1/2 transform -translate-x-1/2 
                     bg-mutecolor text-foreground px-4 py-2 rounded-full shadow-lg gap-6 text-lg"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={getLinkClass(item.href)}>
              {item.label}
            </Link>
          ))}
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
        <div className="md:hidden fixed top-20 right-4 w-56 bg-mutecolor rounded-lg shadow-lg z-50 transition-all duration-300">
          <ul className="flex flex-col space-y-4 p-4 text-lg text-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-4 py-2 transition-all duration-300 ${
                    pathname === item.href ? "text-red font-semibold" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
