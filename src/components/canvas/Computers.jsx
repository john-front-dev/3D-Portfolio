import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { CanvacLoader } from "../Loader";
import Computers from "./Computers";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene/gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={black} />
      <printLight intensity1 />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fav: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvacLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Computers;
