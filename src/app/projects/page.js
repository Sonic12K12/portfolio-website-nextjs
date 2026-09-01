import Image from "next/image";
import Link from "next/link";
// Projects data array
const projects = [
  {
    id: 1,
    title: "Urban Bio Space Simulator",
    description: (
      <>
        A serious mobile game developed with <em>food4future</em> that simulates
        sustainable food production and resource management in densely populated
        urban environments.
      </>
    ),
    imageUrl: "/img/ubss/ubss_preview_image.webp",
    url: "/ubss",
  },
  {
    id: 2,
    title: "Zweites Projekt",
    description: "Noch eine Beschreibung.",
    imageUrl: "/img/placeholder.jpg",
    url: "",
  },
  {
    id: 3,
    title: "Drittes Projekt",
    description: "Eine weitere Beschreibung.",
    imageUrl: "/img/typewriterFinalRender.webp",
    url: "",
  },
];

// Main page component
export default function ProjectPage() {
  return (
    // The dark wrapper for the whole page
    <main className="max-w-3xl mx-auto px-6 lg:max-w-5xl">
      <h1 className="w-full text-4xl md:text-6xl text-primary font-bold mt-8 mb-16 text-center">
        Projects
      </h1>
      {projects.map((project) => {
        return (
          <Link
            href={project.url}
            key={project.id}
            className="group flex flex-col md:flex-row items-center gap-12 mb-8 p-8 rounded-3xl border border-transparent hover:border-white/5 hover:bg-white/5 hover:drop-shadow-lg transition-all duration-300"
          >
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-800">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {project.title}
              </h2>
              <p className="text-text-main text-lg">{project.description}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
