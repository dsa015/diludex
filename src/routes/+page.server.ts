import type { PageServerLoad } from './$types';

export type Pokemon = {
	name: string;
	image: string;
	normalImage: string;
	pokemonUrl: string;
};

export const load: PageServerLoad = async () => {
	const res = await fetch('https://bff-diludex.dilu.dev/api/v1/pokemon');

	if (!res.ok) {
		throw new Error('Failed to fetch Pokémon data');
	}

	const data = (await res.json()) as Pokemon[];

	return {
		pokemonDataSet: data
	};
};
