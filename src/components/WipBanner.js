import React from "react";

// 1. Define the text as a constant outside the component
const BANNER_TEXT = "Work in Progress — Portfolio currently under construction";

// 2. Define the sub-component OUTSIDE the main component
// This prevents React from recreating it on every render cycle
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

// 3. Main component
export default function WipBanner() {
  return (
    // Outer container: fixed at the top, full width, sits above other elements
    <div className="w-full overflow-hidden bg-yellow-400 py-0.5 text-black">
      {/* Inner container: holds exactly TWO identical TextBlocks for the seamless 50% loop */}
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <TextBlock />
        <TextBlock />
      </div>
    </div>
  );
}
