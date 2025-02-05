'use client'

import * as THREE from 'three'
import { useTheme } from 'next-themes'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useFrame, ThreeElements, useThree } from '@react-three/fiber'
import { Center, Sparkles, Text3D } from '@react-three/drei'

export default function LogoAnimation() {
  return (
    <Canvas
      dpr={0.35}
      gl={{ antialias: false }}>
      {/* <color attach="background" args={['transparent']} /> */}
      <Suspense fallback={null}>
        <ambientLight intensity={Math.PI} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 4} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <MyScene />
        {/* <Camera position={[ 10 , 0 , 0 ]} scale={0.4}/> */}
      </Suspense>
      {/* <AsciiRenderer resolution={0.15} characters={' .:-+*=%@#'} fgColor="white" bgColor="transparent" /> */}
    </Canvas>
  )
}

function MyScene(props: ThreeElements['mesh']) {
  const icoRef = useRef<THREE.Mesh>(null!)
  const textRef = useRef<THREE.Mesh>(null!)
  const { theme } = useTheme()
  const { viewport, mouse } = useThree()
  const [scale, setScale] = useState(1)
  const [color, setColor] = useState('white')
  useFrame((state, delta) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    textRef.current.lookAt(x, y, 30);
    icoRef.current.rotation.x += delta / 2
    icoRef.current.rotation.z += delta / 2
  })
  useEffect(() => (viewport.width < 5.94 ? setScale(0.65) : setScale(1)), [viewport])
  useEffect(() => {
    setColor(theme === 'light' ? 'black' : 'white')
  }, [theme])

  return (
    <>
      <mesh
        {...props}
        scale={scale}
        // position={[0.15, 0, 0]} 
        ref={textRef}>
        <Center>
          <Text3D font={'/Cinzel_Regular.json'}>
            gleam
            <meshStandardMaterial color={color} />
          </Text3D>
        </Center>
      </mesh>
        <mesh
          {...props}
          scale={scale}
          ref={icoRef}>
          <icosahedronGeometry args={[2]} />
          <meshStandardMaterial wireframe color={color} />
        </mesh>
      <Sparkles count={200} color={color} size={2} scale={10} />
    </>
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
