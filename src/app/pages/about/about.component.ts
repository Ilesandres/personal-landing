import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/profile';

@Component({
	standalone: true,
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
})
export class AboutComponent {
	protected readonly profile = PROFILE;

	focusAreas = [
		{
			title: 'Developer Backend',
			description: 'Arquitectura limpia, APIs REST con NestJS y ecosistema Java, buscando soluciones robustas y escalables.',
			icon: 'backend',
		},
		{
			title: 'Bases de Datos',
			description: 'PostgreSQL, MySQL y MongoDB: modelado, consultas y consistencia para aplicaciones reales.',
			icon: 'database',
		},
		{
			title: 'Desarrollo Frontend',
			description: 'React y Angular para construir el frontend cuando el proyecto lo requiere.',
			icon: 'frontend',
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
			role: 'Desarrollador Backend',
			company: 'Kamila Innovation',
			location: 'Mocoa, Putumayo (Remoto)',
			period: 'Mar. 2026 — Jul. 2026',
			points: [
				'Desarrollo de sistemas backend para la empresa: sistemas multidioma y multitenant.',
				'Integraciones con pasarelas de pago y análisis e implementación de billeteras digitales.',
				'Trabajo con NestJS, Git (PR y workflows) y gestión de incidencias con Jira.',
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