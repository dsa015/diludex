<script lang="ts">
	let { moves } = $props();
</script>

<ul>
	{#each moves as move}
		<li>
			{move.name}
			<ul>
				<li>Power: {move.power}</li>
				<li>PP: {move.pp}</li>
			</ul>
		</li>
	{/each}
</ul>
