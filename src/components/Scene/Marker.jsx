/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Marker(props) {
  const [clicked, setClicked] = useState(false);
  const markerRef = useRef();
  const vector = new THREE.Vector3();

  console.log('vector: ', vector);
  console.log('markerRef: ', markerRef);
  console.log('markerRef.current: ', markerRef.current);

  useFrame((state) => {
    if (clicked) {
      state.camera.lookAt(markerRef.current.position);
      // eslint-disable-next-line no-undef
      state.camera.position.lerp(vector.set(xPosition, yPosition, zPosition), 0.01);
      state.camera.updateProjectionMatrix();
      console.log('state.camera: ', state.camera);
    }
    return null;
  });

  return (
    <mesh ref={markerRef} {...props} onClick={() => setClicked(!clicked)}>
      <coneBufferGeometry attach="geometry" args={[0.5, 1, 32]} />
      <meshLambertMaterial attach="material" color={clicked ? 'red' : 'white'} />
    </mesh>
  );
}
