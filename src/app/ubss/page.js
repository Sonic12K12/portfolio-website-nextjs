import Image from "next/image";

export default function UBSSPage() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <header>
        <h1 className="mb-12">Urban Bio Space Simulator</h1>
        <Image
          src="/img/ubss/ubss_image_1.webp"
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
        <li className="list-none -ml-6">
          <video
            src="/videos/BioTopia_demo_loop.mp4"
            muted
            playsInline
            controls
            className="w-full mx-auto rounded-xl my-12"
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
          actual research for sustainable food production in urban environments.
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-12">
        <Image
          src="/img/ubss/ubss_image_2.webp"
          alt="BioTopia ingame screenshot"
          width={2340}
          height={1080}
          className="rounded-xl col-span-1 md:col-span-3"
        />
        <Image
          src="/img/ubss/ubss_image_3.webp"
          alt="BioTopia ingame screenshot"
          width={1170}
          height={540}
          className="rounded-xl"
        />
        <Image
          src="/img/ubss/ubss_image_4.webp"
          alt="BioTopia ingame screenshot"
          width={1170}
          height={540}
          className="rounded-xl"
        />
        <Image
          src="/img/ubss/ubss_image_5.webp"
          alt="BioTopia ingame screenshot"
          width={1170}
          height={540}
          className="rounded-xl"
        />
      </div>

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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
        <Image
          src="/img/ubss/algae_comp_lowP.webp"
          alt="algae compartment low-poly"
          width={965}
          height={540}
          className="rounded-xl w-full h-full object-cover aspect-4/3"
        />
        <Image
          src="/img/ubss/jellyfish_comp.webp"
          alt="jellyfish compartment"
          width={965}
          height={540}
          className="rounded-xl w-full h-full object-cover aspect-4/3"
        />
        <Image
          src="/img/ubss/crickets_comp.webp"
          alt="crickets compartment"
          width={965}
          height={540}
          className="rounded-xl w-full h-full object-cover aspect-4/3"
        />

        <Image
          src="/img/ubss/algae_comp.webp"
          alt="algae compartment"
          width={965}
          height={540}
          className="rounded-xl w-full h-full object-cover aspect-4/3"
        />
      </div>

      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h2 className="mb-4">Public Pitch & Exhibition</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <p>
          A major highlight of the development process was pitching the game at
          the food4future summer festival at Therme Bad Saarow in July 2025. I
          had the opportunity to deliver the main presentation, introducing our
          core concepts and mechanics to an audience of stakeholders and domain
          experts. Following the talk, we showcased a playable prototype at our
          booth, gathering invaluable feedback. This direct exchange heavily
          influenced our final polish leading up to the official HTW IMI
          Showtime exhibition.
        </p>

        <Image
          src="/img/ubss/ubss_bad_saarow_presentation.webp"
          alt="presentation of BioTopia in Bad Saarow"
          width={874}
          height={636}
          className="rounded-xl mt-2.5"
        />
      </div>

      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h2 className="mb-4">Retrospective</h2>
      <p>
        Working on BioTopia was a great experience in balancing technical limits
        with an engaging user experience. Coming up with a solid game concept
        from scratch was a challenge in itself, especially since we had to turn
        real research from food4future into intuitive gameplay mechanics while
        also keeping our 3D assets optimized for mobile devices. But beyond the
        tech side, it was just incredibly cool to go through a full production
        cycle—from the first brainstorming session to actually playing a real,
        finished game. Our team effort really paid off with a{" "}
        <strong>final grade of 1.3</strong>, and it showed me how well serious
        games can work to make science accessible and engaging.
      </p>

      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h3 className="text-xl mb-4">Project Links</h3>

      <ul className="flex flex-col space-y-3">
        <li>
          <a
            href="https://showtime.f4.htw-berlin.de/ss25/bachelor/b4-urban-bio-space-simulator/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary transition-colors text-text-main"
          >
            Urban Bio Space Simulator (BioTopia) Project Page
            <span className="inline-block ml-1.5">↗</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.food4future.de/en/home"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary transition-colors text-text-main"
          >
            food4future Initiative
            <span className="inline-block ml-1.5 ">↗</span>
          </a>
        </li>
      </ul>
    </main>
  );
}
