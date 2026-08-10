"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  // Define routes where the banner should not render
  const hiddenRoutes = ["/login"];

  // Hide the component completely on blacklisted routes
  if (hiddenRoutes.includes(pathname)) {
    return null;
  }
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src="/img/placeholder.jpg" alt="icon" width={60} height={60} />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
