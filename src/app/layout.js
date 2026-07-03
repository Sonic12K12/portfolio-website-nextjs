import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
