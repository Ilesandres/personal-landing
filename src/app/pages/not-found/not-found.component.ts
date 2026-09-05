import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
	standalone: true,
	selector: 'app-not-found',
	imports: [RouterLink, RevealDirective],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}