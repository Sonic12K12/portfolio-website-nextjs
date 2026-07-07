// Projects data array
const projects = [
  {
    id: 1,
    title: "Erstes HTW Projekt",
    description: "Hier kommt eine kurze Beschreibung hin.",
    // Placeholder for later
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Zweites Projekt",
    description: "Noch eine Beschreibung.",
    imageUrl: "/placeholder2.jpg",
  },
];

// Main page component
export default function Home() {
  return (
    // The dark wrapper for the whole page
    <main className="min-h-screen bg-- text-white p-10">
      <h1 className="text-6xl text-primary font-bold mb-20 text-center">
        Projects
      </h1>
    </main>
  );
}
