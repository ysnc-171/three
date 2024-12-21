import { Canvas } from '@react-three/fiber';
import { Button3D } from './components/atoms/Button/Button';

export const App: React.FunctionComponent = () => {
	return (
		<Canvas>
			<Button3D onClick={() => alert('Button clicked!')} label="Click Me" />
		</Canvas>
	);
};
