---
name: Esteban Cardona — Portfolio
description: Portfolio full-stack freelance con precisión técnica y calidez creativa.
colors:
  azul-acero: oklch(0.380 0.160 275)
  azul-acero-brillo: oklch(0.500 0.175 275)
  azul-acero-tenue: oklch(0.520 0.006 275)
  rojo-ladrillo: oklch(0.540 0.185 20)
  papel: oklch(1.000 0.000 0)
  gris-azulado-claro: oklch(0.955 0.008 275)
  gris-azulado-oscuro: oklch(0.095 0.018 275)
  tinta-clara: oklch(0.115 0.005 275)
  tinta-oscura: oklch(0.920 0.002 0)
  borde-claro: oklch(0.880 0.005 275)
  borde-oscuro: oklch(0.220 0.005 275)
  mockup-purple-deep: oklch(0.300 0.100 320)
  mockup-indigo-mid: oklch(0.450 0.170 275)
  mockup-terracotta: oklch(0.450 0.200 25)
  mockup-amber-warm: oklch(0.550 0.220 40)
  mockup-blue-deep: oklch(0.350 0.120 255)
  mockup-blue-mid: oklch(0.500 0.160 275)
  mockup-ink-midnight: oklch(0.100 0.015 260)
  mockup-blue-night: oklch(0.180 0.060 275)
  mockup-blue-glow: oklch(0.600 0.180 275 / 0.12)
  email-bg: '#ffffff'
  email-panel: '#f8f9fa'
  email-ink: '#202124'
  email-muted: '#5f6368'
  email-dim: '#80868b'
typography:
  display:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  hero:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  section-y-sm: "5rem"
  section-y: "6rem"
  section-y-lg: "7rem"
  section-y-xl: "9rem"
  container: "1.5rem"
  container-max: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.azul-acero}"
    textColor: "{colors.papel}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.azul-acero-brillo}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-clara}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.75rem"
  card:
    backgroundColor: "{colors.papel}"
    rounded: "{rounded.xl}"
    padding: "1.25rem"
  chip:
    backgroundColor: "{colors.gris-azulado-claro}"
    textColor: "{colors.azul-acero-tenue}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.625rem"
---

# Design System: Esteban Cardona — Portfolio

## 1. Overview

**Creative North Star: "El taller iluminado"**

El sistema visual es un taller de desarrollador iluminado: precisión técnica, ordenado, pero con una luz cálida que lo hace humano. No es una terminal estéril ni una agencia de diseño distante; es el espacio de trabajo de alguien que construye cosas con las manos y quiere que las visitas se sientan en confianza. La interfaz comunica competencia sin arrogancia y calidez sin ornamentación innecesaria.

Cada sección dice una sola cosa. El ritmo es pausado, el espacio es generoso, y los detalles pequeños —un borde perfecto, un hover inmediato, un chip mono— hacen el trabajo de la personalidad. El diseño se siente como una conversación técnica directa: clara, sin vueltas, con atención puesta en lo que funciona.

**Key Characteristics:**
- **Técnico con alma**: estructura de dev tool, tono cercano.
- **Luz controlada**: fondos limpios, acento índigo azulado con toques de rojo ladrillo para estado y calidez.
- **Cristal esmerilado**: la navegación flota con blur y bordes sutiles; el resto del sistema se apoya en capas tonales.
- **Tipografía con dos voces**: Sora para la voz principal; JetBrains Mono para etiquetas, números y código.
- **Motion con propósito**: reveals suaves al scroll, estados inmediatos, respeto total por `prefers-reduced-motion`.

## 2. Colors

La paleta es azul acero con un acento rojo ladrillo. Los neutros llevan un tinte azulado frío para mantener la sensación técnica; el acento aporta el punto de calidez. El sistema funciona en claro y oscuro con roles invertidos: el fondo y la tinta intercambian, los grises de superficie se oscurecen, y el azul acero se ilumina para seguir siendo legible.

### Primary
- **Azul acero** (`oklch(0.380 0.160 275)`): color principal. Botones primarios, links activos, estados de foco, números de sección y etiquetas de proceso. En oscuro sube a `oklch(0.600 0.175 275)`.
- **Azul acero brillo** (`oklch(0.500 0.175 275)`): hover del primario y glows sutiles. En oscuro: `oklch(0.660 0.185 275)`.

### Accent
- **Rojo ladrillo** (`oklch(0.540 0.185 20)`): acento cálido para estado "en vivo", badges de disponibilidad, indicadores de pulso y elementos de "producción". En oscuro: `oklch(0.640 0.175 20)`.

### Neutral
- **Papel** (`oklch(1.000 0.000 0)`): fondo principal en modo claro. En oscuro se convierte en casi negro (`oklch(0.080 0.000 0)`).
- **Gris azulado claro** (`oklch(0.955 0.008 275)`): superficie de secciones secundarias en modo claro. En oscuro: `oklch(0.130 0.006 275)`.
- **Gris azulado oscuro** (`oklch(0.095 0.018 275)`): fondo de componentes de alto contraste como el terminal en modo claro. En oscuro se mantiene como superficie profunda.
- **Tinta clara** (`oklch(0.115 0.005 275)`): texto principal en modo claro. En oscuro: `oklch(0.920 0.002 0)`.
- **Tinta tenue** (`oklch(0.520 0.006 275)`): cuerpo secundario, descripciones, placeholders. En oscuro: `oklch(0.550 0.005 275)`.
- **Borde claro** (`oklch(0.880 0.005 275)`): divisores y bordes de tarjetas en modo claro. En oscuro: `oklch(0.220 0.005 275)`.

### Mockups (signature backgrounds)
Colores utilizados únicamente en los fondos generados para mockups fallback de proyectos. No forman parte de la paleta de UI, pero están documentados para mantener la coherencia del design system.
- **Mockup purple deep** (`oklch(0.300 0.100 320)`): fondo de AqueTeVienes.
- **Mockup indigo mid** (`oklch(0.450 0.170 275)`): degradado de AqueTeVienes.
- **Mockup terracotta** (`oklch(0.450 0.200 25)`): fondo de MotoHuevo.
- **Mockup amber warm** (`oklch(0.550 0.220 40)`): degradado de MotoHuevo.
- **Mockup blue deep** (`oklch(0.350 0.120 255)`): fondo de ProfessionalHubs.
- **Mockup blue mid** (`oklch(0.500 0.160 275)`): degradado de ProfessionalHubs.
- **Mockup ink midnight** (`oklch(0.100 0.015 260)`): fondo de Arkanet AI.
- **Mockup blue night** (`oklch(0.180 0.060 275)`): degradado de Arkanet AI.
- **Mockup blue glow** (`oklch(0.600 0.180 275 / 0.12)`): patrón de puntos de Arkanet AI.

### Named Rules
**The One Pulse Rule.** El rojo ladrillo solo aparece en indicadores de estado vivo (disponible, en producción, en vivo). Su escasez es la señal.

**The Cool-Tint Rule.** Todos los grises neutros llevan tinte azulado; nunca son grises puros. Eso mantiene la coherencia técnica sin caer en frío corporativo.

## 3. Typography

**Display Font:** Sora (sans-serif, con fallback `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Sora
**Label/Mono Font:** JetBrains Mono (con fallback `ui-monospace, monospace`)

**Character:** Sora aporta una voz moderna y ligeramente geométrica sin ser impersonal; JetBrains Mono actúa como la voz de los detalles técnicos. El contraste no es entre una serif y una sans, sino entre la voz humana y la voz del sistema.

### Hierarchy
- **Hero** (`700`, `clamp(3rem, 8vw, 6rem)`, `line-height: 1.05`, `letter-spacing: -0.03em`): nombre propio en el hero. Límite máximo deliberado para no gritar.
- **Display / Section Heading** (`700`, `clamp(2rem, 4vw, 3rem)`, `line-height: 1.12`, `letter-spacing: -0.02em`): títulos de sección (`h2`).
- **Title** (`600`, `1.125rem–1.25rem`, `line-height: 1.3`): títulos de tarjetas, servicios, proyectos.
- **Body** (`400`, `1rem`, `line-height: 1.6`): descripciones y párrafos. Máximo ~65ch por línea.
- **Body Large** (`400`, `1.125rem`, `line-height: 1.6`): párrafos de Sobre Mí y bloques de énfasis.
- **Label / Mono** (`500`, `0.75rem`, `letter-spacing: 0.02em`): etiquetas de sección, números de proceso, chips, tags de tecnología. `uppercase` solo cuando el contexto lo exija (como la palabra "Ahora").

### Named Rules
**The One-Emphasis Rule.** Los labels mono son oscuros y discretos. No usan all-caps tracking amplio como scaffolding visual; su trabajo es identificar, no decorar.

**The 6rem Ceiling Rule.** Ningún display excede `6rem`. El hero es grande, pero no un billboard.

## 4. Elevation

El sistema usa **capas de cristal** para la navegación y elementos flotantes; el resto se apoya en divisores tonales y bordes sutiles. Las sombras son ambientes, no decorativas: aparecen en glass y en hover de tarjetas para reforzar la interacción.

### Shadow Vocabulary
- **Glass shadow** (`0 8px 40px oklch(0 0 0 / 0.08), 0 0 0 0.5px oklch(0 0 0 / 0.06) inset, 0 1px 0 oklch(1 0 0 / 0.6) inset`): sombra principal de la barra de navegación y dropdowns en modo claro. En oscuro los valores de opacidad aumentan y el highlight interior se atenúa.
- **Card hover shadow** (`0 4px 20px oklch(0 0 0 / 0.06)`): leve levantamiento en hover de tarjetas y filas de servicios.
- **Primary glow** (`0 0 30px oklch(0.500 0.175 275 / 0.35)`): glow azulado en hover del botón primario.

### Named Rules
**The Glass-Only Rule.** El blur + backdrop-filter es privilegio de la navegación y menús flotantes. No se usa como textura de fondo general.

**The Flat-By-Default Rule.** Las superficies de contenido son planas. La profundidad llega como respuesta a estado (hover, focus, activo) o como capa funcional (navbar, dropdown).

## 5. Components

### Buttons
- **Shape:** `rounded-full` (full). Sin radios intermedios en CTAs principales.
- **Primary:** fondo azul acero, texto blanco/papel, `padding: 0.75rem 1.75rem`, transición suave de `0.3s`. Hover: azul acero brillo + glow azulado.
- **Ghost/Secondary:** fondo transparente, borde fino azulado, texto tinta. Hover: fondo tenue y borde más fuerte.
- **Focus:** anillo `outline-2 outline-offset-2` en azul acero brillo.

### Chips / Tags
- **Shape:** `rounded-full`, borde fino o fondo tenue.
- **Style:** fuente JetBrains Mono, `0.75rem`, peso medio. Colores adaptados al contexto: fondo `azul-acero/10` con texto `azul-acero` para estados propios; borde `borde-claro` con texto `tinta-tenue` para tags neutros.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (`1rem`).
- **Background:** papel en modo claro, gris azulado oscuro en modo oscuro.
- **Border:** `1px` `borde-claro/60` o `borde-claro/50`.
- **Padding:** `1.25rem` en móvil, `1.5rem` en escritorio.
- **Hover:** transición de `0.3s` en borde y sombra; leve `shadow-sm` en modo claro.

### Inputs / Fields
- **Shape:** `rounded-xl` (`0.75rem`).
- **Style:** fondo gris azulado claro, borde `borde-claro`, texto tinta, placeholder tinta tenue.
- **Focus:** borde azul acero + anillo sutil `ring-1 ring-primary/20`.
- **Error:** texto rojo (`text-red-500`) para mensajes de validación.

### Navigation
- **Island pill:** barra flotante centrada con fondo glass, blur `40px`, saturate `180%`, bordes redondeados completos.
- **Links:** texto tenue por defecto, texto fuerte + fondo sutil en hover/activo.
- **Dropdown:** glass más opaco, `rounded-2xl`, sombra amplia, backdrop-blur fuerte.
- **Mobile:** menú más secciones bajo un botón "more"; items en `rounded-xl`.

### Contact Bubble
- **Activador:** botón flotante `@` de `56×56px`, fondo glass con `rounded-full`, fijo en esquina inferior derecha (`z-50`). Hover: `scale(1.1)`.
- **Dropdown:** panel glass con `rounded-2xl`, `w-64`, `backdrop-blur-2xl`. Contiene enlaces a WhatsApp y Email con iconos SVG, cada uno con hover tint + background.
- **Estados:** `aria-expanded` controla visibilidad con transición de opacidad + translateY. Cierre al hacer clic fuera o presionar Escape.

### Stack Layers (Tecnologías)
- **Structure:** filas apiladas con `border-bottom` entre capas, dentro de un contenedor `rounded-2xl` con borde completo.
- **Category indicator:** círculo de `8×8px` (`rounded-full`) con color semántico (primary / accent / muted) antes del nombre de la capa. Reemplaza el antiguo borde lateral (`border-l-2`).
- **Content:** nombre de capa + descripción en columna izquierda (`w-36`), pills de tecnologías en columna derecha. En móvil, las pills se pliegan a 4 visibles con botón "Ver más".
- **Reveal:** `opacity: 0` → `1` con `translateX(-16px)` animado al hacer scroll, con retardo escalonado por nth-child.

### Terminal (signature component)
- **Container:** `rounded-2xl`, fondo gris azulado oscuro, sombra pronunciada `shadow-xl`.
- **Header:** barra de ventana con semáforos rojo/amarillo/verde, borde inferior sutil.
- **Body:** JetBrains Mono `0.875rem`, texto gris claro con acentos verde y azul.
- **Usage:** usar solo para ilustrar DevOps/infraestructura; no convertir en patrón genérico para todo texto.

## 6. Do's and Don'ts

### Do:
- **Do** mantener fondos limpios (`papel`, `gris-azulado-claro`) y dejar que el azul acero guíe la atención.
- **Do** usar JetBrains Mono para números de proceso, etiquetas de sección y tecnologías.
- **Do** respetar `prefers-reduced-motion` en toda animación; la accesibilidad no es un extra.
- **Do** usar `text-balance` en títulos y `clamp()` para escalas fluidas.
- **Do** mantener una idea por fold; espacio vertical generoso pero con ritmo variado entre secciones (alternar denso y holgado según el contenido).
- **Do** usar el rojo ladrillo solo para indicadores de estado vivo.
- **Do** contrastar ≥ 4.5:1 para todo texto de cuerpo en ambos modos.

### Don't:
- **Don't** usar gradient text (`background-clip: text`). Los títulos usan un color sólido.
- **Don't** usar glassmorphism como textura de fondo general; solo navegación y menús flotantes.
- **Don't** poner tiny uppercase tracked labels sobre cada sección como scaffolding. El mono label es voz técnica, no decoración.
- **Don't** usar cards idénticas en grid como solución por defecto. Variar proporciones cuando el contenido lo permita (proyecto destacado de ancho completo).
- **Don't** usar bordes laterales gruesos como acento (side-stripe borders).
- **Don't** usar hero-metric templates (big number + small label + stats).
- **Don't** caer en el portfolio dev genérico: foto + nombre grande + grid de iconos de tecnologías + barras de skill.
- **Don't** usar neon, gradients de fondo llamativos o bounce easing en animaciones.
- **Don't** exceder `6rem` en display headings.
- **Don't** crear IntersectionObservers por componente. Usar el `data-reveal` compartido desde Layout para todas las animaciones de entrada al hacer scroll.
