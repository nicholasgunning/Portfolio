import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/glasses.gltf");

  const glowMaterial = new THREE.MeshStandardMaterial({
    color: "white",
    emissive: "white",
    emissiveIntensity: 0.7,
    toneMapped: false,
  });

  const silverMaterial = new THREE.MeshStandardMaterial({
    color: "#A9A9A9",
    metalness: 0.5,
    roughness: 0.1,
    envMapIntensity: 1,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.223, 0]} scale={[2, 2, 2]}>
        <mesh
          geometry={nodes.pCylinder1_aiStandardSurface1_0.geometry}
          material={silverMaterial}
        />
        <mesh
          geometry={nodes.pCylinder1_aiStandardSurface2_0.geometry}
          material={glowMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glasses.gltf");
