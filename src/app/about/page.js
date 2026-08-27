"use client";

import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-text-main">
      {/* Wrapper to control max width and center the content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="w-full text-4xl font-bold mb-12 text-center text-primary">
          About me
        </h1>

        <p className="mb-16 leading-relaxed">
          Hi, I&apos;m Konstantin, currently in the final stages of my
          International Media and Computing degree at HTW Berlin. While my
          studies gave me a robust foundation in Java, my absolute focus right
          now is modern frontend engineering. I&apos;m fascinated by web
          technologies because they are borderless. I love the idea of building
          digital experiences that anyone can access from anywhere, at any time.
          Even though code is my main focus, whenever a project calls for some
          3D modeling or video editing, I&apos;m always the first to volunteer.
          <br /> Currently, I&apos;m seeking a mandatory internship abroad to
          turn my passion for modern web technologies into real-world impact and
          keep growing as a developer.
        </p>

        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Beyond the Code
        </h2>
        <p className="mb-16 leading-relaxed">
          While I love building things in the browser, I also have a massive
          soft spot for the hardware side of things. I&apos;m definitely a
          gadget guy and have a big interest in the newest tech in general. I
          actually got my Amateur Radio License out of pure curiosity, though
          I&apos;ll admit I haven&apos;t really used it since (whoops!).
          <br /> Whether I&apos;m upgrading my camera rig for photography,
          optimizing my PC setup for gaming, or dialing in the exact right
          espresso shot, I just enjoy complex setups and good gear. When I need
          a break from screens and gadgets, you&apos;ll usually find me staying
          active through strength training and badminton.
        </p>

        {/* Contact & Links Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">
            Contact & Links
          </h2>

          {/* 3-Column Grid for Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Email Card lucide-react */}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-primary hover:bg-zinc-800 transition-all group"
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
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-primary hover:bg-zinc-800 transition-all group"
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
              className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-primary hover:bg-zinc-800 transition-all group"
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
