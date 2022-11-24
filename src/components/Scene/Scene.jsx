/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react';
import './Scene.css';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
extend({ OrbitControls });

function Box(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial metalness={0.1} attach="material" />
    </mesh>
  );
}

export default function Scene() {
  // function MyMesh() {
  //   const shapeRef = useRef();
  //   // useFrame((state, delta) => {
  //   useFrame(() => {
  //     if (shapeRef.current) {
  //       shapeRef.current.rotate.x += 0.01;
  //     }
  //   });
  //   // shapeRef.current.rotation.y += delta;
  //   // });

  //   return <mesh ref={shapeRef} />;
  // }

  // const { camera, gl } = useThree();

  // console.log(OrbitControls);

  return (
    <>
      {/* <OrbitControls args={[camera, gl.domElement]} />
      <div className="scene"> */}
      <Canvas
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 200,
      //   position: [3, 2, 6]
      // }}
      >
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        {/* <MyMesh /> */}
        {/* <mesh
          //  ref={ shapeRef }
          >
            <meshNormalMaterial color="orange" />
            <boxGeometry />
          </mesh> */}
      </Canvas>
      {/* </div> */}
    </>
  );
}
