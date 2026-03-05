"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import {
  Group,
  Plane,
  Vector3,
  Mesh,
  Material,
  MeshStandardMaterial,
} from "three";

const MODEL_PATH = "/models/unc_old_well/scene_final.glb";

// After Center, model spans roughly -5.3 to +5.3. Clip base.
const CLIP_Y = -1.22;
const clipPlane = new Plane(new Vector3(0, 1, 0), -CLIP_Y);

function OldWellModel() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH, "/draco/");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Apply clipping plane + smooth shading to every mesh
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.geometry.computeVertexNormals();

        if (child.material) {
          const mats = Array.isArray(child.material)
            ? child.material
            : [child.material];
          mats.forEach((mat: Material) => {
            mat.clippingPlanes = [clipPlane];
            mat.clipShadows = true;
            if (mat instanceof MeshStandardMaterial) {
              mat.flatShading = false;
              mat.needsUpdate = true;
            }
          });
        }
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <group ref={groupRef} scale={0.24}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

useGLTF.preload(MODEL_PATH, "/draco/");

export default function OldWell() {
  return (
    <Canvas
      gl={{
        alpha: true,
        localClippingEnabled: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0.8, 7], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -3]} intensity={0.8} />
      <OldWellModel />
    </Canvas>
  );
}
