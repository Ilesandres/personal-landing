import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { PROFILE } from '../../core/data/profile';
import { GithubRepo } from '../../core/models/github';
import { GithubService } from '../../core/services/github.service';
import { bannerFor } from '../../core/utils/banner';
import { TypedTextComponent } from './typed-text.component';

@Component({
	standalone: true,
	selector: 'app-home',
	imports: [AsyncPipe, RouterLink, TypedTextComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	private readonly github = inject(GithubService);

	protected readonly profile = PROFILE;
	protected readonly bannerFor = bannerFor;
	protected readonly featuredNames = ['personal-landing', 'Tienda-react-sql-node', 'prueba-front-donarApp', 'game-recolections'];

	roles = ['Desarrollador Backend', 'Desarrollador Fullstack', 'Ingeniero de Sistemas en formación'];

	readonly user$ = this.github.getUser();
	readonly stats$ = combineLatest([this.github.getUser(), this.github.getCommitCount()]).pipe(
		map(([user, commits]) => [
			{ label: 'Repos públicos', value: user.public_repos, hint: 'en mi GitHub' },
			{ label: 'Commits públicos', value: commits, hint: 'subidos a GitHub' },
			{ label: 'Seguidores', value: user.followers, hint: 'y contando' },
		]),
	);

	readonly featured$ = this.github.getUserRepos().pipe(
		map((repos) =>
			this.featuredNames
				.map((name) => repos.find((repo) => repo.name === name))
				.filter((repo): repo is GithubRepo => Boolean(repo)),
		),
	);
}