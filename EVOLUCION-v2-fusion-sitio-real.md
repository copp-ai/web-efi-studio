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

## 0. PASO OBLIGATORIO ANTES DE TOCAR CÓDIGO — explorar el sitio real

**No arranques a escribir ni una línea de este brief sin hacer esto primero:**

1. Navegá (browsing real, no inferencia por descripción) a **https://efi-studio-website.vercel.app/** y a **https://onboarding-flow-three.vercel.app/servicios**.
2. Inspeccioná y anotá: paleta de colores exacta (hex), familias tipográficas, tamaños de fuente, espaciados entre secciones, tratamiento de fotografía, cómo maneja las cards/layouts.
3. Descargá las 3 fotos de la sección 4.
4. Recién después de esto, empezá con las secciones 1 a 4ter de este documento.

Si por algún motivo no podés navegar/renderizar esas URLs (a diferencia de cuando trabajaste con el Figma), **decilo explícitamente antes de seguir** — no avances aproximando colores o estructura de memoria/descripción. Es la base de todo lo que pide este brief.

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

Todos a `https://wa.me/595971791069` con el texto correspondiente — número de negocio de eFI, no el personal de Valeria (corregido 06/08 en todos los componentes existentes también).

---

## 3. Qué se mantiene sin cambios

- `PortalMockup.jsx` — sigue siendo el diferencial más fuerte frente al sitio real (que no tiene nada parecido). Se mantiene la estructura (tabs ejecutivo/familia, KPIs), **excepto el gráfico de barras, que se rediseña — ver sección 4ter.**
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

## 4nonies. CORRECCIÓN FINAL de paleta — el sitio real no usa dorado, usa un verde oscuro apagado

**Esto reemplaza la indicación de dorado de las secciones 4bis y 4octies — no uses dorado en ningún lado.** Revisando bien el sitio real de Valeria (screenshot en mano): no hay dorado en ninguna parte. Fondo oscuro neutro, tipografía serif itálica en blanco/crema para el título, botones sobrios (uno outline blanco, uno sólido en un verde oscuro apagado — no el verde esmeralda brillante `efi-emerald` que teníamos antes, es un verde mucho más apagado tipo pino/bosque), y el panel de Filosofía usa ese mismo verde oscuro como fondo sólido.

**Instrucción para Antigravity:**
- Sacar el dorado (`efi-gold`) de TODO el sitio — botones, íconos, badges, bordes, precios, gráfico del portal, todo. No queda ningún uso de dorado.
- Nuevo acento único: un verde oscuro apagado (tipo pino/bosque — bastante más desaturado y oscuro que el `efi-emerald` original, revisar el tono exacto explorando el sitio real en vivo como ya se pidió en el Paso 0). Se usa con la misma moderación que se pedía para el dorado en 4octies: un único CTA principal por sección, el acento del `PortalMockup`, y el indicador de plan recomendado — nada más.
- Todo lo demás queda en la base neutra (fondo oscuro, texto sand/crema/blanco, grises muted) — sin colores de acento decorando íconos, bullets, badges o bordes sueltos.
- Los botones secundarios (tipo "Conocé los servicios") van en outline blanco/neutro, no en color — solo el botón de acción principal de cada sección lleva el verde.

---

## 4bis. Dirección visual — por qué bajamos el verde+dorado y qué ponemos en su lugar

**⚠️ La recomendación de color de esta sección quedó superada por la sección 4nonies (sin dorado, verde oscuro apagado como único acento) — el diagnóstico y los marcos teóricos de acá siguen valiendo, pero el color final es el de 4nonies.**

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

## 4ter. Rediseño del gráfico dentro del Portal (el momento WOW no convence)

Feedback real de Copp: el gráfico de barras actual dentro de `PortalMockup.jsx` se ve "como si fuese Excel" — no transmite el momento sorpresa que tiene que transmitir.

**Por qué importa (no es solo estética):** el portal es, por diseño, el nivel 3 de la Pirámide de la Felicidad de Hsieh — el "satisface necesidades no reconocidas" que nadie esperaba ver en la web de un estudio boutique. Un gráfico de barras genérico rompe esa promesa por el *Aesthetic-Usability Effect* de Yablonski: si la visualización se ve como una planilla cruda, el cerebro la lee como "output de datos", no como "producto premium" — exactamente lo contrario del mensaje central de eFI ("rigor corporativo aplicado a tu economía personal", no una plantilla genérica). Además rompe el Peak-End Rule: este es el cierre/pico de la experiencia de scroll, tiene que ser el momento más cuidado de toda la página, no el más plano.

**Instrucción para Antigravity:**
- Sacar el gráfico de barras estilo hoja de cálculo (barras rectas, grid de fondo, ejes tipo Excel).
- Reemplazar por una visualización más editorial/premium — opciones válidas: curva de área suave con degradé bajo la línea (mostrando evolución de balance/ahorro mes a mes, sin grid duro ni ejes numéricos explícitos), o anillos/donuts de progreso por categoría con los números como protagonistas tipográficos en vez del gráfico. Elegir la que mejor se lea a simple vista, sin necesidad de leyenda.
- Sin líneas de grid de fondo, sin ejes con números "tipo spreadsheet" — los datos se leen por forma y color, no por escala precisa (esto es un mockup de venta, no un dashboard analítico real).
- Mantener la paleta ya definida en la sección 4bis (base neutra + dorado como acento) — el gráfico es el lugar donde más justificado está usar el dorado con fuerza, junto con el glassmorphism que ya tiene el portal.
- Sigue siendo el único gráfico "real" de todo el sitio — todo lo demás (tabla de precios, comparativa) usa formato de texto/tabla simple, no chart.

---

## 4quater. Rediseño de la sección de Testimonios (se ve "hecho con IA")

Feedback real de Copp: la sección de testimonios se ve genérica/sintética — cards muy grandes, todas idénticas, no transmite que son personas reales.

**Por qué pasa esto (diagnóstico, no solo síntoma):** cards de igual tamaño + mismo ícono de avatar circular con iniciales + misma fila de 5 estrellas repetida en cada una es exactamente el patrón "UI kit genérico" que más rápido lee como hecho por IA — es la *Law of Similarity* de Yablonski funcionando en tu contra: el cerebro agrupa las 5 tarjetas como una sola unidad repetitiva en vez de leer cada una como una voz humana distinta. Además viola el *Von Restorff Effect* — nada se distingue, nada se recuerda. Y en términos de Capote: estos testimonios tienen carga emocional real ("amo mis sesiones, me gustan más que mi terapia" — eso es una frase humana genuina), y encerrarla en una caja idéntica a las demás la aplana en vez de dejarla respirar.

**Instrucción para Antigravity:**
- Sacar el grid de cards idénticas. Reemplazar por una jerarquía real: 1-2 testimonios destacados en formato de cita editorial grande (tipografía serif grande, sin caja, como se hizo con la cita de Valeria en `Authority.jsx`), y el resto en un formato más liviano y compacto (lista con separadores simples, o un carrusel horizontal de tarjetas más chicas) — no todos al mismo nivel visual.
- Sacar la fila de 5 estrellas repetida idéntica en cada card si no es data real y verificable — es lo que más grita "template". Si se mantiene, variar tratamiento o quitarla del todo y dejar que el texto hable solo.
- Sacar (o rediseñar) el ícono de avatar circular con iniciales repetido en las 5 — es otro elemento "UI kit" que se ve igual en cualquier landing genérica. Priorizar el nombre real en texto (María Fe Figueredo, Fabiola Bogado ya son nombres reales — dejarlos protagonistas) antes que un avatar decorativo.
- Achicar el tamaño general de las cards que se mantengan — el testimonio anónimo ("Cliente eFI, Programa Individual") no necesita el mismo peso visual que uno con nombre real; usar tamaños distintos ayuda a que se sienta curado a mano, no generado en lote.
- Mantener el texto de las citas tal cual — son reales, no reescribir.

---

## 4quinquies. Simplificar el Navbar (sobrecargado + usa un logo que no es de eFI)

Feedback real de Copp: el navbar actual está muy cargado, y usa un ícono/logo en caja redondeada con "eFI" en degradé que **no es un logo real de la marca** — el sitio real de Valeria no usa ningún logo/ícono, solo el texto "eFI Studio" como wordmark.

**Qué tiene hoy nuestro navbar (`Navbar.jsx`):** logo-caja con ícono + "eFI Studio" + subtítulo "Finanzas Boutique" + 7 links (Filosofía, Metodología, Programas & Precios, Autodiagnóstico, Portal eFI, Testimonios, FAQ) + 1 link destacado en pill + botón CTA de WhatsApp + versión mobile con todo eso repetido en drawer.

**Por qué está mal (Yablonski):** 7 opciones de navegación superan cómodamente Miller's Law (7±2, y para un navbar el número sano es más cerca de 4-5) — cada link extra es más carga cognitiva antes de que el usuario llegue al contenido. El sitio real de Valeria, en cambio, tiene solo 5 links + 1 CTA — que es literalmente el patrón que describe Jakob's Law (lo que el usuario ya espera de cualquier sitio de servicios profesionales).

**Instrucción para Antigravity:**
- Sacar el ícono/logo en caja — reemplazar por wordmark de texto simple "eFI Studio", igual que el sitio real. Sacar también el subtítulo "Finanzas Boutique" si suma carga visual innecesaria al navbar (puede vivir en el footer, no hace falta repetirlo arriba).
- Reducir los links a lo esencial — sugerencia de consolidación: Filosofía + Metodología pueden ir bajo un solo link tipo "Cómo trabajamos" (o eliminarse del navbar y quedar solo como anclas dentro del scroll, sin link explícito), sacar el highlight especial de "Portal eFI" (queda como link normal, no como pill destacada — no hace falta forzar la atención ahí desde el navbar), dejar como núcleo: **Servicios/Precios, Autodiagnóstico, Testimonios, FAQ** + 1 CTA.
- Mantener un solo botón de acción claro (CTA de WhatsApp o "Empezar hoy"), no múltiples llamados a la acción compitiendo en la misma barra.
- Aplicar el mismo criterio en la versión mobile (drawer) — no repetir ahí toda la lista larga si ya se acortó arriba.

---

## 4sexies. Sacar el mismo logo falso del Footer (`FooterCTA.jsx`)

Mismo problema que el Navbar (sección 4quinquies), esta vez en el pie de página: `FooterCTA.jsx` tiene una caja `rounded-lg` con "eFI" adentro simulando un logo que no existe en la marca real.

**Instrucción para Antigravity:**
- Sacar por completo el `<div>` de la caja/ícono con "eFI" en `FooterCTA.jsx` (el bloque `w-8 h-8 rounded-lg bg-efi-card border border-efi-gold/30...`).
- Dejar únicamente el wordmark de texto: "eFI Studio" — mismo criterio que ya se aplicó en el Navbar, coherencia entre header y footer.
- El subtítulo "Finanzas Boutique" puede quedarse acá (a diferencia del navbar) — el footer es un lugar razonable para esa aclaración, ya que no compite con la carga cognitiva del área de navegación.
- Revisar si queda algún otro lugar del sitio con esta misma caja/ícono de "eFI" (búsqueda rápida por el patrón `rounded-lg` + texto "eFI" o `rounded-xl` + texto "eFI" en el resto de los componentes) y sacarlo también — que no sea un ajuste puntual de un solo componente si el patrón se repite en más lugares.

---

## 4septies. La franja de fotos + filosofía justo después del Hero (bajar la intensidad de venta al inicio)

Feedback real de Copp, mirando el sitio real de Valeria: apenas termina el Hero, antes de vender nada, hay una franja de ancho completo en 3 columnas — foto editorial en blanco y negro / panel oscuro con la Filosofía (eyebrow "Filosofía", headline corto en serif "El orden es progreso.", 1-2 líneas de texto chico) / otra foto editorial en blanco y negro. Se ve calma, humana, nada vendedora. Nuestro sitio, en cambio, va directo del Hero a `PainPoints.jsx` — arranca "con ganas de vender" apenas termina el título.

**Por qué importa (no es solo copiar un layout):** es la misma lógica de Capote y Dixon que ya venimos aplicando — la emoción y la confianza se construyen antes de pedir nada, y un respiro editorial entre el Hero y el resto del pitch reduce el esfuerzo percibido de "me están vendiendo algo" apenas entrás al sitio. También calza con Hsieh: el WOW no es deslumbrar de entrada con CTAs y stats, es dejar que la marca respire primero.

**Instrucción para Antigravity — no clonar el layout exacto, es el mismo propósito con recursos propios:**
- Insertar una sección nueva, de ancho completo, inmediatamente después del `Hero.jsx` y antes de `PainPoints.jsx` (o la que sea la siguiente sección hoy): no hace falta el grid de 3 columnas con 2 fotos — alcanza con **una sola imagen de fondo de ancho completo** (buscar y descargar ahora una foto de banco de imágenes gratuito tipo Unsplash/Pexels, en blanco y negro o desaturada, temática de organización/documentos/calma — no usar las 3 fotos hotlinkeadas del sitio del ex para este bloque, esas quedan reservadas para fundadora/FAQ como ya se pidió en la sección 4) con overlay oscuro y la Filosofía superpuesta (eyebrow "Filosofía" + headline corto en serif, tipo "El orden es progreso." + texto de apoyo chico debajo, elegir 1 sola idea-fuerza, no las 4 juntas).
- Sin CTA ni botón en este bloque — este momento no vende, solo transmite. El objetivo es el respiro/pausa editorial entre el Hero y el resto del pitch, no la réplica exacta del layout de su sitio.
- De paso, revisar el Hero mismo: hoy tiene CTA con gradiente dorado fuerte + banner de privacidad + 3 bullets de autoridad, todo apilado — es mucho "empuje de venta" antes de que el usuario llegue siquiera a esta franja calma. Aligerar el Hero para que combine mejor con el respiro que viene justo después: los 2 botones pueden ser más discretos (uno outline, uno sólido pero no en gradiente dorado grande — ver el hero real: "Conocé los servicios" en outline + "Autodiagnóstico" en pill sólida simple), y evaluar si el banner de privacidad y los 3 bullets de autoridad pueden bajar de posición (van mejor más adelante en la página que compitiendo con el título principal).

---

## 4octies. El dorado se aplicó en todos lados — bajarlo a un uso realmente mínimo

**⚠️ Superada por 4nonies: no es "bajar el dorado a un uso mínimo", es sacarlo por completo y reemplazarlo por el verde oscuro apagado. El diagnóstico de por qué un acento repetido en todos lados deja de funcionar sigue siendo válido, solo cambia qué color va en los lugares puntuales.**

Feedback real de Copp: pese al ajuste de la sección 4bis, el sitio sigue con dorado fuerte y chillón en todas partes. Lo que pasó: "dorado como único acento" se interpretó como "reemplazar el verde por dorado en todo lo que antes tenía color" — el resultado es el mismo problema de saturación de antes, solo que con un color en vez de dos.

**Por qué falla esto (Von Restorff, otra vez):** un acento solo funciona como acento si es escaso. Si el dorado está en el badge, el ícono, el borde, el bullet, el precio, el botón y el título, deja de leerse como "esto es lo importante" — vuelve a ser ruido de fondo, exactamente lo que se quería evitar.

**Instrucción para Antigravity — regla dura, no una sugerencia de estilo:**
Recorré TODO el sitio (Hero, Navbar, PainPoints, HowItWorks, ServicesCatalog, Authority, Footer, la nueva franja de Filosofía, FAQ) y sacá el dorado de todo excepto estos usos puntuales:
1. El botón de acción principal de cada sección (un único CTA por pantalla, no todos los CTAs secundarios).
2. El acento del `PortalMockup` (gráfico + detalles del mockup, sección 4ter) — ahí ya está justificado que sea el elemento más rico visualmente de la página.
3. Un único indicador del plan "más elegido" en la tabla de precios (borde o badge, no ambos a la vez).

**Todo lo demás pasa a neutro** (blanco/sand/gris muted, según la paleta base ya definida en 4bis): íconos (ShieldCheck, Check, bullets de autoridad), badges/eyebrows en mayúscula, bordes de cards, precios mostrados, hovers, subrayados, separadores. Si en la revisión un elemento no es "el CTA principal" ni "el portal" ni "el badge de recomendado", no lleva dorado — sin excepciones puntuales por sección.

---

## 5. Resultado esperado

Un sitio único, propio, que cubre todo lo que hoy están cubriendo las dos apps del ex (marca + storytelling + precios + autodiagnóstico + booking) más el portal interactivo que ninguna de las dos tiene — sin depender de acceso a ningún repo ajeno. Queda listo para reemplazar ambas apps del ex cuando Valeria decida, con dominio propio.
