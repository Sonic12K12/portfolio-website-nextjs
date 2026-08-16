import StarBackground from "../components/StarBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pb-48 px-6">
      <h1 className="w-full text-4xl md:text-6xl text-primary font-bold mb-10 text-center">
        Hi, I&apos;m Konstantin.
      </h1>
      <p className="text-text-main text-lg md:text-xl max-w-2xl text-center">
        My background in Media and Computing at HTW Berlin gave me a solid
        foundation in Java. Now, I&apos;m fully focused on diving into modern
        web development.
      </p>
      <div>
        <Link href="/projects">
          <button
            type="button"
            className="bg-primary text-2xl rounded-2xl py-8 px-10 mt-8 border-none shadow-xl cursor-pointer text-background group relative flex items-center justify-center overflow-hidden"
          >
            {/* Invisible placeholder to maintain button dimensions */}
            <span className="invisible font-bold">My Projects</span>

            {/* Primary text: Starts centered, slides to the right out of screen on hover */}
            <span className="absolute transition-transform duration-500 ease-in-out group-hover:translate-x-72 font-bold">
              My Projects
            </span>

            {/* Arrow: Starts left out of screen, slides right into center on hover */}
            <span className="absolute -translate-x-44 transition-transform duration-500 ease-in-out group-hover:translate-x-0 [font-variant-ligatures:none]">
              {"-->"}
            </span>
          </button>
        </Link>
      </div>
      <div>
        <StarBackground />
      </div>
    </main>
  );
}
