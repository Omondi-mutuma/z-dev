// components/Header.tsx

"use client"; // Ensure the component is rendered on the client side

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; // Close icon for accessibility
import { Button } from "./ui/button";
import MobileNavbar from "./ui/mobile-navbar";
import Navbar from "./ui/navbar";

/**
 * Header Component
 *
 * This component renders the application's header, including the logo,
 * desktop navigation, mobile navigation toggle, and a call-to-action button.
 */
const Header: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Refs to detect clicks outside the mobile menu and toggle button
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /**
   * Toggles the mobile menu's open state
   */
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  /**
   * Closes the mobile menu
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Effect to handle clicks outside the mobile menu and toggle button
   * Closes the menu if a click is detected outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the menu and toggle button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  /**
   * Effect to prevent body scrolling when the mobile menu is open
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full flex justify-center items-center py-3 px-4 lg:px-[74px] bg-background shadow-md z-50"
      role="banner"
      aria-label="Main Navigation"
    >
      {/* Logo Section */}
      <div className="w-full">
        <Link href="/" passHref legacyBehavior>
          <a>
            <Image
              src="/white-logo-64.svg"
              alt="Company Logo"
              width={32}
              height={32}
              priority // Preload the logo for better performance
            />
          </a>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <Navbar />

      {/* Call-to-Action Button (Visible on Desktop) */}
      <div className="hidden w-full lg:flex justify-end">
        <Button variant="ghost">Explore</Button>
        <Button variant="default">Request a Quote</Button>
      </div>

      {/* Mobile Navigation Toggle Button */}
      <button
        ref={buttonRef}
        className="lg:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMenuOpen ? (
          <IoMdClose size={24} className="" aria-hidden="true" />
        ) : (
          <GiHamburgerMenu size={24} className="" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          className="fixed inset-0 bg-gray-800 bg-opacity-95 text-white flex flex-col items-center justify-center z-50 transition-transform duration-300"
          role="dialog"
          aria-modal="true"
        >
          <MobileNavbar closeMenu={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
