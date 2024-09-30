import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"], // Adjust subsets as needed
  variable: "--font-inter", // Optional: for CSS variables
  display: "swap", // Optional: font-display property
});

export const metadata: Metadata = {
  title: "Modern Websites by Teki Technologies",
  description: "Building beautiful websites since 2015",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
