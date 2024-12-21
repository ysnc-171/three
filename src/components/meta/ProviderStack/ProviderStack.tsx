import { BrowserRouter } from 'react-router';

export const ProviderStack: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};
