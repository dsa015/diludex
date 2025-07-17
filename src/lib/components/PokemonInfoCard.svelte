<script lang="ts">
	import type { EvoChainAndImage, ImgAndAlt, PokemonDetails, PokemonType } from '$lib/types';
	import { toUpperCase, typeWithColor } from '$lib/utils';
	import AbilityDetails from './AbilityDetails.svelte';
	import PokemonStats from './PokemonStats.svelte';

	let {
		data,
		imgAndAlt,
		evolutionChainAndImage
	}: { data: PokemonDetails; imgAndAlt: ImgAndAlt; evolutionChainAndImage: EvoChainAndImage[] } =
		$props();

	const englishFlavorText = data.pokemon_species.flavor_text_entries.find(
		(entry: any) => entry.language.name === 'en'
	)!!.flavor_text;

	const typeFormatter = (type: PokemonType[]) => {
		if (type.length > 1) {
			return type.map((t: any) => toUpperCase(t.type.name)).join('/');
		} else {
			return toUpperCase(type[0].type.name);
		}
	};

	const hectogramToKg = (weight: number) => {
		return weight / 10;
	};
	const decimetreToMeter = (height: number) => {
		return height / 10;
	};

	let isPlayingAudio = $state(false);

	function playPokemonCry() {
		if (isPlayingAudio) return;
		isPlayingAudio = true;
		const audio = new Audio(data.pokemon.cries.latest);
		audio.play();
		audio.onended = () => {
			isPlayingAudio = false;
		};
	}

	const currentEvolution = evolutionChainAndImage.find((evo) => evo.name === data.pokemon.name);

	const previousEvolution =
		currentEvolution &&
		evolutionChainAndImage[evolutionChainAndImage.indexOf(currentEvolution) - 1];
</script>

<div id="pokemonInfoCard">
	<article class="info">
		<ul class="type">
			{#each data.pokemon.pokemonType as type}
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
	</article>

	<section
		id="card"
		style="background-color: {typeWithColor(data.pokemon.pokemonType[0].type.name).backgroundColor}"
	>
		<div class="name">
			{#if previousEvolution}
				<img
					src={previousEvolution.image}
					alt="previous evolution of pokemon"
					id="previousEvolution"
				/>
			{/if}
			<span>{toUpperCase(data.pokemon.name)}</span>
			<div>
				<button disabled={isPlayingAudio} onclick={playPokemonCry}> Play latest cry! </button>
			</div>
			<div>
				{#each data.pokemon.pokemonType as type}
					<img src={typeWithColor(type.type.name).icon} alt={type.type.name} />
				{/each}
			</div>
		</div>
		<img id="picture" src={imgAndAlt.src} alt={imgAndAlt.alt} />

		<div>
			<div id="cardPokemonStats">
				<span>NO.{data.pokemon.id}</span>
				<span>
					{typeFormatter(data.pokemon.pokemonType)} Pokemon.
				</span>
				<span>{decimetreToMeter(data.pokemon.height)}M,</span>
				<span>{hectogramToKg(data.pokemon.weight)}Kg</span>
			</div>
		</div>

		<PokemonStats {data} />
	</section>
</div>

<style>
	.name {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.name span {
		font-family: sans-serif;
		font-size: 20px;
		font-weight: bold;
	}
	.name img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Shadow for depth */
	}

	#cardPokemonStats {
		font-weight: bold;
		font-style: italic;
		font-family: sans-serif;
		font-size: small;
		max-width: fit-content;
		background: linear-gradient(to right, #c18b2e, #fcf6ba, #efd293, #fbf5b7, #c18b2e);
		padding: 5px;
	}

	.info {
		width: 100%;
	}
	h3 {
		font-weight: 300;
	}

	#card {
		border: 20px solid gold;
		padding: 1rem;
		border-radius: 10px;
		text-align: center;
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#card #picture {
		padding: 1rem;
		margin-bottom: 10px;
		padding: 0;
		border: 7px solid transparent; /* Set the border width */
		border-image: linear-gradient(to left, #e8b864, #fcf6ba, #efd293, #fbf5b7, #e8b864);
		border-image-slice: 1;
		border-radius: 5px;

		/* background: linear-gradient(to bottom, #e07474, #72716e, #4e4d4d, #e07474, #4e4d4d); */
		background-color: white;
		width: 100%;
		height: auto;
	}

	#card #previousEvolution {
		width: 60px;
		height: 60px;
		position: absolute;
		border: 4px solid rgb(0, 0, 0);
		background-color: rgb(255, 255, 255);
		border-radius: 70px;
		left: 0px;
		top: 50px;
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

	#pokemonInfoCard {
		display: flex;
		gap: 5rem;
	}

	@media screen and (max-width: 1300px) {
		#pokemonInfoCard {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
