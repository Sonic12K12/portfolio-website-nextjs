import { NextResponse } from "next/server";

// Proxy function to protect routes and handle magic links
export function proxy(request) {
  const url = request.nextUrl.clone();

  // 1. Check for the magic link code in the URL parameters
  const magicCode = url.searchParams.get("code");
  const EXPECTED_PASS = process.env.PORTFOLIO_PASS;

  // 2. If the code is present and correct, grant access automatically
  if (magicCode && magicCode === EXPECTED_PASS) {
    // Remove the access code from the URL so it is not visible in the browser
    url.searchParams.delete("code");
    url.pathname = "/";

    // Create the redirect response
    const response = NextResponse.redirect(url);

    // Set the authentication cookie directly on the response
    response.cookies.set("portfolio_auth", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return response;
  }

  // 3. Normal proxy logic: Check for the authentication cookie
  const authCookie = request.cookies.get("portfolio_auth");

  // Redirect to login if cookie is missing and user is not already on the login page
  if (!authCookie && url.pathname !== "/login") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Redirect to home if user is already logged in but tries to access the login page
  if (authCookie && url.pathname === "/login") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed normally
  return NextResponse.next();
}

// Define which routes the proxy should protect
// Exclude API routes, static Next.js files, public image folder and opengraph image
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|img|opengraph-image.jpg).*)",
  ],
};
