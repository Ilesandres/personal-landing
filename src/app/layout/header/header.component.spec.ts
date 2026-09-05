import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderComponent],
			providers: [provideRouter([])],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		fixture.detectChanges();
	});

	it('se crea el componente', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});

	it('incluye el enlace al CV siempre actualizado', () => {
		const el = fixture.nativeElement as HTMLElement;
		const cvLink = [...el.querySelectorAll('a')].find((anchor) => anchor.textContent?.includes('Descargar CV'));
		expect(cvLink?.getAttribute('href')).toContain('drive.google.com');
	});

	it('abre el menú móvil al pulsar el botón', () => {
		const el = fixture.nativeElement as HTMLElement;
		const button = el.querySelector('button') as HTMLButtonElement;
		button.click();
		fixture.detectChanges();
		expect(el.querySelector('nav[aria-label="Navegación móvil"]')).toBeTruthy();
	});
});