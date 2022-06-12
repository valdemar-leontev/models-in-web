import React from 'react'
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import texture from '../images/TexturesCom_Leather0113_2_seamless_S.jpg'

export default function Box() {
// const colorMap = useLoader(TextureLoader, texture);

    return <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach='geometry' args={[3, 3, 3]} />
{/* 
        <meshStandardMaterial map={colorMap} /> */}
    </mesh>;
}