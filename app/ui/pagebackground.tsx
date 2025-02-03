'use client'

import * as THREE from 'three'
import { useTheme } from 'next-themes'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'
import { AsciiRenderer, Sparkles } from '@react-three/drei'

export default function ButtonBackground() {
  const { theme } = useTheme()
  const [color, setColor] = useState('white')
  useEffect(() => {
    setColor(theme === 'lighter' ? 'black' : 'white')
  }, [theme])
  return (
    <Canvas
      gl={{ antialias: false }}>
      <color attach="background" args={['black']} />
      <Suspense fallback={null}>
        <ambientLight intensity={Math.PI} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 4} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <MyScene props={{position:[2.5,-1,1.5]}}/>
      </Suspense>
      <AsciiRenderer resolution={0.15} characters={' .:-+*=%@#'} fgColor={color} bgColor="transparent" />
    </Canvas>
  )
}

function MyScene({props}:{props?: ThreeElements['mesh']}) {
  const icoRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    icoRef.current.rotation.y += delta / 2
    icoRef.current.rotation.z += delta / 2
  })
  return (
    <group scale={1}>
        <mesh
          {...props}
          ref={icoRef}>
          <icosahedronGeometry args={[2]} />
          <meshStandardMaterial wireframe color='white' />
        </mesh>
      <Sparkles count={200} color={'white'} size={2} scale={10} />
    </group>
  )
}
