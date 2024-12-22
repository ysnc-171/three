import { useFrame } from '@react-three/fiber';
import { Wall } from '@atoms/Wall';
import { Button3D } from '@atoms/Button3D';
import { useRef } from 'react';
import { SpotLight } from 'three';

export const Scene: React.FC = () => {
	const lightRef = useRef<SpotLight>(null);

	useFrame(({ pointer }) => {
		if (lightRef.current) {
			lightRef.current.position.set(pointer.x * 10, pointer.y * 10, 5);
			lightRef.current.lookAt(pointer.x * 10, pointer.y * 10, 0);
		}
	});

	return (
		<>
			<ambientLight intensity={2} />
			<spotLight
				ref={lightRef}
				penumbra={0.5}
				color="#ffffff"
				intensity={10}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			<Wall />
			<Button3D
				label="Submit"
				onClick={() => alert('Button Clicked!')}
				depth={0.5}
				position={[-1, 0, 0]}
			/>
			<Button3D
				label="Cancel"
				onClick={() => alert('Button Clicked!')}
				position={[1, 0, 0]}
			/>
		</>
	);
};
