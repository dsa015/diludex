<script lang="ts">
	import { toUpperCase } from '$lib/utils';

	let { data } = $props();
</script>

<div id="abilities">
	<h3>Abilities</h3>
	{#each data.pokemon.abilities as ability}
		<p id="abilityName">
			{toUpperCase(ability.name)}

			{#if ability.isHidden}
				<span>(Hidden)</span>
			{/if}
		</p>
		<p>
			{ability.effectEntries.effect}
		</p>
		<p>
			{ability.flavourText}
		</p>
	{/each}
</div>

<style>
	h3 {
		font-size: x-large;
		font-weight: 400;
		margin-bottom: 0;
	}

	#abilities {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	#abilityName {
		font-size: larger;
		margin: 0;
	}
</style>
