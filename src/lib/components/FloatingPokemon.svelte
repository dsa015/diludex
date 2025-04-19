<script lang="ts">
	import { onMount } from 'svelte';
	import type { Pokemons } from '../../routes/+page.server';

	let { pokemonDataSet } = $props();

	onMount(() => {
		const floatingPokemon = document.querySelector('.floatingPokemon');
		pokemonDataSet.slice(0, 50).map((pokemon: Pokemons) => {
			const img = document.createElement('img');
			img.ariaHidden = 'true';
			img.src = pokemon.normalImage;
			img.classList.add('floating-pokemon');
			img.style.position = 'absolute';
			img.style.top = `${Math.random() * 100}vh`;
			img.style.left = `${Math.random() * 80}vw`;
			img.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
			img.style.pointerEvents = 'none';
			floatingPokemon?.appendChild(img);
			return img;
		});
	});
</script>

<div aria-hidden="true" class="floatingPokemon"></div>
