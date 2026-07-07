// src/app/login/page.js
"use client";

import { useState } from "react";
import { authenticate } from "../actions";

export default function LoginPage() {
  const [error, setError] = useState("");

  // Handle form submission without reloading the page
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = await authenticate(formData);

    // Display error message if the server action returns one
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    // Main wrapper matching your dark mode styling
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      {/* Login box container */}
      <div className="bg-[#1e1e1e] p-10 rounded-xl shadow-2xl text-center max-w-87.5 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="password"
            name="password"
            placeholder="Access Code"
            required
            autoFocus
            className="w-full p-3 bg-[#2d2d2d] border border-[#3d3d3d] text-white rounded-md text-base outline-none focus:border-[#6262f0] transition-colors"
          />
          <button
            type="submit"
            className="w-full p-3 bg-[#6262f0] hover:bg-[#4f46e5] text-white rounded-md text-base font-bold cursor-pointer transition-colors"
          >
            Unlock
          </button>
        </form>

        {/* Conditional error message rendering */}
        {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
      </div>
    </main>
  );
}
