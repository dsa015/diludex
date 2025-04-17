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

const calculateIndex = (index: number) => {
	const SPECIAL_POKEMON_FORM_ID = 10001; // because special pokemon-forms have an id of 10001 and above
	if (index < 1025) {
		return index + 1;
	} else {
		// subtract 1025 from the index to reset back to 0
		return SPECIAL_POKEMON_FORM_ID + (index - 1025);
	}
};

export const load: PageServerLoad = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');

	if (!res.ok) {
		throw new Error('Failed to fetch Pokémon data');
	}

	const data = (await res.json()) as NamedApiResourseList;

	const pokemons: Pokemons[] = data.results.map((result, index) => {
		const pokemonIndex = calculateIndex(index);

		return {
			name: result.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`,
			pokemonUrl: result.url
		};
	});

	// Here we concatenate the first 1025 pokemons with the custom ones, to ensure the custom gets their data aswell

	return {
		pokemonDataSet: pokemons
	};
};
