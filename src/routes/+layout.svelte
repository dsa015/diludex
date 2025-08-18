<script lang="ts">
	import './global.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<nav>
	<a href="/">Diludex</a>
</nav>

<!-- Fra layout -->
{@render children()}

<style>
	a {
		font-size: xx-large;
		text-decoration: none;
		color: black;
		font-weight: 700;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
