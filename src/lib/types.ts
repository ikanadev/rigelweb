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

export enum Attendance {
	Presente = "Presente",
	Falta = "Falta",
	Licencia = "Licencia",
	Atraso = "Atraso",
}

export type ClassDetails = {
	class_data: {
		id: string;
		parallel: string;
		municipio: string;
		provincia: string;
		departamento: string;
		school: {
			id: string;
			name: string;
			lat: string;
			lon: string;
		};
		teacher: {
			id: string;
			name: string;
			last_name: string;
			email: string;
			is_admin: boolean;
		};
		subject: {
			id: string;
			name: string;
		};
		grade: {
			id: string;
			name: string;
		};
		year: {
			id: string;
			value: number;
		};
	};
	students: {
		id: string;
		name: string;
		last_name: string;
		ci: string;
		year_score: number;
		scores_map: {
			[activity_id: string]: {
				id: string;
				points: number;
			};
		};
		scores: {
			[class_period_id: string]: {
				score: number;
				area_scores: {
					[area_id: string]: number;
				};
			};
		};
		attendances_map: {
			[att_day_id: string]: {
				id: string;
				value: Attendance;
			};
		};
		year_total_attendances: {
			[key in Attendance]: number;
		};
		period_total_attendances: {
			[class_period_id: string]: {
				[key in Attendance]: number;
			};
		};
	}[];
	class_periods: {
		id: string;
		start: number;
		end: number;
		finished: boolean;
		period: {
			id: string;
			name: string;
		};
		areas: {
			id: string;
			name: string;
			points: number;
			activities: {
				id: string;
				name: string;
				date: number;
			}[];
		}[];
		attendance_days: {
			id: string;
			day: number;
		}[];
	}[];
};
