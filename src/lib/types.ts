export enum Theme {
	Light = "light",
	Dark = "dark",
}

export type ServerData = {
	stats: {
		teachers: number;
		classes: number;
		schools: number;
		activities: number;
	};
};
