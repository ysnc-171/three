import { RoundedBox, Text } from '@react-three/drei';
import React, { useState } from 'react';
import { ButtonProps } from './Button3D.types';

export const Button3D: React.FC<ButtonProps> = ({
	label,
	onClick,
	position,
	width = 1,
	height = 1,
	depth = 0.5,
	color = 'black',
	bgColor = '#bcbcbc',
	hoverColor = 'orange',
}) => {
	const [hovered, setHovered] = useState(false);

	return (
		<RoundedBox
			args={[width, height, depth]}
			position={[position[0], position[1], position[2] + depth / 2]}
			castShadow
			receiveShadow
			onClick={onClick}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<meshStandardMaterial color={hovered ? hoverColor : bgColor} />
			<Text
				position={[0, 0, 0.26]}
				fontSize={0.2}
				color={color}
				anchorX="center"
				anchorY="middle"
				castShadow
			>
				{label}
			</Text>
		</RoundedBox>
	);
};
