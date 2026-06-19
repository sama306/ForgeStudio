# Animaciones — Forge Studio

Este documento detalla qué animación va en cada elemento. El objetivo es
que se sienta **fluido y premium**, nunca recargado. Ante la duda entre
"más animación" o "más sutileza", elegir sutileza.

## Reglas generales

- Respetar `prefers-reduced-motion`: toda animación no esencial debe
  desactivarse o reducirse si el usuario lo solicita a nivel sistema.
- Las animaciones de scroll deben sincronizarse con **Lenis**, no con el
  scroll nativo del navegador, para evitar jank.
- Duración típica de microinteracciones: 150–300ms. Animaciones de
  entrada/reveal: 400–800ms con easing tipo `easeOutExpo` o similar.

## Hero

- Aparición línea por línea del título (stagger por línea, no por letra).
- Fade + blur de entrada (de blur a foco, de opacidad 0 a 1).
- El elemento visual (esfera/formas 3D) tiene movimiento idle continuo y
  sutil (flotación, rotación lenta) incluso sin interacción.

## Botones

- Hover magnético: el botón se desplaza levemente hacia el cursor dentro
  de su área de hover (efecto "magnet").
- Escalado leve (`scale(1.03–1.05)`) en hover.
- Glow con el color de acento (`#FF6B00`) en hover/focus.

## Cards (Servicios, Proyectos, Testimonios)

- Elevación (shadow + leve `translateY` negativo) en hover.
- Rotación 3D sutil basada en la posición del cursor (tilt effect), solo en
  desktop / dispositivos con mouse.
- Sombras suaves, nunca duras ni con bordes marcados.

## Texto

- Reveal por palabras durante el scroll (cada palabra aparece con fade +
  pequeño desplazamiento vertical, stagger entre palabras).
- No usar reveal letra por letra (es ruidoso y afecta legibilidad/perf).

## Imágenes

- Animación tipo reveal al entrar en viewport: clip-path o máscara que se
  abre, combinado con leve escala desde `1.05` a `1`.

## Timeline (sección Proceso)

- La línea vertical se dibuja progresivamente (`stroke-dashoffset` o
  técnica equivalente) en sincronía con el progreso de scroll de la
  sección.
- Cada etapa (Discover, Research, Design, Develop, Launch) se activa
  visualmente cuando la línea la alcanza.

## Estadísticas

- Contadores animados desde 0 hasta el valor final cuando la sección entra
  en viewport (usar `IntersectionObserver` + GSAP o lib de counting).
- Ejecutar una sola vez por carga de página (no repetir en cada scroll).

## Cursor personalizado

- Círculo dinámico que sigue al puntero con leve delay/easing (no 1:1
  instantáneo, da sensación de "peso").
- Cambia de tamaño/estado al pasar sobre botones o enlaces (ej. se agranda
  o cambia de color).
- Debe ocultarse en touch devices.

## Fondo

- Grain muy sutil, aplicado como overlay con opacidad baja (no debe
  percibirse como "ruido" sino como textura).
- Glow suave radial detrás de elementos clave (hero, CTA final).
- Pequeños efectos de iluminación que pueden reaccionar levemente al
  scroll o al cursor, sin saturar la composición.

## Transición de tema (Dark/Light)

- Cambio animado, no instantáneo (crossfade o wipe sutil de colores).

## Transiciones entre páginas (extra)

- Si se implementa (`roadmap.md`), usar Astro View Transitions o
  equivalente, manteniendo continuidad visual (no flash blanco entre
  navegaciones).
