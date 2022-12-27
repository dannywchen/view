/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Duznot (https://sketchfab.com/duz_vr)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/melon-pallet-b90368f059744627a612fc06d576fa43
title: Melon Pallet
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";

export default function MelonPallet({ ...props }) {
  const group = useRef()
  useFrame(() => {
    group.current.rotation.y += 0.01;
  });

  const { nodes, materials } = useGLTF("/melon_pallet/scene.gltf")
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Melons_Wood_Pallet_0.geometry} material={materials.Wood_Pallet} />
            <mesh geometry={nodes.Melons_Watermelon_0.geometry} material={materials.Watermelon} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Wrap_Clingwrap_0.geometry} material={materials.Clingwrap} />
          </group>
          <group position={[-251.01, 148.41, -578.45]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Melons001_Watermelon_0.geometry} material={materials.Watermelon} />
          </group>
          <group position={[509.45, -13.35, 326.1]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Melons002_Watermelon_0.geometry} material={materials.Watermelon} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/melon_pallet/scene.gltf")
