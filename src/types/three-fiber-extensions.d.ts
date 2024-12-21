import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			textGeometry: ReactThreeFiber.Object3DNode<
				TextGeometry,
				typeof TextGeometry
			>;
		}
	}
}
