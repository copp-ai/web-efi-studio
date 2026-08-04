---
status: listo para Antigravity
fecha_actualizacion: 2026-08-04
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes, jerarquia-visual]
summary: Primer ajuste post-build. Feedback real de Copp sobre la v1 del prototipo — "muy superior a lo que tiene Vale hoy, pero no me compró": demasiado texto, poco diseño visual, patrón de cards repetido en cada sección, y la frase emocional más importante de la página (la cita de Valeria) se ve chica y perdida. Instrucciones livianas para Antigravity, no reescritura completa.
---

# AJUSTES-v1 — Reducir texto, romper el patrón de cards, subir jerarquía visual

## Feedback real de Copp (04/08, después de ver la v1 deployada)

> "Muy superior a lo que tiene Vale hoy, pero no me compró el sitio web jaja, mucho texto, poco diseño visual. Algunos textos como este [la cita de Valeria sobre 'control obsesivo de centavos'] se ven muy pequeños. Muy cuadrado, muchos cards en forma de cuadro."

---

## Diagnóstico (el porqué, para que las correcciones no sean cosméticas sueltas)

Revisé el código de las 7 secciones. El problema no es un componente puntual — es un patrón que se repite idéntico en casi toda la página: **eyebrow label + headline serif + subtexto + grid de 3-4 cards iguales (ícono redondeado + título + párrafo en `text-xs`)**. Aparece en `PainPoints.jsx`, `HowItWorks.jsx`, `ServicesCatalog.jsx`, `Authority.jsx` y partes de `PortalMockup.jsx`. Es exactamente el patrón "genérico de IA" que el spec original (`spec-prototipo-web-efi-v1.md`, sección 0) pedía evitar — se coló igual porque es el default más fácil de generar, no por mala intención.

Dos síntomas puntuales de ese mismo problema de fondo:
1. **Texto chico en todos lados:** `text-xs`, `text-[11px]` y `text-[10px]` son el tamaño por defecto de casi todo el copy — hasta la cita más importante de la página (la frase de Valeria en `Authority.jsx`, línea 64) está en `text-sm` dentro de una cajita, compitiendo con 4 stat-boxes debajo. Nada respira, nada se lee como un momento.
2. **Todo es una caja `rounded-3xl` con `glass-panel`:** ese estilo funciona muy bien en el mockup del portal (ahí simula un producto real y tiene sentido). Repetido en cada sección de marketing de la página, se vuelve monótono — es lo que Copp lee como "muy cuadrado".

---

## Qué NO tocar

`PortalMockup.jsx` queda como está — es la pieza que más funciona (Copp no la mencionó como problema). El estilo de cajas ahí tiene sentido porque simula un dashboard real, no un bloque de marketing.

---

## Ajustes concretos

### 1. La cita de Valeria se convierte en su propia sección (prioridad más alta)

Sacar la cita ("No creemos en el control obsesivo de centavos...") de la card chica dentro de `Authority.jsx` y darle una sección propia, de ancho completo:
- Tipografía serif grande — mínimo `text-4xl`, ideal `text-5xl`/`text-6xl` en desktop.
- Centrada, sola, con mucho espacio en blanco alrededor (arriba y abajo).
- Sin fondo de glass-panel, sin ícono de comillas decorativo — solo la frase sobre el fondo de la página.
- Esta frase es el momento emocional pico de la página (Peak-End Rule + Von Restorff — ver spec original, sección 4): tiene que sentirse como una declaración de marca, no como un bullet más.

### 2. Cortar el volumen de texto, no solo agrandar la fuente

Regla dura: ningún párrafo de más de 2 líneas en mobile. Por cada bloque de texto (Hero, PainPoints, HowItWorks, ServicesCatalog), elegir la frase más fuerte y borrar el resto — mostrar en vez de explicar todo.

### 3. Romper el patrón de "grid de 3-4 cards iguales" — variar el layout por sección

- **PainPoints:** en vez de 3 cards idénticas, probar una frase grande arriba + las 3 ideas como líneas cortas al costado (sin caja), o eliminar 1 de las 3 y dejar solo 2 con más espacio cada una.
- **HowItWorks:** cambiar el grid de 4 cards por una línea de tiempo simple (horizontal o vertical) — número grande + una frase corta por paso, sin párrafo completo dentro de cada caja.
- **ServicesCatalog:** el bloque destacado de Clarity Session funciona, mantenerlo. Los 3 servicios secundarios (Personal Finance / Family Care / Wealth Flow) pasar de 3 cards idénticas a una lista más liviana (con separadores simples, sin ícono redondeado repetido en cada una).
- **Authority:** una vez que la cita sale a su propia sección (punto 1), simplificar lo que queda — fusionar la card del founder con los 4 stat-boxes en un layout más editorial (ej. avatar/foto grande + texto al lado), en vez de cajas anidadas dentro de cajas.

### 4. Tipografía — subir el piso de tamaño

- Nada de `text-xs` / `text-[10px]` / `text-[11px]` para copy que el usuario tiene que leer y sentir — reservar esos tamaños solo para micro-labels tipo "Paso 1 de 4".
- Body copy de sección: mínimo `text-base`, ideal `text-lg`.
- Headlines: `text-4xl` en adelante ya se está usando bien, mantener.

### 5. Usar `rounded-3xl` + `glass-panel` con criterio, no como default universal

Reservarlo para donde realmente representa algo "de producto" (el portal). En las secciones de marketing puro, aligerar: menos bordes y fondos, más tipografía y espacio en blanco haciendo el trabajo visual.

---

### 6. Botón flotante de WhatsApp

Agregar un botón flotante de WhatsApp (fijo en la esquina inferior derecha, visible en todo momento durante el scroll, ícono estándar de WhatsApp) que abra un chat directo con el número real de Valeria: **+595 991 480 481** → `https://wa.me/595991480481`.

**Ojo con esto — corregir de paso:** todos los links de WhatsApp que ya existen en el sitio (`Hero.jsx`, `ServicesCatalog.jsx`, `FooterCTA.jsx`) usan un número placeholder falso (`595981000000`), no el número real de Valeria. Aprovechar este ajuste para reemplazarlo por `595991480481` en todos los CTAs existentes, no solo en el botón flotante nuevo.

---

## Resultado esperado

Menos texto en pantalla en todo momento, una jerarquía clara de qué es lo más importante en cada sección (no todo pesa igual), variedad real de layout sección a sección, y un canal de contacto directo (WhatsApp real de Valeria) siempre accesible sin tener que buscar el CTA de cada sección.
