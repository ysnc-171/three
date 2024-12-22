export const Wall: React.FC = () => {
	return (
		<mesh position={[0, 0, 0]} receiveShadow>
			<planeGeometry args={[10, 10]} />
			<meshStandardMaterial color="white" />
		</mesh>
	);
};
