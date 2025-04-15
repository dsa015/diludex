import type { Pokemons } from '../routes/+page.server';

export const toUpperCase = (str: string) => {
	if (str.includes('-')) {
		const strArray = str.split('-');
		const strUpper = strArray.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
		return strUpper.join(' ');
	}

	return str.charAt(0).toUpperCase() + str.slice(1);
};

// search function
const filter = (val: string, subset: Pokemons[]) => {
	return subset.filter((result) => {
		return result.name.toLowerCase().includes(val.toLowerCase());
	});
};
export const filtered = (val: string, subset: Pokemons[]) => {
	return val.length > 0 ? filter(val, subset) : subset;
};
