import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProviderStack } from '@meta/ProviderStack';
import { AppRoutes } from '@meta/AppRoutes';
import './index.css';

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root element not found');
}

createRoot(root).render(
	<StrictMode>
		<ProviderStack>
			<AppRoutes />
		</ProviderStack>
	</StrictMode>,
);
