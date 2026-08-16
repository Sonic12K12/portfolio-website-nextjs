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
            className="bg-primary text-3xl rounded-2xl py-8 px-10 mt-8 border-none shadow-xl cursor-pointer text-black"
          >
            <span className="[font-variant-ligatures:none]">{"-->"}</span>
          </button>
        </Link>
      </div>
      <div>
        <StarBackground />
      </div>
    </main>
  );
}
