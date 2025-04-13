<script lang="ts">
	import { toUpperCase } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { Pokemon } from './pokemon/[name]/+page.server';

	type NamedApiResourseList = {
		count: number;
		next: string | null;
		previous: string | null;
		results: {
			name: string;
			url: string;
		}[];
	};

	let allPokemon = [] as Pokemon[]; // Store all loaded Pokémon
	let nextUrl: string | null = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`; // Start with the first batch
	let isLoading = false; // Prevent multiple simultaneous fetches
	let observer: IntersectionObserver; // Intersection Observer instance
	let sentinel: HTMLElement; // The element to observe

	// Function to fetch the next batch of Pokémon
	async function loadMorePokemon() {
		if (!nextUrl || isLoading) return; // Stop if there's no next URL or already loading
		isLoading = true;

		const res = await fetch(nextUrl);
		const data = (await res.json()) as NamedApiResourseList;

		// Fetch details for each Pokémon in the current batch
		const pokemonPromises = data.results.map(async (pokemon) => {
			const res = await fetch(pokemon.url);
			return res.json();
		});
		const newPokemon = await Promise.all(pokemonPromises);

		// Append the new Pokémon to the existing list
		allPokemon = [...allPokemon, ...newPokemon];
		nextUrl = data.next; // Update the next URL
		isLoading = false;
	}

	// Set up the Intersection Observer
	onMount(() => {
		loadMorePokemon();
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isLoading) {
						loadMorePokemon();
					}
				});
			},
			{
				root: null, // Use the viewport as the root
				rootMargin: '0px',
				threshold: 1.0 // Trigger when the sentinel is fully visible
			}
		);

		if (sentinel) {
			observer.observe(sentinel); // Start observing the sentinel element
		}

		return () => {
			if (observer && sentinel) {
				observer.unobserve(sentinel); // Cleanup observer on destroy
			}
		};
	});
</script>

<h1>All Pokemon</h1>

<ul>
	{#each allPokemon as result}
		<li>
			<a href="/pokemon/{result.name}">
				{toUpperCase(result.name)}
				<img src={result.sprites.front_default} alt={result.name} />
			</a>
		</li>
	{/each}
</ul>

<!-- Sentinel element for Intersection Observer -->
<div bind:this={sentinel} style="height: 1px;"></div>

{#if isLoading}
	<p>Loading more Pokémon...</p>
{/if}

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		list-style: none;
	}

	li img {
		width: 100px;
		height: 100px;
	}

	li a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: black;
	}

	li a:hover {
		text-decoration: underline;
	}
</style>
