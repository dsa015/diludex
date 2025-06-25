import type { Pokemon } from '../routes/+page.server';
import { images } from './images';
import { pokemonTypeColor } from './pokemonTypeColor';

export const toUpperCase = (str: string) => {
	if (str.includes('-	')) {
		const strArray = str.split('-');
		const strUpper = strArray.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
		return strUpper.join(' ');
	}

	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const filtered = (val: string, subset: Pokemon[]) => {
	const filtered = subset.filter((result) => {
		return result.name.toLowerCase().includes(val.toLowerCase());
	});

	return val.length > 0 ? filtered : subset;
};

export const typeWithColor = (type: string) => {
	const color = pokemonTypeColor[type as keyof typeof pokemonTypeColor];
	const image = images[type as keyof typeof images];
	return {
		backgroundColor: color,
		icon: image
	};
};
