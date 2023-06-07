import React, { Suspense } from 'react';
import './App.css'
import Face from './components/Face'
import Sphere from './components/AnimatedSphere'
import Box from './components/Box'
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

export default function App() {
  return (
    <Wrapper className="App">
      <Canvas className="canvas">
        <OrbitControls autoRotate={true} autoRotateSpeed={1} enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={'Loading...'}>
          <Sphere />
          {/* <Box />
          <Face /> */}
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  canvas {
    height: 100vh;
  }
`;
