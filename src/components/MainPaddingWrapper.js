"use client";

import { usePathname } from "next/navigation";

/**
 * MainPaddingWrapper
 *
 * This client component acts as a dynamic layout controller for the main content area.
 * Since the global navbar is completely hidden on the /login route, the default
 * global top padding (pt-28) creates an unwanted blank space at the top of the screen.
 *
 * By wrapping the children in this component, we can check the active route via usePathname()
 * and conditionally strip the top padding for the login screen, while maintaining it
 * for all standard pages.
 */

export default function MainPaddingWrapper({ children }) {
  const pathname = usePathname();

  // Check if the current route is the login page
  const isLoginPage = pathname === "/login";

  return (
    // Apply top padding only if it is not the login page
    <main className={isLoginPage ? "" : "pt-28"}>{children}</main>
  );
}
