import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';

interface Skill {
	name: string;
	level: string;
	levelId: 1 | 2 | 3;
	icon?: string;
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
				{ name: 'NestJS', level: 'Avanzado · Principal', levelId: 3, icon: 'nestjs' },
				{ name: 'Node.js', level: 'Avanzado', levelId: 3, icon: 'nodedotjs' },
				{ name: 'TypeScript', level: 'Avanzado', levelId: 3, icon: 'typescript' },
				{ name: 'JavaScript', level: 'Avanzado', levelId: 3, icon: 'javascript' },
				{ name: 'Java', level: 'Intermedio', levelId: 2, icon: 'openjdk' },
				{ name: 'Spring Boot', level: 'Intermedio', levelId: 2, icon: 'springboot' },
				{ name: 'Python', level: 'Básico', levelId: 1, icon: 'python' },
				{ name: 'Integraciones con IA', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Frontend',
			icon: 'frontend',
			skills: [
				{ name: 'Angular', level: 'Avanzado · Principal', levelId: 3, icon: 'angular' },
				{ name: 'React', level: 'Intermedio', levelId: 2, icon: 'react' },
				{ name: 'React Router', level: 'Intermedio', levelId: 2 },
				{ name: 'Vite', level: 'Intermedio', levelId: 2, icon: 'vite' },
				{ name: 'HTML / CSS', level: 'Avanzado', levelId: 3 },
				{ name: 'Tailwind CSS', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Mobile',
			icon: 'mobile',
			skills: [
				{ name: 'Flutter', level: 'Intermedio', levelId: 2, icon: 'flutter' },
				{ name: 'React Native', level: 'Intermedio', levelId: 2 },
				{ name: 'React Navigation', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Videojuegos',
			icon: 'games',
			skills: [
				{ name: 'Godot', level: 'Intermedio · 2D y 3D', levelId: 2, icon: 'godotengine' },
				{ name: 'GDScript', level: 'Intermedio', levelId: 2 },
			],
		},
		{
			title: 'Bases de Datos',
			icon: 'database',
			skills: [
				{ name: 'PostgreSQL', level: 'Intermedio', levelId: 2, icon: 'postgresql' },
				{ name: 'MySQL', level: 'Intermedio', levelId: 2, icon: 'mysql' },
				{ name: 'MariaDB', level: 'Intermedio', levelId: 2, icon: 'mariadb' },
				{ name: 'MongoDB', level: 'Básico', levelId: 1, icon: 'mongodb' },
				{ name: 'Cassandra', level: 'Básico', levelId: 1, icon: 'apachecassandra' },
				{ name: 'Neo4j', level: 'Intermedio', levelId: 2, icon: 'neo4j' },
				{ name: 'Redis', level: 'Básico', levelId: 1, icon: 'redis' },
			],
		},
		{
			title: 'Herramientas y Control de Versiones',
			icon: 'tools',
			skills: [
				{ name: 'Git / GitHub', level: 'Avanzado', levelId: 3, icon: 'git' },
				{ name: 'Docker', level: 'Intermedio', levelId: 2, icon: 'docker' },
				{ name: 'Jira', level: 'Intermedio', levelId: 2, icon: 'jira' },
				{ name: 'Notion', level: 'Avanzado', levelId: 3, icon: 'notion' },
			],
		},
	];

	extraTools = ['Photoshop', 'Illustrator', 'After Effects', 'CapCut', 'WordPress', 'Ofimática', 'Windows', 'Linux', 'Redes'];

	softSkills = ['Trabajo en equipo', 'Comunicación asertiva', 'Manejo del estrés', 'Solución de problemas', 'Responsabilidad', 'Aprendizaje continuo'];
}