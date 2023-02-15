import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { ClassDetails } from "$lib/types";

export const load = (async ({ params, fetch }) => {
	const url = `${import.meta.env.VITE_API_URL}class/${params.id}`;
	const resp = await fetch(url);
	if (!resp.ok) {
		if (resp.status === 404) {
			throw error(404, "Clase no encontrada");
		}
		throw new Error("Error fetching class details");
	}
	const data: ClassDetails = await resp.json();
	return data;
}) satisfies PageLoad;
