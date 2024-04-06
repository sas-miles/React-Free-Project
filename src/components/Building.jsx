/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/house.glb 
Author: vivecreative (https://sketchfab.com/creativesip)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/interactive-architectural-building-model-a3f9604202514c38a4fb7a719fe8af6a
Title: Interactive Architectural Building Model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Building({ modelSrc }) {
  const { nodes, materials } = useGLTF(
    "https://react-three-slider.netlify.app/model/building.glb"
  );
  const ref = useRef();

  return (
    <group {...props} dispose={null} ref={ref} position={[0.8, -1, -4]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.011}>
        <group position={[-171.033, -78.518, 49.12]}>
          <group position={[171.033, 78.518, -146.323]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.material_18}
              position={[0, 0, 97.203]}
            />
          </group>
          <group position={[-246.541, -68.994, 87.452]}>
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.material_17}
              position={[417.574, 147.512, -136.572]}
            />
          </group>
          <group position={[-246.096, -67.704, 85.602]}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.material_16}
              position={[417.129, 146.222, -134.722]}
            />
          </group>
          <group position={[-15.159, 44.982, -22.156]}>
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials.blue}
              position={[186.192, 33.536, -26.964]}
            />
          </group>
          <group position={[-292.997, -189.036, 50.773]}>
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials.material_14}
              position={[464.03, 267.554, -99.893]}
            />
          </group>
          <group position={[84.644, 26.585, 21.646]}>
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials.Metal}
              position={[86.389, 51.933, -70.766]}
            />
          </group>
          <group position={[-272.474, -88.359, 13.945]}>
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials["Whie-1"]}
              position={[443.507, 166.877, -63.065]}
            />
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials["Whie-1"]}
              position={[443.507, 166.877, -63.065]}
            />
            <mesh
              geometry={nodes.Object_26.geometry}
              material={materials["Whie-1"]}
              position={[443.507, 166.877, -63.065]}
            />
            <mesh
              geometry={nodes.Object_28.geometry}
              material={materials["Whie-1"]}
              position={[443.507, 166.877, -63.065]}
            />
            <mesh
              geometry={nodes.Object_30.geometry}
              material={materials["Whie-1"]}
              position={[443.507, 166.877, -63.065]}
            />
          </group>
          <group position={[-237.424, -378.355, -49.863]}>
            <mesh
              geometry={nodes.Object_35.geometry}
              material={materials.material_10}
              position={[408.457, 456.873, 0.743]}
            />
          </group>
          <group position={[-367.276, 180.314, -74.046]}>
            <mesh
              geometry={nodes.Object_38.geometry}
              material={materials.material_9}
              position={[538.309, -101.796, 24.926]}
            />
          </group>
          <group position={[-233.522, -25.678, -112.73]}>
            <mesh
              geometry={nodes.Object_41.geometry}
              material={materials.material_7}
              position={[404.555, 104.196, 63.61]}
            />
          </group>
          <group position={[106.701, 30.961, -40.935]}>
            <mesh
              geometry={nodes.Object_46.geometry}
              material={materials.Blue}
              position={[64.332, 47.557, -8.186]}
            />
          </group>
          <group position={[-336.386, -5.946, 213.361]}>
            <mesh
              geometry={nodes.Object_49.geometry}
              material={materials.material_5}
              position={[507.419, 84.464, -262.481]}
            />
          </group>
          <group position={[261.615, -140.607, 29.847]}>
            <mesh
              geometry={nodes.Object_52.geometry}
              material={materials.Glass}
              position={[-90.582, 219.125, -78.967]}
            />
          </group>
          <group position={[-234.272, -483.319, -63.091]}>
            <mesh
              geometry={nodes.Object_57.geometry}
              material={materials.material_2}
              position={[405.305, 561.837, 13.971]}
            />
          </group>
          <group position={[167.592, -4.787, 98.584]}>
            <mesh
              geometry={nodes.Object_62.geometry}
              material={materials["58----"]}
              position={[3.441, 83.305, -147.704]}
            />
          </group>
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.material_11}
            position={[171.033, 78.518, -49.12]}
          />
          <mesh
            geometry={nodes.Object_43.geometry}
            material={materials.Bricks}
            position={[171.033, 78.518, -49.12]}
          />
          <mesh
            geometry={nodes.Object_54.geometry}
            material={materials.material_3}
            position={[171.033, 78.518, -49.12]}
          />
          <mesh
            geometry={nodes.Object_59.geometry}
            material={materials.material}
            position={[171.033, 78.518, -49.12]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("https://react-three-slider.netlify.app/model/building.glb");
