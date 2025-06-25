import type { LayoutServerLoad } from './$types';

export type PokemonList = {
	name: string;
	image: string;
	normalImage: string;
	pokemonUrl: string;
};

export const load: LayoutServerLoad = async () => {
	const res = await fetch('https://bff-diludex.dilu.dev/api/v1/pokemon');

	if (!res.ok) {
		throw new Error('Failed to fetch Pokémon data');
	}

	const data = (await res.json()) as PokemonList[];

	return {
		pokemonDataSet: data
	};
};
