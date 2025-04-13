type Abilities = {
	is_hidden: boolean;
	slot: number;
	ability: {
		name: string;
		url: string;
	};
};

type Sprites = {
	front_default: string;
	front_shiny: string;
	other: {
		dream_world: {
			front_default: string;
		};
	};
};

export type Pokemon = {
	id: number;
	name: string;
	weight: number;
	height: number;
	abilities: Abilities[];
	sprites: Sprites;
};

export const load = async ({ fetch, params }) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

	const data = (await res.json()) as Pokemon;
	return { data };
};
