<script lang="ts">
	import { base } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';
	import theme from '$lib/actions/theme';
	import { THEME_KEY } from '$lib/constants';
	import { Theme } from '$lib/types';
	import Icon from '@iconify/svelte';
	import '../app.css';

	let isTop = true;

	function handleScroll() {
		const posY = window.scrollY;
		if (posY > 0 && isTop) {
			isTop = false;
		}
		if (posY === 0 && !isTop) {
			isTop = true;
		}
	}

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
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

<header
	class="sticky top-0 z-50 font-semibold {isTop
		? 'bg-gradient-to-r from-primarylight to-primarydark text-white'
		: 'bg-white dark:bg-dark text-dark dark:text-white'} {!isTop
		? 'shadow-md shadow-neutral-300 dark:shadow-neutral-700'
		: ''}"
>
	<div class="container mx-auto flex py-3 items-center">
		<div class="flex-1 flex items-center">
			<img src={isTop ? '/icon_white.svg' : '/icon.svg'} alt="Logo" width="44" />
			<h1 class="font-bold text-lg">Rigel</h1>
		</div>
		<div class="flex gap-8 items-center mr-10">
			<a class="hover:underline" href="{base}/#home">Inicio</a>
			<a href="{base}/#features"> Características </a>
			<a href="{base}/#screenshots">Capturas</a>
			<a href="{base}/#pricing">Precio</a>
			<a href="{base}/#contact">Contacto</a>
		</div>
		<button on:click={theme.toggle} class="text-yellow-400 dark:text-sky-400 p-1">
			<Icon icon={$theme === Theme.Light ? 'bi:sun-fill' : 'bi:moon-stars-fill'} width={24} />
		</button>
	</div>
</header>

<slot />

<footer class="bg-white dark:bg-dark" style="height: 1200px;">
	Footer
	{isTop ? 'Top' : 'no Top'}
</footer>
