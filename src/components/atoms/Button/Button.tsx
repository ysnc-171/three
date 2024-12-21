import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import * as THREE from 'three';

extend({ TextGeometry });

type ButtonProps = {
	onClick: () => void;
	label: string;
};

export function Button3D({ onClick, label }: ButtonProps) {
	const [hovered, setHovered] = useState(false);
	const [pressed, setPressed] = useState(false);
	const meshRef = useRef<THREE.Mesh>(null);
	const labelRef = useRef<THREE.Mesh>(null);

	useFrame(() => {
		// Optionale Animation für Hover oder andere Effekte
		if (meshRef.current) {
			meshRef.current.rotation.y = hovered ? 0.1 : 0;
		}
	});

	return (
		<group
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			onPointerDown={() => setPressed(true)}
			onPointerUp={() => {
				setPressed(false);
				onClick();
			}}
		>
			{/* Button Body */}
			<mesh
				ref={meshRef}
				position={[0, 0, pressed ? -0.1 : 0]}
				castShadow
				receiveShadow
			>
				<boxGeometry args={[2, 1, 0.5]} />
				<meshStandardMaterial
					color={hovered ? 'orange' : 'blue'}
					emissive={hovered ? 'yellow' : 'black'}
				/>
			</mesh>

			{/* Button Label */}
			<mesh ref={labelRef} position={[0, 0.3, 0.26]}>
				<textGeometry
					args={[label, { font: undefined, size: 0.2, height: 0.05 }]} // Replace `font` with an actual font.
				/>
				<meshStandardMaterial color="white" />
			</mesh>
		</group>
	);
}
