import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
	let fixture: ComponentFixture<NotFoundComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NotFoundComponent],
			providers: [provideRouter([])],
		}).compileComponents();

		fixture = TestBed.createComponent(NotFoundComponent);
		fixture.detectChanges();
	});

	it('muestra el código 404', () => {
		const el = fixture.nativeElement as HTMLElement;
		expect(el.textContent).toContain('404');
	});

	it('ofrece un enlace para volver al inicio', () => {
		const el = fixture.nativeElement as HTMLElement;
		const homeLink = [...el.querySelectorAll('a')].find((anchor) => anchor.textContent?.includes('Volver al inicio'));
		expect(homeLink?.getAttribute('href')).toBe('/');
	});
});