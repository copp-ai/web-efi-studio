---
status: listo para Antigravity
fecha_actualizacion: 2026-08-13
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v5, brand-system, arquetipo-mago-sabio, paleta, tipografia, logo]
summary: Aplicar al código real el system-design-efi-v1.md que Valeria cerró (arquetipo Mago con acento de Sabio, paleta fondo oscuro + dorado #C9A84C "con cuentagotas", tipografía Inter/Miller Banner). Auditado contra tailwind.config.js, index.css y los 14 componentes del prototipo. Hallazgo principal: todo el sitio usa una paleta verde pine/esmeralda como acento único — el dorado del brand system cerrado no existe en el código — y no hay ningún archivo de logo real, solo un wordmark de texto.
---

# AJUSTES-v5 — Aplicar eFI Brand System v1 (arquetipo, paleta, tipografía, logo)

## 0. Contexto

`system-design-efi-v1.md` (en esta misma carpeta) es el documento de marca que Valeria cerró con su propio Claude.ai, fusionando el brand doc de julio con el system design de agosto. Arquetipo cerrado: **Mago con acento de Sabio**. Este documento de ajustes es el diff entre ese documento y el estado real del código del prototipo — léase junto con `system-design-efi-v1.md`, no en su lugar.

Auditoría hecha sobre: `tailwind.config.js`, `src/index.css`, `App.jsx` y los 14 componentes de `src/components/`.

---

## 1. Paleta de color — cambio estructural (prioridad alta)

**Problema:** `tailwind.config.js` define una paleta de acento verde pine/esmeralda (`efi-pine` #2B4138, `efi-pine-light`, `efi-pine-hover`, `efi-emerald`, `efi-emerald-light`) que no existe en el brand system cerrado. El documento de marca especifica:

- Fondo: verde oscuro casi negro **~#0D1F1A** (el actual `efi-dark` #0A1113 está muy cerca — ok dejarlo, o ajustar a #0D1F1A si se quiere fidelidad exacta con el hex del documento).
- Acento: **dorado ~#C9A84C**, usado "con cuentagotas" — una palabra, un signo, una hairline. Nunca como color de bloque ni de botón lleno de forma sistemática.

Hoy `efi-pine` se usa como acento único y sistemático en TODO el sitio: los 14 componentes lo usan para CTAs, bullets numerados, íconos, bordes hover, cifras de stats, badges, barras de progreso. Es exactamente lo opuesto de "con cuentagotas" — y además es el color equivocado (verde, no dorado).

**Fix:**

1. Agregar a `tailwind.config.js` → `theme.extend.colors.efi`: `gold: '#C9A84C'` y `'gold-hover': '#B8964A'` (o el tono más oscuro que se defina para estados hover).
2. Reemplazar los usos de **acento** (no de fondo) de `efi-pine` / `efi-pine-light` / `efi-pine-hover` por `efi-gold` en, al menos: los números 01-03 de `PainPoints.jsx` y 01-04 de `HowItWorks.jsx`, los eyebrows en mayúscula ("El problema real", "Filosofía de Trabajo", "Metodología eFI", etc. — aparecen en casi todos los componentes), los íconos de `Check`/`ShieldCheck`/`HelpCircle` en listas y FAQ, el badge "Más Elegido" de `ServicesCatalog.jsx`, las líneas divisorias de atribución en `Authority.jsx`/`FounderStatement.jsx`/`Testimonials.jsx`, la barra de progreso y el highlight de recomendación en `SelfDiagnostic.jsx`.
3. **Ojo con la regla "cuentagotas":** no es cambiar cada `efi-pine` por `efi-gold` 1:1 — eso solo movería el problema (todo dorado en bloque en vez de todo verde en bloque). Antigravity: proponer 2-3 variantes de balance en vez de un buscar/reemplazar mecánico. Sugerencia de criterio: el dorado se reserva para 1-2 puntos de máxima jerarquía por sección (un número, un ícono, una línea), y el resto de los elementos que hoy son verdes pasan a un tratamiento neutro (blanco/crema con opacidad, borde sutil) en vez de a dorado también.
4. Los botones CTA llenos (fondo `bg-efi-pine` sólido) son el caso más delicado: si todos pasan a dorado sólido, se vuelve a romper "cuentagotas" porque hay CTA en casi cada sección. Decidir con Copp/Valeria cuál es el/los CTA de máxima prioridad (candidato obvio: el CTA principal del Hero y el de `FooterCTA.jsx`) que sí llevan dorado sólido, y bajar el resto a un tratamiento secundario (borde, sin relleno, o relleno neutro).
5. `efi-emerald` / `emerald-light` / `emerald-glow`: no aparecen en el brand system cerrado. Revisar dónde se usan antes de tocarlos (aparecen en `text-emerald-gradient` de `index.css` y en `PortalMockup.jsx`) — decidir si se eliminan o quedan como color secundario (ej. para estados de éxito/positivo dentro del Portal), no borrar sin verificar impacto.
6. Fondo (`efi-dark` #0A1113): se mantiene, está alineado al brand system.

---

## 2. Tipografía (prioridad alta)

**Problema:**
- El cuerpo de texto (`font-sans` en `tailwind.config.js`) usa **Plus Jakarta Sans**. El brand system especifica **Inter Variable** para todo el cuerpo de texto, listas y UI.
- Los titulares (`font-serif`) usan **Cormorant Garamond**. El brand system nombra **Miller Banner** como tipografía oficial de titulares, y solo autoriza Cormorant como sustituto "cuando Miller Banner no esté disponible en el pipeline" — una nota pensada originalmente para el sistema de carruseles/HTML, no necesariamente para el sitio productivo.

**Fix:**

1. Cambiar `theme.extend.fontFamily.sans` de `'"Plus Jakarta Sans"'` a `'"Inter Variable"', 'Inter'` (o `Inter` a secas si la variante Variable no está disponible en el proveedor de fuentes elegido), y actualizar el `<link>`/`@font-face` correspondiente en `index.html` o donde se importe la fuente hoy.
2. **Decisión pendiente, no la resuelve Antigravity solo:** ¿se consigue licencia de Miller Banner para uso web, o Cormorant Garamond queda como la tipografía oficial de titulares del sitio (no solo "sustituto de carrusel")? Si la respuesta es "Cormorant se queda", dejarlo escrito como decisión consciente en el propio `system-design-efi-v1.md` (nota de versión en §14), no como una desviación silenciosa del documento.
3. Confirmar de qué proveedor se sirven las fuentes hoy (Google Fonts vía CDN vs. self-hosted) y si vale la pena aplicar acá el mismo criterio de "fuentes siempre embebidas, nunca por CDN" que el brand system fija para los carruseles — es una decisión de performance/consistencia, no bloqueante.

---

## 3. Logo (prioridad alta — bloqueante)

**Problema:** no existe ningún archivo de logo en el proyecto — `public/assets/` solo tiene 3 fotos editoriales (`about-valeria.jpg`, `faq-photo.jpg`, `grid-photo-1.jpg`) y un `favicon.svg` genérico. `Navbar.jsx` y `FooterCTA.jsx` usan únicamente el texto "eFI Studio" en `font-serif` como wordmark — no hay ningún ísotipo. El brand system es explícito: *"Usar siempre el logo real de eFI (la F es una llave) — versión crema sobre fondos oscuros. Monograma 'efi' como sello compacto (footer/portada); logo completo cuando el cierre sea de marca."*

**Fix:**

1. **Bloqueante:** pedirle a Valeria el archivo del logo real (versión crema, SVG o PNG transparente en alta resolución, idealmente con el monograma "efi" como variante separada del logo completo).
2. Con el archivo en mano: `Navbar.jsx` → logo completo o monograma (a definir tamaño/legibilidad en la barra); `FooterCTA.jsx` → monograma "efi" como sello, reemplazando el `<span className="font-serif ...">eFI Studio</span>` actual.
3. Hasta que llegue el archivo, Antigravity **no debe inventar ni generar un logo** — el wordmark de texto se queda como está por ahora.

---

## 4. Copy — voz Mago-Sabio (prioridad media)

El copy actual ya cumple razonablemente bien con las reglas de registro del brand system: no aparece "plata" en ningún lado (siempre "dinero"), no aparece la fórmula prohibida "no se trata de X, se trata de Y", no hay lenguaje esotérico, no hay íconos genéricos de billetera/chanchito/moneda renderizados, y no hay exclamaciones fuera de lugar. Puntos concretos a corregir:

1. **`Authority.jsx`, línea 51** — usa em dash en la atribución de la cita de Warren Buffett: `— Warren Buffett`. El brand system es explícito: "Em dash: evitarlo, delata escritura de IA". Reemplazar por el mismo patrón que ya usan `Testimonials.jsx`/`FounderStatement.jsx` (separador tipográfico `·` o el nombre sin guion).
2. **`PortalMockup.jsx`, línea 15** — importa el ícono `Wallet` de `lucide-react` pero no lo usa en ningún JSX (import muerto). El brand system prohíbe explícitamente íconos genéricos de finanzas como billetera — aunque hoy no se renderiza (cero impacto visual), conviene sacar el import igual, tanto por limpieza como para no dejar la puerta abierta a que alguien lo use más adelante sin pensarlo.
3. **Revisión de fondo (no mecánica, requiere criterio editorial de Valeria):** el checklist del §13 del brand system pide que cada pieza "abra mostrando un patrón o dato, en vez de un consejo o propuesta genérica". Varios bloques del sitio abren con propuesta de valor genérica en vez de una revelación anclada en un dato concreto — ejemplos: el Hero ("Claridad total sobre tu dinero, sin juicio y sin planillas") y las descripciones de `ServicesCatalog.jsx` (listan features, no revelan un patrón). Esto es una decisión de copy de Valeria, no algo que Antigravity deba reescribir por su cuenta — marcarlo para la próxima sesión de copy, no tocarlo en esta pasada.
4. **`ServicesCatalog.jsx`** — "Tablero de control de hábitos de consumo": revisar con el filtro de "nunca insinuar hábitos como falla" (§3 y §8 del brand system). Probablemente inofensivo en contexto, pero vale confirmarlo con Valeria en la misma revisión del punto 3.

---

## 5. Qué NO tocar en esta pasada

- El copy ya corregido de "Guaraníes" redundante (`AJUSTES-v4`, ya aplicado — no reabrir).
- Los testimonios reales (María Fe Figueredo, Fabiola Bogado) — contenido de clientas reales, no reescribir sin autorización de Valeria.
- El verde `#25D366` del botón flotante de WhatsApp (`FloatingWhatsApp.jsx`) — es el verde oficial de la plataforma, no del brand system eFI. Se mantiene así a propósito, por reconocibilidad del canal, no es un error de paleta.

---

## Resultado esperado

Sitio con el acento dorado (`#C9A84C`) aplicado con criterio "cuentagotas" en reemplazo del verde pine actual (hoy usado en bloque, en las 14 secciones), cuerpo de texto en Inter, logo real de eFI en Navbar y Footer una vez que Valeria lo comparta, el em dash de `Authority.jsx` corregido, y los dos puntos de revisión de copy (apertura genérica vs. revelación, "hábitos de consumo") marcados para resolver junto con Valeria en la próxima sesión de copy — no en esta pasada de Antigravity.

---

## Conexión con otras notas de este proyecto

- `system-design-efi-v1.md` — documento de marca completo (arquetipo, voz, paleta, tipografía), fuente de verdad de este ajuste.
- `AJUSTES-v1-reducir-texto-y-jerarquia-visual.md`, `AJUSTES-v3-copy-y-conversion-9-lentes.md`, `AJUSTES-v4-guaranies-y-legibilidad.md`, `AUDITORIA-9-lentes.md`, `EVOLUCION-v2-fusion-sitio-real.md` — historial de ajustes previos del prototipo.
- `spec-prototipo-web-efi-v1.md` — spec original del prototipo (grounding en Cialdini, Fogg, Kahneman, Yablonski).
- `../cliente.md` — ficha del cliente y estado general del proyecto.
