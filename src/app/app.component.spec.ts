import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
			providers: [provideRouter([])],
		}).compileComponents();
	});

	it('se crea el componente', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('renderiza la shell con header, ruta y footer', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('app-header')).toBeTruthy();
		expect(compiled.querySelector('router-outlet')).toBeTruthy();
		expect(compiled.querySelector('app-footer')).toBeTruthy();
	});
});