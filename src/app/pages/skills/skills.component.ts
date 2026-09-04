import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';

interface Skill {
	name: string;
	level: string;
	levelId: 1 | 2 | 3;
}

interface SkillCategory {
	title: string;
	icon: 'backend' | 'frontend' | 'mobile' | 'games' | 'database' | 'tools';
	skills: Skill[];
}

@Component({
	standalone: true,
	selector: 'app-skills',
	imports: [RevealDirective],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	categories: SkillCategory[] = [
		{
			title: 'Backend',
			icon: 'backend',
			skills: [
				{ name: 'NestJS', level: 'Avanzado · Principal', levelId: 3 },
				{ name: 'Node.js', level: 'Avanzado', levelId: 3 },
				{ name: 'TypeScript', level: 'Avanzado', levelId: 3 },
				{ name: 'JavaScript', level: 'Avanzado', levelId: 3 },
				{ name: 'Java', level: 'Intermedio', levelId: 2 },
				{ name: 'Spring Boot', level: 'Intermedio', levelId: 2 },
				{ name: 'Python', level: 'Básico', levelId: 1 },
				{ name: 'Integraciones con IA', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Frontend',
			icon: 'frontend',
			skills: [
				{ name: 'Angular', level: 'Avanzado · Principal', levelId: 3 },
				{ name: 'React', level: 'Intermedio', levelId: 2 },
				{ name: 'React Router', level: 'Intermedio', levelId: 2 },
				{ name: 'Vite', level: 'Intermedio', levelId: 2 },
				{ name: 'HTML / CSS', level: 'Avanzado', levelId: 3 },
				{ name: 'Tailwind CSS', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Mobile',
			icon: 'mobile',
			skills: [
				{ name: 'Flutter', level: 'Intermedio', levelId: 2 },
				{ name: 'React Native', level: 'Intermedio', levelId: 2 },
				{ name: 'React Navigation', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Videojuegos',
			icon: 'games',
			skills: [
				{ name: 'Godot', level: 'Intermedio · 2D y 3D', levelId: 2 },
				{ name: 'GDScript', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Bases de Datos',
			icon: 'database',
			skills: [
				{ name: 'PostgreSQL', level: 'Intermedio', levelId: 2 },
				{ name: 'MySQL', level: 'Intermedio', levelId: 2 },
				{ name: 'MariaDB', level: 'Intermedio', levelId: 2 },
				{ name: 'MongoDB', level: 'Básico', levelId: 1 },
				{ name: 'Cassandra', level: 'Básico', levelId: 1 },
				{ name: 'Neo4j', level: 'Intermedio', levelId: 2 },
				{ name: 'Redis', level: 'Básico', levelId: 1 },
			],
		},
		{
			title: 'Herramientas y Control de Versiones',
			icon: 'tools',
			skills: [
				{ name: 'Git / GitHub', level: 'Avanzado', levelId: 3 },
				{ name: 'Docker', level: 'Intermedio', levelId: 2 },
				{ name: 'Jira', level: 'Intermedio', levelId: 2 },
				{ name: 'Notion', level: 'Avanzado', levelId: 3 },
			],
		},
	];

	extraTools = ['Photoshop', 'Illustrator', 'After Effects', 'CapCut', 'WordPress', 'Ofimática', 'Windows', 'Linux', 'Redes'];

	softSkills = ['Trabajo en equipo', 'Comunicación asertiva', 'Manejo del estrés', 'Solución de problemas', 'Responsabilidad', 'Aprendizaje continuo'];
}