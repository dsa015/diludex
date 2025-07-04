<script lang="ts">
	let { page = $bindable(), pageCount = $bindable() } = $props();
</script>

<button
	onclick={() => {
		if (page <= 1) page = pageCount;
		else page--;
	}}
	aria-label="Previous page"
	disabled={pageCount <= 1}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 401.949 401.949"
		stroke="#fefefe"
		width="25"
		height="25"
	>
		<path
			d="M401.947 159.301c0-8.583-6.949-15.742-15.497-15.889H197.515c-7.021-1.589-12.309-7.886-12.309-15.369V78.976c0-8.675-5.397-11.163-11.993-5.535L4.948 190.735c-6.598 5.634-6.598 14.847 0 20.479l168.262 117.29c6.599 5.632 11.996 3.146 11.996-5.528v-49.067c0-8.673 7.097-15.771 15.771-15.771l185.201-.276c8.676-.004 15.771-7.101 15.771-15.771l-.002-82.79z"
		/>
	</svg>
</button>

<style>
	button {
		clip-path: var(--polygon-border);
		border: 6px solid rgb(88, 89, 88);
		z-index: 1;
	}

	button:hover {
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
