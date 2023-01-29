<script lang="ts">
	import Icon from '@iconify/svelte';

	import SectionTitle from '$lib/comps/SectionTitle.svelte';
	import { APP_NAME } from '$lib/constants';
</script>

<SectionTitle
	title="Instalación"
	id="installation"
	heading="Tan fácil como visitar un sitio web"
	description="Sigue estos pasos para instalar {APP_NAME} en tu celular. El uso desde un ordenador no requiere instalación."
/>
<section class="bg-gradient-to-tr from-primarylight to-primarydark">
	<div class="max-w-md px-2 mx-auto text-white py-12 grid grid-cols-1 gap-8 text-lg md:text-xl">
		<div class="flex flex-col">
			<p>
				1. Ingresa a <a href="https://app.profesca.com" class="underline underline-offset-2"
					>app.profesca.com</a
				> desde Google Chrome.
			</p>
			<img
				src="/installation/appUrl.jpg"
				alt="App url en Google Chrome"
				class="w-full rounded-lg"
			/>
		</div>
		<div class="flex flex-col">
			<p>
				2. Accede al menú de Google Chrome presionando <Icon
					icon="mdi:dots-vertical"
					class="inline border rounded-sm"
				/> y busca la opción "Instalar Aplicación"
			</p>
			<img
				src="/installation/installButton.jpg"
				alt="Botón de instalación en Google Chrome"
				class="w-full rounded-lg"
			/>
		</div>
		<div class="flex flex-col">
			<p>
				3. Una vez finalizada la instalación, el logo de la WebApp estará disponible en tu pantalla
				principal. Ahora ya puedes empezar a usar {APP_NAME}.
			</p>
			<img
				src="/installation/appInstalledIcon.jpg"
				alt="Ícono de la App una vez instalada"
				class="w-full rounded-lg"
			/>
		</div>
	</div>
</section>
