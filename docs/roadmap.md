# Roadmap — Forge Studio

## Objetivo final del proyecto

El proyecto debe transmitir la sensación de una agencia digital real y de
alto nivel, priorizando **calidad visual, experiencia de usuario y
excelencia técnica por encima de la cantidad de funcionalidades**.

Debe convertirse en una pieza principal del portfolio y demostrar dominio
en:

- Arquitectura de componentes
- Diseño UI moderno
- Animaciones avanzadas
- Responsive Design
- Optimización
- Accesibilidad
- SEO
- Buenas prácticas de desarrollo

## Fase 1 — MVP (obligatorio)

Landing page (`index.astro`) completa con todas las secciones de
`site-structure.md`, paleta y tipografía de `design-system.md`,
animaciones core de `animations.md`, y checklist de
`features-and-seo.md` cumplido.

## Fase 2 — Páginas adicionales

En orden de prioridad sugerido (ajustable según tiempo disponible):

1. `work.astro` — listado de proyectos
2. `services.astro` — detalle de servicios
3. `about.astro`
4. `contact.astro` — formulario funcional (integración simple, ej.
   Formspree, o simulación con feedback visual si no se conecta backend)

## Fase 3 — Extras (si el tiempo lo permite)

- Estudios de caso individuales para cada proyecto (rutas dinámicas con
  content collections de MDX).
- Blog utilizando MDX.
- Transiciones animadas entre páginas (Astro View Transitions).
- Preloader elegante en la primera carga.
- Cursor personalizado (si no se hizo en Fase 1).
- Menú de navegación con animaciones avanzadas.
- Transición suave en el cambio de tema Dark/Light.

## No-objetivos (explícitamente fuera de scope)

- Backend real / base de datos.
- Autenticación de usuarios.
- Panel de administración para gestionar proyectos/testimonios.
- Cualquier funcionalidad que no aporte a la narrativa de "landing page de
  agencia premium".

Si surge la tentación de agregar funcionalidades nuevas no contempladas
acá, evaluar primero si suman a los objetivos de Lighthouse y a la
percepción de "empresa real" antes de implementarlas.
