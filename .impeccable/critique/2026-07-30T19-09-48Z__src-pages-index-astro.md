---
target: src/pages/index.astro
total_score: 27
p0_count: 0
p1_count: 2
p2_count: 3
timestamp: 2026-07-30T19-09-48Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | El navbar refleja la sección activa; el botón de theme cambia de icono. Falta estado de carga en el formulario de contacto más visible. |
| 2 | Match System / Real World | 3 | Lenguaje cercano y directo. El formulario de contacto usa etiquetas familiares. El término "DevOps" asume algo de conocimiento del visitante. |
| 3 | User Control and Freedom | 3 | Navegación por anclas fluida; FAQ colapsable permite control. No hay "volver arriba" explícito en mobile. |
| 4 | Consistency and Standards | 3 | Encabezados de sección consistentes (label + h2 + párrafo). Algunas tarjetas usan `rounded-2xl`, otras `rounded-xl`; el sistema se siente coherente pero no perfectamente rígido. |
| 5 | Error Prevention | 2 | El formulario tiene validación básica, pero el mensaje de error aparece abajo, lejos del campo problemático. |
| 6 | Recognition Rather Than Recall | 3 | Navegación visible. Los proyectos usan imágenes + títulos. El dropdown "more" esconde secciones secundarias que el usuario puede no recordar. |
| 7 | Flexibility and Efficiency | 2 | Sin atajos de teclado. El scroll es lineal; un visitante que ya conoce el sitio no tiene forma de saltar rápido más allá del navbar. |
| 8 | Aesthetic and Minimalist Design | 3 | Buen uso de espacio y ritmo. La sección "Tecnologías" acumula muchos pills; la sección "Proyectos" es larga en mobile. |
| 9 | Error Recovery | 2 | Mensajes de error genéricos en el formulario; no hay reintentar explícito ni confirmación visual fuerte después de enviar. |
| 10 | Help and Documentation | 3 | FAQ sólida. No hay tooltips ni ayuda contextual para términos técnicos. |
| **Total** | | **27/40** | **Bueno, con margen de mejora en control, errores y eficiencia.** |

## Anti-Patterns Verdict

**Start here. Does this look AI-generated?**

No, en su mayoría no. El tono de voz es personal, los proyectos son reales con detalles específicos, y hay decisiones visuales conscientes (glass solo en navbar, paleta OKLCH coherente, dos modos cuidados). Sin embargo, hay algunos tells que deben atajarse antes de que se sientan genéricos.

**LLM assessment:**
- La estructura general escapa del portfolio dev genérico: no hay foto de perfil enorme, no hay barras de skill, no hay grid de iconos de tecnologías como hero.
- Los encabezados de sección (label mono + h2 grande + párrafo) son una cadencia deliberada, aunque se repite en casi todas las secciones. No es un tiny-uppercase-tracked-eyebrow cliché, pero sí un patrón rígido que podría beneficiarse de más variedad.
- El hero es impactante pero contenido. El botón "Ver proyectos" tiene un glow hover que funciona; el botón "Contáctame" ghost es claro.
- El copy es específico y cercano ("sin drama", "como la palma de mi mano", "luz cálida").

**Deterministic scan:**
- **Hallazgos reales:**
  - `animate-bounce` en el indicador de scroll del hero ([src/components/Hero.astro](src/components/Hero.astro#L103)) — bounce easing no deseado.
  - Transición de `width` en barras de progreso ([src/components/Construyendo.astro](src/components/Construyendo.astro#L172)) y en la línea de progreso de "Cómo Trabajo" — animación de propiedad de layout.
  - `border-radius: 1px` en líneas de timeline ([src/components/ComoTrabajo.astro](src/components/ComoTrabajo.astro#L126-L131)) — fuera de la escala de radios documentada.
  - `gradient text` y colores arbitrarios en [src/components/Welcome.astro](src/components/Welcome.astro) — componente de plantilla Astro no usado en la página, pero sigue en el repo.
- **Hallazgos a considerar (no críticos):**
  - `image hover transform` en tarjetas de proyectos — el detector lo marca, pero un leve scale hover es aceptable si no es el patrón dominante.
  - Colores fuera de DESIGN.md en [src/components/Proyectos.astro](src/components/Proyectos.astro) para mockup fallbacks; deberían mapearse a la paleta o documentarse.

**Visual overlays:**
Se intentó la visualización en navegador con el helper live. El detector del panel identificó 5–6 issues (gradient text, bounce easing, layout property animation, repeating-gradient stripes, image hover transforms, tiny body text). El overlay se mostró en la página, aunque la toolbar de Astro interceptó el primer intento de click y se tuvo que forzar vía script.

## Overall Impression

El portfolio tiene una voz clara y una base visual sólida. El mayor riesgo no es que parezca AI-made, sino que algunos detalles técnicos (bounce easing, animaciones de width, componente Welcome olvidado) desdigan la precisión que el sitio promete. La experiencia móvil es funcional pero larga; el formulario de contacto puede ganar mucho con mejores estados de error/éxito.

## What's Working

1. **Tono de voz auténtico.** Frases como "sin drama", "codeando, no solo leyendo" y "como la palma de mi mano" comunican cercanía sin forzar. Se siente escrito por una persona, no por un template.
2. **Navegación flotante glass.** La island pill es distintiva, bien posicionada y funciona en ambos modos. Es un acierto de "técnico con alma".
3. **Dark/light como iguales.** Ambos temas tienen cuidado equivalente: la paleta se invierte con sentido, los contrastes se mantienen, y `prefers-reduced-motion` está respetado en los componentes animados.

## Priority Issues

**[P1] Bounce easing en el indicador de scroll del hero**
- **What:** El icono de scroll usa `animate-bounce` de Tailwind.
- **Why it matters:** Rompe la promesa de "motion con propósito" y se siente como el efecto por defecto de una plantilla. Además, el detector lo marca como anti-patrón.
- **Fix:** Reemplazar por una animación sutil de `translateY` con `ease-out` o `ease-in-out`, o eliminar la animación y dejar solo el icono estático.
- **Suggested command:** `/impeccable animate hero`

**[P1] Animaciones de propiedades de layout**
- **What:** Barras de progreso en "Construyendo" y la línea de timeline usan `transition: width`.
- **Why it matters:** Causan layout thrash y pueden verse entrecortadas, especialmente en dispositivos de gama media. Contradicen el principio de "precision over decoration".
- **Fix:** Usar `transform: scaleX()` con `transform-origin: left` para las barras de progreso. Para la línea de timeline, usar `transform: scaleX()` en un elemento hijo.
- **Suggested command:** `/impeccable optimize`

**[P2] Componente Welcome.astro residual**
- **What:** [src/components/Welcome.astro](src/components/Welcome.astro) contiene gradient text, colores arbitrarios, fuente Inter y bordes no documentados.
- **Why it matters:** Es código muerto de la plantilla inicial de Astro que contamina el detector y el design system. No se usa en la página, pero sigue siendo parte del repo.
- **Fix:** Eliminar el componente si no se necesita, o reescribirlo completamente bajo el design system actual.
- **Suggested command:** `/impeccable distill`

**[P2] Estados del formulario de contacto poco visibles**
- **What:** El mensaje de error/éxito aparece en `#form-status`, abajo a la izquierda del botón. En mobile puede quedar fuera de la vista del usuario.
- **Why it matters:** Un error de validación no se percibe de inmediato; el usuario no sabe qué corregir sin scrollear o buscar.
- **Fix:** Mostrar el error junto al campo correspondiente, resaltar el input con borde rojo, y usar un toast o banner claro para el estado de éxito.
- **Suggested command:** `/impeccable harden contacto`

**[P2] Sección "Tecnologías" con acumulación visual en mobile**
- **What:** Muchos pills apilados en una lista de tres capas. En viewports estrechos, cada capa genera un bloque denso.
- **Why it matters:** Aumenta la carga cognitiva y alarga el scroll sin aportar jerarquía. El visitante no necesita ver 17 tecnologías de golpe.
- **Fix:** Agrupar por capa con una interacción de expandir/colapsar, o reducir a las tecnologías más relevantes por capa y mostrar el resto bajo "+N más".
- **Suggested command:** `/impeccable layout tecnologias`

## Persona Red Flags

**Mariana (cliente potencial no técnica, revisa 3 portfolios en 10 minutos):**
- El hero comunica rápido: "desarrollador full-stack freelance", disponible, ubicación. ✅
- Al scrollear, la sección "Servicios" es clara, pero "Hosting & DevOps" con el terminal puede intimidarla o confundirla sobre si eso es un servicio que ella necesita.
- El formulario de contacto es directo, pero si comete un error no lo verá de inmediato en mobile.
- **Red flag:** el terminal parpadeante y la densidad de "Tecnologías" pueden hacer que el sitio se sienta más técnico de lo necesario para alguien que solo quiere saber si puede confiar en este dev.

**Andrés (CTO buscando un freelance para sumar a su equipo):**
- Quiere ver proyectos reales y tecnologías. La sección "Proyectos" entrega eso, con roles y contribuciones claras. ✅
- Falta un enlace directo a GitHub visible en el hero o navbar; tiene que llegar al formulario de contacto para encontrarlo.
- La sección "Sobre Mí" humaniza y funciona, pero la sección "FAQ" es larga para su objetivo.
- **Red flag:** la falta de un CTA secundario "Ver en GitHub" o "Descargar CV" cerca de los proyectos reduce la velocidad de evaluación.

**Lucía (diseñadora evaluando el criterio estético del dev):**
- Nota la coherencia de paleta y la tipografía. El glass de la navbar le gusta. ✅
- El `animate-bounce` del hero y las animaciones de `width` le restan refinamiento.
- El componente Welcome.astro residual con gradient text le haría dudar de la atención al detalle si revisa el repo.
- **Red flag:** los pequeños descuidos de motion y el código muerto socavan la promesa de "precision over decoration".

## Minor Observations

- La sección "Proyectos" en mobile es muy larga (~3000px según medición). Considerar compactar tarjetas o paginar/colapsar en mobile.
- No hay footer. El formulario de contacto funciona como cierre, pero un footer minimal con email, redes y copyright aportaría cierre.
- El badge "En producción" y el estado "Disponible para proyectos" usan el rojo ladrillo correctamente como indicador de estado vivo.
- El mockup fallback de Arkanet AI usa iniciales sobre un fondo generado; es aceptable, pero una imagen real o un patrón SVG más elaborado elevaría la sección.
- El dropdown de navbar repite los enlaces principales en mobile + los adicionales. Es funcional pero ligeramente redundante.

## Questions to Consider

- ¿El terminal en "Hosting & DevOps" atrae a clientes técnicos pero aleja a los no técnicos? ¿Debería ser el punto de entrada o un detalle expandible?
- ¿Las 5 tarjetas de proyecto necesitan ser tan grandes en mobile, o se podría contar la misma historia con menos scroll?
- ¿El formulario de contacto debería ser la única forma de contacto visible, o conviene destacar WhatsApp/email como CTAs primarios también?
