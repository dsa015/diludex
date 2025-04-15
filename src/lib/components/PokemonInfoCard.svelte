<script lang="ts">
	import { images } from '$lib/images';
	import { pokemonTypeColor } from '$lib/pokemonTypeColor';
	import { toUpperCase } from '$lib/utils';
	import AbilityDetails from './AbilityDetails.svelte';
	import PokemonStats from './PokemonStats.svelte';

	let { data, imgAndAlt } = $props();

	const typeWithColor = (type: string) => {
		const color = pokemonTypeColor[type as keyof typeof pokemonTypeColor];
		const image = images[type as keyof typeof images];
		return {
			backgroundColor: color,
			icon: image
		};
	};

	const englishFlavorText = data.speciesData.flavor_text_entries.find(
		(entry: any) => entry.language.name === 'en'
	).flavor_text;
</script>

<div class="info">
	<ul class="type">
		{#each data.data.types as type}
			<li id="pokemonType">
				<img src={typeWithColor(type.type.name).icon} alt={type.type.name} />
				<p>
					{toUpperCase(type.type.name)}
				</p>
			</li>
		{/each}
	</ul>
	<h3>{toUpperCase(englishFlavorText)}</h3>

	<AbilityDetails {data} />
</div>

<div id="card">
	<p>{toUpperCase(data.data.name)}</p>
	<img id="picture" src={imgAndAlt.src} alt={imgAndAlt.alt} />
	<ul id="type">
		{#each data.data.types as type}
			<li id="pokemonType">
				<img src={typeWithColor(type.type.name).icon} alt={type.type.name} />
				<span>
					{toUpperCase(type.type.name)}
				</span>
			</li>
		{/each}
	</ul>
	<PokemonStats {data} />
</div>

<style>
	.info {
		max-width: 700px;
		width: 100%;
	}
	h3 {
		font-weight: 300;
	}
	#type {
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	#type span {
		color: white;
	}
	#card {
		border: 5px solid #5a5a5a;
		padding: 1rem;
		border-radius: 10px;
		text-align: center;
	}

	#card p {
		font-size: xx-large;
		margin-top: 0;
	}

	#card #picture {
		width: 350px;
		height: 350px;
		padding: 1rem;
		border: 1px solid black;
		border-radius: 5px;
	}

	.type {
		display: flex;
		gap: 1rem;
		padding: 0;
	}

	#pokemonType {
		padding: 0.5rem;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		max-width: 90px;
		max-height: 30px;
		background-color: #5a5a5a;
	}

	#pokemonType p {
		color: white;
	}

	#pokemonType img {
		width: 32px;
		height: 32px;
	}
</style>
