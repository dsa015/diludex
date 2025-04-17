<script lang="ts">
	import { filtered, toUpperCase } from '$lib/utils';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let val = $state('');
</script>

<header>
	<h1>PokéScope</h1>
	<input type="text" placeholder="Search..." bind:value={val} />
</header>

<main>
	{#if filtered(val, data.pokemonDataSet).length === 0}
		<p>Pokémon not found ...</p>
	{/if}
	<ul>
		{#each filtered(val, data.pokemonDataSet) as result}
			<li>
				<a href="/pokemon/{result.name}">
					<span>
						{toUpperCase(result.name)}
					</span>
					<img src={result.image} alt={result.name} loading="lazy" />
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 1rem;
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

	main {
		display: flex;
		flex-direction: column;
	}

	ul {
		padding-left: 0;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
	}

	li {
		margin: 0.5rem;
		padding: 0.5rem;
		border-radius: 4px;
		background-color: #f9f9f9;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	li a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: black;
	}

	li a:hover img {
		transform: scale(1.1);
		transition: transform 0.2s;
	}
	li img {
		width: 100px;
		height: 100px;
		transition: transform 0.2s;
	}

	a span {
		text-align: center;
	}
</style>
