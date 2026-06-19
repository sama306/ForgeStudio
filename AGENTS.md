# AGENTS.md

Instrucciones para agentes de código (opencode y similares) trabajando en
el repositorio **Forge Studio**. Leer este archivo completo antes de tocar
cualquier código.

## Qué es este proyecto

Landing page de portfolio que simula la marca ficticia "Forge Studio", un
estudio creativo. El objetivo es demostrar dominio técnico avanzado
(Astro, Tailwind, animaciones, accesibilidad, performance) construyendo
algo que se sienta como una agencia digital real de alto nivel.

**Prioridad implícita en todo el proyecto:** calidad visual y técnica por
encima de cantidad de funcionalidades. Ante cualquier ambigüedad, elegir
la opción más pulida y sutil, no la más vistosa o la más rápida de
implementar.

## Documentación de referencia obligatoria

Antes de generar o modificar código, consultar el archivo correspondiente:

| Tarea | Leer primero |
|---|---|
| Colores, tipografía, identidad visual | `docs/design-system.md` |
| Stack, carpetas, convenciones de componentes | `docs/architecture.md` |
| Copy, contenido y orden de secciones | `docs/site-structure.md` |
| Cualquier animación/microinteracción | `docs/animations.md` |
| Accesibilidad, SEO, checklist de Lighthouse | `docs/features-and-seo.md` |
| Qué hacer primero / qué queda para después | `docs/roadmap.md` |

No improvisar paleta de colores, tipografía ni estructura de carpetas:
ya están definidas. Si algo no está cubierto por la documentación, resolver
de la forma más consistente posible con el resto del proyecto y, si es una
decisión de diseño relevante, dejarlo explícito en el mensaje de commit o
en el PR.

## Stack y comandos

- Package manager: **pnpm** — nunca generar `package-lock.json` ni
  `yarn.lock`. Usar siempre `pnpm install`, `pnpm add`, `pnpm dlx`.
- Framework: Astro + TypeScript + Tailwind CSS.
- Animación: GSAP para timelines/scroll, Framer Motion solo dentro de
  islas React cuando se necesite algo declarativo.
- Scroll: Lenis es la fuente de verdad del scroll del sitio; las
  animaciones basadas en scroll deben sincronizarse con él, no con el
  scroll nativo.

Comandos esperados (ver `package.json` real una vez generado):

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm astro check
```

## Reglas de código

1. **TypeScript estricto.** No usar `any` salvo justificación explícita en
   comentario. Tipar props de componentes.
2. **Componentes en Astro por defecto.** Convertir a isla (React/Vue) solo
   cuando se necesite estado/interactividad en cliente que Astro puro no
   pueda resolver. Usar la directiva de hidratación más perezosa posible
   (`client:visible` > `client:idle` > `client:load`).
3. **Tailwind como sistema de estilos principal.** Los tokens de color y
   tipografía de `docs/design-system.md` deben reflejarse en
   `tailwind.config` (o equivalente), no hardcodearse como strings sueltos
   repetidos por todo el código.
4. **Un componente, una carpeta.** Seguir la convención de
   `docs/architecture.md` (`components/<Nombre>/<Nombre>.astro`, etc.).
5. **Nada de contenido hardcodeado que debería ser data.** Proyectos,
   testimonios, servicios y estadísticas viven en `src/content/` (content
   collections) o en archivos de datos tipados, no como arrays inline
   dentro del componente de UI.
6. **Performance primero.** Antes de agregar una librería nueva, evaluar
   si ya hay una equivalente en el stack. No agregar dependencias pesadas
   sin necesidad clara.
7. **Accesibilidad no negociable.** Todo elemento interactivo nuevo debe
   cumplir el checklist de `docs/features-and-seo.md` (foco visible, ARIA,
   operable por teclado).
8. **Respetar `prefers-reduced-motion`** en cualquier animación nueva.

## Flujo de trabajo esperado

1. Identificar en qué fase del `docs/roadmap.md` cae la tarea pedida.
2. Si la tarea es una sección nueva de la landing, revisar su definición en
   `docs/site-structure.md` y sus animaciones en `docs/animations.md`
   antes de escribir markup.
3. Implementar el componente siguiendo `docs/architecture.md`.
4. Verificar accesibilidad y responsive antes de considerar la tarea
   terminada (ver "Definición de hecho" en `docs/features-and-seo.md`).
5. No introducir regresiones de Lighthouse. Si una animación o librería
   nueva impacta negativamente el performance, buscar una alternativa más
   liviana antes de hacer trade-offs silenciosos.

## Qué NO hacer

- No usar npm/yarn.
- No usar assets de marca reales de empresas (Spotify, Adobe, Google,
  etc.) mencionadas como referencia de estilo en `docs/site-structure.md`
  — son placeholders de escala/diseño, no logos a reproducir tal cual.
- No agregar backend, autenticación ni base de datos: está fuera de scope
  según `docs/roadmap.md`.
- No reescribir la paleta de colores, tipografía o estructura de carpetas
  sin que se pida explícitamente.
- No animar todo "porque se puede". Cada animación debe estar justificada
  por `docs/animations.md` o ser una mejora consistente con ese mismo
  espíritu de sutileza.

## Convención de commits (sugerida)

```
feat(hero): agrega animación de reveal por línea
fix(navbar): corrige contraste de foco en modo oscuro
docs(readme): actualiza instrucciones de instalación
```

Usar prefijos `feat`, `fix`, `style`, `docs`, `refactor`, `perf`, `chore`
cuando sea posible, con el nombre del componente/sección entre paréntesis.
