import StarBackground from "../components/StarBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pb-48 px-6">
      <h1 className="w-full text-4xl md:text-6xl text-primary font-bold mb-10 text-center">
        Hi, I&apos;m Konstantin.
      </h1>
      <p className="text-text-main text-lg md:text-xl max-w-2xl text-center">
        With a strong foundation in Java from my Media Informatics studies,
        I&apos;m currently diving deep into modern web development. I also have
        a creative soft spot for 3D design.
      </p>
      <div>
        <Link href="/projects">
          <button
            type="button"
            className="bg-primary text-3xl rounded-xl border-none shadow-xl cursor-pointer text-black"
          >
            Button
          </button>
        </Link>
      </div>
      <div>
        <StarBackground />
      </div>
    </main>
  );
}
