import type { MoveResponse } from '$lib/types';

export const fetchPokemonMoves = async (name: string) => {
	const response = await fetch(`/api/pokemon/${name}/moves`);

	if (!response.ok) {
		throw new Error('Failed to fetch Pokémon moves');
	}

	const res = (await response.json()) as MoveResponse;

	return {
		moves: res.data,
		totalRecords: res.total_records,
		totalPages: res.total_pages,
		currentPage: res.current_page,
		nextPage: res.next_page,
		prevPage: res.prev_page
	};
};
