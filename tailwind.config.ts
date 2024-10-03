/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
// tailwind.config.ts

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";
// import colors from "tailwindcss/colors";

/**
 * Helper function to flatten nested color palettes.
 *
 * @param colors - The color palette object from Tailwind theme.
 * @param prefix - The prefix for nested color keys.
 * @returns A flat object with color keys.
 */
const flattenColorPalette = (
  colors: Record<string, any>,
  prefix = ""
): Record<string, string> => {
  let result: Record<string, string> = {};
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === "string") {
      result[`${prefix}${key}`] = value;
    } else if (typeof value === "object" && value !== null) {
      result = { ...result, ...flattenColorPalette(value, `${key}-`) };
    }
  }
  return result;
};

/**
 * Plugin to add CSS variables for all Tailwind colors.
 *
 * This plugin iterates over the flattened color palette and creates corresponding
 * CSS variables in the `:root` selector.
 */
const addVariablesForColors = plugin(function ({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars: Record<string, string> = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
});

/**
 * Custom plugin to add background utilities.
 * Adds classes like bg-grid, bg-grid-small, bg-dot with dynamic color values.
 */
const customBackgroundUtilities = plugin(function ({ matchUtilities, theme }) {
  // Flatten the backgroundColor palette
  const flatColors = flattenColorPalette(theme("backgroundColor"));

  // Define custom background utilities with dynamic colors
  matchUtilities(
    {
      "bg-grid": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    {
      // Use the flattened backgroundColor palette
      values: flatColors,
      type: "color",
    }
  );
});

/**
 * Tailwind CSS Configuration
 */
const config: Config = {
  // Enable dark mode using the 'class' strategy
  darkMode: ["class"],

  // Specify the paths to all of the template files in your project
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Extend the default theme
  theme: {
    extend: {
      // Define custom colors using CSS variables
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      // Define custom border radii using CSS variables
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Define custom keyframes for animations
      keyframes: {
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(30deg)" },
        },
      },

      // Define custom animation utilities
      animation: {
        spinOnce: "spinOnce 0.5s linear forwards",
      },
    },
  },

  // Define plugins
  plugins: [
    // Import Tailwind CSS Animate plugin
    require("tailwindcss-animate"),

    // Plugin to add CSS variables for colors
    addVariablesForColors,

    // Custom plugin to add background utilities
    customBackgroundUtilities,
  ],
};

export default config;
