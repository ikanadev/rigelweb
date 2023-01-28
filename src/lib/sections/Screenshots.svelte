<script lang="ts">
	import { onMount } from 'svelte';
	import SectionTitle from '$lib/comps/SectionTitle.svelte';
	import Icon from '@iconify/svelte';
	import BlazeSlider from 'blaze-slider';

	import 'blaze-slider/dist/blaze.css';

	import theme from '$lib/actions/theme';

	let sliderRef: HTMLDivElement;

	onMount(() => {
		new BlazeSlider(sliderRef, {
			all: {
				enableAutoplay: true,
				autoplayInterval: 3500,
				transitionDuration: 300,
				slidesToShow: 5,
				slideGap: '10px'
			},
			'(max-width: 1400px)': {
				slidesToShow: 4
			},
			'(max-width: 1200px)': {
				slidesToShow: 3
			},
			'(max-width: 900px)': {
				slidesToShow: 2
			},
			'(max-width: 500px)': {
				slidesToShow: 1
			}
		});
	});
</script>

<SectionTitle
	id="screenshots"
	title="Capturas de pantalla"
	heading="Una interfaz simple y práctica"
	description="Asistencias, calificaciones, estudiantes, materias y todo lo que necesitas a la mano. ¿Trabajando de noche?, prueba el modo nocturno."
/>
<div class="bg-neutral-50 dark:bg-dark text-neutral-800 dark:text-white">
	<section class="container mx-auto px-2">
		<div class="blaze-slider pt-8 px-8" bind:this={sliderRef}>
			<div class="blaze-container">
				<div class="blaze-track-container">
					<div class="blaze-track">
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/login.png" alt="App login" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/attendances.png" alt="Asistencias captura" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/dayAtt.png" alt="Asistencias captura" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/students.png" alt="App login" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/excel.png" alt="App login" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/activities.png" alt="App login" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/activity.png" alt="App login" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/subjects.png" alt="App login" />
						</div>
						<div class="flex justify-center">
							<img src="/screenshots/{$theme}/scores.png" alt="App login" />
						</div>
					</div>
				</div>

				<div class="flex items-center justify-center">
					<div class="blaze-pagination flex items-center gap-3 mx-2" />
				</div>
			</div>
		</div>
	</section>
</div>
