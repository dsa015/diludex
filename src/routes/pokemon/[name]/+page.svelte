<script lang="ts">
	import { toUpperCase } from '$lib/utils.js';

	toUpperCase;
	let { data } = $props();

	const imgSrc =
		data.pokemon.sprites.other['official-artwork' as keyof typeof data.pokemon.sprites.other]
			.front_default;

	const pokemonName = toUpperCase(data.pokemon.name);
</script>

<a href="/">Go back</a>

<h1>{pokemonName}</h1>
<p>ID: {data.pokemon.id}</p>
<p>{data.description}</p>
<p>Height: {data.pokemon.height}</p>
<p>Weight: {data.pokemon.weight}</p>
<h2>Abilities:</h2>
<ul>
	{#each data.pokemon.abilities as ability}
		<li>{ability.ability.name} (Slot: {ability.slot})</li>
	{/each}
</ul>
<img src={imgSrc} alt={data.pokemon.name} />
