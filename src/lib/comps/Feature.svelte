<script lang="ts">
	import Icon from '@iconify/svelte';
	export let title: string;
	export let text: string;
	export let iconName: string;
	export let iconColor: string;
</script>

<div
	class="flex flex-col items-center px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-md shadow-neutral-300 dark:shadow-neutral-700 bg-white dark:bg-neutral-800"
>
	<div class="my-4 md:my-6" style="color: {iconColor};">
		<Icon icon={iconName} class="w-12 md:w-14 h-12 sm:h-14" />
	</div>
	<h4 class="text-2xl text-center font-semibold dark:text-white text-neutral-800 mb-2">{title}</h4>
	<p class="text-base md:text-lg text-center text-neutral-600 dark:text-neutral-200">{text}</p>
</div>
