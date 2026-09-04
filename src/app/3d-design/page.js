import TypewriterScene from "@/components/TypewriterScene";
import Image from "next/image";

export default function ThreeDDesignPage() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <header>
        <h1 className="mb-12">IBM Selectric II</h1>
      </header>

      <TypewriterScene />
      <p className="text-center text-muted mt-2 mb-16">
        Photorealistic 3D model of an <em>IBM Selectric II</em> Typewriter.
      </p>
      <h2 className="mb-4">Project Context</h2>
      <p>
        This 3D model was created as the final assignment for the 3D-Design
        module at HTW Berlin. The course requirement was to build and render a
        typewriter from scratch, for which I selected the{" "}
        <em>IBM Selectric II</em>. The project covers the standard 3D pipeline,
        including geometry modeling, applying materials, and configuring a
        lighting and rendering setup.
      </p>
      <p>
        The final submission received a <strong>grade of 1.0</strong>.
      </p>

      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h2 className="mb-6">Final Render</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Image
          src="/img/3d-design/typewriterFinalRender.webp"
          alt="render of the typewriter"
          width={1920}
          height={1081}
          className="rounded-xl col-span-1 md:col-span-2"
        />
        <Image
          src="/img/3d-design/typewriter_render_1.webp"
          alt="render of the typewriter"
          width={1048}
          height={563}
          className="rounded-xl w-full h-full object-cover"
        />
        <Image
          src="/img/3d-design/typewriter_render_2.webp"
          alt="render of the typewriter"
          width={1276}
          height={715}
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h2 className="mb-6">The Process</h2>

      <p className="mb-4">
        Creating this asset was all about manual precision. To get the complex
        curves and mechanics of the typewriter exactly right, I modeled
        everything entirely by hand, using multiple camera perspectives and
        reference images. The workflow was pretty straightforward: I started by
        nailing down the primary casing and the overall silhouette before diving
        into the intricate mechanical details.{" "}
      </p>
      <p className="mb-8">
        To achieve that photorealistic look, I built a virtual photo studio
        complete with a cyclorama, a classic 3-point lighting rig, and an HDRI
        for image-based lighting. This setup was the perfect sandbox to tweak
        and fine-tune the PBR materials under realistic conditions. To wrap it
        all up, I modeled contextual elements like the wooden desk and the power
        cable to complete the composition.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        <Image
          src="/img/3d-design/typewriter_scene_1.webp"
          alt=""
          width={633}
          height={470}
          className="rounded-xl w-full h-full object-cover"
        />
        <Image
          src="/img/3d-design/typewriter_scene_2.webp"
          alt=""
          width={662}
          height={514}
          className="rounded-xl w-full h-full object-cover"
        />
        <Image
          src="/img/3d-design/typewriter_scene_3.webp"
          alt=""
          width={697}
          height={415}
          className="rounded-xl w-full h-full object-cover"
        />
        <Image
          src="/img/3d-design/typewriter_mesh_1.webp"
          alt=""
          width={650}
          height={487}
          className="rounded-xl w-full h-full object-cover"
        />
        <Image
          src="/img/3d-design/typewriter_mesh_2.webp"
          alt=""
          width={277}
          height={214}
          className="rounded-xl w-full h-full object-cover"
        />
        <Image
          src="/img/3d-design/typewriter_mesh_3.webp"
          alt=""
          width={239}
          height={230}
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      <hr className="border-t border-muted w-full my-12 mx-auto" />

      <h3 className="text-xl mb-4">Project Links</h3>
      <ul className="flex flex-col space-y-3">
        <li>
          <a
            href="https://typewriterdatabase.com/my.5588.typewriter"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary transition-colors text-text-main"
          >
            Reference Images (<em>IBM Selectric II</em>)
            <span className="inline-block ml-1.5">↗</span>
          </a>
        </li>
        <li>
          <a
            href="/models/typewriter_ibm_selectric_ii.glb"
            download="ibm_selectric_ii_model.glb"
            className="underline underline-offset-4 hover:text-primary transition-colors text-text-main w-fit"
          >
            3D Model (.glb)
            <span className="inline-block ml-1.5">↓</span>
          </a>
        </li>
      </ul>
    </main>
  );
}
