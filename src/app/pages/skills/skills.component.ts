import { Component } from '@angular/core';

interface Skill {
	name: string;
	level: string;
	levelId: 1 | 2 | 3;
}

interface SkillCategory {
	title: string;
	icon: 'backend' | 'frontend' | 'database' | 'tools' | 'design' | 'other';
	skills: Skill[];
}

@Component({
	standalone: true,
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	categories: SkillCategory[] = [
		{
			title: 'Backend',
			icon: 'backend',
			skills: [
				{ name: 'NestJS', level: 'Avanzado', levelId: 3 },
				{ name: 'Node.js', level: 'Intermedio', levelId: 2 },
				{ name: 'Java', level: 'Intermedio', levelId: 2 },
				{ name: 'Spring Boot', level: 'Básico', levelId: 1 },
				{ name: 'JavaScript', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Frontend',
			icon: 'frontend',
			skills: [
				{ name: 'React', level: 'Intermedio', levelId: 2 },
				{ name: 'Angular', level: 'Intermedio', levelId: 2 },
				{ name: 'Vue.js', level: 'Básico', levelId: 1 },
				{ name: 'HTML / CSS', level: 'Intermedio', levelId: 2 },
				{ name: 'Tailwind CSS', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Bases de Datos',
			icon: 'database',
			skills: [
				{ name: 'PostgreSQL', level: 'Intermedio', levelId: 2 },
				{ name: 'MySQL', level: 'Intermedio', levelId: 2 },
				{ name: 'MongoDB', level: 'Básico', levelId: 1 },
				{ name: 'Redis', level: 'Básico', levelId: 1 },
			],
		},
		{
			title: 'Herramientas',
			icon: 'tools',
			skills: [
				{ name: 'Git / GitHub', level: 'Avanzado', levelId: 3 },
				{ name: 'Docker', level: 'Intermedio', levelId: 2 },
				{ name: 'Jira', level: 'Intermedio', levelId: 2 },
				{ name: 'Notion', level: 'Avanzado', levelId: 3 },
			],
		},
		{
			title: 'Diseño & Edición',
			icon: 'design',
			skills: [
				{ name: 'Photoshop', level: 'Intermedio', levelId: 2 },
				{ name: 'Illustrator', level: 'Básico', levelId: 1 },
				{ name: 'After Effects', level: 'Básico', levelId: 1 },
				{ name: 'CapCut', level: 'Avanzado', levelId: 3 },
			],
		},
		{
			title: 'Sistemas',
			icon: 'other',
			skills: [
				{ name: 'Ofimática', level: 'Avanzado', levelId: 3 },
				{ name: 'Windows', level: 'Avanzado', levelId: 3 },
				{ name: 'Linux', level: 'Básico', levelId: 1 },
				{ name: 'Redes', level: 'Básico', levelId: 1 },
			],
		},
	];

	softSkills = ['Trabajo en equipo', 'Comunicación asertiva', 'Manejo del estrés', 'Solución de problemas', 'Responsabilidad', 'Aprendizaje continuo'];
}