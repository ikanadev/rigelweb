<script lang="ts">
	export let title: string;
	export let id: string;
</script>

<div {id} class="pt-20 pb-3 flex justify-center bg-neutral-50 dark:bg-dark">
	<h2 class="text-primary text-2xl font-semibold underline tracking-wide">{title}</h2>
</div>
