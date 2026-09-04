export interface GithubUser {
	login: string;
	name: string;
	avatar_url: string;
	html_url: string;
	bio: string | null;
	location: string | null;
	company: string | null;
	blog: string | null;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	hireable: boolean | null;
	created_at: string;
	updated_at: string;
}

export interface GithubOrg {
	login: string;
	name: string;
	description: string | null;
	avatar_url: string;
	html_url: string;
	location: string | null;
	public_repos: number;
	public_gists: number;
	followers: number;
	created_at: string;
	updated_at: string;
}

export interface GithubRepo {
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	has_pages: boolean;
	topics: string[];
	fork: boolean;
	pushed_at: string;
}