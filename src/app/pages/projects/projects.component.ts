import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { GithubRepo } from '../../core/models/github';
import { GithubService } from '../../core/services/github.service';
import { bannerFor } from '../../core/utils/banner';

const FEATURED = ['personal-landing', 'Tienda-react-sql-node', 'prueba-front-donarApp', 'charctersMorty', 'game-recolections', 'Puzzle-numeros-3x3'];

@Component({
	standalone: true,
	selector: 'app-projects',
	imports: [AsyncPipe, RevealDirective],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
	private readonly github = inject(GithubService);

	protected readonly bannerFor = bannerFor;

	private readonly search$ = new BehaviorSubject('');
	private readonly language$ = new BehaviorSubject('');

	readonly repos$ = this.github.getUserRepos().pipe(
		map((repos) => repos.filter((repo) => !repo.fork && repo.name !== 'Ilesandres')),
	);

	readonly featured$ = this.repos$.pipe(
		map((repos) =>
			FEATURED.map((name) => repos.find((repo) => repo.name === name)).filter((repo): repo is GithubRepo => Boolean(repo)),
		),
	);

	readonly languages$ = this.repos$.pipe(
		map((repos) =>
			[...new Set(repos.map((repo) => repo.language ?? 'Otro'))]
				.filter((language) => language !== 'Otro')
				.sort(),
		),
	);

	readonly rest$ = combineLatest([this.repos$, this.search$, this.language$]).pipe(
		map(([repos, search, language]) => {
			const featuredSet = new Set(FEATURED);
			let list = repos.filter((repo) => !featuredSet.has(repo.name));
			if (language) list = list.filter((repo) => (repo.language ?? 'Otro') === language);
			if (search) {
				const q = search.toLowerCase();
				list = list.filter((repo) => `${repo.name} ${repo.description ?? ''}`.toLowerCase().includes(q));
			}
			return list;
		}),
	);

	onSearch(event: Event): void {
		this.search$.next((event.target as HTMLInputElement).value);
	}

	onLanguage(event: Event): void {
		this.language$.next((event.target as HTMLSelectElement).value);
	}
}