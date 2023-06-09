<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { fly, fade, slide } from 'svelte/transition';
	import theme from '$lib/actions/theme';
	import { THEME_KEY, APP_NAME, EMAIL_URL, TELEGRAM_URL, WEB_APP_URL } from '$lib/constants';
	import { Theme } from '$lib/types';
	import Icon from '@iconify/svelte';

	let isTop = true;
	let showMenu = false;

	function handleScroll() {
		const limit = 100;
		const posY = window.scrollY;
		if (posY > limit && isTop) {
			isTop = false;
		}
		if (posY <= limit && !isTop) {
			isTop = true;
		}
	}

	function toggleMenu() {
		showMenu = !showMenu;
	}

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
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

{#if !isTop}
	<div
		class="fixed bottom-6 md:bottom-10 left-16 right-8 md:right-16 z-40 flex justify-end"
		transition:fade>
		<a
			class="bg-gradient-to-br from-primarylight to-primarydark text-white text-sm md:text-base rounded-full py-1.5 px-4 font-semibold border md:border-2 border-white animate-gradient-xy"
			href={WEB_APP_URL}
			target="_blank"
			rel="noreferrer">
			Ir a {APP_NAME}
			<Icon icon="mingcute:external-link-line" class="inline -mt-1" />
		</a>
	</div>
{/if}
<header
	class="sticky top-0 z-50 font-semibold {isTop
		? 'bg-gradient-to-r from-primarylight to-primarydark text-white'
		: 'bg-white dark:bg-dark text-dark dark:text-white'} {!isTop
		? 'shadow-md shadow-neutral-300 dark:shadow-neutral-700'
		: ''}">
	<div class="container mx-auto flex py-3 px-2 items-center">
		<div class="flex-1 flex items-center">
			<img
				src={isTop ? '/icon_white.svg' : '/icon.svg'}
				alt="Logo"
				class="w-8 md:w-10"
				width="32"
				height="32" />
			<h1 class="font-bold text-lg">{APP_NAME}</h1>
		</div>
		<nav class="hidden md:flex gap-8 items-center mr-10">
			<a href="{base}/#home">Inicio</a>
			<a href="{base}/#features"> Características </a>
			<a href="{base}/#screenshots">Capturas</a>
			<a href="{base}/#installation">Instalación</a>
			<a href="{base}/#pricing">Precio</a>
		</nav>
		<button
			on:click={theme.toggle}
			class="text-yellow-400 dark:text-sky-400 p-1"
			aria-label="Cambiar tema">
			<Icon icon={$theme === Theme.Light ? 'bi:sun-fill' : 'bi:moon-stars-fill'} width={24} />
		</button>
		<button class="mx-2 md:hidden" on:click={toggleMenu} aria-label="Abrir menu">
			<Icon icon="heroicons:bars-3-20-solid" width={24} />
		</button>
	</div>
</header>

{#if showMenu}
	<div
		in:fly={{ x: 400, duration: 300 }}
		out:fly={{ x: 400, duration: 300 }}
		class="fixed left-0 top-0 right-0 bottom-0 text-black dark:text-white bg-white dark:bg-dark z-50 p-4">
		<div class="flex justify-end">
			<button on:click={toggleMenu} aria-label="Cerrar menu">
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

<footer class="pt-8 pb-2 bg-neutral-200 dark:bg-neutral-800 dark:text-white">
	<div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
		<div class="flex flex-col">
			<div class="flex flex-col md:flex-row items-start md:items-center">
				<img src="/icon.svg" alt="Logo" class="w-12" />
				<div>
					<h4 class="font-semibold text-lg">{APP_NAME}</h4>
					<p>
						La WebApp de los profesores de <Icon
							icon="emojione-v1:flag-for-bolivia"
							class="inline w-6 h-6 mb-1" /> Bolivia.
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<h4 class="font-semibold text-lg">Secciones</h4>
			<ul class="mt-2 ml-5 list-disc">
				<li>
					<a href="{base}/#home" class="hover:underline">Inicio</a>
				</li>
				<li>
					<a href="{base}/#features" class="hover:underline"> Características </a>
				</li>
				<li>
					<a href="{base}/#screenshots" class="hover:underline">Capturas</a>
				</li>
				<li>
					<a href="{base}/#installation" class="hover:underline">Instalación</a>
				</li>
				<li>
					<a href="{base}/#pricing" class="hover:underline">Precio</a>
				</li>
			</ul>
		</div>
		<div class="flex flex-col">
			<h4 class="font-semibold text-lg">¿Sugerencias o dudas?</h4>
			<a
				href={TELEGRAM_URL}
				target="_blank"
				rel="noreferrer"
				class="flex items-center mt-2 hover:underline">
				<Icon icon="icon-park-outline:telegram" class="w-7 h-7 mr-2 text-[#0088CC]" />
				Únete a la comunidad en Telegram
			</a>
			<a
				href="mailto:{EMAIL_URL}"
				target="_blank"
				rel="noreferrer"
				class="flex items-center mt-2 hover:underline">
				<Icon icon="cib:gmail" class="w-7 h-7 mr-2 text-[#EA4335]" />
				Contáctanos por Gmail
			</a>
			<a href="/term_and_conditions" class="flex items-center mt-2 hover:underline">
				<Icon icon="fluent:notebook-32-filled" class="w-7 h-7 mr-2 text-neutral-600" />
				T&eacute;rminos y condiciones de uso
			</a>
		</div>
	</div>
	<div class="container mx-auto px-4 mt-8">
		<p class="text-sm border-t border-neutral-400 dark:border-neutral-600 pt-2">
			Copyright © 2023 {APP_NAME}. Todos los derechos reservados.
		</p>
	</div>
</footer>
