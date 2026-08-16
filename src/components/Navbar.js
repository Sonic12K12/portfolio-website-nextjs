"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import WipBanner from "./WipBanner";

export default function Navbar() {
  const currentPath = usePathname();

  // Define routes where the navbar should not render
  const hiddenRoutes = ["/login"];

  // Hide the component completely on blacklisted routes
  if (hiddenRoutes.includes(currentPath)) {
    return null;
  }
  return (
    <div className="fixed top-0 w-full z-50 flex flex-col">
      <WipBanner />
      <nav className="top-0 w-full z-50 flex items-center px-8 gap-2 bg-black/40 border-b border-white/10 text-text-main">
        <div>
          <Link
            href="/"
            className={`font-bold text-xl ${currentPath === "/" ? "" : "text-primary"}`}
          >
            {"<Konstantin>"}
          </Link>
        </div>
        <ul className="flex items-center border-2 border-white/10 rounded-full mx-6 my-3 px-3">
          <li
            className={`py-2 px-5 duration-300 ${currentPath === "/projects" ? "text-primary" : ""} ${currentPath === "/projects" ? "" : "hover:text-primary hover:scale-105"}`}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={`py-2 px-5 duration-300 ${currentPath === "/about" ? "text-primary" : ""} ${currentPath === "/about" ? "" : "hover:text-primary hover:scale-105"}`}
          >
            <Link href="/about">About</Link>
          </li>
        </ul>
        <ul className="hidden md:flex items-center gap-10 ml-auto">
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
    </div>
  );
}
