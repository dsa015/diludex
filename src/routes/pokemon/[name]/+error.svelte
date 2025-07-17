<script>
	import whosThatPokemon from '$lib/images/whos_that_pokemon.png';
	import { page } from '$app/state';
</script>

<div>
	<h1>Oops! Something went wrong...</h1>
	<h2>Code: {`${page.status} ${page.error?.message}`}</h2>
	<p>
		It seems like the Pokémon you are looking for does not exist or there was an error gettings its
		details.
	</p>
	<a href="/">Back to homepage</a>
	<div>
		<img src={whosThatPokemon} alt="who is that pokemon?" />
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	img {
		width: 100%;
		height: auto;
	}

	p {
		font-size: x-large;
	}

	a {
		font-size: x-large;
	}
</style>
