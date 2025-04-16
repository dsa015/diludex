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
	names: {
		name: string;
		language: {
			name: string;
			url: string;
		};
	}[];
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
};

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.name}`);

	const data = (await res.json()) as Pokemon;
	const speciesData = (await species.json()) as Species;

	// this takes a while to load
	const moveDetails = await Promise.all(
		data.moves.map(async (move) => {
			const res = await fetch(move.move.url);
			const moveData = await res.json();
			return moveData as Move;
		})
	);

	const abilityDetails = await Promise.all(
		data.abilities.map(async (ability) => {
			const res = await fetch(ability.ability.url);
			const abilityData = await res.json();
			return abilityData as AbilityDetails;
		})
	);

	return { data, moveDetails, speciesData, abilityDetails };
};
