import type { PageServerLoad } from './$types';

type Abilities = {
	is_hidden: boolean;
	slot: number;
	ability: {
		name: string;
		url: string;
	};
};

type AbilityDetails = {
	name: string;
	effect_entries: {
		effect: string;
		language: {
			name: string;
			url: string;
		};
	}[];
};

type Sprites = {
	front_default: string;
	front_shiny: string;
	other: {
		dream_world: {
			front_default: string;
		};
		'official-artwork': {
			front_default: string;
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

type VersionGroupDetails = {
	level_learned_at: number;
	move_learn_method: {
		name: string;
		url: string;
	};
	version_group: {
		name: string;
		url: string;
	};
};

type Moves = {
	move: {
		name: string;
		url: string;
	};
	version_group_details: VersionGroupDetails[];
};

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

export type Pokemon = {
	id: number;
	name: string;
	weight: number;
	height: number;
	abilities: Abilities[];
	sprites: Sprites;
	types: PokemonType[];
	moves: Moves[];
	cries: {
		latest: string;
		legacy: string;
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

type P = {
	abilities: Abilities[];
	base_experience: number;
	name: string;
	height: number;
	weight: number;
	cries: {
		latest: string;
		legacy: string;
	};
	pokemonType: PokemonType[];
	artwork: {
		front_default: string;
		other: {
			'official-artwork': {
				front_default: string;
				front_shiny: string;
			};
		};
	};
	forms: {
		name: string;
		url: string;
	}[];
};

type PokemonDetails = {
	pokemon: P;
	pokemon_species: Species;
	evolution_chain: {
		name: string;
	}[];
	moves: Move[];
};

export const load: PageServerLoad = async ({ fetch, params }) => {
	//const pokemonOriginName = params.name.split('-')[0];

	const res = await fetch(`https://bff-diludex.dilu.dev/api/v1/pokemon/${params.name}`);

	const data = (await res.json()) as PokemonDetails;

	return data;
};
