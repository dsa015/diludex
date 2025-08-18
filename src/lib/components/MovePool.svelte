<script lang="ts">
	import type { Move } from '$lib/types';
	import { toUpperCase, typeWithColor } from '$lib/utils';
	import Loading from './Loading.svelte';

	let { moves, isLoading }: { moves: Move[]; isLoading?: boolean } = $props();
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
		{#if isLoading}
			<Loading {isLoading} />
		{/if}
		{#each moves as move}
			<tr>
				<!-- <td>{move.level}</td> -->
				<td>{toUpperCase(move.name)}</td>
				<!-- <td>{move.learnMethod}</td> -->
				<td>
					<img src={typeWithColor(move.type.name).icon} alt={move.type.name} />{toUpperCase(
						move.type.name
					)}</td
				>
				<td>{move.power ?? '—'}</td>
				<td>{move.pp}</td>
				<td>{move.accuracy ? move.accuracy + '%' : '—'}</td>
				<td>{toUpperCase(move.damage_class.name)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	h2 {
		font-size: 48px;
	}
	table {
		background-color: white;
		margin-bottom: 2rem;
		border-radius: 8px;
		height: 450px;
	}

	thead {
		background-color: #f2f2f2;
	}

	tbody {
		display: block;
		height: 100%;
		overflow-y: auto;
	}

	tr {
		display: table;
		table-layout: fixed;
		width: 100%;
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
</style>
