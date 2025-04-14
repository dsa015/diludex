<script lang="ts">
	import { filtered, toUpperCase } from '$lib/utils';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const subSet = data.pokemon.slice(0, 150);

	let val = $state('');
</script>

<h1>All Pokemon</h1>

<input type="text" placeholder="Search..." bind:value={val} />

<ul>
	{#each filtered(val, subSet) as result}
		<li>
			<a href="/pokemon/{result.name}">
				{toUpperCase(result.name)}
				<img src={result.image} alt={result.name} />
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		list-style: none;
		padding: 0;
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
</style>
