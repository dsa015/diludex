<script lang="ts">
	import { toUpperCase } from '$lib/utils';
	let { data } = $props();

	const hectogramToKg = (weight: number) => {
		return weight / 10;
	};
	const decimetreToMeter = (height: number) => {
		return height / 10;
	};
</script>

<ul id="stats">
	<li>
		<span> Pokemon ID: </span>
		<span>
			#{data.data.id}
		</span>
	</li>
	<li>
		<span>Height: </span>
		<span>
			{decimetreToMeter(data.data.height)} M
		</span>
	</li>
	<li>
		<span>Weight: </span>
		<span>
			{hectogramToKg(data.data.weight)} Kg
		</span>
	</li>

	<li>
		<span>Color:</span>
		<span>{toUpperCase(data.speciesData.color.name)}</span>
	</li>
</ul>

<style>
	#stats {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		list-style: none;
		padding: 0;
		gap: 1rem;
		font-size: large;
	}

	#stats li {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem;
		border-bottom: 1px solid #ccc;
	}
</style>
