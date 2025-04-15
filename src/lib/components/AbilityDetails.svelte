<script lang="ts">
	import { toUpperCase } from '$lib/utils';

	let { data } = $props();
</script>

<div id="abilities">
	<h3>Abilities</h3>
	{#each data.data.abilities as ability}
		<p id="abilityName">
			{toUpperCase(ability.ability.name)}

			{#if ability.is_hidden}
				<span>(Hidden)</span>
			{/if}
		</p>
		<p>
			{#each data.abilityDetails as details}
				{#if details.name === ability.ability.name}
					{details.effect_entries.find((e: any) => e.language.name === 'en').effect}
				{/if}
			{/each}
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
