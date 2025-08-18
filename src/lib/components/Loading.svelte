<script lang="ts">
	import PokeBall from './PokeBall.svelte';
	let { isLoading }: { isLoading?: boolean } = $props();
</script>

<div>
	<PokeBall {isLoading} />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
