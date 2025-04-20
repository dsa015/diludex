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
export type EvolutionTrigger = {
	name: string;
	url: string;
};

export type EvolutionDetails = {
	gender: number | null;
	held_item: string | null;
	item: {
		name: string;
		url: string;
	} | null;
	known_move: string | null;
	known_move_type: string | null;
	location: string | null;
	min_affection: number | null;
	min_beauty: number | null;
	min_happiness: number | null;
	min_level: number | null;
	needs_overworld_rain: boolean;
	party_species: string | null;
	party_type: string | null;
	relative_physical_stats: number | null;
	time_of_day: string;
	trade_species: string | null;
	trigger: EvolutionTrigger;
	turn_upside_down: boolean;
};

export type EvolutionSpecies = {
	name: string;
	url: string;
};

export type EvolutionChainNode = {
	evolution_details: EvolutionDetails[];
	evolves_to: EvolutionChainNode[];
	is_baby: boolean;
	species: EvolutionSpecies;
};

export type EvolutionChain = {
	baby_trigger_item: string | null;
	chain: EvolutionChainNode;
	id: number;
};

export const load: PageServerLoad = async ({ fetch, params }) => {
	const pokemonOriginName = params.name.split('-')[0];

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonOriginName}`);

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

	const evoData = await fetch(speciesData.evolution_chain.url);
	const evolutionChain = (await evoData.json()) as EvolutionChain;

	return { data, moveDetails, speciesData, abilityDetails, evolutionChain };
};
