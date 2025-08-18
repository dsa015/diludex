<script lang="ts">
	import { PokemonInfoCard, MovePool } from '$lib';
	import type { PageProps } from './$types';
	import EvolutionChain from '$lib/components/EvolutionChain.svelte';
	import type { EvoChainAndImage, ImgAndAlt, Move } from '$lib/types';
	import { toUpperCase } from '$lib/utils';
	import { fetchPokemonMoves } from './moves';
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';
	import PokeBall from '$lib/components/PokeBall.svelte';

	let { data }: PageProps = $props();

	let isLoading = $state(false);

	const pokemonName = $derived(toUpperCase(data.pokemonDetail.pokemon.name));

	const imgSrc = $derived(
		data.pokemonDetail.pokemon.artwork.other['official-artwork'].front_default
	);
	const imgAndAlt: ImgAndAlt = $derived({
		src: imgSrc,
		alt: data.pokemonDetail.pokemon.name
	});

	let moveState = $state<Move[]>([]);

	const evolutionChainAndImage = data.pokemonDetail.evolution_chain.map((evo) => {
		const found = data.pokemonDataSet.find((pokemon) => pokemon.name === evo.name);
		return {
			name: evo.name,
			image: found?.normalImage
		} as EvoChainAndImage;
	});

	onMount(async () => {
		isLoading = true;
		const { moves } = await fetchPokemonMoves(pokemonName);

		moveState = moves;
		isLoading = false;
	});
</script>

<main>
	<h1>{pokemonName}</h1>
	<section>
		<div>
			<PokemonInfoCard data={data.pokemonDetail} {imgAndAlt} {evolutionChainAndImage} />
		</div>

		{#if data.pokemonDetail.pokemon_species.varieties.length > 1}
			<h1>Forms</h1>
			<ul>
				{#each data.pokemonDetail.pokemon_species.varieties as form}
					<li>
						<a href={`/pokemon/${form.pokemon.name}`}>
							{form.pokemon.name}
						</a>
					</li>
				{/each}
			</ul>
		{/if}

		<h1>Evolution chain</h1>

		{#if evolutionChainAndImage.length > 1}
			<div id="container">
				<EvolutionChain {evolutionChainAndImage} />
			</div>
		{:else}
			<p>This Pokémon does not evolve.</p>
		{/if}

		<MovePool {isLoading} moves={moveState} />
	</section>
</main>

<style>
	main {
		max-width: 1300px;
	}

	h1 {
		margin-bottom: 0;
		font-size: 3rem;
	}

	a {
		font-size: x-large;
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
		padding: 2rem;
	}

	@media screen and (max-width: 1100px) {
		section {
			display: flex;
			flex-direction: column;
			/* align-items: center; */
		}
		#container {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
