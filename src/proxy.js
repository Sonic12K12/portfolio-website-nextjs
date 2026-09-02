import { NextResponse } from "next/server";

// Proxy function to protect routes
export function proxy(request) {
  // Check for the authentication cookie
  const authCookie = request.cookies.get("portfolio_auth");
  const url = request.nextUrl.clone();

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
