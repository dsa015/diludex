<script lang="ts">
	import { pokemonTypeColor } from '$lib/pokemonTypeColor';
	import { toUpperCase } from '$lib/utils.js';
	import type { PageProps } from './$types';
	// import MovePool from '$lib/components/MovePool.svelte';

	let { data }: PageProps = $props();

	const pokemonName = toUpperCase(data.data.name);
	const imgSrc =
		data.data.sprites.other.dream_world.front_default ?? data.data.sprites.front_default;

	const typeWithColor = (type: string) => {
		return pokemonTypeColor[type as keyof typeof pokemonTypeColor];
	};
</script>

<a href="/">Go back</a>

<h1>{pokemonName}</h1>

<ul>
	{#each data.data.types as type}
		<li style={`background-color: ${typeWithColor(type.type.name)}`}>
			{toUpperCase(type.type.name)}
		</li>
	{/each}
</ul>

<p>ID: {data.data.id}</p>
<p>Height: {data.data.height}</p>
<p>Weight: {data.data.weight}</p>

<h2>Abilities:</h2>
<p>Abilities are special traits that give Pokémon unique powers.</p>

<h3>All moves</h3>

<!-- <MovePool moves={data.moveDetails} /> -->

<h3>Special moves</h3>
<ul>
	{#each data.data.abilities as ability}
		<li>{ability.ability.name}</li>
	{/each}
</ul>

<img src={imgSrc} alt={data.data.name} />

<style>
	ul {
		display: flex;
		gap: 1rem;
		list-style: none;
	}

	li {
		padding: 0.5rem;
		border-radius: 0.5rem;
		min-width: 50px;
		text-align: center;
	}
</style>
