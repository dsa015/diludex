import { error } from '@sveltejs/kit';

type FlavourText = {
	flavor_text: string;
	language: {
		name: string;
		url: string;
	};
	version: {
		name: string;
		url: string;
	};
};

type Species = {
	flavor_text_entries: FlavourText[];
};

const engDescription = (species: Species) => {
	const englishDescription = species.flavor_text_entries.find(
		(entry) => entry.language.name === 'en'
	);
	return englishDescription;
};

export const load = async ({ fetch, params, data }) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.name}`);

	if (!res.ok) {
		throw error(res.status, 'Failed to fetch');
	}

	const species = (await res.json()) as Species;

	return {
		pokemon: data.data,
		description: engDescription(species)?.flavor_text
	};
};
