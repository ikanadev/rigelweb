<script lang="ts">
	import Home from '$lib/sections/Home.svelte';
	// import Stats from '$lib/sections/Stats.svelte';
	import Features from '$lib/sections/Features.svelte';
	import Screenshots from '$lib/sections/Screenshots.svelte';
	import Installation from '$lib/sections/Installation.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import { APP_NAME } from '$lib/constants';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{APP_NAME}</title>
	<meta
		name="description"
		content="{APP_NAME} Control de asistencias, registro de notas, administración de estudiantes, materias, reportes trimestrales y mucho más." />
	<meta
		name="keywords"
		content="profesor, clases, notas, colegio, estudiante, asistencia, secundaria, educación, docente, trimestre, escolar, Bolivia, Avelino Siñani" />
	<!-- Open Graph meta tags -->
	<meta property="og:image" content="{$page.url.origin}/openGraphBanner.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="290" />
	<meta property="og:image:height" content="156" />
	<meta property="og:title" content="{APP_NAME}, una manera sencilla de administrar tus clases." />
	<meta
		property="og:description"
		content="{APP_NAME} te ayuda con el control de asistencias, registro de notas, reportes trimestrales/anuales y mucho más." />
</svelte:head>
<Home />
<!--
<Stats />
-->
<Features />
<Screenshots />
<Installation />
<Pricing />
