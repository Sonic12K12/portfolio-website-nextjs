import Image from "next/image";

export default function UBSSPage() {
  return (
    <article className="max-w-4xl mx-auto">
      <header>
        <h1 className="mb-12">BioTopia - Urban Bio Space Simulator</h1>
        <Image
          src="/img/ubbs_image_1.webp"
          alt="Screenshot of BioTopia"
          className="rounded-xl"
          width={1920}
          height={1080}
        />
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-16 px-4 md:px-0 max-w-3xl mx-auto">
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
    </article>
  );
}
