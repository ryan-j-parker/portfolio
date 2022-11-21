/* eslint-disable react/no-unknown-property */
import React from 'react';
import './Scene.css';
import { Canvas } from '@react-three/fiber';

export default function Scene() {
  return (
    <div>
      <Canvas>
        <mesh>
          <meshNormalMaterial />
          <torusGeometry />
        </mesh>
      </Canvas>
    </div>
  );
}
