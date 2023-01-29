<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import theme from '$lib/actions/theme';
	import { THEME_KEY, APP_NAME } from '$lib/constants';
	import { Theme } from '$lib/types';
	import Icon from '@iconify/svelte';
	import '../app.css';

	let isTop = true;
	let showMenu = false;

	function handleScroll() {
		const posY = window.scrollY;
		if (posY > 0 && isTop) {
			isTop = false;
		}
		if (posY === 0 && !isTop) {
			isTop = true;
		}
	}

	function toggleMenu() {
		showMenu = !showMenu;
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
			<img src={isTop ? '/icon_white.svg' : '/icon.svg'} alt="Logo" class="w-8 md:w-10" />
			<h1 class="font-bold text-lg">{APP_NAME}</h1>
		</div>
		<nav class="hidden md:flex gap-8 items-center mr-10">
			<a href="{base}/#home">Inicio</a>
			<a href="{base}/#features"> Características </a>
			<a href="{base}/#screenshots">Capturas</a>
			<a href="{base}/#installation">Instalación</a>
			<a href="{base}/#pricing">Precio</a>
		</nav>
		<button on:click={theme.toggle} class="text-yellow-400 dark:text-sky-400 p-1">
			<Icon icon={$theme === Theme.Light ? 'bi:sun-fill' : 'bi:moon-stars-fill'} width={24} />
		</button>
		<button class="mx-2 md:hidden" on:click={toggleMenu}>
			<Icon icon="heroicons:bars-3-20-solid" width={24} />
		</button>
	</div>
</header>

{#if showMenu}
	<div
		in:fly={{ x: 400, duration: 300 }}
		out:fly={{ x: 400, duration: 300 }}
		class="fixed left-0 top-0 right-0 bottom-0 text-black dark:text-white bg-white dark:bg-dark z-50 p-4"
	>
		<div class="flex justify-end">
			<button on:click={toggleMenu}>
				<Icon icon="material-symbols:close-rounded" width={28} />
			</button>
		</div>
		<nav class="flex flex-col text-3xl underline underline-offset-4 gap-3 mt-3 ml-3">
			<a href="{base}/#home" on:click={toggleMenu}>Inicio</a>
			<a href="{base}/#features" on:click={toggleMenu}> Características </a>
			<a href="{base}/#screenshots" on:click={toggleMenu}>Capturas</a>
			<a href="{base}/#installation" on:click={toggleMenu}>Instalación</a>
			<a href="{base}/#pricing" on:click={toggleMenu}>Precio</a>
		</nav>
	</div>
{/if}

<slot />

<footer class="bg-white dark:bg-dark" style="height: 1200px;">
	Footer
	{isTop ? 'Top' : 'no Top'}
</footer>
