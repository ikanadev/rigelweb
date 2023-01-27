<script lang="ts">
	import { APP_NAME } from '$lib/constants';
	import SectionTitle from '$lib/comps/SectionTitle.svelte';
	import Feature from '$lib/comps/Feature.svelte';
</script>

<SectionTitle title="Características" id="features" />
<div class="bg-neutral-50 dark:bg-dark text-neutral-800 dark:text-white">
	<section class="container mx-auto px-2">
		<h3 class="text-3xl md:text-4xl font-semibold text-center">¿Qué te ofrece {APP_NAME}?</h3>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8 pt-8 px-2 lg:px-12"
		>
			<Feature
				iconName="carbon:group-presentation"
				iconColor="#2979FF"
				title="Estudiantes y materias"
				text="Administra estudiantes y crea tus materias acorde a la currícula actual de Bolivia."
			/>
			<Feature
				iconName="healthicons:i-exam-qualification"
				iconColor="#00C853"
				title="Tareas y actividades"
				text="Crea, califica y obtén reportes de calificaciones. Notas trimestrales y anuales de manera automática."
			/>
			<Feature
				iconName="ic:round-library-add-check"
				iconColor="#FFAB00"
				title="Asistencias"
				text="Registra la asistencia, falta, atraso o licencia de tus estudiantes, reportes trimestrales y anuales automáticos."
			/>
			<Feature
				iconName="clarity:disconnected-solid"
				iconColor="#F50057"
				title="Offline"
				text="Trabaja y continua con tus actividades incluso estando desconectado, haciéndo posible el uso en provincias."
			/>
			<Feature
				iconName="line-md:cloud-upload-loop"
				iconColor="#0091EA"
				title="Almacenamiento seguro"
				text="Todos los datos son almacenados en la nube con sincronizado automático cuando {APP_NAME} está online."
			/>
			<Feature
				iconName="fluent:phone-desktop-24-regular"
				iconColor="#616161"
				title="Multiacceso"
				text="Accede a {APP_NAME} desde donde te plazca, sólo necesitas un navegador."
			/>
		</div>
	</section>
</div>
