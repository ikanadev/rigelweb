<script lang="ts">
	import type { ServerData } from '$lib/types';
	export let data: ServerData;

	const numberToLiteral = (qtty: number) => {
		if (qtty <= 999) {
			return `${qtty}`;
		}
		if (qtty <= 999999) {
			return `+${Math.floor(qtty / 1000)}mil`;
		}
		return `+${Math.floor(qtty / 1000000)}millón`;
	};
</script>

<section class="bg-neutral-50 dark:bg-dark py-6 text-neutral-800 dark:text-white">
	<div class="container mx-auto grid gap-y-6 grid-cols-2 md:grid-cols-4">
		<div class="flex flex-col items-center">
			<p class="text-sm">Presente en</p>
			<p class="text-4xl font-bold text-primary">{numberToLiteral(data.stats.schools)}</p>
			<p class="text-2xl font-semibold">colegios</p>
		</div>
		<div class="flex flex-col items-center">
			<p class="text-sm">Usado por</p>
			<p class="text-4xl font-bold text-primary">{numberToLiteral(data.stats.teachers)}</p>
			<p class="text-2xl font-semibold">profesores</p>
		</div>
		<div class="flex flex-col items-center">
			<p class="text-sm">Usado en</p>
			<p class="text-4xl font-bold text-primary">{numberToLiteral(data.stats.classes)}</p>
			<p class="text-2xl font-semibold">cursos</p>
		</div>
		<div class="flex flex-col items-center">
			<p class="text-sm">Creadas</p>
			<p class="text-4xl font-bold text-primary">{numberToLiteral(data.stats.activities)}</p>
			<p class="text-2xl font-semibold">tareas</p>
		</div>
	</div>
</section>
