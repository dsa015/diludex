<script lang="ts">
	import { toUpperCase, typeWithColor } from '$lib/utils';

	let { moves } = $props();

	const subSet = moves.moveDetails.slice(0, 30);
</script>

<h2>Learnable moves</h2>

<table>
	<thead>
		<tr>
			<!-- <th>Learned at level</th> -->
			<th>Move</th>
			<!-- <th>Learn method</th> -->
			<th>Type</th>
			<th>Power</th>
			<th>PP</th>
			<th>Accuracy</th>
			<th>Damage class</th>
		</tr>
	</thead>
	<tbody>
		{#each subSet as move}
			<tr>
				<!-- <td>{move.level}</td> -->
				<td>{toUpperCase(move.name)}</td>
				<!-- <td>{move.learnMethod}</td> -->
				<td>
					<img src={typeWithColor(move.type.name).icon} alt={move.type.name} />{toUpperCase(
						move.type.name
					)}</td
				>
				<td>{move.power}</td>
				<td>{move.pp}</td>
				<td>{move.accuracy ? move.accuracy + '%' : '—'}</td>
				<td>{toUpperCase(move.damage_class.name)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 8px 12px;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}

	td img {
		width: 20px;
		height: 20px;
		padding-right: 10px;
		vertical-align: middle;
	}

	thead {
		background-color: #f2f2f2;
	}
</style>
