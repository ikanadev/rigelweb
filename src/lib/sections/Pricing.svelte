<script lang="ts">
	import SectionTitle from '$lib/comps/SectionTitle.svelte';
	import Icon from '@iconify/svelte';
</script>

<SectionTitle
	title="Precio"
	id="pricing"
	heading="Disfruta de nuestros planes anuales"
	description=""
/>
<section class="bg-neutral-50 dark:bg-dark pb-20">
	<div
		class="mx-auto max-w-2xl w-full px-4 grid gap-x-8 gap-y-4 grid-cols-1 sm:grid-cols-2 dark:text-white"
	>
		<div
			class="flex flex-col items-center px-6 py-8 shadow-xl dark:shadow-neutral-600 rounded-lg bg-white dark:bg-neutral-800"
		>
			<div class="text-neutral-500 mb-2">
				<Icon class="w-12 h-12" icon="material-symbols:app-shortcut" />
			</div>
			<p class="text-xl font-semibold text-neutral-700 dark:text-neutral-100 tracking-wider">
				ESTÁNDAR
			</p>
			<p class="text-4xl font-bold my-4 text-green-700 dark:text-green-500">0 Bs.</p>
			<div class="self-start">
				<ul class="list-disc ml-4">
					<li>Administración de estudiantes y materias</li>
					<li>Control de asistencias</li>
					<li>Control de actividades/tareas</li>
					<li>Reporte de asistencias trimestrales y anuales</li>
					<li>Reporte de notas trimestrales y anuales</li>
					<li>Hasta un máximo de <strong>4 cursos</strong></li>
				</ul>
			</div>
		</div>
		<div
			class="flex flex-col items-center px-6 py-8 shadow-xl shadow-primarylight dark:shadow-primary rounded-lg bg-primarydark text-white"
		>
			<div class="text-yellow-300 mb-2">
				<Icon class="w-12 h-12" icon="ic:round-star" />
			</div>
			<p class="text-xl font-semibold text-neutral-100 tracking-wider">PREMIUM</p>
			<p class="text-4xl font-bold my-4 text-neutral-300 dark:text-neutral-400 line-through">
				150 Bs.
			</p>
			<p
				class="text-4xl font-bold text-green-400 dark:text-green-500 leading-3 -translate-x-3 animate-bounce ease-out"
			>
				100 Bs.
			</p>
			<p class="text-sm font-bold my-4 italic translate-x-12 -translate-y-2 -rotate-12">
				¡Sólo por 2023!
			</p>
			<div class="self-start">
				<ul class="list-disc ml-4">
					<li>Todo lo incluido en el plan <strong>estándar</strong></li>
					<li>Hasta un máximo de <strong>25 cursos</strong></li>
				</ul>
			</div>
		</div>
	</div>
</section>
