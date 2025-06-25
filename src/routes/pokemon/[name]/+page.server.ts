import type { PageServerLoad } from './$types';

type PokemonAbility = {
	id: number;
	name: string;
	effectEntries: {
		effect: string;
		short_effect: string;
		language: {
			name: string;
			url: string;
		};
	};
	flavourText: string;
	isHidden: boolean;
};

type ArtWork = {
	front_default: string;
	other: {
		'official-artwork': {
			front_default: string;
			front_shiny: string;
		};
	};
};

export type PokemonType = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};

// type VersionGroupDetails = {
// 	level_learned_at: number;
// 	move_learn_method: {
// 		name: string;
// 		url: string;
// 	};
// 	version_group: {
// 		name: string;
// 		url: string;
// 	};
// };

// type Moves = {
// 	move: {
// 		name: string;
// 		url: string;
// 	};
// 	version_group_details: VersionGroupDetails[];
// };

export type Move = {
	id: number;
	name: string;
	accuracy: number;
	damage_class: {
		name: string;
		url: string;
	};
	pp: number;
	power: number;
	type: {
		name: string;
	};
};

export type Species = {
	flavor_text_entries: {
		flavor_text: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	color: {
		name: string;
	};
	evolution_chain: {
		url: string;
	};
};

type Pokemon = {
	id: number;
	abilities: PokemonAbility[];
	base_experience: number;
	name: string;
	height: number;
	weight: number;
	cries: {
		latest: string;
		legacy: string;
	};
	pokemonType: PokemonType[];
	artwork: ArtWork;
	forms: {
		name: string;
		url: string;
	}[];
};

type PokemonDetails = {
	pokemon: Pokemon;
	pokemon_species: Species;
	evolution_chain: {
		name: string;
	}[];
	moves: Move[];
};

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`https://bff-diludex.dilu.dev/api/v1/pokemon/${params.name}`);

	const data = (await res.json()) as PokemonDetails;

	return data;
};
