// @ts-nocheck
import type { PageServerLoad } from './$types';

type NamedApiResourseList = {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
};

export type Pokemons = {
	name: string;
	image: string;
	pokemonUrl: string;
};

export const load = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');

	if (!res.ok) {
		throw new Error('Failed to fetch Pokémon data');
	}

	const data = (await res.json()) as NamedApiResourseList;

	const pokemon: Pokemons[] = data.results.map((result, index) => {
		return {
			name: result.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
			pokemonUrl: result.url
		};
	});

	return {
		pokemon
	};
};
;null as any as PageServerLoad;