"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { IslandScene } from "./IslandScene";
import { OrbitLoader } from "@/components/ui/orbit-loader";

export default function Viewer() {
  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 2, 10] }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[6, 10, 6]} intensity={1.2} />
          <IslandScene />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      <OrbitLoader />
    </div>
  );
}
