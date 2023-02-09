<script lang="ts">
	import { onMount } from 'svelte';
	import type { ServerData } from '$lib/types';

	const numberToLiteral = (qtty: number) => {
		if (qtty <= 999) {
			return `${qtty}`;
		}
		if (qtty <= 999999) {
			return `+${Math.floor(qtty / 1000)}mil`;
		}
		return `+${Math.floor(qtty / 1000000)}millón`;
	};

	async function getStats() {
		const url = `${import.meta.env.VITE_API_URL}stats`;
		const res = await fetch(url);
		if (res.ok) {
			const resJson = await res.json();
			return resJson as ServerData;
		} else {
			throw new Error('Failed to fetch stats');
		}
	}
	let stats = getStats();
</script>

<section class="bg-neutral-50 dark:bg-dark pt-8 text-neutral-800 dark:text-white">
	{#await stats}
		<div>
			<p class="italic font-semibold text-lg animate-pulse text-center">Cargando estadísticas...</p>
		</div>
	{:then data}
		<div class="container mx-auto grid gap-y-8 grid-cols-2 md:grid-cols-4">
			<div class="flex flex-col items-center">
				<p class="text-sm">Presente en</p>
				<p class="text-3xl md:text-4xl font-bold text-primary leading-8">
					{numberToLiteral(data.stats.schools)}
				</p>
				<p class="text-xl md:text-2xl font-semibold">colegios</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-sm">Usado por</p>
				<p class="text-3xl md:text-4xl font-bold text-primary leading-8">
					{numberToLiteral(data.stats.teachers)}
				</p>
				<p class="text-xl md:text-2xl font-semibold">profesores</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-sm">Usado en</p>
				<p class="text-3xl md:text-4xl font-bold text-primary leading-8">
					{numberToLiteral(data.stats.classes)}
				</p>
				<p class="text-xl md:text-2xl font-semibold">cursos</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-sm">Creadas</p>
				<p class="text-3xl md:text-4xl font-bold text-primary leading-8">
					{numberToLiteral(data.stats.activities)}
				</p>
				<p class="text-xl md:text-2xl font-semibold">tareas</p>
			</div>
		</div>
	{/await}
</section>
