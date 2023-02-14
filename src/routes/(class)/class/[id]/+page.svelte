<script lang="ts">
	import { APP_NAME } from '$lib/constants';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	enum ScoresView {
		Detailed = 'Detailed',
		Area = 'Area',
		Period = 'Period'
	}

	export let data: PageData;
	const { class_data, class_periods, students } = data;
	let scoresView: ScoresView = ScoresView.Detailed;
	let showScores = true;
	let studentFilter = '';

	console.log(data);

	$: filteredStudents =
		studentFilter.trim() === ''
			? students
			: students.filter((student) => {
					let noSpacesName = `${student.name.toLowerCase().replace(/\s/g, '')}${student.last_name
						.toLowerCase()
						.replace(/\s/g, '')}`;
					return noSpacesName.includes(studentFilter.toLowerCase().replace(/\s/g, ''));
			  });

	function toggleShowScores() {
		showScores = !showScores;
	}
</script>

<svelte:head>
	<title>{class_data.grade.name} - {class_data.subject.name}</title>
	<meta
		name="description"
		content="{APP_NAME}: Planilla {class_data.grade.name} '{class_data.parallel}'" />
	<meta
		name="keywords"
		content="profesor, clases, notas, colegio, estudiante, asistencia, secundaria, educación, docente, trimestre, escolar, Bolivia, Avelino Siñani" />
	<!-- Open Graph meta tags -->
	<meta property="og:image" content="{$page.url.origin}/openGraphBanner.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="290" />
	<meta property="og:image:height" content="156" />
	<meta
		property="og:title"
		content="{APP_NAME}: Planilla {class_data.grade.name} '{class_data.parallel}'" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap"
		rel="stylesheet" />
</svelte:head>

<main class="container mx-auto py-4">
	<h1 class="text-lg font-semibold text-center mb-2">
		Planilla {class_data.grade.name.toLowerCase()} paralelo "{class_data.parallel}"
	</h1>

	<div class="grid grid-cols-3 gap-4 mb-2">
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

	<div class="grid grid-cols-3 gap-4 mb-2">
		<div />
		<div class="flex justify-center font-bold text-lg">
			<button
				class="py-0 px-2 border border-slate-500 rounded-md rounded-r-none {showScores
					? 'bg-slate-500 text-white'
					: 'bg-white text-slate-500'}"
				on:click={toggleShowScores}
				disabled={showScores}>Notas</button>
			<button
				class="py-0 px-2 border border-slate-500 rounded-md rounded-l-none {!showScores
					? 'bg-slate-500 text-white'
					: 'bg-white text-slate-500'}"
				on:click={toggleShowScores}
				disabled={!showScores}>Asistencias</button>
		</div>
		<div />
	</div>

	{#if showScores}
		<div class="flex justify-end items-center mb-4">
			<p>Buscar:</p>
			<input
				bind:value={studentFilter}
				placeholder="Nombre o apellido"
				class="border mr-4 ml-1 px-2 py-0.5 rounded bg-slate-100" />
			<p>Vista:</p>
			<select bind:value={scoresView} class="ml-1 bg-slate-200 py-0.5 px-2 font-semibold">
				<option value={ScoresView.Detailed}>Detallada</option>
				<option value={ScoresView.Area}>Por &Aacute;rea</option>
				<option value={ScoresView.Period}>Por Periodo</option>
			</select>
		</div>
	{:else}
		<div>Attendances controls</div>
	{/if}

	{#if showScores}
		<div id="table_container" class="relative overflow-x-auto pb-4">
			<table>
				<thead class="bg-neutral-100">
					<tr>
						<th
							rowspan={scoresView === ScoresView.Detailed
								? 3
								: scoresView === ScoresView.Area
								? 2
								: 1}
							class="sticky left-0 bg-neutral-100 whitespace-nowrap">
							Apellido(s) y nombre(s)
						</th>
						{#each class_periods as cp}
							<th
								class="bg-slate-500 text-xl font-bold text-white border-r-8 border-white"
								colspan={cp.areas.reduce((sum, area) => {
									if (scoresView === ScoresView.Period) return sum;
									if (scoresView === ScoresView.Area) return sum + 1;
									return sum + area.activities.length + 1;
								}, 0) + 1}>
								{cp.period.name}
							</th>
						{/each}
						<th
							rowspan={scoresView === ScoresView.Detailed
								? 3
								: scoresView === ScoresView.Area
								? 2
								: 1}
							colspan="2"
							class="bg-slate-800 text-white font-bold text-xl">
							NOTA FINAL
						</th>
					</tr>
					{#if scoresView === ScoresView.Detailed || scoresView === ScoresView.Area}
						<tr>
							{#each class_periods as cp}
								{#each cp.areas as area}
									<th
										colspan={scoresView === ScoresView.Detailed ? area.activities.length + 1 : 1}
										class="bg-slate-300 border-r-2 border-white font-semibold whitespace-nowrap">
										{area.name} ({area.points})
									</th>
								{/each}
								<th
									rowspan={scoresView === ScoresView.Detailed ? 2 : 1}
									class="bg-slate-500 text-xl font-bold text-white border-r-8 border-white">
									Nota
								</th>
							{/each}
						</tr>
					{/if}
					{#if scoresView === ScoresView.Detailed}
						<tr>
							{#each class_periods as cp}
								{#each cp.areas as area}
									{#each area.activities as act}
										<th class="whitespace-nowrap text-sm border-r border-white">
											{act.name.length > 15 ? `${act.name.substring(0, 12)}.` : act.name}
										</th>
									{/each}
									<th class="bg-slate-300 border-r-2 border-white font-semibold">Prom.</th>
								{/each}
							{/each}
						</tr>
					{/if}
				</thead>
				<tbody class="bg-neutral-100">
					{#each filteredStudents as student}
						<tr class="text-center border-t border-white">
							<td
								class="whitespace-nowrap sticky left-0 bg-neutral-100 text-left {student.year_score <=
								50
									? 'text-red-600'
									: ''}">
								{student.last_name}
								{student.name}
							</td>
							{#each class_periods as cp}
								{#if scoresView === ScoresView.Area || scoresView === ScoresView.Detailed}
									{#each cp.areas as area}
										{#if scoresView === ScoresView.Detailed}
											<!-- Nota actividad -->
											{#each area.activities as act}
												<td class="border-r border-white">
													{student.scores_map[act.id]?.points ?? '-'}
												</td>
											{/each}
										{/if}
										<!-- Nota area -->
										<td class="bg-slate-300 border-r-2 border-white font-semibold">
											{student.scores[cp.id].area_scores[area.id]}
										</td>
									{/each}
								{/if}
								<!-- Nota periodo (nota trimestral)-->
								<td class="border-r-8 border-white bg-slate-500 text-white text-lg font-bold">
									{student.scores[cp.id].score}
								</td>
							{/each}
							<td class="bg-slate-800 text-white text-lg font-bold">{student.year_score}</td>
							<td
								class="text-lg font-bold bg-slate-800 {student.year_score < 51
									? 'text-red-400'
									: 'text-green-500'}">
								{student.year_score < 51 ? 'Reprobado' : 'Aprobado'}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div>Attendances</div>
	{/if}
</main>

<style>
	th,
	td {
		padding-left: 3px;
		padding-right: 3px;
	}
	main {
		font-family: 'Assistant', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	#table_container::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	#table_container::-webkit-scrollbar-track {
		border-radius: 4px;
		background-color: #e7e7e7;
		border: 1px solid #cacaca;
	}
	#table_container::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: #999;
	}
	#table_container::-webkit-scrollbar-thumb:hover {
		background-color: #777;
	}
</style>
