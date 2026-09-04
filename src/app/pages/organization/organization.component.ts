import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PROFILE } from '../../core/data/profile';
import { GithubService } from '../../core/services/github.service';
import { bannerFor } from '../../core/utils/banner';

@Component({
	standalone: true,
	selector: 'app-organization',
	imports: [AsyncPipe, RouterLink],
	templateUrl: './organization.component.html',
	styleUrl: './organization.component.scss',
})
export class OrganizationComponent {
	private readonly github = inject(GithubService);

	protected readonly profile = PROFILE;
	protected readonly bannerFor = bannerFor;

	readonly org$ = this.github.getOrg();

	readonly stats$ = this.org$.pipe(
		map((org) => [
			{ label: 'Repos públicos', value: org.public_repos },
			{ label: 'Seguidores', value: org.followers },
			{ label: 'Desde', value: new Date(org.created_at).getFullYear() },
		]),
	);

	readonly repos$ = this.github.getOrgRepos().pipe(
		map((repos) => repos.filter((repo) => repo.name !== '.github' && repo.name !== 'WaveSystems')),
	);
}