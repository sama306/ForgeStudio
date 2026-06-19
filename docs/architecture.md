# Arquitectura — Forge Studio

## Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animaciones | GSAP + Framer Motion |
| Scroll suave | Lenis |
| Íconos | Astro Icon |
| Contenido | MDX |
| Deploy | Vercel |
| Package manager | **pnpm** (obligatorio — no usar npm ni yarn en este repo) |

### Por qué este stack

- **Astro**: islas de interactividad, HTML estático por defecto → ideal para
  Lighthouse 100 en Performance/SEO.
- **GSAP**: control fino de timelines para el hero, el timeline del proceso
  y los contadores animados.
- **Framer Motion**: se usa solo dentro de islas React si se necesitan
  microinteracciones declarativas (hover, layout animations). No mezclar
  ambas librerías de animación en el mismo componente sin justificación.
- **Lenis**: scroll suave global, necesario para que las animaciones de
  scroll (timeline, reveal de texto) se vean fluidas.
- **MDX**: para los case studies de proyectos y el blog (extra, ver
  `roadmap.md`).

## Estructura de carpetas

```
src/
│
├── assets/            # imágenes, SVGs, fuentes locales
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Services/
│   ├── Projects/
│   ├── Process/
│   ├── Stats/
│   ├── Testimonials/
│   ├── CTA/
│   └── Footer/
│
├── layouts/           # layouts base (Layout.astro, etc.)
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── work.astro
│   ├── services.astro
│   └── contact.astro
│
├── styles/            # globals.css, tokens de Tailwind
├── content/           # colecciones MDX (proyectos, blog)
└── utils/             # helpers, animaciones reutilizables, hooks
```

### Convenciones de carpeta por componente

Cada componente bajo `components/<Nombre>/` sigue esta forma mínima:

```
components/Hero/
├── Hero.astro          # markup + composición
├── Hero.module.css     # si se necesita CSS adicional fuera de Tailwind
└── index.ts            # export barrel si aplica
```

Si el componente necesita interactividad pesada (animación con estado,
hooks), se delega a una isla React/Vue dentro de la misma carpeta, por
ejemplo `HeroVisual.tsx`, importada desde el `.astro`.

## Principios de arquitectura

1. **Componentes reutilizables**: ningún bloque de UI se escribe una sola
   vez "a mano" dentro de una página si se repite o podría repetirse.
2. **Astro por defecto, interactividad solo donde se necesita**: usar
   `client:visible` o `client:idle` en islas, nunca `client:load` salvo
   que sea estrictamente necesario (ej. cursor personalizado).
3. **Content collections** para proyectos y blog (`src/content/`), no
   hardcodear arrays de proyectos dentro de componentes.
4. **Utils centralizados**: animaciones de GSAP repetidas (reveal de texto,
   contadores, timeline) viven en `utils/animations/` y se importan, no se
   reescriben por componente.
5. **Sin lógica de negocio real**: es un proyecto de portfolio que simula
   una empresa real. No se conecta a backend real ni base de datos; el
   formulario de contacto puede simularse o integrarse con un servicio
   simple (ej. Formspree) si se decide en el roadmap.

## Variables de entorno

Si se agrega analytics, formulario de contacto real, etc., documentar acá
las variables necesarias en `.env.example`. Mientras no existan, este
archivo no es necesario.
