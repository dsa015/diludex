<script lang="ts">
	import { filtered, toUpperCase } from '$lib/utils';

	let { val, data, page, pageSize } = $props();
</script>

<ul>
	{#each filtered(val, data.pokemonDataSet).slice((page - 1) * pageSize, page * pageSize) as pokemon (pokemon.name)}
		<li class="pop-animate">
			<a href={`/pokemon/${pokemon.name}`}>
				<img src={pokemon.normalImage} alt={pokemon.name} />
				<span>{toUpperCase(pokemon.name)}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		min-height: 470px;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		border-radius: 8px;
		background-color: rgb(123, 228, 109);
		border-left: 10px solid rgb(188, 247, 180);
		border-top: 10px solid rgb(188, 247, 180);
		border-bottom: 10px solid rgb(104, 154, 98);
		border-right: 10px solid rgb(104, 154, 98);
		clip-path: var(--polygon-border);
	}

	li {
		margin: 0.5rem;
		padding: 0.5rem;
	}
	li a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: black;
	}

	li a:hover img {
		animation: snapUpDown 0.35s infinite;
	}
	li img {
		width: 100px;
		height: 100px;
	}

	a span {
		text-align: center;
	}

	@keyframes snapUpDown {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes pop {
		0% {
			transform: scale(0.5);
			opacity: 0.2;
		}
		50% {
			transform: scale(1.1);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	.pop-animate {
		animation: pop 0.3s;
	}
</style>
