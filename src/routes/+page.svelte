<script lang="ts">
	import { filtered } from '$lib/utils';
	import { PaginationBox } from '$lib';
	import type { PageProps } from './$types';
	import PokemonList from '$lib/components/PokemonList.svelte';

	let { data }: PageProps = $props();

	let val = $state('');
	let page = $state(1);
	let pageSize = 18;
	let pageCount = $state(Math.ceil(data.pokemonDataSet.length / pageSize));

	function filterPageCount() {
		const filteredData = filtered(val, data.pokemonDataSet);
		pageCount = Math.ceil(filteredData.length / pageSize);
	}

	$effect(() => {
		filterPageCount();
		if (page > pageCount) {
			page = 1;
		}
	});
</script>

<!-- <FloatingPokemon pokemonDataSet={data.pokemonDataSet} /> -->

<main>
	<header>
		<h1>DiluDex</h1>
		<div></div>
		<input type="text" placeholder="Search pokemon..." bind:value={val} />
		{#if filtered(val, data.pokemonDataSet).length === 0}
			<p>Pokémon not found ...</p>
		{/if}
	</header>

	<article>
		<PaginationBox bind:page bind:pageCount />
		<div class="pokemon-list">
			<PokemonList {val} {data} {page} {pageSize} />
		</div>
	</article>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	article {
		max-width: 55rem;
		width: 100%;
	}

	input {
		z-index: 1;
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		font-size: 16px;
		width: 100%;
		max-width: 20rem;
	}

	h1 {
		color: black;
		font-size: 7vw;
	}

	.pokemon-list {
		position: relative;
	}

	.pokemon-list::after {
		content: '';
		position: absolute;
		inset: -6px;
		z-index: -1;
		background: rgb(88, 89, 88);
		clip-path: var(--polygon-border);
	}
</style>
