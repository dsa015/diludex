<script lang="ts">
	import { filtered, toUpperCase } from '$lib/utils';
	import type { PageProps } from './$types';
	import { PaginationBox } from '$lib';

	let { data }: PageProps = $props();

	let val = $state('');
	let page = $state(1);
	let pageSize = 18;
	let pageCount = $state(Math.ceil(data.pokemonDataSet.length / pageSize));
</script>

<!-- <FloatingPokemon pokemonDataSet={data.pokemonDataSet} /> -->

<main>
	<header>
		<h1>DiluDex</h1>
		<input type="text" placeholder="Search..." bind:value={val} />
	</header>
	{#if filtered(val, data.pokemonDataSet).length === 0}
		<p>Pokémon not found ...</p>
	{/if}

	<article>
		<PaginationBox bind:page bind:pageCount />
		<div class="pokemon-list">
			<ul>
				{#each filtered(val, data.pokemonDataSet).slice((page - 1) * pageSize, page * pageSize) as pokemon}
					<li>
						<a href={`/pokemon/${pokemon.name}`}>
							<img src={pokemon.normalImage} alt={pokemon.name} />
							<span>{toUpperCase(pokemon.name)}</span>
						</a>
					</li>
				{/each}
			</ul>
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
	}

	h1 {
		color: black;
		font-size: 7vw;
	}

	input {
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		font-size: 16px;
		width: 100%;
		max-width: 20rem;
	}

	ul {
		min-height: 470px;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		border-radius: 8px;
		background-color: rgb(123, 228, 109);
		border-left: 10px solid rgb(188, 247, 180);
		border-top: 10px solid rgb(188, 247, 180);
		border-bottom: 10px solid rgb(104, 154, 98);
		border-right: 10px solid rgb(104, 154, 98);
		clip-path: var(--polygon-border);
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

	li {
		margin: 0.5rem;
		padding: 0.5rem;
	}
	li a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: black;
	}

	li a:hover img {
		animation: snapUpDown 0.35s infinite;
	}
	li img {
		width: 100px;
		height: 100px;
	}

	a span {
		text-align: center;
	}

	@keyframes snapUpDown {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
