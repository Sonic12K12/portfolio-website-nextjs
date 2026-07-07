// src/app/actions.js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Asynchronous server action to verify the password
export async function authenticate(formData) {
  const password = formData.get("password");

  // Password
  const EXPECTED_PASS = process.env.PORTFOLIO_PASS;

  if (password === EXPECTED_PASS) {
    // Password is correct, set the cookie
    cookies().set("portfolio_auth", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    // Redirect the user to the protected portfolio
    redirect("/");
  } else {
    // Return an error message to the client
    return { error: "Incorrect access code. Please try again." };
  }
}
