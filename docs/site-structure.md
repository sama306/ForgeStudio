# Estructura del Sitio — Forge Studio

Detalle sección por sección de la landing page principal (`index.astro`).
Cada sección corresponde a una carpeta en `src/components/`.

## 1. Navbar

- Fijo o con comportamiento de aparición/ocultamiento en scroll.
- Toggle de Dark/Light mode.
- Menú con animación (ver `animations.md`).

## 2. Hero

Pantalla completa (`100vh`).

**Contenido:**
- Título principal
- Subtítulo
- Dos botones CTA
- Elemento visual animado (esfera, formas abstractas o composición 3D)

**Copy sugerido:**

```
Forge Studio
Designing Digital Experiences That Convert.
```

**Botones:**
- `View Projects`
- `Let's Talk`

## 3. Clientes

Carrusel de logos (loop infinito, velocidad constante, pausa en hover).

Logos de ejemplo (ficticios o estilizados para el proyecto):
Spotify, Adobe, Google, Sony, Discord, Stripe.

> Estos logos son referencia de estilo/escala únicamente. No se deben usar
> los assets de marca reales de estas empresas — crear versiones propias o
> placeholders neutros para evitar cualquier problema de uso de marca.

## 4. Servicios

Cards grandes con efecto hover (elevación + glow).

Servicios a listar:
- Web Design
- UI/UX Design
- Development
- Brand Identity
- Motion Design
- Strategy

## 5. Nuestro Proceso

Timeline vertical con 5 etapas:

```
Discover → Research → Design → Develop → Launch
```

La línea del timeline se dibuja progresivamente durante el scroll (ver
`animations.md`, sección Timeline).

## 6. Featured Projects

Cards de gran tamaño para proyectos destacados.

Proyectos de ejemplo: Nova, Pulse, Lunar, Atlas.

Cada card puede incluir:
- Imagen
- Categoría
- Breve descripción

## 7. Estadísticas

Contadores animados desde cero al entrar en viewport.

```
+120 Projects
98%  Client Satisfaction
16   Countries
5    Years Experience
```

## 8. Testimonios

Cards elegantes — **evitar sliders tradicionales** (carrusel con flechas
genérico). Preferir layout en grid, scroll horizontal nativo, o stack con
transición sutil.

## 9. Call To Action

Pantalla completa.

```
Let's build
something remarkable.

Start your project →
```

## 10. Footer

Minimalista. Contenido:
- Navegación
- Redes sociales
- Copyright

## Páginas adicionales (fuera del index)

Definidas en `src/pages/`, ver prioridad en `roadmap.md`:

- `about.astro`
- `work.astro`
- `services.astro`
- `contact.astro`
