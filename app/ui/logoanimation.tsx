'use client'

import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { useFrame, ThreeElements, useThree } from '@react-three/fiber'
import { Canvas } from "@react-three/fiber";
import { Center, Text3D } from '@react-three/drei';

export default function LogoAnimation() {

  return (
    <Canvas gl={{ antialias: true }} dpr={0.35}>
      {/* <color attach="background" args={['black']} /> */}
      <Suspense fallback={null}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 4} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <MyText position={[0.15, 0, 0]} />
        <Shape />
        {/* <Camera position={[ 10 , 0 , 0 ]} scale={0.4}/> */}
      </Suspense>
      {/* <AsciiRenderer resolution={0.15} characters={' .:-+*=%@#'} fgColor="white" bgColor="transparent" /> */}
    </Canvas>
  )
}

function Shape(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta / 4, meshRef.current.rotation.y += delta / 4))
  return (
    <mesh
      {...props}
      ref={meshRef}>
      <icosahedronGeometry args={[2]} />
      <meshStandardMaterial wireframe color={'white'} />
    </mesh>
  )
}

function MyText(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { viewport, mouse } = useThree();
  useFrame(() => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    meshRef.current.lookAt(x, y, 30);
  });
  return (
    <mesh {...props} ref={meshRef}>
      <Center>
        <Text3D font={'/Cinzel_Regular.json'}>
          gleam
          <meshStandardMaterial color={'white'} />
        </Text3D>
      </Center>
    </mesh>
  )
}

// function Camera(props: ThreeElements['mesh']) {
//   const { scene } = useGLTF('/vintage_slr_camera.glb')
//   const meshRef = useRef<THREE.Mesh>(null!)
//   const { viewport, mouse } = useThree();
//   useFrame(() => {
//     const x = (mouse.x * viewport.width) / 2;
//     const y = (mouse.y * viewport.height) / 2;
//     meshRef.current.lookAt(x, y, 2.5);
//   });
//   return (
//     <Center>
//       <primitive
//         {...props}
//         ref={meshRef}
//         object={scene}
//       />
//     </Center>
//   )
// }
