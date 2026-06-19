# Design System — Forge Studio

Este documento define la identidad visual completa del proyecto. Cualquier
componente o página que se construya debe respetar estas reglas antes que
preferencias personales de estilo.

## Concepto

Forge representa la idea de **crear, construir y perfeccionar** productos
digitales. La identidad debe transmitir:

- Elegancia
- Profesionalismo
- Minimalismo
- Tecnología
- Creatividad

El tono visual general es **oscuro, premium y técnico**, con un único acento
cálido que funciona como "el fuego de la forja".

## Paleta de colores

### Principal

| Token | Hex | Uso |
|---|---|---|
| `--color-bg` | `#0B0B0B` | Fondo principal (negro profundo) |
| `--color-surface` | `#121212` | Fondo de cards / secciones elevadas |
| `--color-text` | `#FFFFFF` | Texto principal |
| `--color-muted` | `#A0A0A0` | Texto secundario, labels, subtítulos |

### Acento

| Token | Hex | Uso |
|---|---|---|
| `--color-accent` | `#FF6B00` | CTAs, hovers, glows, detalles destacados |

> El acento se usa con moderación. Es un disparador visual, no un color de
> relleno. Preferir glow/sombra sutil con el acento antes que superficies
> sólidas grandes en `#FF6B00`.

### Reglas de contraste

- Todo texto sobre `--color-bg` o `--color-surface` debe cumplir **WCAG AA**
  como mínimo (idealmente AAA en textos largos).
- El acento naranja sobre negro cumple contraste para texto grande/UI, pero
  **no usarlo como color de texto de párrafo largo**.

## Tipografía

### Familias recomendadas (en orden de preferencia)

1. Space Grotesk
2. General Sans
3. Satoshi
4. Clash Display
5. Inter

Usar **Space Grotesk** o **Clash Display** para títulos (`h1`–`h3`) y
**Inter** o **General Sans** para cuerpo de texto, si se decide combinar dos
familias.

### Características obligatorias

- Títulos grandes (escala tipográfica agresiva, ej. `clamp()` para hero).
- Mucho espacio en blanco (whitespace generoso entre secciones).
- Alto contraste tipográfico entre títulos y texto secundario.

### Escala sugerida (referencia, ajustable)

```
--text-hero:   clamp(2.5rem, 8vw, 7rem)
--text-h1:     clamp(2rem, 5vw, 4rem)
--text-h2:     clamp(1.5rem, 3vw, 2.5rem)
--text-body:   1rem
--text-small:  0.875rem
```

## Fondo y atmósfera

- Grain muy sutil (textura de ruido, opacidad baja, no debe distraer).
- Glow suave en zonas clave (hero, botones, hover de cards).
- Pequeños efectos de iluminación radial detrás de elementos centrales.

Estos efectos deben implementarse de forma performante (CSS/SVG livianos,
sin imágenes pesadas) para no afectar el puntaje de Lighthouse.

## Modo claro / oscuro

El sitio nace **dark-first**, pero debe soportar light mode con transición
suave. En light mode:

- Invertir la jerarquía de negros a blancos sin perder el contraste ni el
  carácter "premium" de la marca.
- El acento `#FF6B00` se mantiene igual en ambos modos.
- La transición entre temas debe ser animada (no un cambio abrupto).

## Principios de uso

- Preferir composición con espacio negativo antes que llenar la pantalla.
- Cada sección debe tener una jerarquía visual clara: un elemento
  protagonista, el resto de soporte.
- Evitar gradientes genéricos o efectos "stock". Todo glow/sombra debe
  sentirse intencional y de marca.
