<script lang="ts">
	import { PokemonInfoCard, MovePool } from '$lib';
	import { toUpperCase } from '$lib/utils.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const pokemonName = toUpperCase(data.data.name);
	const imgSrc = data.data.sprites.other['official-artwork'].front_default;
	const imgAndAlt = {
		src: imgSrc,
		alt: data.data.name
	};
</script>

<main>
	<a href="/">PokéScope</a>

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
</style>
