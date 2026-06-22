# Forge Studio

> Designing Digital Experiences That Convert.

Landing page premium de **Forge Studio**, una marca ficticia de estudio
creativo especializado en diseño, desarrollo web y branding. El proyecto
simula un producto real de nivel profesional, demostrando dominio de **Astro**, **Tailwind CSS**,
animaciones avanzadas, accesibilidad y optimización.

## ✅ Proyecto finalizado

Todas las fases del [roadmap](./docs/roadmap.md) fueron completadas. El
proyecto está listo para deploy y revisión.

### Funcionalidades implementadas

| Categoría | Detalle |
|---|---|
| **Landing page** | Hero, Clients (carrusel infinito), Services, Process, Projects, Stats, Testimonials, CTA |
| **Páginas adicionales** | Work (listado), Services, About, Contact — cada una con animaciones y diseño propio |
| **Case studies** | 4 proyectos en `content/projects/` con rutas dinámicas (`/work/[slug]`) |
| **Dark/Light mode** | Persistencia en `localStorage`, toggle en navbar, sin flash (script inline) |
| **Animaciones** | GSAP + ScrollTrigger en Hero, Stats, Projects, Process, Contact y utilidad `textReveal` |
| **Scroll suave** | Lenis como fuente de verdad del scroll, sincronizado con ScrollTrigger |
| **Formulario de contacto** | Validación client-side, feedback visual y envío a Formspree (`PUBLIC_FORMSPREE_ENDPOINT`) |
| **Páginas legales** | Términos y Privacidad, con mención de Formspree en la política de privacidad |
| **SEO** | Open Graph, Twitter Cards, `sitemap.xml` (`@astrojs/sitemap`), `robots.txt`, URLs semánticas |
| **Accesibilidad** | ARIA, foco visible, navegación por teclado, `prefers-reduced-motion`, HTML semántico |
| **Responsive** | Mobile-first, menú hamburguesa con overlay animado |
| **Performance** | Fuentes con `swap`, Lenis diferido, animaciones con `transform`/`opacity` |

## Stack

- [Astro](https://astro.build)
- TypeScript
- Tailwind CSS v4
- GSAP (animaciones)
- Lenis (scroll suave)
- Astro Icon
- Zod (validación de contenido)
- Deploy: Vercel

## Requisitos

- Node.js 18+
- **pnpm** como package manager (no usar `npm` ni `yarn` en este repo)

## Instalación

```bash
pnpm install
```

## Scripts

```bash
pnpm dev          # entorno de desarrollo
pnpm build        # build de producción
pnpm preview      # preview del build
pnpm astro check  # chequeo de tipos / errores de Astro
```

## Estructura del proyecto

```
src/
├── assets/
├── components/    # Hero, Clients, Services, Process, Projects, Stats, Testimonials, CTA, Navbar, Footer, ProjectCard
├── layouts/       # Layout.astro (SEO, fuentes, Lenis, grain overlay)
├── pages/         # index, work, work/[slug], services, about, contact, terms, privacy
├── styles/        # global.css (paleta, tipografía, tokens)
├── content/
│   └── projects/  # atlas, lunar, nova, pulse (MD)
└── utils/         # lenis.ts, textReveal.ts, services.ts
```

Ver detalle completo en [`docs/architecture.md`](./docs/architecture.md).

## Documentación

Toda la documentación de producto, diseño y arquitectura vive en
[`docs/`](./docs):

| Archivo | Contenido |
|---|---|
| [`docs/design-system.md`](./docs/design-system.md) | Paleta, tipografía, identidad visual |
| [`docs/architecture.md`](./docs/architecture.md) | Stack, estructura de carpetas, convenciones |
| [`docs/site-structure.md`](./docs/site-structure.md) | Secciones de la landing, copy, contenido |
| [`docs/animations.md`](./docs/animations.md) | Especificación de animaciones por elemento |
| [`docs/features-and-seo.md`](./docs/features-and-seo.md) | Funcionalidades, accesibilidad, SEO, objetivos de Lighthouse |
| [`docs/roadmap.md`](./docs/roadmap.md) | Fases del proyecto y extras opcionales |

Si vas a trabajar en este repo con un agente de código (opencode, Claude
Code, etc.), también leé [`AGENTS.md`](./AGENTS.md).

## Objetivos de Lighthouse

| Métrica | Objetivo |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

> Para verificar los puntajes reales, correr `pnpm build && pnpm preview`
> y analizar con Lighthouse en modo incógnito.

## Licencia

Proyecto de portfolio personal. Sin licencia pública definida.
