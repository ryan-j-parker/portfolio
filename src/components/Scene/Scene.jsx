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

// import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
extend({ TextGeometry });

import dmserif from '../../DM Serif Display_Regular.json';
import titanOne from '../../Titan One_Regular.json';
import luckiest from '../../Luckiest Guy_Regular.json';

function Serif() {
  const font = new FontLoader().parse(dmserif);

  return (
    <>
      <mesh position={[-15, 4, -3]}>
        <textGeometry args={['interact with the 3D objects to learn more about my projects', { font, size: 2, height: 1.2 }]} />
        <meshNormalMaterial attach="material" color={'white'} />
      </mesh>
    </>
  );
}

function Lucky() {
  const font = new FontLoader().parse(luckiest);

  return (
    <mesh position={[-10, -4, 0]}>
      <textGeometry args={['Pokemon Compendium', { font, size: 2, height: 1.2 }]} />
      <meshNormalMaterial attach="material" color={'green'} roughness={0.5}/>
    </mesh>
  );
}

function Titan() {
  const font = new FontLoader().parse(titanOne);

  return (
    <mesh position={[-10, 4, -10]}>
      <textGeometry args={['sound palette', { font, size: 2, height: 1.2 }]} />
      <meshNormalMaterial attach="material" color={'white'} />
    </mesh>
  );
}

function ImagePlane() {
  const iconTexture = useLoader(THREE.TextureLoader, icon);
  return (
    <mesh scale={[5, 5, 5]} position={[0, 0, -45]}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" side={DoubleSide} map={iconTexture} toneMapped={false} />
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
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        <Marker />
        {/* <CameraController />
        <ambientLight intensity={1} />
        <ImagePlane />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <SoundPalette position={[0, 0, 0]} />
        <Collabo position={[0, 3, 0]} />
        <Pokemon position={[3, 3, 0]} />
        <TicTacToe position={[-3, 0, 0]} />
        <Flags position={[-3, 3, 0]} />
        <DevPal position={[3, 0, 0]} />
        <Colors position={[-3, -3, 0]} />
        <Algos position={[0, -3, 0]} />
        <Zodiac position={[3, -3, 0]} /> */}
        <Serif />
        <Titan />
        <Lucky />
        <CameraController />
        <ambientLight intensity={1} />
        <ImagePlane />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <SoundPalette scale={[4, 4, 4]} position={[0, 0, 0]} />
        <Collabo position={[3, 0, 0]} />
        <Pokemon position={[6, 0, 0]} />
        <TicTacToe position={[9, 0, 0]} />
        <Flags position={[12, 0, 0]} />
        <DevPal position={[-3, 0, 0]} />
        <Colors position={[-6, 0, 0]} />
        <Algos position={[-9, 0, 0]} />
        <Zodiac position={[-12, 0, 0]} />
      </Canvas>
    </>
  );
}
