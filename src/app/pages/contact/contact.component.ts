import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE } from '../../core/data/profile';

interface ContactCard {
	title: string;
	value: string;
	href: string;
	icon: 'email' | 'phone' | 'github' | 'linkedin' | 'notion' | 'org';
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
		{ title: 'Notion', value: 'Mi espacio personal', href: PROFILE.notionUrl, icon: 'notion', external: true },
		{ title: PROFILE.orgName, value: 'github.com/AIWaveSystems', href: PROFILE.orgUrl, icon: 'org', external: true },
	];
}