<script lang="ts">
	import { PokemonInfoCard, MovePool } from '$lib';
	import { toUpperCase } from '$lib/utils.js';
	import type { PageProps } from './$types';
	import EvolutionChain from '$lib/components/EvolutionChain.svelte';
	import type { EvoChainAndImage } from '$lib/types';

	let { data }: PageProps = $props();

	const pokemonName = toUpperCase(data.pokemon.forms[0].name);
	const imgSrc = data.pokemon.artwork.other['official-artwork'].front_default;
	const imgAndAlt = {
		src: imgSrc,
		alt: data.pokemon.name
	};

	const filteredPokemonByEvolution = data.pokemonDataSet.filter((pokemon) =>
		data.evolution_chain.some((evo) => evo.name === pokemon.name)
	);

	const evolutionChainAndImage: EvoChainAndImage[] = filteredPokemonByEvolution.map((pokemon) => {
		return {
			name: pokemon.name,
			image: pokemon.normalImage
		};
	});
</script>

<main>
	<a href="/">Diludex</a>

	<h1>{pokemonName}</h1>

	<section>
		<div>
			<PokemonInfoCard {data} {imgAndAlt} />
		</div>
		<h1>Evolution chain</h1>

		<div id="container">
			<EvolutionChain {evolutionChainAndImage} />
		</div>
		<MovePool moves={data.moves} />
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
		justify-self: center;
		padding: 2rem;
	}
</style>
