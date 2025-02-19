"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: "0px", width: "0px" });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to update highlight position based on hovered or active link
  const updateHighlight = (element: HTMLElement | null, href: string | null = null) => {
    if (element) {
      setHighlightStyle({
        left: `${element.offsetLeft}px`, // Add padding to center highlight
        width: `${element.offsetWidth}px`, // Reduce width slightly
      });
      setHoveredLink(href); // Track the hovered link
    }
  };

  useEffect(() => {
    // Set the highlight to the active link on page load
    const activeLink = navRef.current?.querySelector(`a[data-active="true"]`);
    if (activeLink) updateHighlight(activeLink as HTMLElement, pathname);
  }, [pathname]);

  return (
    <header>
      {/* Logo */}
      <div className="fixed top-0 left-0 z-50 mx-6 my-5">
        <Image src={logo} alt="logo" width={80} height={80} />
      </div>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-40">
        <div
          ref={navRef}
          className="hidden md:flex font-bold fixed top-4 left-1/2 transform -translate-x-1/2 
                     bg-mutecolor text-foreground rounded-full shadow-lg gap-6 text-lg"
        >
          {/* Highlighted Sliding Background */}
          <div
            className="absolute top-1/2 left-0 h-[70%] bg-red rounded-full transition-all duration-300 transform -translate-y-1/2"
            style={{ ...highlightStyle, position: "absolute" }}
          ></div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 m-2 text-lg font-medium transition-all duration-300 z-10 ${
                hoveredLink === item.href
                  ? "text-white" // Make hovered link text white
                  : pathname === item.href && hoveredLink
                  ? "text-foreground" // Change current page link text back to black when hovering elsewhere
                  : pathname === item.href
                  ? "text-white" // Keep active page text white when no hovering
                  : "text-foreground hover:text-white"
              }`}
              data-active={pathname === item.href}
              onMouseEnter={(e) => updateHighlight(e.currentTarget, item.href)}
              onMouseLeave={() => {
                setHoveredLink(null);
                const activeLink = navRef.current?.querySelector(`a[data-active="true"]`);
                if (activeLink) updateHighlight(activeLink as HTMLElement, pathname);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
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
                    pathname === item.href ? "bg-red text-white font-semibold" : "hover:bg-red hover:text-white"
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
