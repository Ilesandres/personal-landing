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
      title: 'E-Commerce Backend',
      description: 'NestJS REST API with PostgreSQL, JWT auth and order management.',
      image: 'assets/img/project1.jpg',
      primaryLabel: 'Project Showcase',
      primaryHref: '#',
      secondaryLabel: 'View Code',
      secondaryHref: '#'
    },
    {
      title: 'Project Management Dashboard',
      description: 'Fullstack app with real-time updates and drag-and-drop tasks.',
      image: 'assets/img/project2.jpg',
      primaryLabel: 'Video Demo',
      primaryHref: '#',
      secondaryLabel: 'View Code',
      secondaryHref: '#'
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
