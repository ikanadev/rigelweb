<script lang="ts">
	import { APP_NAME } from '$lib/constants';
	import SectionTitle from '$lib/comps/SectionTitle.svelte';
	import Feature from '$lib/comps/Feature.svelte';
</script>

<SectionTitle
	title="Características"
	id="features"
	heading="¿Qué te ofrece {APP_NAME}?"
	description="{APP_NAME} es la WebApp que colabora al docente boliviano con las actividades que realiza día a día, enfocándose en registro de asistencias, calificación de actividades/tareas y reportes semestrales/anuales. Todo acorde a la currícula propuesta por el Ministerio de Educación en Bolivia."
/>
<div class="bg-neutral-50 dark:bg-dark text-neutral-800 dark:text-white">
	<section class="container mx-auto px-2">
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
				text="Crea, califica tareas y obtén reportes trimestrales y anuales de notas."
			/>
			<Feature
				iconName="ic:round-library-add-check"
				iconColor="#FFAB00"
				title="Asistencias"
				text="Registra la asistencia, falta, atraso o licencia de tus estudiantes y visualiza el total por trimestre."
			/>
			<Feature
				iconName="clarity:disconnected-solid"
				iconColor="#F50057"
				title="Offline"
				text="Trabaja y continua usando {APP_NAME} incluso sin conexión a Internet."
			/>
			<Feature
				iconName="line-md:cloud-upload-loop"
				iconColor="#0091EA"
				title="Almacenamiento seguro"
				text="Todos los datos son almacenados en la nube. {APP_NAME} se encarga de guardar todo cuando está online."
			/>
			<Feature
				iconName="fluent:phone-desktop-24-regular"
				iconColor="#616161"
				title="Multiacceso"
				text="Accede a {APP_NAME} desde cualquier celular, laptop o PC, sólo necesitas un navegador."
			/>
		</div>
	</section>
</div>
