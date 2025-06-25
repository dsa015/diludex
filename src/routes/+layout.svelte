<script lang="ts">
	import './global.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<!-- Fra layout -->
{@render children()}
