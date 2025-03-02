"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // State to control mobile menu open/close status
  const [isOpen, setIsOpen] = useState(false);
  // Get current pathname for active link highlighting
  const pathname = usePathname();
  // Refs for the nav container and the sliding highlight element
  const navRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  // Define the navigation items with label and corresponding href
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Contact Us", href: "/contact" },
    { label: "Career", href: "/career" },
  ];

  // Toggle mobile menu open/close state
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Update the position and width of the sliding highlight element using refs
  const updateHighlight = (element: HTMLElement | null) => {
    if (element && highlightRef.current) {
      highlightRef.current.style.left = `${element.offsetLeft}px`;
      highlightRef.current.style.width = `${element.offsetWidth}px`;
    }
  };

  // When pathname changes, update the highlight to the active link
  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `a[data-active="true"]`
    ) as HTMLElement;
    if (activeLink) {
      updateHighlight(activeLink);
    }
  }, [pathname]);

  // Set the background color of the navbar: set to "red" or "white" as needed.
  // This variable is used to conditionally style the links.
  const bgColor = "red"; // Change to "white" if your navbar background is white

  return (
    <header>
      {/* Logo Section */}
      <Link href="/">
        {/* 
          Use "absolute" on mobile so the logo appears over the hero,
          and "fixed" on medium screens and up so it stays at the top.
        */}
        <div className="absolute md:fixed top-0 left-0 z-50 mx-6 my-5 w-16 h-12 md:w-20 md:h-20">
          <Image src={logo} alt="Short Trip Logo" fill className="object-contain" />
        </div>
      </Link>

      {/* Outer Navbar:
          - On mobile: use relative positioning (so it scrolls with the page).
          - On md and larger: use fixed positioning so it remains at the top.
      */}
      <nav className="relative md:fixed top-0 left-0 w-full flex items-center justify-between z-40">
        {/* Desktop Navigation Container (visible on md+) */}
        <div
          ref={navRef}
          className="hidden md:flex font-bold md:relative top-4 left-1/2 transform -translate-x-1/2 bg-mutecolor rounded-full shadow-lg gap-6 text-lg relative"
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
              // Active link: always white; inactive:
              // if bgColor is red, use white; if bgColor is white, use black.
              className={`relative px-4 m-2 text-lg font-medium transition-colors duration-300 z-10 ${
                pathname === item.href
                  ? "text-white hover:text-white"
                  : bgColor === "red"
                  ? "text-black hover:text-white"
                  : "text-black hover:text-black"
              }`}
              data-active={pathname === item.href}
              onMouseEnter={(e) => updateHighlight(e.currentTarget)}
              onMouseLeave={() => {
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

        {/* Mobile Menu Button: positioned absolutely */}
        <div className="md:hidden absolute top-8 right-6">
          <button onClick={toggleMenu} className="text-foreground">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-4 w-56 bg-mutecolor rounded-lg shadow-lg z-50 transition-all duration-300">
          <ul className="flex flex-col space-y-4 p-4 text-lg text-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  prefetch
                  href={item.href}
                  // For mobile: active link (if current) gets background red with white text.
                  className={`block rounded-lg px-4 py-2 transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-red text-white hover:text-white font-semibold"
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
