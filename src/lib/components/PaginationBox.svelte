<script>
	import pokemonPageArt from '$lib/images/pokemonpageart.webp';
	import { LeftArrow, RightArrow } from '$lib';

	let { page = $bindable(), pageCount = $bindable() } = $props();
</script>

<div class="pagination">
	<LeftArrow bind:page bind:pageCount />
	<div style="background-image: url({pokemonPageArt})">
		<span>Page {page} of {pageCount}</span>
	</div>
	<RightArrow bind:page bind:pageCount />
</div>

<style>
	.pagination {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;
		gap: 2rem;
	}

	.pagination div {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2vw;
		border: 6px solid rgb(88, 89, 88);
		clip-path: var(--polygon-border);

		background-size: cover;
		background-position: 50%;
		background-repeat: no-repeat;
		padding: 1rem;
	}

	.pagination span {
		text-shadow:
			-1px -1px 0 #fff,
			1px -1px 0 #fff,
			-1px 1px 0 #fff,
			1px 1px 0 #fff;
	}
</style>
