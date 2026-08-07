import "./globals.css";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import WipBanner from "@/components/WipBanner";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

// Fira Code font configuration (local font)
const FiraCode = localFont({
  src: [
    {
      path: "./fonts/FiraCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FiraCode-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-fira-code",
  display: "swap",
});

// Global metadata for the application
export const metadata = {
  title: "Schiwarov",
  description: "Private Portfolio",
  // This object replaces the vanilla HTML <meta name="robots" content="noindex, nofollow">
  robots: {
    index: false,
    follow: false,
  },
};

// RootLayout wraps around every page in the app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${FiraCode.variable} font-sans antialiased bg-background`}
      >
        <WipBanner />
        <Navbar />
        {children}
        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
