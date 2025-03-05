"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X} from "lucide-react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // State to control mobile menu open/close status
  const [isOpen, setIsOpen] = useState(false);
  // Get current pathname for active link highlighting
  const pathname = usePathname();
  // Refs for the nav container and the sliding highlight element
  const navRef = useRef<HTMLDivElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: "0px", width: "0px" });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
    setIsOpen(!isOpen);
  };

  // Update the position and width of the sliding highlight element using refs
  const updateHighlight = (element: HTMLElement | null, href: string | null = null) => {
    if (element) {
      setHighlightStyle({
        left: `${element.offsetLeft}px`, // Add padding to center highlight
        width: `${element.offsetWidth}px`, // Reduce width slightly
      });
      setHoveredLink(href); // Track the hovered link
    }
  };

  // When pathname changes, update the highlight to the active link
  useEffect(() => {
    // Set the highlight to the active link on page load
    const activeLink = navRef.current?.querySelector(`a[data-active="true"]`);
    if (activeLink) updateHighlight(activeLink as HTMLElement, pathname);
  }, [pathname]);

  return (
    <header>
      {/* Logo Section */}
      <Link href="/">
        {/* 
          Use "absolute" on mobile so the logo appears over the hero,
          and "fixed" on medium screens and up so it stays at the top.
        */}
        <div className="absolute scale-125 md:fixed top-6 left-10 z-50 w-20 h-16 md:w-20 md:h-20">
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
          className="hidden md:flex font-bold md:relative top-8 left-1/2 transform -translate-x-1/2 bg-mutecolor rounded-full shadow-lg gap-6 text-lg relative"
        >
          {/* Highlight Sliding Background */}
          <div
            className="absolute top-1/2 left-0 h-[70%] bg-red rounded-full transition-all duration-300 transform -translate-y-1/2"
            style={{ ...highlightStyle, position: "absolute" }}
          ></div>

          {navItems.map((item) => (
            <Link
              prefetch
              key={item.href}
              href={item.href}
              // Active link: always white; inactive:
              // if bgColor is red, use white; if bgColor is white, use black.
              className={`relative px-4 m-2 text-lg font-medium transition-all duration-300 z-10 content-center text-center ${
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
