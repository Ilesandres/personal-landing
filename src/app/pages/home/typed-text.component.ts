import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-typed-text',
	templateUrl: './typed-text.component.html',
	styleUrl: './typed-text.component.scss',
})
export class TypedTextComponent implements OnInit, OnDestroy {
	@Input() words: string[] = [];
	@Input() typingSpeed = 85;
	@Input() deletingSpeed = 45;
	@Input() holdDelay = 1700;

	text = '';
	longest = '';

	private timer: ReturnType<typeof setTimeout> | undefined;

	ngOnInit(): void {
		// Guarda el word más largo como placeholder para mantener la altura estable.
		this.longest = [...this.words].sort((a, b) => b.length - a.length)[0] ?? '';
		if (!this.words.length) return;
		this.typeWord(0);
	}

	ngOnDestroy(): void {
		if (this.timer) clearTimeout(this.timer);
	}

	private typeWord(index: number): void {
		const word = this.words[index % this.words.length];
		this.typeLoop(word, 0, () => {
			this.timer = setTimeout(() => this.deleteLoop(word, word.length, () => this.typeWord(index + 1)), this.holdDelay);
		});
	}

	private typeLoop(word: string, pos: number, done: () => void): void {
		if (pos <= word.length) {
			this.text = word.slice(0, pos);
			this.timer = setTimeout(() => this.typeLoop(word, pos + 1, done), this.typingSpeed);
		} else {
			done();
		}
	}

	private deleteLoop(word: string, pos: number, done: () => void): void {
		if (pos >= 0) {
			this.text = word.slice(0, pos);
			this.timer = setTimeout(() => this.deleteLoop(word, pos - 1, done), this.deletingSpeed);
		} else {
			done();
		}
	}
}