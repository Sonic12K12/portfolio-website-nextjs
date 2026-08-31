import Image from "next/image";

export default function UBSSPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <header>
        <h1 className="mb-12">Urban Bio Space Simulator</h1>
        <Image
          src="/img/ubbs_image_1.webp"
          alt="Screenshot of BioTopia"
          className="rounded-xl"
          width={1920}
          height={1080}
        />
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4 md:px-0 max-w-3xl mx-auto">
        {/* Role item */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-muted tracking-wider mb-1">
            Role
          </span>
          <span className="text-lg font-bold text-text-main">
            Research & <br />
            3D Modeling
          </span>
        </div>

        {/* Tools item */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-muted tracking-wider mb-1">
            Tools
          </span>
          <span className="text-lg font-bold text-text-main">
            Autodesk Maya, Figma, Miro
          </span>
        </div>

        {/* Context item */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-muted tracking-wider mb-1">
            Context
          </span>
          <span className="text-lg font-bold text-text-main">
            HTW Applied Project & <em>food4future</em>
          </span>
        </div>

        {/* Focus item */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase text-muted tracking-wider mb-1">
            Focus
          </span>
          <span className="text-lg font-bold text-text-main">
            Research-Driven Game Design
          </span>
        </div>
      </div>
      <hr className="border-t border-muted w-full mb-12 mt-8 mx-auto" />

      <h2 className="mb-4">The Vision</h2>
      <p>
        Urban Bio Space Simulator (BioTopia) is a serious game developed as an
        applied project at HTW Berlin in collaboration with the{" "}
        <em>food4future</em> research initiative. Built in{" "}
        <strong>Unity</strong>, the simulation was specifically designed and
        optimized for <strong>mobile</strong> and tablet devices. Set in a
        future defined by extreme{" "}
        <a
          href="https://www.food4future.de/en/about-us/vision"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap hover:text-primary underline underline-offset-2 transition-colors"
        >
          <strong>No Land</strong> and <strong>No Trade</strong>
        </a>{" "}
        scenarios, the game challenges players to secure a sustainable food
        supply for a growing city. To survive, players must build and manage
        innovative cultivation systems for alternative food sources - like
        crickets, algae, and jellyfish - directly within tight urban spaces.
        Ultimately, the project acts as an interactive science communication
        tool, aiming to inform players and raise awareness about the real-world
        challenges of future food security.
      </p>
      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h2 className="mb-4 mt-8">Gameplay & Features</h2>
      <p className="mb-4">
        BioTopia is a city-building management game where the player does not
        control the city layout itself, but rather how to utilize the limited
        space provided within an ever-growing city.
      </p>

      {/* Feature list using Tailwind for clean spacing and bullet points */}
      <ul className="list-disc list-outside ml-6 space-y-4 text-text-main">
        <li>
          <strong>Urban Biospaces:</strong> Players place specialized
          compartments inside existing buildings to produce food.
        </li>
        <li>
          <strong>Procedural Growth:</strong> The city expands procedurally,
          simulating the rapidly decreasing available space in urban areas.
        </li>
        <li className="list-none">
          <video
            src="/videos/BioTopia_demo_loop.mp4"
            muted
            playsInline
            controls
            className="w-xl rounded-xl my-12 mx-auto"
          >
            {/* Fallback text in case a user has an extremely outdated browser */}
            Your browser does not support the video tag.
          </video>
        </li>
        <li>
          <strong>Resource Management:</strong> Players must place compartments
          efficiently and invest in research to sustain the nutritional needs of
          the growing population.
        </li>
        <li>
          <strong>Real-World Science:</strong> Designed to showcase the research
          of <em>food4future</em>, core gameplay elements are directly based on
          actual research for sustainable food production in urban enviroments.
        </li>
      </ul>
      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h2 className="mb-4 mt-8">My Role & Process</h2>
      <p className="mb-4">
        I focused on bridging the gap between scientific research and the player
        experience, both visually and mechanically. My core responsibilities
        included:
      </p>
      <ul className="list-disc list-outside ml-6 space-y-4 text-text-main">
        <li>
          <strong>Research-Driven Game Design:</strong> I analyzed scientific
          papers and data provided by food4future to extract key mechanics. I
          collaborated on the core gameplay loop, ensuring that the mechanics
          remained scientifically accurate and fully aligned with the futuristic
          scenario they had envisioned.
        </li>
        <li>
          <strong>3D Compartment Modeling:</strong> Using Autodesk Maya, I
          modeled the specialized cultivation compartments. These 3D models were
          designed to be showcased as rotating elements within the game&apos;s
          menus, requiring them to be highly detailed yet easily readable on
          mobile screens.
        </li>
        <li>
          <strong>In-Game Copywriting:</strong> I wrote the in-game descriptions
          for the compartments and resources. Since I had conducted most of the
          scientific research, I took on the responsibility of translating those
          complex concepts into accessible, engaging information for the
          players.
        </li>
        <li>
          <strong>Team Collaboration & Workflow:</strong> General gameplay
          decisions were made collaboratively. We established a reliable
          communication routine, meeting twice a week: once internally as a
          student team to align on progress, and once with our project
          supervisor for feedback and direction.
        </li>
      </ul>
    </article>
  );
}
