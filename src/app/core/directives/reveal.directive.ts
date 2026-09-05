import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
	standalone: true,
	selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit {
	private readonly el: HTMLElement;

	constructor(elementRef: ElementRef<HTMLElement>) {
		this.el = elementRef.nativeElement;
	}

	ngAfterViewInit(): void {
		if (typeof IntersectionObserver === 'undefined') {
			this.el.classList.add('is-visible');
			return;
		}
		this.el.classList.add('reveal');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.12 },
		);
		observer.observe(this.el);
	}
}