---
target: src/pages/index.astro
total_score: 29
p0_count: 0
p1_count: 0
p2_count: 0
timestamp: 2026-07-30T20-57-05Z
slug: src-pages-index-astro
---
:information_source: **Re-check post-fix**

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Navbar activo, theme toggle. Formulario ahora muestra errores por campo y banner de éxito. |
| 2 | Match System / Real World | 3 | Lenguaje cercano. DevOps sigue siendo técnico para audiencias no técnicas. |
| 3 | User Control and Freedom | 3 | Anclas fluidas, FAQ colapsable, "Ver más" en Tecnologías mobile. |
| 4 | Consistency and Standards | 3 | Encabezados consistentes. Se mantiene la cadencia label + h2 en todas las secciones. |
| 5 | Error Prevention | 3 | Validación por campo en blur/input, mensajes cerca de cada input. |
| 6 | Recognition Rather Than Recall | 3 | Navegación visible, dropdown secundario. |
| 7 | Flexibility and Efficiency | 2 | Sin atajos de teclado adicionales. |
| 8 | Aesthetic and Minimalist Design | 3 | Tecnologías y Proyectos ahora más manejables en mobile. |
| 9 | Error Recovery | 3 | Formulario recupera con re-intento explícito y errores por campo. |
| 10 | Help and Documentation | 3 | FAQ sólida. |
| **Total** | | **29/40** | **Mejorado desde 27/40.** |

## Anti-Patterns Verdict

**¿Se ve AI-generated?** No. El tono personal, los proyectos reales y las decisiones visuales conscientes mantienen la voz propia.

**Deterministic scan (post-fix):**
- `detect.mjs` ahora reporta `[]` — sin findings.
- Se resolvieron: `animate-bounce` en hero, `transition: width` en barras de progreso y timeline, `border-left-width` en Tecnologías, `border-radius: 1px` en timeline, componente `Welcome.astro` residual eliminado.
- Se documentaron colores de mockup fallback en `DESIGN.md` para que no se marquen como drift.

## What Was Fixed

1. **Hero scroll indicator** — `animate-bounce` reemplazado por `heroScroll` basado en `translateY` con `ease-in-out` y respeto a `prefers-reduced-motion`.
2. **Layout property animations** — Barras de progreso en Construyendo ahora usan `transform: scaleX(var(--progress))` en lugar de `width`.
3. **Tecnologías hover** — El cambio de `border-left-width` fue reemplazado por `box-shadow` sutil.
4. **Timeline radius** — `border-radius: 1px` cambiado a `9999px`.
5. **Welcome.astro eliminado** — Componente residual de plantilla Astro con gradient text y colores arbitrarios.
6. **Formulario de contacto** — Errores por campo con borde rojo, validación en blur/input, banner de éxito visible, `aria-invalid`, `aria-describedby`.
7. **Densidad de Tecnologías en mobile** — Solo 4 pills visibles por capa en mobile con botón "Ver más" para expandir.

## Remaining Observations

- El patrón de encabezado (label mono + h2 + párrafo) se repite en 9 secciones. No es un anti-patrón, pero podría beneficiarse de más variedad rítmica.
- La sección "Proyectos" sigue siendo larga en mobile (~3000px); el rediseño parcial de Tecnologías no la afectó.
- No hay footer; el formulario actúa como cierre.
- "Hosting & DevOps" con terminal puede sentirse intimidante para clientes no técnicos.
