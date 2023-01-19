<script lang="ts">
	import type { ServerData } from '$lib/types';
	import Home from '$lib/comps/Home.svelte';
	import Stats from '$lib/comps/Stats.svelte';

	export let data: ServerData;
</script>

<Home />
<Stats {data} />
