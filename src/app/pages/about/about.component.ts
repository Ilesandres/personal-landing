import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE } from '../../core/data/profile';

@Component({
	standalone: true,
	selector: 'app-about',
	imports: [RevealDirective],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
})
export class AboutComponent {
	protected readonly profile = PROFILE;

	stack = ['NestJS', 'Node.js', 'TypeScript', 'Java', 'Angular', 'PostgreSQL', 'Flutter', 'Godot'];

	focusAreas = [
		{
			title: 'Developer Backend',
			description: 'Especialista en NestJS (Node.js/TypeScript) y ecosistema Java: APIs REST, arquitectura limpia y sistemas robustos y escalables.',
			icon: 'backend',
		},
		{
			title: 'Bases de Datos',
			description: 'PostgreSQL, MySQL y MongoDB: modelado, consultas y consistencia para aplicaciones reales.',
			icon: 'database',
		},
		{
			title: 'Desarrollo Frontend',
			description: 'Angular como herramienta central y React, para construir el frontend cuando el proyecto lo requiere.',
			icon: 'frontend',
		},
		{
			title: 'Desarrollo Mobile',
			description: 'Flutter y React Native para llevar soluciones construidas en el backend a dispositivos móviles.',
			icon: 'mobile',
		},
		{
			title: 'Videojuegos 2D/3D',
			description: 'Desarrollo de videojuegos en Godot para explorar la programación desde un ángulo creativo.',
			icon: 'games',
		},
		{
			title: 'Sistemas & Soporte',
			description: 'Administración de equipos, redes y ofimática: sólida base de sistemas para el día a día.',
			icon: 'systems',
		},
	];

	education = [
		{
			degree: 'Ingeniería en Sistemas',
			school: 'Universidad del Putumayo',
			period: '2022 — en curso',
			type: 'Pregrado',
		},
		{
			degree: 'Tecnología en Desarrollo de Software',
			school: 'Universidad del Putumayo',
			period: '2022 — 2025',
			type: 'Tecnológico',
		},
		{
			degree: 'Técnico en Sistemas, Ofimática y Diseño',
			school: 'Instituto',
			period: '2019 — 2021',
			type: 'Técnico',
		},
		{
			degree: 'Bachiller Académico',
			school: 'Colegio',
			period: '2010 — 2021',
			type: 'Bachillerato',
		},
	];

	experience = [
		{
			role: 'Desarrollador Backend (NestJS)',
			company: 'Kamila Innovation',
			location: 'Mocoa, Putumayo (Remoto)',
			period: 'Mar. 2026 — Ago. 2026',
			points: [
				'Desarrollo de sistemas backend con NestJS y TypeScript como stack principal.',
				'Sistemas multidioma y multitenant, integración de pasarelas de pago y billeteras digitales.',
				'Trabajo colaborativo con Git (pull requests y flujos de trabajo), Jira para incidencias y documentación técnica.',
			],
		},
		{
			role: 'Asistente de clases de programación',
			company: 'Secundaria (Mocoa)',
			location: 'Mocoa, Putumayo',
			period: 'Jul. 2024 — Nov. 2024',
			points: [
				'Diseñé actividades y habilidades de programación para estudiantes de secundaria.',
				'Manejo de información académica y comunicación asertiva con el alumnado.',
			],
		},
		{
			role: 'Técnico y asesor de ventas',
			company: 'DIRECTV',
			location: 'Mocoa, Putumayo',
			period: 'Oct. 2022 — Nov. 2022',
			points: ['Atención al cliente, asesoría técnica y soporte en ventas.'],
		},
		{
			role: 'Cajero / Administrador',
			company: 'Avícola Flor del Putumayo',
			location: 'Mocoa, Putumayo',
			period: 'Feb. 2022 — Oct. 2022',
			points: [
				'Manejo de información de la empresa y atención al cliente.',
				'Comunicación asertiva y distribución equitativa del trabajo.',
			],
		},
	];
}