<script lang="ts">
	export let title: string;
	export let id: string;
	export let heading: string;
	export let description: string;
</script>

<div {id} class="pt-20 pb-4 md:pb-6 bg-neutral-50 dark:bg-dark">
	<div class="container mx-auto flex flex-col items-center text-black dark:text-white">
		<h2 class="text-primary dark:text-primarylight text-2xl font-semibold tracking-wide">
			{title}
		</h2>
		<h3 class="text-3xl md:text-4xl font-semibold underline underline-offset-3 text-center">
			{heading}
		</h3>
		<h4 class="text-lg md:text-xl mt-3 text-center px-2 leading-6">{description}</h4>
	</div>
</div>
