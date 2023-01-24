<script lang="ts">
	import type { ServerData } from '$lib/types';
	import Home from '$lib/sections/Home.svelte';
	import Stats from '$lib/sections/Stats.svelte';
	import Features from '$lib/sections/Features.svelte';

	export let data: ServerData;
</script>

<Home />
<Stats {data} />
<Features />
