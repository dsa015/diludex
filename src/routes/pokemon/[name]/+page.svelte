<script lang="ts">
	import { PokemonInfoCard, MovePool } from '$lib';
	import { toUpperCase } from '$lib/utils.js';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import type { EvolutionChainNode } from './+page.server';

	let { data }: PageProps = $props();

	const pokemonName = toUpperCase(data.data.name);
	const imgSrc = data.data.sprites.other['official-artwork'].front_default;
	const imgAndAlt = {
		src: imgSrc,
		alt: data.data.name
	};

	type evo = {
		name: string | null;
		miniumLevel: (number | null)[];
		levelMethod: (string | null)[];
		item: (string | undefined)[];
	}[];

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

	let detail = $state() as {
		name: string;
		sprites: string;
	}[];

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
		<div id="container">
			<h1>Evolution chain</h1>
			{#each evolutionNames as evo}
				{#each detail as d}
					{#if d.name === evo.name}
						<div class="evolutionChain">
							<span>
								<span>
									{toUpperCase(evo.name ?? '')}
								</span>
							</span>
							<img src={d.sprites} alt="" />
						</div>
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

	.evolutionChain {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		gap: 5rem;
		justify-content: center;
	}

	.evolutionChain span {
		font-size: x-large;
	}

	#container {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		border: 2px solid black;
		border-radius: 1rem;
		padding: 2rem;
	}

	img {
		width: 100px;
		height: 100px;
	}
</style>
