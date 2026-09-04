import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { GithubEvent, GithubOrg, GithubRepo, GithubUser } from '../models/github';

const API = 'https://api.github.com';
const USER = 'Ilesandres';
const ORG = 'AIWaveSystems';

const COMMITS_ACCEPT = 'application/vnd.github+json';

@Injectable({ providedIn: 'root' })
export class GithubService {
	private readonly user$: Observable<GithubUser>;
	private readonly org$: Observable<GithubOrg>;
	private readonly userRepos$: Observable<GithubRepo[]>;
	private readonly orgRepos$: Observable<GithubRepo[]>;
	private readonly commits$: Observable<{ total_count: number }>;
	private readonly events$: Observable<GithubEvent[]>;

	constructor(private readonly http: HttpClient) {
		this.user$ = this.http
			.get<GithubUser>(`${API}/users/${USER}`)
			.pipe(shareReplay(1));

		this.org$ = this.http
			.get<GithubOrg>(`${API}/orgs/${ORG}`)
			.pipe(shareReplay(1));

		this.userRepos$ = this.http
			.get<GithubRepo[]>(`${API}/users/${USER}/repos?per_page=100&sort=pushed`)
			.pipe(shareReplay(1));

		this.orgRepos$ = this.http
			.get<GithubRepo[]>(`${API}/orgs/${ORG}/repos?per_page=100&sort=pushed`)
			.pipe(shareReplay(1));

		this.commits$ = this.http
			.get<{ total_count: number }>(`${API}/search/commits?q=author:${USER}&per_page=1`, {
				headers: { Accept: COMMITS_ACCEPT },
			})
			.pipe(shareReplay(1));

		this.events$ = this.http
			.get<GithubEvent[]>(`${API}/users/${USER}/events?per_page=100`)
			.pipe(shareReplay(1));
	}

	getUser(): Observable<GithubUser> {
		return this.user$;
	}

	getOrg(): Observable<GithubOrg> {
		return this.org$;
	}

	getUserRepos(): Observable<GithubRepo[]> {
		return this.userRepos$;
	}

	getOrgRepos(): Observable<GithubRepo[]> {
		return this.orgRepos$;
	}

	getEvents(): Observable<GithubEvent[]> {
		return this.events$;
	}

	getCommitCount(): Observable<number> {
		return this.commits$.pipe(map((result) => result.total_count));
	}
}