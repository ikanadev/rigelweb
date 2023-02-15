<script lang="ts">
	import { Attendance } from '$lib/types';

	export let attendance: Attendance;

	const attendanceColors: { [key in Attendance]: string } = {
		[Attendance.Presente]: 'rgb(21, 128, 61)',
		[Attendance.Falta]: 'rgb(239, 68, 68)',
		[Attendance.Atraso]: 'rgb(251, 146, 60)',
		[Attendance.Licencia]: 'rgb(37, 99, 235)'
	};
</script>

<p
	class="rounded border text-sm font-mono px-0.5 font-semibold leading-4 bg-white"
	style="color:{attendanceColors[attendance]}; border-color: {attendanceColors[attendance]};">
	{attendance.substring(0, 1)}
</p>
