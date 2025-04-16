<script lang="ts">
	import { toUpperCase } from '$lib/utils.js';
	import type { PageProps } from './$types';
	import PokemonInfoCard from '$lib/components/PokemonInfoCard.svelte';
	import MovePool from '$lib/components/MovePool.svelte';

	let { data }: PageProps = $props();

	const pokemonName = toUpperCase(data.data.name);
	const imgSrc = data.data.sprites.other['official-artwork'].front_default;
	const imgAndAlt = {
		src: imgSrc,
		alt: data.data.name
	};
</script>

<main>
	<a href="/">Go back</a>

	<h1>{pokemonName}</h1>

	<section>
		<div>
			<PokemonInfoCard {data} {imgAndAlt} />
		</div>
		<MovePool moves={data} />
	</section>
</main>

<style>
	h1 {
		margin-bottom: 0;
	}

	section div {
		display: flex;
		justify-content: space-between;
	}
</style>
