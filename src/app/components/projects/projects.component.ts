import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      title: 'Trash runner game',
      description: 'juego 3d estilo shooter endless runner desarrollado en godot.',
      image: 'assets/img/trash-runner-game.png',
      primaryLabel: 'Project Showcase',
      primaryHref: '#',
      secondaryLabel: 'View Code',
      secondaryHref: 'https://github.com/Ilesandres/game-recolections'
    },
    {
      title: 'DonacionApp',
      description: 'Fullstack app with comunicacion en tienpo real y localizaciones de determinadas organizaciones',
      image: 'assets/img/donarapp.png',
      primaryLabel: 'Video Demo',
      primaryHref: '#',
      secondaryLabel: 'View Code',
      secondaryHref: 'https://github.com/orgs/DonacionApp/repositories'
    },
    {
      title: 'Notedesk',
      description: 'Fullstack app con comunicacion en tiempo real de guardado de notas',
      image: 'assets/img/noteDesk-app.png',
      primaryLabel: 'Video Demo',
      primaryHref: '#',
      secondaryLabel: 'View Code',
      secondaryHref: 'https://github.com/Ilesandres/notesDesk?tab=readme-ov-file'
    },
    {
      title: 'Rick and Morty-landing',
      description: 'landing de personajes de rick y motry',
      image: 'assets/img/rick-motry-landing.png',
      primaryLabel: 'Project Showcase',
      primaryHref: 'https://ilesandres.github.io/charctersMorty/',
      secondaryLabel: 'View Code',
      secondaryHref: 'https://github.com/Ilesandres/charctersMorty'
    },
    {
      title: 'Balanceapp',
      description: 'full estack app para llevar el control de gastos e ingresos en flutter y firebase',
      image: 'assets/img/balanceapp-android.png',
      primaryLabel: 'Video Demo',
      primaryHref: '#',
      secondaryLabel: 'View Code',
      secondaryHref: 'https://github.com/Ilesandres/balanceapp'
    },
    {
      title: 'Mas Proyecots',
      description: 'mas proyectos en mi github',
      image: 'assets/img/github.png',
      primaryLabel: 'Video Demo',
      primaryHref: '#',
      secondaryLabel: 'View Code',
      secondaryHref: 'https://github.com/Ilesandres'
    }
  ];

  current = 0;
  intervalId: any = null;
  paused = false;
  touchStartX = 0;
  touchEndX = 0;

  ngOnInit() {
    this.intervalId = setInterval(() => { if (!this.paused) this.next(); }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  prev() {
    this.current = (this.current - 1 + this.projects.length) % this.projects.length;
  }

  next() {
    this.current = (this.current + 1) % this.projects.length;
  }

  goTo(index: number) {
    this.current = index % this.projects.length;
  }

  pause() { this.paused = true; }
  resume() { this.paused = false; }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }

  onTouchStart(e: TouchEvent) { this.touchStartX = e.touches[0].clientX; }
  onTouchMove(e: TouchEvent) { this.touchEndX = e.touches[0].clientX; }
  onTouchEnd() {
    const delta = this.touchStartX - this.touchEndX;
    const threshold = 50;
    if (delta > threshold) this.next();
    else if (delta < -threshold) this.prev();
  }
}
