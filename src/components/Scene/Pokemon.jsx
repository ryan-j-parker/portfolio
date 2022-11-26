/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

import pokemon from '../../assets-1028/sq-pokemon.png';

export default function Pokemon(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame(() => {
  // mesh.current.rotation.x += 0.001;
  // mesh.current.rotation.y += Math.sin(0.1);
  // });

  const sqPK = useLoader(THREE.TextureLoader, pokemon);

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        // scale={active ? [3, 3, 3] : [2, 2, 2]}
        scale={[2, 2, 2]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqPK} toneMapped={false} />
      </mesh>
    </>
  );
}
