
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  ContactShadows
} from "@react-three/drei";
import * as THREE from "three";

function ChromeSculpture() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const { pointer } = state;

    groupRef.current.rotation.y += delta * 0.12;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.2,
      delta * 2
    );

    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -pointer.x * 0.15,
      delta * 2
    );
  });

  const chrome = new THREE.MeshPhysicalMaterial({
    color: "#dce1e4",
    metalness: 1,
    roughness: 0.13,
    clearcoat: 1,
    clearcoatRoughness: 0.08
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.2}>
      <group ref={groupRef} scale={1.05}>
        {/* Main intertwined chrome loops */}
        <mesh material={chrome} rotation={[0.4, 0.2, 0.2]}>
          <torusGeometry args={[1.05, 0.25, 32, 120]} />
        </mesh>

        <mesh material={chrome} rotation={[1.2, 0.8, 1.1]}>
          <torusGeometry args={[1.05, 0.25, 32, 120]} />
        </mesh>

        <mesh material={chrome} rotation={[0.9, 1.5, 0.4]}>
          <torusGeometry args={[1.05, 0.25, 32, 120]} />
        </mesh>

        {/* Sculptural center */}
        <mesh material={chrome} scale={0.42}>
          <sphereGeometry args={[0.65, 64, 64]} />
        </mesh>

        {/* Small outer metallic detail */}
        <mesh
          material={chrome}
          rotation={[1.3, 0.5, 0.8]}
          scale={1.3}
        >
          <torusGeometry args={[1.1, 0.018, 12, 160]} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ParticleSculpture() {
  return (
    <div className="particle-scene">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={3}
        />

        <directionalLight
          position={[-4, -3, 2]}
          intensity={2}
        />

        <Environment preset="studio" />

        <ChromeSculpture />

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.18}
          scale={5}
          blur={2.5}
        />
      </Canvas>
    </div>
  );
}
