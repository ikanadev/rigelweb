import { writable } from "svelte/store";
import { THEME_KEY } from "$lib/constants";
import { Theme } from "$lib/types";

function createThemeStore() {
	const theme = writable(Theme.Light);

	function toggle() {
		const docNode = document.querySelector("body");
		if (!docNode) return;
		if (docNode.classList.contains(Theme.Dark)) {
			docNode.classList.remove(Theme.Dark);
			localStorage.removeItem(THEME_KEY);
			theme.set(Theme.Light);
		} else {
			docNode.classList.add(Theme.Dark);
			// we only save a value if dark theme is choosen
			localStorage.setItem(THEME_KEY, Theme.Dark);
			theme.set(Theme.Dark);
		}
	}

	return { subscribe: theme.subscribe, set: theme.set, toggle };
}

const theme = createThemeStore();

export default theme;
