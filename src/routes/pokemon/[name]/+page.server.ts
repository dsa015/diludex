import type { PokemonDetails } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`https://bff-diludex.dilu.dev/api/v1/pokemon/${params.name}`);

	const data = (await res.json()) as PokemonDetails;

	return data;
};
