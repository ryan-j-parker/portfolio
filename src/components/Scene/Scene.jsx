/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import './Scene.css';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
extend({ OrbitControls });

import img from '../../r-fav.png';

function Box(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += Math.sin(0.1);
  });

  const texture = useLoader(THREE.TextureLoader, img);


  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [3, 3, 3] : [2, 2, 2]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <texture attach="map" image={img} onUpdate={(self) => (self.needsUpdate = true)} />
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  );
}

function Image() {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[4, 4]} doubleSide="true" />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  );
}


export default function Scene() {

  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;
  };

  return (
    <>
      <Canvas>
        <CameraController />
        <ambientLight intensity={1} />
        <Image />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <Box position={[-1.5, 3, 0]} />
        <Box position={[1.5, 3, 0]} />
        <Box position={[1.5, 0, 0]} />
        <Box position={[-1.5, 0, 0]} />
      </Canvas>
    </>
  );
}
