// components/Clients.tsx

import Image from "next/image";
import React from "react";

// Define the structure of a single client logo
interface ClientLogo {
  path: string;
  alt: string;
  height: number;
  width: number;
}

// Define the props for the Clients component
interface ClientsProps {
  applyFilter?: boolean;
}

// Static array of client logos
const clientLogos: ClientLogo[] = [
  {
    path: "/Fictional company logo (3).png",
    alt: "Fictional Company 3",
    height: 48,
    width: 166,
  },
  {
    path: "/Fictional company logo (2).png",
    alt: "Fictional Company 2",
    height: 48,
    width: 202,
  },
  {
    path: "/Fictional company logo (1).png",
    alt: "Fictional Company 1",
    height: 48,
    width: 178,
  },
  {
    path: "/Fictional company logo.png",
    alt: "Fictional Company",
    height: 48,
    width: 166,
  },
];

// Clients component
const Clients: React.FC<ClientsProps> = React.memo(
  ({ applyFilter = false }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-16 mt-6 lg:flex-row">
        {clientLogos.map((logo) => (
          <Image
            key={logo.path} // Use a unique key
            src={logo.path}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`${applyFilter ? "filter grayscale" : ""} w-max`}
            loading="lazy" // Defer loading of offscreen images
            priority={false} // Images are not critical
            quality={75} // Adjust image quality for performance
          />
        ))}
      </div>
    );
  }
);
Clients.displayName = "Clients";
export default Clients;
