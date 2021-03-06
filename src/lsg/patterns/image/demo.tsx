import { Image } from './index';
import * as React from 'react';

const ImageDemo = () => {
	// example with srcset and props in object
	const image = {
		alt: 'Gourgeously crafted alternate text',
		src: 'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif'
	};
	return <Image alt={image.alt} src={image.src} />;
};

export default ImageDemo;
