import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PROFILE } from '../../core/data/profile';

@Component({
	standalone: true,
	selector: 'app-header',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	open = false;
	cvUrl = PROFILE.cvUrl;

	items = [
		{ label: 'Inicio', path: '/' },
		{ label: 'Sobre mí', path: '/about' },
		{ label: 'Habilidades', path: '/skills' },
		{ label: 'Proyectos', path: '/projects' },
		{ label: 'WaveSystems', path: '/organization' },
		{ label: 'Contacto', path: '/contact' },
	];
}