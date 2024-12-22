export interface ButtonProps {
	label: string;
	onClick: () => void;
	position: [number, number, number];
	width?: number;
	height?: number;
	depth?: number;
	color?: string;
	bgColor?: string;
}
