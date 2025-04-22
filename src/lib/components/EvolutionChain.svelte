<script>
	import { toUpperCase } from '$lib/utils';
	let { d, evolutionNames, evo } = $props();
</script>

<div class="evolutionChain">
	<img src={d.sprites} alt="" />
	<span>
		{toUpperCase(evo.name ?? '')}
	</span>
</div>

{#if d.name !== evolutionNames[evolutionNames.length - 1].name}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 401.948 401.949"
		stroke="#fefefe"
		width="25"
		height="25"
	>
		<path
			d="M397 190.734 228.738 73.444c-6.599-5.632-11.996-3.147-11.996 5.528v49.068c0 8.672-7.099 15.77-15.77 15.77l-104.176.156H15.69v.125C7.051 144.139.002 151.214 0 159.857l.002 82.789c0 8.673 7.095 15.771 15.765 15.771l183.426-.275h1.834c8.647.028 15.717 7.107 15.717 15.765v49.067c0 8.675 5.397 11.163 11.993 5.535l168.265-117.294c6.596-5.636 6.596-14.848-.002-20.481z"
		/>
	</svg>
{/if}

<style>
	.evolutionChain {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		background: rgb(213, 203, 203);
		padding: 3rem;
		flex-direction: column;
		align-items: center;
		border-radius: 1rem;
	}

	.evolutionChain span {
		font-size: x-large;
	}

	img {
		width: 100px;
		height: 100px;
	}
</style>
