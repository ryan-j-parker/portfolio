/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { DoubleSide } from 'three';
import React, { useRef, useState, useEffect } from 'react';
import './Scene.css';
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
extend({ OrbitControls });

import icon from '../../r-fav.png';

import SoundPalette from './SoundPalette';
import Collabo from './Collabo';
import Pokemon from './Pokemon';
import Colors from './Colors';
import TicTacToe from './TicTacToe';
import Flags from './Flags';
import Algos from './Algos';
import DevPal from './DevPal';
import Zodiac from './Zodiac';
import Marker from './Marker';
import { FirstPersonControls } from '@react-three/drei';
extend({ FirstPersonControls });

function Image() {
  const iconTexture = useLoader(THREE.TextureLoader, icon);
  return (
    <mesh scale={[1, 1, 1]}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" side={DoubleSide} map={iconTexture} toneMapped={false} />
    </mesh>
  );
}

function Foo(props) {
  const ref = useRef();
  const data = useScroll();
  useFrame(() => {
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened

    // Will be 0 when the scrollbar is at the starting position,
    // then increase to 1 until 1 / 3 of the scroll distance is reached
    const a = data.range(0, 1 / 3);
    // Will start increasing when 1 / 3 of the scroll distance is reached,
    // and reach 1 when it reaches 2 / 3rds.
    const b = data.range(1 / 3, 1 / 3);
    // Same as above but with a margin of 0.1 on both ends
    const c = data.range(1 / 3, 1 / 3, 0.1);
    // Will move between 0-1-0 for the selected range
    const d = data.curve(1 / 3, 1 / 3);
    // Same as above, but with a margin of 0.1 on both ends
    const d = data.curve(1 / 3, 1 / 3, 0.1);
    // Returns true if the offset is in range and false if it isn't
    const e = data.visible(2 / 3, 1 / 3);
    // The visible function can also receive a margin
    const f = data.visible(2 / 3, 1 / 3, 0.1);
  });
  return <mesh ref={ref} {...props} />;
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
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        <Marker />
        <CameraController />
        <ambientLight intensity={1} />
        <Image position={[0, 0, 10]} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <SoundPalette position={[0, 0, 0]} />
        <Collabo position={[0, 3, 0]} />
        <Pokemon position={[3, 3, 0]} />
        <TicTacToe position={[-3, 0, 0]} />
        <Flags position={[-3, 3, 0]} />
        <DevPal position={[3, 0, 0]} />
        <Colors position={[-3, -3, 0]} />
        <Algos position={[0, -3, 0]} />
        <Zodiac position={[3, -3, 0]} />
      </Canvas>
    </>
  );
}
