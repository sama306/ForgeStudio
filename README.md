# Forge Studio

> Designing Digital Experiences That Convert.

Landing page premium de **Forge Studio**, una marca ficticia de estudio
creativo especializado en diseño, desarrollo web y branding. El proyecto
simula un producto real de nivel profesional y sirve como pieza principal
de portfolio, demostrando dominio de **Astro**, **Tailwind CSS**,
animaciones avanzadas, accesibilidad y optimización.

## Stack

- [Astro](https://astro.build)
- TypeScript
- Tailwind CSS
- GSAP + Framer Motion
- Lenis (scroll suave)
- Astro Icon
- MDX
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
├── components/
├── layouts/
├── pages/
├── styles/
├── content/
└── utils/
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

## Estado del proyecto

🚧 En construcción — ver [`docs/roadmap.md`](./docs/roadmap.md) para el
detalle de fases.

## Licencia

Proyecto de portfolio personal. Sin licencia pública definida.
