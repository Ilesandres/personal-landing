import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Andres Iles · Desarrollador Backend',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'about',
		title: 'Sobre mí · Andres Iles',
		loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
	},
	{
		path: 'skills',
		title: 'Habilidades · Andres Iles',
		loadComponent: () => import('./pages/skills/skills.component').then((m) => m.SkillsComponent),
	},
	{
		path: 'projects',
		title: 'Proyectos · Andres Iles',
		loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
	},
	{
		path: 'organization',
		title: 'WaveSystems · Andres Iles',
		loadComponent: () => import('./pages/organization/organization.component').then((m) => m.OrganizationComponent),
	},
	{
		path: 'contact',
		title: 'Contacto · Andres Iles',
		loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
	},
	{
		path: '**',
		title: 'Página no encontrada',
		loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
	},
];