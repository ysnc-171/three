import { App } from '@root/App';
import { Route, Routes } from 'react-router';

export const AppRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<App />} />
	</Routes>
);
