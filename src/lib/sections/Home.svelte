<script lang="ts">
	import theme from '$lib/actions/theme';
	import { APP_NAME } from '$lib/constants';
</script>

<section id="home" class="bg-gradient-to-r from-primarylight to-primarydark relative pt-6 md:pt-20">
	<div class="absolute bottom-0 left-0 right-0 text-neutral-50 dark:text-dark">
		<svg viewBox="0 0 1920 309" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M-3-3c189.3 206.3 322 305.3 398.4 297 114.4-12.5 166.1-51.7 242.3-82 76.2-30.4 179.3-84 398-33 218.8 51.2 475.8-54 503.7-70.6 27.9-16.5 121.5-71 233.8-64.8 74.8 4.2 128.6-9.2 161.1-40.1v305.7H-3"
				fill="currentColor"
				fill-rule="evenodd" />
		</svg>
	</div>
	<div
		class="container mx-auto relative flex flex-col md:flex-row items-center justify-center z-20 gap-4 md:gap-20 px-4">
		<div class="md:max-w-[500px] max-w-full text-center md:text-left md:-mt-28">
			<h2 class="text-white font-bold text-2xl md:text-5xl">
				{APP_NAME} - una manera sencilla y efectiva de administrar tus clases
			</h2>
			<h3 class="text-cyan-50 text-xl md:text-2xl mt-2">
				Te echamos una mano las notas, asistencias, estudiantes, tareas y mucho m&aacute;s...
			</h3>
			<div class="flex flex-col md:flex-row items-center md:items-start justify-between mt-2">
				<p class="text-white text-lg md:text-xl font-semibold">Disponible en:</p>
				<a href="https://play.google.com/store/apps/details?id=com.auleca.app.twa" class="w-48">
					<img
						alt="Disponible en Google Play"
						width="192"
						height="75"
						src="https://play.google.com/intl/en_us/badges/static/images/badges/es-419_badge_web_generic.png" />
				</a>
			</div>
		</div>
		<div class="lg:px-20">
			<img
				src="/screenshots/{$theme}/login.png"
				class="w-64 md:w-80"
				alt="App login"
				width="256"
				height="536" />
		</div>
	</div>
</section>
