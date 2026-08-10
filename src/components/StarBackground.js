"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// Sub-component for the animation logic
function RotatingStars() {
  // Create a reference to directly manipulate the 3D object in the render loop
  const starsRef = useRef();

  // The useFrame hook executes on every single frame (up to 60fps)
  // 'delta' represents the time passed since the last frame, ensuring the
  // rotation speed remains consistent regardless of the monitor's refresh rate
  useFrame((state, delta) => {
    if (starsRef.current) {
      // Slowly rotate the entire star group around the X and Y axes
      starsRef.current.rotation.y -= delta * 0.02;
      starsRef.current.rotation.x -= delta * 0.01;
    }
  });

  return (
    // Wrap the Stars component in a group and attach to reference
    <group ref={starsRef}>
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0}
      />
    </group>
  );
}

// Main component
export default function StarBackground() {
  return (
    // Remove bg-black so it seamlessly blends with the global app background
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
}
