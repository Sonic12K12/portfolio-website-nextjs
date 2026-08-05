import Image from "next/image";
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
    imageUrl: "/img/ubss_preview_image.jpg",
  },
  {
    id: 2,
    title: "Zweites Projekt",
    description: "Noch eine Beschreibung.",
    imageUrl: "/img/placeholder.jpg",
  },
  {
    id: 3,
    title: "Drittes Projekt",
    description: "Eine weitere Beschreibung.",
    imageUrl: "/img/placeholder.jpg",
  },
];

// Main page component
export default function Home() {
  return (
    // The dark wrapper for the whole page
    <main className="max-w-3xl mx-auto px-6 py-12 lg:max-w-5xl">
      <h1 className="w-full text-4xl md:text-6xl text-primary font-bold mb-20 text-center">
        Projects
      </h1>
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-12 mb-20"
          >
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-800">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-lg">{project.description}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
