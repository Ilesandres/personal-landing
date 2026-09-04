import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { GithubOrg, GithubRepo, GithubUser } from '../models/github';

const API = 'https://api.github.com';
const USER = 'Ilesandres';
const ORG = 'AIWaveSystems';

@Injectable({ providedIn: 'root' })
export class GithubService {
	private readonly user$: Observable<GithubUser> = this.http
		.get<GithubUser>(`${API}/users/${USER}`)
		.pipe(shareReplay(1));

	private readonly org$: Observable<GithubOrg> = this.http
		.get<GithubOrg>(`${API}/orgs/${ORG}`)
		.pipe(shareReplay(1));

	private readonly userRepos$: Observable<GithubRepo[]> = this.http
		.get<GithubRepo[]>(`${API}/users/${USER}/repos?per_page=100&sort=pushed`)
		.pipe(shareReplay(1));

	private readonly orgRepos$: Observable<GithubRepo[]> = this.http
		.get<GithubRepo[]>(`${API}/orgs/${ORG}/repos?per_page=100&sort=pushed`)
		.pipe(shareReplay(1));

	private readonly commits$: Observable<{ total_count: number }> = this.http
		.get<{ total_count: number }>(`${API}/search/commits?q=author:${USER}&per_page=1`, {
			headers: { Accept: 'application/vnd.github+json' },
		})
		.pipe(shareReplay(1));

	constructor(private readonly http: HttpClient) {}

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

	getCommitCount(): Observable<number> {
		return this.commits$.pipe(map((result) => result.total_count));
	}
}