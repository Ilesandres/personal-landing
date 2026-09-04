# Andres Iles — Portafolio Personal

Landing page / portafolio multipágina de **Andres Iles**, desarrollador backend especializado en NestJS, Node.js y el ecosistema Java.

Construido con **Angular 19** (standalone components, lazy loading) y **Tailwind CSS v4**, con paleta oscura profesional (indigo + cyan).

## Páginas

- `/` — Inicio con hero, roles animados, estadísticas en vivo de GitHub y proyectos destacados.
- `/about` — Biografía, educación y línea de tiempo de experiencia profesional.
- `/skills` — Habilidades técnicas por categoría y habilidades blandas.
- `/projects` — Repositorios en vivo desde GitHub con búsqueda y filtro por lenguaje.
- `/organization` — Perfil de la organización **WaveSystems** (AIWaveSystems).
- `/contact` — Canales de contacto y descarga de la hoja de vida.
- cualquier ruta — Página 404.

## Características técnicas

- Tailwind CSS v4 con `@tailwindcss/postcss` y design tokens propios (`src/app/styles/tailwind.css`).
- Rutas lazy-loaded por página (`loadComponent`).
- Servicio `GithubService` que consume la API pública de GitHub con caché (`shareReplay`) y `provideHttpClient(withFetch())`.
- Datos personales centralizados en `src/app/core/data/profile.ts` (incluye el enlace siempre actualizado del CV).
- Banners SVG generados para los proyectos en `src/assets/img/projects/`.
- SEO básico: `lang="es"`, meta description, Open Graph y favicon propio.

## Development server

```bash
npm start
```

Servidor en `http://localhost:4200/` con recarga en caliente.

## Build

```bash
npm run build
```

Producción optimizado en `dist/landing-andres`.

## Tests unitarios

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

## Estructura relevante

```
src/
├─ index.html                  # idioma, SEO y fuentes (Inter + JetBrains Mono)
├─ app/
│  ├─ app.routes.ts            # rutas con lazy loading y títulos
│  ├─ core/
│  │  ├─ data/profile.ts       # datos personales y enlaces
│  │  ├─ models/github.ts      # tipos de la API de GitHub
│  │  ├─ services/github.service.ts
│  │  └─ utils/banner.ts       # mapeo banner SVG ↔ repo
│  ├─ layout/                  # header (menú activo + móvil) y footer
│  ├─ pages/                   # home, about, skills, projects, organization, contact, not-found
│  └─ styles/tailwind.css      # tema y tokens (Tailwind v4)
└─ assets/img/                 # banners SVG, logo WaveSystems y foto de perfil
```