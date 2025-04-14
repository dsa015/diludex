import type { ParamMatcher } from '@sveltejs/kit';

// this makes validations on slugs/params
// er en easy vei å validere parametere, slugs
export const match = ((param: string): boolean => {
	return param === 'pikachu' || param === 'charizard';
}) satisfies ParamMatcher;
