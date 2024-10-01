// components/ui/MobileNavbar.tsx

"use client"; // Ensure the component is rendered on the client side

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

/**
 * Interface for Navigation Links
 */
interface NavLink {
  name: string;
  path: string;
  label: string;
  trigger?: boolean; // Optional property if needed for future use
}

/**
 * Props Interface for MobileNavbar
 */
interface MobileNavbarProps {
  closeMenu: () => void;
}

/**
 * MobileNavbar Component
 *
 * This component renders the mobile navigation menu. It displays a full-screen
 * overlay with navigation links that can be closed by clicking on a link or outside the menu.
 */
const MobileNavbar: React.FC<MobileNavbarProps> = ({ closeMenu }) => {
  // Define the navigation links
  const links: NavLink[] = [
    { name: "features", path: "/features", label: "Features" },
    { name: "pricing", path: "/pricing", label: "Pricing" },
    { name: "projects", path: "/projects", label: "Projects" },
    { name: "blog", path: "/blog", label: "Blog" },
  ];

  return (
    <div
      className="fixed inset-0 h-screen w-full bg-background mx-auto z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Navigation Menu */}
      <NavigationMenu className="py-4 w-full">
        <NavigationMenuList className="grid grid-rows-4 gap-4 w-full justify-center text-center">
          {links.map((link) => (
            <NavigationMenuItem key={link.name}>
              <Link href={link.path} passHref legacyBehavior>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MobileNavbar;
