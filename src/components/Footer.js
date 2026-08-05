import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="text-muted py-8">
      <hr className="border-t border-muted w-11/12 mx-auto my-8" />
      <div className="flex justify-center gap-12 w-full px-4">
        <a
          href="/imprint"
          className="transitiona-all duration-300 hover:text-primary hover:scale-105"
        >
          Imprint
        </a>
        <a
          href="/privacy-policy"
          className="transitiona-all duration-300 hover:text-primary hover:scale-105"
        >
          Privacy Policy
        </a>
        <a
          href="/about"
          className="transitiona-all duration-300 hover:text-primary hover:scale-105"
        >
          About
        </a>
      </div>

      <div className="flex justify-center gap-8 mt-4">
        <a
          href="https://github.com/Sonic12K12"
          target="_blank"
          rel="noopener noreferrer"
          className="transitiona-all duration-300 hover:text-primary"
        >
          <FaGithub size={26} />
        </a>

        <a
          href="https://www.linkedin.com/in/konstantin-schiwarov/"
          target="_blank"
          rel="noopener noreferrer"
          className="transitiona-all duration-300 hover:text-primary"
        >
          <FaLinkedin size={26} />
        </a>
      </div>

      <div className="text-center mt-4 text-sm">
        <p>&copy; {currentYear} Konstantin Schiwarov. All rights reserved.</p>
      </div>
    </footer>
  );
}
