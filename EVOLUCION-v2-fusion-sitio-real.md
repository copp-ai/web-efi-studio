---
status: listo para Antigravity
fecha_actualizacion: 2026-08-06
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, evolucion-v2, fusion]
summary: Brief para fusionar nuestro prototipo (identidad visual + portal interactivo) con el copy/funnel ya probado del sitio real de Valeria (efi-studio-website.vercel.app + onboarding-flow-three.vercel.app). Todo el trabajo queda contenido en nuestro propio repo — no se toca ni depende de los repos del ex de Valeria.
---

# Evolución v2 — Fusionar nuestro prototipo con el sitio real de eFI

## Contexto (por qué este brief)

Valeria ya tiene un sitio real, hecho por su ex, funcionando en Vercel — no es un intento suelto, es un funnel de dos apps con calidad de producción:

- **[efi-studio-website.vercel.app](https://efi-studio-website.vercel.app/)** — sitio de marca (hero, filosofía, historia de fundadora, servicios, metodología, testimonios, FAQ).
- **[onboarding-flow-three.vercel.app](https://onboarding-flow-three.vercel.app/servicios)** — funnel de conversión: tabla comparativa de precios + autodiagnóstico (`/diagnostico`) + booking por programa (`/agendar/personal_finance`, `/agendar/family_care`, `/agendar/clarity_session`).

Decisión: en vez de competir con eso o depender de acceso a esos repos (que son del ex — tema sensible, no forzar), **absorbemos lo que ya funciona de ahí (copy, estructura, testimonios, lógica de precios/autodiagnóstico) dentro de nuestro propio sitio**, con nuestra identidad visual (paleta oscura/dorada, tipografía editorial) y sumando el diferencial que el sitio real todavía no tiene: el portal interactivo (`PortalMockup.jsx`).

**No se toca ni se referencia código de `efi-studio-website` u `onboarding-flow-three` — son apps de otro repo, fuera de nuestro control. Solo se usa su contenido público (textos, estructura, precios) como input para escribir el nuestro.**

---

## 1. Qué traer del sitio real (copy y estructura, reescrito con nuestra identidad visual)

- **Filosofía de marca** — 4 pilares: Privacidad, Libertad, Eficiencia, Simplicidad. Hoy nuestro sitio no tiene esto — es un bloque fuerte, traerlo como sección propia (no como grid de 4 cards iguales — variar el layout, ver criterio ya aplicado en `AJUSTES-v1-reducir-texto-y-jerarquia-visual.md`).
- **Historia de la fundadora** — "Fundé eFI Studio para llevar más de una década de análisis de datos corporativos a la vida financiera de las personas" + la cita de Warren Buffett que usa ("El riesgo viene de no saber lo que estás haciendo"). Reemplaza/enriquece la sección `Authority.jsx` actual, que hoy solo tiene una cita corta de Valeria.
- **5 testimonios reales con nombre** (María Fe Figueredo, Fabiola Bogado, + 3 sin nombre público de "Cliente eFI") — mucho más prueba social que lo que tenemos hoy. Traerlos tal cual, respetando el tono textual real (son citas genuinas, no reescribirlas).
- **Metodología en 4 pasos** (Diagnóstico → Visibilizamos → Ordenamos → Decidís) — encaja directo con `HowItWorks.jsx`, que ya tiene un formato de línea de tiempo por el ajuste anterior. Actualizar el copy de cada paso al de la web real.
- **FAQ completo** (9 preguntas) — el nuestro no tiene sección de FAQ todavía. Sumarla. **Ojo:** una de las preguntas menciona "eFI Empresas" como servicio B2B — no incluir esa pregunta todavía, está pendiente confirmar con Valeria si es real o aspiracional (ver nota en `cliente.md`).

---

## 2. Qué sumar de `onboarding-flow-three` (recrear la lógica, no copiar código)

Nuestro sitio no tiene hoy pricing, autodiagnóstico ni booking — el sitio real sí, y funciona bien. Lo replicamos como secciones nuevas dentro de nuestro propio sitio:

### 2.1 Tabla comparativa de precios
Igual a la de `onboarding-flow-three/servicios`: Clarity Session (Gs 450.000, sesión única) / Personal Finance (Gs 2.900.000, 4 sesiones) / Family Care (Gs 4.900.000, 4 sesiones) / Wealth Flow (Gs 1.200.000/mes, retainer). Reemplaza el actual `ServicesCatalog.jsx` simplificado — el real tiene más detalle (bullets de qué incluye cada uno) y una tabla comparativa que el nuestro no tiene.

### 2.2 Autodiagnóstico
El sitio real tiene un flujo propio en `/diagnostico` que orienta al programa correcto. **No sabemos cómo está armado por dentro** (no tenemos acceso a ese repo). En nuestra versión: un mini-cuestionario simple (3-4 preguntas tipo "¿estás solo/a o en pareja?", "¿nunca armaste un sistema financiero o ya tenés uno que no te funciona?") que al final recomiende uno de los 4 programas — resuelto en el propio frontend con lógica condicional simple (sin backend), no hace falta replicar infraestructura real de diagnóstico.

### 2.3 Booking por programa
El sitio real manda a `/agendar/[programa]` — probablemente un calendario/checkout real. Para nuestra versión, **no construimos booking real** (calendario + pago es un desarrollo aparte, no corresponde a este sprint de sitio). En su lugar, cada CTA de "Empezar ahora" abre WhatsApp con un mensaje prellenado específico por programa — mismo patrón que ya usa `FooterCTA.jsx` hoy, extendido a los 4 programas:

- Clarity Session → `"Hola Valeria, quisiera reservar mi eFI Clarity Session"`
- Personal Finance → `"Hola Valeria, quisiera empezar eFI Personal Finance"`
- Family Care → `"Hola Valeria, quisiera empezar eFI Family Care"`
- Wealth Flow → `"Hola Valeria, quisiera consultar disponibilidad para eFI Wealth Flow"`

Todos a `https://wa.me/595991480481` con el texto correspondiente — mismo número real ya usado en el botón flotante.

---

## 3. Qué se mantiene sin cambios

- `PortalMockup.jsx` — sigue siendo el diferencial más fuerte frente al sitio real (que no tiene nada parecido). No tocar.
- Identidad visual completa — paleta `efi-dark`/`efi-gold`/`efi-emerald`, tipografía Plus Jakarta Sans + Cormorant Garamond, glassmorphism con criterio (no como default universal, según `AJUSTES-v1`).
- Botón flotante de WhatsApp.

---

## 4. Nota sobre imágenes

El sitio real usa fotografía editorial propia, alojada en:
- `https://efi-studio-website.vercel.app/assets/about-valeria.jpg`
- `https://efi-studio-website.vercel.app/assets/grid-photo-1.jpg`
- `https://efi-studio-website.vercel.app/assets/faq-photo.jpg`

Antigravity: descargá estas 3 fotos y usalas como placeholder temporal en las secciones equivalentes (fundadora, filosofía, FAQ) — mismo criterio editorial que ya se buscaba en `spec-prototipo-web-efi-v1.md`. Son temporales: cuando Copp le muestre el prototipo a Valeria, le va a pedir los archivos originales en mejor resolución para reemplazarlas antes de publicar. No usar estas 3 imágenes puntuales en el sitio final sin ese reemplazo.

---

## 4bis. Dirección visual — por qué bajamos el verde+dorado y qué ponemos en su lugar

Copp prefiere el estilo visual del sitio real (más calmo, editorial) frente al actual de este prototipo (mucho verde esmeralda + dorado, patrón repetido de cards). Esto no es solo gusto — se apoya en 4 marcos:

**Yablonski (Laws of UX):** el patrón de cards repetido en cada sección viola el *Von Restorff Effect* — si todo se ve igual (misma card, mismo ícono redondeado, mismo grid), nada se recuerda, nada es un pico. El *Aesthetic-Usability Effect* dice que una interfaz más calma se percibe como más confiable antes de que el usuario evalúe nada más — hoy el verde+dorado satura visualmente y compite contra sí mismo en vez de guiar la mirada.

**Capote (La jornada del cliente):** el JTBD social de Valeria es que eFI se vea a la altura de su trayectoria corporativa (Nestlé, Samsung) — un combo verde+dorado con glassmorphism en todos lados lee más a "hecho con IA / fintech genérico" que a "rigor corporativo aplicado a tu economía personal" (frase textual del sitio real). "La IA es artificial, la emoción es natural" — la calidez visual (fotografía real, tipografía editorial, espacio en blanco) transmite lo humano; el efecto neón/glass en todo lado transmite lo sintético.

**Dixon (The Effortless Experience):** menos "paradas" visuales para comparar (cards repetidas obligan al ojo a escanear y comparar constantemente) = menos esfuerzo percibido para entender la oferta. El sitio real fluye como relato (hero → filosofía → historia → servicios → metodología → testimonios → FAQ), no como una sucesión de grids.

**Hsieh (Delivering Happiness):** el "WOW" tiene que ser UN pico, no todo el sitio a upgrade constante. Si todo brilla (verde+dorado+glass en cada sección), el verdadero momento sorpresa — el `PortalMockup` — pierde impacto porque no contrasta con nada. El resto del sitio tiene que estar tranquilo para que el portal se sienta como el nivel 3 de la Pirámide de la Felicidad.

**Instrucción concreta para Antigravity:**
- **Explorá directamente [efi-studio-website.vercel.app](https://efi-studio-website.vercel.app/) y [onboarding-flow-three.vercel.app](https://onboarding-flow-three.vercel.app/servicios) (inspección real del sitio en vivo — paleta de colores exacta, tipografía, espaciados, tratamiento de fotografía, jerarquía visual) y extraé de ahí los valores reales para aplicar, en vez de aproximar. Mismo criterio que ya usaste para extraer de un Figma — acá el "Figma" es el sitio productivo.**
- Sacar el verde esmeralda (`efi-emerald`) como color de acento — queda solo como detalle mínimo si hace falta, no como protagonista.
- Base neutra cálida (tonos `efi-sand`/crema/carbón, en línea con `efi-dark` pero sin el tinte verdoso) + el dorado (`efi-gold`) como ÚNICO acento, usado con moderación — reservarlo para CTAs y el momento de cierre, no para decorar cada sección. Ajustá los valores exactos de esta paleta a lo que efectivamente encuentres inspeccionando el sitio real, no a estos nombres de variable actuales si no coinciden.
- Reemplazar cards repetidas por los layouts variados que ya pedía `AJUSTES-v1-reducir-texto-y-jerarquia-visual.md` (línea de tiempo, declaraciones tipográficas grandes, splits editoriales foto+texto) — extender ese criterio a TODA la página, no solo a las secciones que se habían tocado.
- Priorizar fotografía real (las 3 imágenes del punto 4, más cualquier otra que encuentres explorando el sitio) por sobre íconos redondeados en card — la foto transmite calidez humana, el ícono transmite genérico-SaaS.
- El `PortalMockup` sigue siendo el único lugar donde vale la pena mantener el efecto glass/gradiente fuerte — ahí sí tiene sentido, porque simula un producto real y es el pico de la experiencia (Peak-End Rule).

---

## 5. Resultado esperado

Un sitio único, propio, que cubre todo lo que hoy están cubriendo las dos apps del ex (marca + storytelling + precios + autodiagnóstico + booking) más el portal interactivo que ninguna de las dos tiene — sin depender de acceso a ningún repo ajeno. Queda listo para reemplazar ambas apps del ex cuando Valeria decida, con dominio propio.
