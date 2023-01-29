<script lang="ts">
	import type { ServerData } from '$lib/types';
	import Home from '$lib/sections/Home.svelte';
	import Stats from '$lib/sections/Stats.svelte';
	import Features from '$lib/sections/Features.svelte';
	import Screenshots from '$lib/sections/Screenshots.svelte';
	import Installation from '$lib/sections/Installation.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';

	export let data: ServerData;
</script>

<Home />
<Stats {data} />
<Features />
<Screenshots />
<Installation />
<Pricing />
