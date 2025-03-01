"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Contact Us", href: "/contact" },
    { label: "Career", href: "/career" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Update the highlight element's position directly using refs
  const updateHighlight = (element: HTMLElement | null) => {
    if (element && highlightRef.current) {
      highlightRef.current.style.left = `${element.offsetLeft}px`;
      highlightRef.current.style.width = `${element.offsetWidth}px`;
    }
  };

  useEffect(() => {
    // On page load or pathname change, set the highlight to the active link.
    const activeLink = navRef.current?.querySelector(
      `a[data-active="true"]`
    ) as HTMLElement;
    if (activeLink) updateHighlight(activeLink);
  }, [pathname]);

  return (
    <header>
      {/* Logo */}
      <Link href="/">
        <div className="fixed top-0 left-0 z-50 mx-6 my-5">
          <Image src={logo} alt="logo" width={80} height={80} />
        </div>
      </Link>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between z-40">
        <div
          ref={navRef}
          className="hidden md:flex font-bold fixed top-4 left-1/2 transform -translate-x-1/2 
                     bg-mutecolor text-foreground rounded-full shadow-lg gap-6 text-lg relative"
        >
          {/* Highlight Sliding Background */}
          <div
            ref={highlightRef}
            className="absolute top-1/2 h-[70%] bg-red rounded-full transition-all duration-300 transform -translate-y-1/2"
          ></div>

          {navItems.map((item) => (
            <Link
              prefetch
              key={item.href}
              href={item.href}
              className={`relative px-4 m-2 text-lg font-medium transition-colors duration-300 z-10 ${
                pathname === item.href ? "text-white hover:text-black" : "text-foreground hover:text-white"
              }`}
              data-active={pathname === item.href}
              onMouseEnter={(e) => updateHighlight(e.currentTarget)}
              onMouseLeave={() => {
                // On mouse leave, reset the highlight to the active link.
                const activeLink = navRef.current?.querySelector(
                  `a[data-active="true"]`
                ) as HTMLElement;
                if (activeLink) updateHighlight(activeLink);
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
                  prefetch
                  href={item.href}
                  className={`block rounded-lg px-4 py-2 transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-red text-black font-semibold"
                      : "hover:bg-red hover:text-white"
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
