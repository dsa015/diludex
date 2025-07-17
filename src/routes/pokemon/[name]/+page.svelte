<script lang="ts">
	import { PokemonInfoCard, MovePool } from '$lib';
	import type { PageProps } from './$types';
	import EvolutionChain from '$lib/components/EvolutionChain.svelte';
	import type { EvoChainAndImage, ImgAndAlt } from '$lib/types';
	import { toUpperCase } from '$lib/utils';

	let { data }: PageProps = $props();

	const pokemonName = $derived(toUpperCase(data.pokemonDetail.pokemon.name));

	const imgSrc = $derived(
		data.pokemonDetail.pokemon.artwork.other['official-artwork'].front_default
	);
	const imgAndAlt: ImgAndAlt = $derived({
		src: imgSrc,
		alt: data.pokemonDetail.pokemon.name
	});

	const filteredPokemonByEvolution = data.pokemonDataSet.filter((pokemon) =>
		data.pokemonDetail.evolution_chain.some((evo) => evo.name === pokemon.name)
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
			<PokemonInfoCard data={data.pokemonDetail} {imgAndAlt} {evolutionChainAndImage} />
		</div>

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

		<h1>Evolution chain</h1>

		<div id="container">
			<EvolutionChain {evolutionChainAndImage} />
		</div>
		<MovePool moves={data.pokemonDetail.moves} />
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
		padding: 2rem;
	}

	@media screen and (max-width: 1100px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		#container {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
