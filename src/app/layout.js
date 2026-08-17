import "./globals.css";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import MainPaddingWrapper from "@/components/MainPaddingWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        className={`${FiraCode.variable} font-sans antialiased bg-background min-h-screen`}
      >
        <Navbar />

        {/* Moved pt-28 here (MainPaddingWrapper) to conditionally remove it on the /login route. */}
        <MainPaddingWrapper>{children}</MainPaddingWrapper>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
