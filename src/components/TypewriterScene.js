"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// Component to load and render the actual GLB model
function Typewriter() {
  // Load the GLB file from the public directory
  // Adjust the path if the file is named differently
  const { scene } = useGLTF("/models/typewriter_ibm_selectric_ii.glb");

  return <primitive object={scene} />;
}

// Main wrapper component defining the 3D scene
export default function TypewriterScene() {
  return (
    // The container needs a defined height and width to render the Canvas
    <div className="w-full h-64 md:h-96 bg-neutral-900 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        {/* Suspense prevents crashes while the 3D file is downloading */}
        <Suspense fallback={null}>
          {/* Stage provides automatic studio lighting and centers the model */}
          <Stage environment="city" intensity={0.25}>
            <Typewriter />
          </Stage>
          {/* OrbitControls allow the user to rotate the model */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
