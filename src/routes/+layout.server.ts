import type { PokemonList } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const res = await fetch('https://bff-diludex.dilu.dev/api/v1/pokemon');

	if (!res.ok) {
		throw new Error('Failed to fetch Pokémon data');
	}

	const data = (await res.json()) as { data: PokemonList[] };

	return {
		pokemonDataSet: data.data
	};
};
