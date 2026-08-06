import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="text-muted py-8">
      <hr className="border-t border-muted w-11/12 mx-auto my-8" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full px-4">
        <Link
          href="/legal-notice"
          className="transition-all duration-300 hover:text-primary hover:scale-105"
        >
          Legal Notice
        </Link>
        <Link
          href="/about"
          className="transition-all duration-300 hover:text-primary hover:scale-105"
        >
          About
        </Link>
        <Link
          href="/privacy-policy"
          className="transition-all duration-300 hover:text-primary hover:scale-105"
        >
          Privacy Policy
        </Link>
      </div>

      <div className="flex justify-center gap-8 mt-4">
        <Link
          href="https://github.com/Sonic12K12"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-primary"
        >
          <FaGithub size={26} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/konstantin-schiwarov/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:text-primary"
        >
          <FaLinkedin size={26} />
        </Link>
      </div>

      <div className="text-center mt-4 text-sm">
        <p>&copy; {currentYear} Konstantin Schiwarov. All rights reserved.</p>
      </div>
    </footer>
  );
}
