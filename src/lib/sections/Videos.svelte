<script lang="ts">
	import SectionTitle from '$lib/comps/SectionTitle.svelte';
</script>

<SectionTitle id="videos" title="Videos" heading="Échale un vistazo a Auleca" description="" />
<div class="bg-neutral-50 dark:bg-dark text-neutral-800 dark:text-white pb-20">
	<section class="container mx-auto px-2">
		<div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
			<div class="px-0 lg:px-10">
				<iframe
					class="max-w-full"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/jIlbrmwX49A"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen />
			</div>
			<div class="flex-1 self-start">
				<h3 class="text-xl text-primary font-bold mb-4">Más videos:</h3>
				<ul class="list-disc text-primarylight underline pl-4 text-lg font-medium">
					<li>
						<a href="https://youtu.be/3ebdT56LOT0" target="_blank" rel="noreferrer">Instalación</a>
					</li>
					<li>
						<a href="https://youtu.be/EoCDqeZXrIo" target="_blank" rel="noreferrer"
							>Clases o materias</a>
					</li>
					<li>
						<a href="https://youtu.be/4QgcE2l8dtg" target="_blank" rel="noreferrer"
							>Periodos (Trimestres)</a>
					</li>
					<li>
						<a href="https://youtu.be/oUQ0prTDRkQ" target="_blank" rel="noreferrer"
							>Administración de estudiantes</a>
					</li>
					<li>
						<a href="https://youtu.be/aHvqUywurGo" target="_blank" rel="noreferrer">Asistencias</a>
					</li>
					<li>
						<a href="https://youtu.be/YqL-oM8f53k" target="_blank" rel="noreferrer"
							>Actividates (tareas, exámenes, etc.)</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</div>
