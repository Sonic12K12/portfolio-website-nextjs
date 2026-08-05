"use client";

import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-gray-300">
      {/* Wrapper to control max width and center the content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-5 text-white">About me</h1>

        {/* Introduction text */}
        <p className="mb-8 leading-relaxed">
          Hi, I&apos;m Konstantin, an International Media and Computing student
          at HTW Berlin with a strong interest in modern web development. While
          my main focus lies in frontend engineering, I also bring a solid
          foundation in Java and a keen interest in 3D design. I am currently
          looking for a mandatory international internship where I can
          contribute my skill set to real-world projects and continue growing as
          a developer.
        </p>

        {/* Contact & Links Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Contact & Links
          </h2>

          {/* 3-Column Grid for Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Email Card using lucide-react */}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-500 hover:bg-zinc-800 transition-all group"
            >
              <Mail className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-gray-300 group-hover:text-white">
                Email
              </span>
            </a>

            {/* LinkedIn Card using react-icons */}
            <a
              href="https://linkedin.com/in/dein-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-500 hover:bg-zinc-800 transition-all group"
            >
              <FaLinkedin className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-gray-300 group-hover:text-white">
                LinkedIn
              </span>
            </a>

            {/* GitHub Card using react-icons */}
            <a
              href="https://github.com/dein-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-500 hover:bg-zinc-800 transition-all group"
            >
              <FaGithub className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-gray-300 group-hover:text-white">
                GitHub
              </span>
            </a>
          </div>

          {/* Full-width CV Banner using lucide-react */}
          <a
            href="/cv-konstantin.pdf"
            download
            className="flex items-center justify-center w-full p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl hover:bg-blue-900/40 hover:border-blue-500/60 transition-all group"
          >
            <Download className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-blue-400">
              Download CV (PDF)
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}
