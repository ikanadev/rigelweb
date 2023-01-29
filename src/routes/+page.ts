export const load = async () => {
	await new Promise((res) => setTimeout(res, 10));
	return {
		stats: {
			teachers: 150,
			classes: 1300,
			schools: 500000,
			activities: 2000000,
		},
	};
};
