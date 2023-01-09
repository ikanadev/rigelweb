<script>
	import { onMount } from 'svelte';
	import theme from '$lib/actions/theme';
	import { THEME_KEY } from '$lib/constants';
	import { Theme } from '$lib/types';
	import '../app.css';

	onMount(() => {
		const themeStr = localStorage.getItem(THEME_KEY);
		if (!themeStr) return;
		if (themeStr === Theme.Dark) {
			const node = document.querySelector('body');
			if (!node) return;
			node.classList.add(Theme.Dark);
			theme.set(Theme.Dark);
		}
	});
</script>

<header class="bg-gradient-to-r from-primarylight to-primarydark h-16 flex items-center">
	<div class="container mx-auto">
		<button on:click={theme.toggle}>Toggle theme</button>
		<p class="font-semibold text-white">Header</p>
		<p class="font-semibold text-white">{$theme}</p>
	</div>
</header>

<slot />
