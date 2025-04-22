<script lang="ts">
	import { PokemonInfoCard, MovePool } from '$lib';
	import { toUpperCase } from '$lib/utils.js';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import type { EvolutionChainNode } from './+page.server';
	import EvolutionChain from '$lib/components/EvolutionChain.svelte';

	type evo = {
		name: string | null;
		miniumLevel: (number | null)[];
		levelMethod: (string | null)[];
		item: (string | undefined)[];
	}[];

	type detail = {
		name: string;
		sprites: string;
	}[];

	let { data }: PageProps = $props();

	const pokemonName = toUpperCase(data.data.name);
	const imgSrc = data.data.sprites.other['official-artwork'].front_default;
	const imgAndAlt = {
		src: imgSrc,
		alt: data.data.name
	};

	const getEvolutionChain = (evolutionChain: EvolutionChainNode) => {
		const evolutions: evo = [
			{
				name: evolutionChain.species.name,
				miniumLevel: evolutionChain.evolution_details.map((detail) => detail.min_level) ?? null,
				levelMethod: evolutionChain.evolution_details.map((detail) => detail.trigger.name) ?? null,
				item: evolutionChain.evolution_details.map((detail) => detail.item?.name) ?? null
			}
		];

		for (const evolution of evolutionChain.evolves_to) {
			evolutions.push(...getEvolutionChain(evolution));
		}

		return evolutions;
	};

	const evolutionNames = getEvolutionChain(data.evolutionChain.chain);

	let detail = $state() as detail;

	onMount(async () => {
		const pokemonDetails = await Promise.all(
			evolutionNames.map(async (evo) => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${evo.name}`);
				return res.json();
			})
		);
		detail = pokemonDetails.map((evo) => {
			return {
				name: evo.name,
				sprites: evo.sprites.other['official-artwork'].front_default
			};
		});
	});
</script>

<main>
	<a href="/">PokéScope</a>

	<h1>{pokemonName}</h1>

	<section>
		<div>
			<PokemonInfoCard {data} {imgAndAlt} />
		</div>
		<h1>Evolution chain</h1>

		<div id="container">
			{#each evolutionNames as evo}
				{#each detail as d}
					{#if d.name === evo.name}
						<EvolutionChain {d} {evolutionNames} {evo} />
					{/if}
				{/each}
			{/each}
		</div>
		<MovePool moves={data} />
	</section>
</main>

<style>
	h1 {
		margin-bottom: 0;
		font-size: 3rem;
	}

	a {
		font-size: 3vw;
		text-decoration: none;
		color: black;
		font-weight: 700;
	}

	section div {
		display: flex;
		justify-content: space-between;
	}
	#container {
		display: flex;
		gap: 2rem;
		align-items: center;
		overflow-x: scroll;
	}
</style>
