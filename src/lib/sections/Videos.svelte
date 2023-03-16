<script lang="ts">
	import SectionTitle from '$lib/comps/SectionTitle.svelte';
	import { onMount } from 'svelte';

	let ytCont: HTMLDivElement;
	const videos = [
		{ label: 'Instalación', url: 'https://youtu.be/3ebdT56LOT0' },
		{ label: 'Clases o materias', url: 'https://youtu.be/EoCDqeZXrIo' },
		{ label: 'Periodos (Trimestres)', url: 'https://youtu.be/4QgcE2l8dtg' },
		{ label: 'Administración de estudiantes', url: 'https://youtu.be/oUQ0prTDRkQ' },
		{ label: 'Asistencias', url: 'https://youtu.be/aHvqUywurGo' },
		{ label: 'Actividates (tareas, exámenes, etc.)', url: 'https://youtu.be/YqL-oM8f53k' }
	];

	onMount(() => {
		if (!ytCont) return;
		const thumbSource = `https://img.youtube.com/vi/${ytCont.dataset.embed}/sddefault.jpg`;
		const thumbImg = new Image();
		thumbImg.src = thumbSource;
		thumbImg.addEventListener('load', () => {
			ytCont.appendChild(thumbImg);
		});
		ytCont.addEventListener('click', () => {
			const iframe = document.createElement('iframe');
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allowfullscreen', '');
			iframe.setAttribute(
				'src',
				`https://www.youtube.com/embed/${ytCont.dataset.embed}?rel=0&showinfo=0&autoplay=1`
			);
			ytCont.innerHTML = '';
			ytCont.appendChild(iframe);
		});
	});
</script>

<SectionTitle id="videos" title="Videos" heading="Échale un vistazo a Auleca" description="" />
<div class="bg-neutral-50 dark:bg-dark text-neutral-800 dark:text-white pb-20">
	<section class="container mx-auto px-2">
		<div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
			<div class="px-0 lg:px-10 flex-1">
				<div class="youtube" data-embed="jIlbrmwX49A" bind:this={ytCont}>
					<div class="play-button" />
				</div>
			</div>
			<div class="flex-1 self-start">
				<h3 class="text-xl text-primary font-bold mb-4">Más videos:</h3>
				<ul class="list-disc text-primarylight underline pl-4 text-lg font-medium">
					{#each videos as video}
						<li>
							<a href={video.url} target="_blank" rel="noreferrer">{video.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>
</div>
