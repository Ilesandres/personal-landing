import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../core/data/profile';

@Component({
	standalone: true,
	selector: 'app-footer',
	imports: [RouterLink],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	protected readonly profile = PROFILE;
	year = new Date().getFullYear();

	navItems = [
		{ label: 'Inicio', path: '/' },
		{ label: 'Sobre mí', path: '/about' },
		{ label: 'Habilidades', path: '/skills' },
		{ label: 'Proyectos', path: '/projects' },
		{ label: 'Contacto', path: '/contact' },
	];
}