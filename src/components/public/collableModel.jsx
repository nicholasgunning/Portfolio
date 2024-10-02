import React from "react";
import { useGLTF } from "@react-three/drei";

export default function CollableModel(props) {
  const { nodes, materials } = useGLTF("/Collable.gltf");
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      // rotation={[0.5, -0.5, 0]}
    >
      <mesh
        geometry={nodes.Strap.geometry}
        material={materials.VR_Glasses}
        position={[0.451, 4.846, -0.792]}
        rotation={[0.279, 0, 0]}
        scale={[12.048, 12.048, 9.508]}
      />
      <mesh
        geometry={nodes["Sci-fi_lowpoly_VR_Glasses002"].geometry}
        material={materials["VR_Glasses.002"]}
        position={[0.448, 4.409, 1.207]}
        scale={12.176}
      />
      <mesh
        geometry={nodes["Sci-fi_lowpoly_VR_Glasses004"].geometry}
        material={materials["VR_Glasses.002"]}
        position={[0.46, 4.435, 1.096]}
        scale={[27.896, 12.176, 12.176]}
      />
      <group position={[0.45, 4.087, -0.196]} scale={[13.405, 11.785, 11.785]}>
        <mesh
          geometry={nodes.cuerpo_completo.geometry}
          material={materials.body_bsd}
        />
        <mesh
          geometry={nodes.cuerpo_completo_1.geometry}
          material={materials.eye_bsd}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Collable.gltf"); // Correct path
