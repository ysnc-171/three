import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { BrowserRouter } from 'react-router';

export const ProviderStack: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return (
		<BrowserRouter>
			<Canvas shadows style={{ height: '100dvh', width: '100dvw' }}>
				{children}
				<OrbitControls
					maxPolarAngle={Math.PI / 2 + Math.PI / 12} // Begrenzung der vertikalen Drehung auf 15° von der Senkrechten
					minPolarAngle={Math.PI / 2 - Math.PI / 12} // Begrenzung der vertikalen Drehung auf 15° von der Senkrechten
					maxAzimuthAngle={Math.PI / 12} // Begrenzung der horizontalen Drehung auf 15°
					minAzimuthAngle={-Math.PI / 12} // Begrenzung der horizontalen Drehung auf 15°
					enablePan={false} // Aktiviert das Verschieben
					enableRotate={false} // Aktiviert das Rotieren
					enableZoom={false} // Aktiviert das Zoomen
					screenSpacePanning={false} // Panning bleibt parallel zur Wand
					target={[0, 0, 0]} // Setzt das Ziel der Kamera auf die Mitte der Szene
				/>
			</Canvas>
		</BrowserRouter>
	);
};
