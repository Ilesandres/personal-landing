import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE } from '../../core/data/profile';

interface ContactCard {
	title: string;
	value: string;
	href: string;
	icon: 'email' | 'phone' | 'github' | 'linkedin' | 'instagram' | 'discord' | 'facebook' | 'tiktok' | 'notion' | 'org';
	external?: boolean;
}

@Component({
	standalone: true,
	selector: 'app-contact',
	imports: [RevealDirective],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	protected readonly profile = PROFILE;

	cards: ContactCard[] = [
		{ title: 'Email', value: PROFILE.email, href: 'mailto:' + PROFILE.email, icon: 'email' },
		{ title: 'Teléfono', value: PROFILE.phone, href: 'tel:' + PROFILE.phone, icon: 'phone' },
		{ title: 'GitHub', value: 'github.com/Ilesandres', href: PROFILE.githubUrl, icon: 'github', external: true },
		{ title: 'LinkedIn', value: 'Andres Iles', href: PROFILE.linkedinUrl, icon: 'linkedin', external: true },
		{ title: 'Instagram', value: 'ilesandres8', href: PROFILE.instagramUrl, icon: 'instagram', external: true },
		{ title: 'Discord', value: 'ilesandres6', href: PROFILE.discordUrl, icon: 'discord', external: true },
		{ title: 'Facebook', value: 'Ilesandres8', href: PROFILE.facebookUrl, icon: 'facebook', external: true },
		{ title: 'TikTok', value: '@Ilesandres8', href: PROFILE.tiktokUrl, icon: 'tiktok', external: true },
		{ title: 'Notion', value: 'Mi espacio personal', href: PROFILE.notionUrl, icon: 'notion', external: true },
		{ title: PROFILE.orgName, value: 'github.com/AIWaveSystems', href: PROFILE.orgUrl, icon: 'org', external: true },
	];
}