import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { GithubEvent, GithubRepo } from '../../core/models/github';
import { GithubService } from '../../core/services/github.service';

interface DayCell {
	iso: string;
	level: number;
	title: string;
}

interface HeatmapWeek {
	days: DayCell[];
	label?: string;
}

const HEAT_COLORS = ['#1a1b19', '#1b2a1e', '#25482d', '#366740', '#46a758'];
const WEEK_PITCH = 13;
const CELL = 11;
const PAD_X = 12;
const PAD_Y = 26;

function levelFor(count: number): number {
	if (count === 0) return 0;
	if (count === 1) return 1;
	if (count <= 3) return 2;
	if (count <= 6) return 3;
	return 4;
}

function timeAgo(iso: string): string {
	const seconds = (Date.now() - new Date(iso).getTime()) / 1000;
	if (seconds < 60) return 'hace un momento';
	const minutes = Math.floor(seconds / 60);
	if (minutes < 60) return `hace ${minutes} min`;
	const hours = Math.floor(minutes / 60);
	if (hours < 24) return `hace ${hours} h`;
	const days = Math.floor(hours / 24);
	if (days < 30) return days === 1 ? 'hace 1 día' : `hace ${days} días`;
	const months = Math.floor(days / 30);
	return months === 1 ? 'hace 1 mes' : `hace ${months} meses`;
}

function describeEvent(event: GithubEvent): string {
	switch (event.type) {
		case 'PushEvent':
			return 'Hizo push de commits en';
		case 'CreateEvent':
			return 'Creó' + (event.payload?.ref_type ? ` un ${event.payload.ref_type}` : '') + ' en';
		case 'PullRequestEvent':
			return event.payload?.action === 'opened'
				? 'Abrió un pull request en'
				: event.payload?.action === 'closed'
					? 'Cerró un pull request en'
					: 'Actualizó un pull request en';
		case 'IssuesEvent':
			return event.payload?.action === 'closed' ? 'Cerró una issue en' : 'Abrió una issue en';
		case 'ReleaseEvent':
			return 'Publicó una release en';
		case 'ForkEvent':
			return 'Hizo fork de';
		case 'WatchEvent':
			return 'Marcó con estrella el repositorio';
		case 'PublicEvent':
			return 'Hizo público el repositorio';
		default:
			return 'Actividad en';
	}
}

function eventTone(type: string): string {
	switch (type) {
		case 'PushEvent':
			return 'bg-[#46a758]';
		case 'PullRequestEvent':
		case 'IssuesEvent':
			return 'bg-[#71d083]';
		case 'ReleaseEvent':
			return 'bg-[#53b365]';
		case 'WatchEvent':
			return 'bg-[#c2f0c2]';
		case 'ForkEvent':
			return 'bg-[#a1d2a3]';
		default:
			return 'bg-[#454843]';
	}
}

@Component({
	standalone: true,
	selector: 'app-github-activity',
	imports: [AsyncPipe, RevealDirective],
	templateUrl: './github-activity.component.html',
})
export class GithubActivityComponent {
	private readonly github = inject(GithubService);

	protected readonly heatColors = HEAT_COLORS;
	protected readonly weekPitch = WEEK_PITCH;
	protected readonly cell = CELL;
	protected readonly padX = PAD_X;

	protected readonly weeks$ = this.github.getEvents().pipe(map((events) => this.buildWeeks(events)));
	protected readonly languages$ = this.github.getUserRepos().pipe(map((repos) => this.topLanguages(repos)));
	protected readonly activity$ = this.github.getEvents().pipe(
		map((events) =>
			events
				.slice(0, 10)
				.map((event) => ({
					type: event.type,
					repo: event.repo.name.split('/').pop() ?? event.repo.name,
					repoUrl: `https://github.com/${event.repo.name}`,
					action: describeEvent(event),
					when: timeAgo(event.created_at),
				})),
		),
	);

	private buildWeeks(events: GithubEvent[]): HeatmapWeek[] {
		const counts = new Map<string, number>();
		let oldest = '';
		let newest = '';
		for (const event of events) {
			const day = event.created_at.slice(0, 10);
			counts.set(day, (counts.get(day) ?? 0) + 1);
			if (!oldest || day < oldest) oldest = day;
			if (day > newest) newest = day;
		}
		if (!newest) return [];

		const toDate = (iso: string) => new Date(`${iso}T12:00:00`);
		const today = new Date();
		const newestDate = toDate(newest);
		const end = newestDate.getTime() > today.getTime() ? today : newestDate;
		const start = toDate(oldest);

		const lastWeekStart = new Date(end);
		lastWeekStart.setDate(end.getDate() - end.getDay());
		const totalWeeks = Math.min(12, Math.ceil((end.getTime() - start.getTime()) / (7 * 86_400_000)) + 1);

		const weeks: HeatmapWeek[] = [];
		let previousMonth = -1;
		for (let w = 0; w < totalWeeks; w++) {
			const weekStart = new Date(lastWeekStart);
			weekStart.setDate(lastWeekStart.getDate() - (totalWeeks - 1 - w) * 7);

			const label = (() => {
				const thursday = new Date(weekStart);
				thursday.setDate(weekStart.getDate() + 3);
				const month = thursday.getMonth();
				if (month === previousMonth) return undefined;
				previousMonth = month;
				return thursday.toLocaleDateString('es-CO', { month: 'short' });
			})();

			const days: DayCell[] = [];
			for (let d = 0; d < 7; d++) {
				const date = new Date(weekStart);
				date.setDate(weekStart.getDate() + d);
				const iso = [
					date.getFullYear(),
					String(date.getMonth() + 1).padStart(2, '0'),
					String(date.getDate()).padStart(2, '0'),
				].join('-');
				const count = counts.get(iso) ?? 0;
				const isFuture = date.getTime() > end.getTime();
				days.push({
					iso,
					level: isFuture ? 0 : levelFor(count),
					title: `${date.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' })} · ${count === 0 ? 'sin actividad' : count === 1 ? '1 evento' : `${count} eventos`}`,
				});
			}
			weeks.push({ days, label });
		}
		return weeks;
	}

	private topLanguages(repos: GithubRepo[]) {
		const counts = new Map<string, number>();
		for (const repo of repos) {
			if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
		}
		const total = [...counts.values()].reduce((acc, n) => acc + n, 0) || 1;
		return [...counts.entries()]
			.map(([name, count]) => ({ name, count, pct: Math.round((count / total) * 100) }))
			.sort((a, b) => b.count - a.count)
			.slice(0, 8);
	}

	protected readonly eventTone = eventTone;
}