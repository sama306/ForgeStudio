# Funcionalidades, Accesibilidad y SEO — Forge Studio

## Funcionalidades core

- [ ] Dark Mode / Light Mode (con persistencia de preferencia)
- [ ] Scroll suave con Lenis
- [ ] Responsive completo (mobile-first)
- [ ] SEO optimizado
- [ ] Open Graph (meta tags por página)
- [ ] Twitter Cards
- [ ] Sitemap (`sitemap.xml` generado por Astro)
- [ ] `robots.txt`
- [ ] Accesibilidad (ARIA, navegación por teclado, focus states visibles)
- [ ] Optimización de imágenes (formatos modernos, `astro:assets`)
- [ ] Lazy loading de imágenes y componentes no críticos
- [ ] Componentes reutilizables (ver `architecture.md`)

## Accesibilidad — checklist obligatorio

La accesibilidad **no es opcional ni un extra**: es uno de los objetivos
explícitos de Lighthouse (100/100) y del proyecto en general.

- Todo elemento interactivo (botón, link, toggle) debe tener:
  - Estado de `:focus-visible` claramente visible (no solo `:hover`).
  - Atributos ARIA correctos cuando el rol no es nativo (ej. menú custom,
    toggle de tema).
  - Tamaño de zona táctil mínimo razonable en mobile (~44px).
- Navegación 100% operable por teclado: `Tab`, `Shift+Tab`, `Enter`,
  `Space`, `Esc` donde corresponda (cerrar menú, modal, etc.).
- Contraste de color verificado contra los tokens de `design-system.md`.
- Imágenes con `alt` descriptivo (vacío `alt=""` solo si es decorativa).
- Jerarquía de encabezados (`h1`–`h6`) lógica y sin saltos.
- `prefers-reduced-motion` respetado en todas las animaciones (ver
  `animations.md`).
- El cursor personalizado y otros efectos visuales **no deben romper** la
  usabilidad para quienes navegan por teclado o usan lectores de pantalla.

## SEO — checklist obligatorio

- Meta `title` y `description` únicos por página.
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`,
  `og:type`.
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`,
  `twitter:image`.
- `sitemap.xml` generado automáticamente (integración oficial de Astro).
- `robots.txt` permitiendo indexación completa del sitio de portfolio.
- URLs limpias y semánticas (`/work`, `/services`, `/about`, `/contact`).
- HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).

## Objetivos de Lighthouse

| Métrica | Objetivo |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Cómo proteger Performance mientras se agregan animaciones

- Animaciones con CSS/`transform`/`opacity` siempre que sea posible (evitar
  animar propiedades que disparen layout/reflow).
- GSAP y Framer Motion deben cargarse solo en las islas que los necesitan,
  no globalmente en el bundle principal.
- Imágenes servidas en formatos modernos (WebP/AVIF) vía `astro:assets`,
  con dimensiones explícitas para evitar layout shift (CLS).
- Fuentes con `font-display: swap` y precarga de las fuentes críticas del
  hero.
- Lenis y el cursor personalizado deben inicializarse de forma diferida
  (`client:idle` / después de hidratación) cuando no afecten el LCP.

## Definición de "hecho" para cualquier sección nueva

Una sección/componente no se considera terminado hasta que cumple:

1. Responsive verificado en mobile, tablet y desktop.
2. Accesible por teclado y con foco visible.
3. Animaciones respetan `prefers-reduced-motion`.
4. No introduce regresiones en Lighthouse (verificar antes de dar por
   cerrada la tarea).
