import { useFrame } from '@react-three/fiber';
import { Wall } from '@atoms/Wall';
import { Button3D } from '@atoms/Button3D';
import { useRef } from 'react';
import { SpotLight } from 'three';
import { Input3D } from '@root/components/atoms/Input3D/Input3D';

export const Scene: React.FC = () => {
	const lightRef = useRef<SpotLight>(null);

	useFrame(({ pointer }) => {
		if (lightRef.current) {
			lightRef.current.position.set(pointer.x * 4, pointer.y * 4, 10);
			lightRef.current.lookAt(pointer.x * 4, pointer.y * 4, 0);
		}
	});

	return (
		<>
			<ambientLight intensity={2} />
			<spotLight
				ref={lightRef}
				penumbra={0.5}
				color="#ffffff"
				intensity={105}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			<Wall />
			<Input3D position={[-1, 1, 0.5]} />
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
