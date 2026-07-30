// Marks this file as a Client Component in Next.js
"use client";

import { usePathname } from "next/navigation";
import React from "react";

const BANNER_TEXT = "Work in Progress — Portfolio currently under construction";

// Sub-component
const TextBlock = () => (
  <div className="flex shrink-0">
    <span className="mx-24 text-sm font-bold uppercase tracking-widest">
      {BANNER_TEXT}
    </span>
    <span className="mx-24 text-sm font-bold uppercase tracking-widest">
      {BANNER_TEXT}
    </span>
    <span className="mx-24 text-sm font-bold uppercase tracking-widest">
      {BANNER_TEXT}
    </span>
    <span className="mx-24 text-sm font-bold uppercase tracking-widest">
      {BANNER_TEXT}
    </span>
  </div>
);

// Main component
export default function WipBanner() {
  const pathname = usePathname();

  // Define routes where the banner should not render
  const hiddenRoutes = ["/login"];

  // Hide the component completely on blacklisted routes
  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden bg-yellow-400 py-0.5 text-black">
      {/* Inner container: holds exactly 2 identical TextBlocks for the seamless 50% loop */}
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <TextBlock />
        <TextBlock />
      </div>
    </div>
  );
}
