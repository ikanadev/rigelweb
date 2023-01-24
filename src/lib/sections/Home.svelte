<script lang="ts">
	import theme from '$lib/actions/theme';
</script>

<section id="home" class="bg-gradient-to-r from-primarylight to-primarydark relative pt-20">
	<div class="absolute bottom-0 left-0 right-0 text-neutral-50 dark:text-dark">
		<svg viewBox="0 0 1920 309" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M-3-3c189.3 206.3 322 305.3 398.4 297 114.4-12.5 166.1-51.7 242.3-82 76.2-30.4 179.3-84 398-33 218.8 51.2 475.8-54 503.7-70.6 27.9-16.5 121.5-71 233.8-64.8 74.8 4.2 128.6-9.2 161.1-40.1v305.7H-3"
				fill="currentColor"
				fill-rule="evenodd"
			/>
		</svg>
	</div>
	<div
		class="container mx-auto relative flex flex-col md:flex-row items-center justify-center z-20 gap-20"
	>
		<div class="md:max-w-[400px] max-w-full text-center md:text-left">
			<h1 class="text-white font-bold text-4xl">Rigel</h1>
			<h2 class="text-cyan-50 font-bold text-4xl">
				La WebApp que te ayudara a adminstrar notas y todo lo necesario. {$theme}
			</h2>
		</div>
		<div class="lg:px-20">
			<img src="/screenshots/{$theme}/login.png" width="300" alt="App login" />
		</div>
	</div>
</section>
