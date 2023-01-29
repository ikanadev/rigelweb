<script lang="ts">
	import type { ServerData } from '$lib/types';
	import Home from '$lib/sections/Home.svelte';
	import Stats from '$lib/sections/Stats.svelte';
	import Features from '$lib/sections/Features.svelte';
	import Screenshots from '$lib/sections/Screenshots.svelte';
	import Installation from '$lib/sections/Installation.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import { APP_NAME } from '$lib/constants';
	import { base } from '$app/paths';

	export let data: ServerData;
</script>

<svelte:head>
	<title>{APP_NAME}, la WebApp de los profesores</title>
	<meta
		name="description"
		content="{APP_NAME}, la Aplicación Web pensada para los profesores que ayuda con el control de asistencias, registro de notas y reportes trimestrales en el nivel secundario."
	/>
	<meta
		name="keywords"
		content="profesor, clases, notas, colegio, estudiante, asistencia, secundaria, educación, docente, trimestre, escolar, Bolivia, Avelino Siñani"
	/>
	<!-- Open Graph meta tags -->
	<meta property="og:image" content="{base}/openGraphBanner.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="343" />
	<meta property="og:image:height" content="160" />
	<meta property="og:title" content="{APP_NAME}, la WebApp de los profesores." />
	<meta
		property="og:description"
		content="{APP_NAME} te ayuda con el control de asistencias, registro de notas, reportes trimestrales/anuales y mucho más."
	/>
</svelte:head>
<Home />
<Stats {data} />
<Features />
<Screenshots />
<Installation />
<Pricing />
