"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const currentPath = usePathname();

  // Define routes where the navbar should not render
  const hiddenRoutes = ["/login"];

  // Hide the component completely on blacklisted routes
  if (hiddenRoutes.includes(currentPath)) {
    return null;
  }
  return (
    <nav className="top-0 w-full z-50 flex items-center px-8 gap-10 bg-black/40 border-b border-white/10 text-gray-400">
      <div>
        <Link href="/">
          <Image src="/img/placeholder.jpg" alt="icon" width={60} height={60} />
        </Link>
      </div>
      <ul className="flex items-center">
        <li
          className={`py-4 px-4 transition-all duration-300 ${currentPath === "/projects" ? "bg-white/10" : ""} ${currentPath === "/projects" ? "" : "hover:text-primary hover:scale-105"}`}
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={`py-4 px-4 transition-all duration-300 ${currentPath === "/about" ? "bg-white/10" : ""} ${currentPath === "/about" ? "" : "hover:text-primary hover:scale-105"}`}
        >
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-10 ml-auto">
        <li>
          <Link
            href="https://github.com/Sonic12K12"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-primary"
          >
            <FaGithub size={26} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/konstantin-schiwarov/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-primary"
          >
            <FaLinkedin size={26} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
