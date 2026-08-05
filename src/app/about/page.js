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
        <p className="mb-16 leading-relaxed">
          Hi, I&apos;m Konstantin, an International Media and Computing student
          at HTW Berlin with a strong interest in modern web development. <br />
          While my main focus lies in frontend engineering, I also bring a solid
          foundation in Java and a keen interest in 3D design.
          <br /> I am currently looking for a mandatory internship abroad where
          I can contribute my skill set to real-world projects and continue
          growing as a developer.
        </p>

        {/* Contact & Links Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Contact & Links
          </h2>

          {/* 3-Column Grid for Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Email Card lucide-react */}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-500 hover:bg-zinc-800 transition-all group"
            >
              <Mail className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-gray-300 group-hover:text-white">
                Email
              </span>
            </a>

            {/* LinkedIn Card react-icons */}
            <a
              href="https://www.linkedin.com/in/konstantin-schiwarov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-500 hover:bg-zinc-800 transition-all group"
            >
              <FaLinkedin className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" />
              <span className="font-medium text-gray-300 group-hover:text-white">
                LinkedIn
              </span>
            </a>

            {/* GitHub Card react-icons */}
            <a
              href="https://github.com/Sonic12K12"
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

          {/*
           Full-width CV Banner lucide-react 
          <a
            href="/CV_Konstantin_Schiwarov_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-500 hover:bg-zinc-800 transition-all group"
          >
            <Download className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" />
            <span className="font-medium text-gray-300 group-hover:text-white">
              Download CV
            </span>
          </a>
          */}
        </section>
      </div>
    </main>
  );
}
