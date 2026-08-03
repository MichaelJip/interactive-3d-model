"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/house.glb");
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div style={{ height: "900px", width: "100%" }}>
      <Canvas camera={{ fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Model />
          </Bounds>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls makeDefault enablePan={false} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/house.glb");
