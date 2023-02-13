<script lang="ts">
	import { APP_NAME } from '$lib/constants';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	export let data: PageData;
	const { class_data, class_periods, students } = data;
	console.log(data);
	let showScores = true;
	function toggleShowScores() {
		showScores = !showScores;
	}
</script>

<svelte:head>
	<title>{class_data.grade.name} - {class_data.subject.name}</title>
	<meta
		name="description"
		content="{APP_NAME}: Planilla {class_data.grade.name} '{class_data.parallel}'"
	/>
	<meta
		name="keywords"
		content="profesor, clases, notas, colegio, estudiante, asistencia, secundaria, educación, docente, trimestre, escolar, Bolivia, Avelino Siñani"
	/>
	<!-- Open Graph meta tags -->
	<meta property="og:image" content="{base}/openGraphBanner.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="290" />
	<meta property="og:image:height" content="156" />
	<meta
		property="og:title"
		content="{APP_NAME}: Planilla {class_data.grade.name} '{class_data.parallel}'"
	/>
</svelte:head>

<main class="container mx-auto overflow-x-auto py-4">
	<h1 class="text-lg font-semibold text-center mb-2">
		Planilla {class_data.grade.name.toLowerCase()} paralelo "{class_data.parallel}"
	</h1>

	<div class="grid grid-cols-3 gap-4 mb-2">
		<div />
		<div class="flex justify-center font-semibold">
			<button
				class="py-0 px-2 border border-primary rounded-md rounded-r-none {showScores
					? 'bg-primary text-white'
					: 'bg-white text-primary'}"
				on:click={toggleShowScores}
				disabled={showScores}>Notas</button
			>
			<button
				class="py-0 px-2 border border-primary rounded-md rounded-l-none {!showScores
					? 'bg-primary text-white'
					: 'bg-white text-primarylight'}"
				on:click={toggleShowScores}
				disabled={!showScores}>Asistencias</button
			>
		</div>
		<div />
	</div>

	<div class="grid grid-cols-3 gap-4 text-sm">
		<div>
			<div>
				<strong class="font-semibold">Colegio:</strong>
				<span>{class_data.school.name}</span>
			</div>
			<div>
				<strong class="font-semibold">Municipio:</strong>
				<span>{class_data.municipio}</span>
			</div>
			<div>
				<strong class="font-semibold">Provincia:</strong>
				<span>{class_data.provincia} - {class_data.departamento}</span>
			</div>
		</div>
		<div>
			<div>
				<strong class="font-semibold">Materia:</strong>
				<span>{class_data.subject.name}</span>
			</div>
			<div>
				<strong class="font-semibold">Curso:</strong>
				<span>{class_data.grade.name}</span>
			</div>
			<div>
				<strong class="font-semibold">Paralelo:</strong>
				<span>{class_data.parallel}</span>
			</div>
		</div>
		<div>
			<div>
				<strong class="font-semibold">Profesor(a):</strong>
				<span>{class_data.teacher.last_name} {class_data.teacher.name}</span>
			</div>
			<div>
				<strong class="font-semibold">Gesti&oacute;n:</strong>
				<span>{class_data.year.value}</span>
			</div>
		</div>
	</div>
</main>
