<script lang="ts">
	import { APP_NAME } from '$lib/constants';
	import SectionTitle from '$lib/comps/SectionTitle.svelte';
	import Feature from '$lib/comps/Feature.svelte';
</script>

<SectionTitle title="Características" id="features" />
<div class="bg-neutral-50 dark:bg-dark text-neutral-800 dark:text-white">
	<section class="container mx-auto">
		<h3 class="text-4xl font-semibold text-center">¿Qué te ofrece {APP_NAME}?</h3>
		<div class="grid grid-cols-3 gap-8 pt-8">
			<Feature />
			<Feature />
			<Feature />
			<Feature />
			<Feature />
			<Feature />
		</div>
	</section>
</div>
