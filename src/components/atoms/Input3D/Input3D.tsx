import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';

interface InputProps {
	position: [number, number, number];
	width?: number;
	height?: number;
	depth?: number;
	color?: string;
	bgColor?: string;
	hoverColor?: string;
}

export const Input3D: React.FC<InputProps> = ({
	position,
	width = 2,
	height = 0.5,
	depth = 0.1,
	color = 'black',
	bgColor = '#ffffff',
	hoverColor = '#e0e0e0',
}) => {
	const [hovered, setHovered] = useState(false);
	const [value, setValue] = useState('');
	const [focused, setFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const groupRef = useRef<THREE.Group>(null);
	const { camera } = useThree();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (groupRef.current) {
				const mouse = new THREE.Vector2(
					(event.clientX / window.innerWidth) * 2 - 1,
					-(event.clientY / window.innerHeight) * 2 + 1,
				);
				const raycaster = new THREE.Raycaster();
				raycaster.setFromCamera(mouse, camera);
				const intersects = raycaster.intersectObject(groupRef.current, true);
				if (intersects.length === 0) {
					setFocused(false);
				}
			}
		};

		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, [camera]);

	useFrame(() => {
		if (focused && inputRef.current) {
			inputRef.current.focus();
		}
	});

	return (
		<group ref={groupRef} position={position}>
			<RoundedBox
				args={[width, height, depth]}
				castShadow
				receiveShadow
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
				onClick={() => setFocused(true)}
			>
				<meshStandardMaterial
					color={hovered || focused ? hoverColor : bgColor}
				/>
				<Html position={[-width / 2 + 0.1, 0, depth / 2]}>
					<input
						ref={inputRef}
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						style={{
							position: 'absolute',
							pointerEvents: 'none',
						}}
					/>
				</Html>
			</RoundedBox>
		</group>
	);
};
