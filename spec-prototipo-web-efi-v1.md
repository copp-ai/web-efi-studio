---
status: listo para Antigravity
fecha_actualizacion: 2026-08-04
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, vercel, momento-wow, spec]
summary: Documento de especificaciones para que Antigravity construya un prototipo de la web de eFI Studio, deploy en Vercel. Estrategia de venta — se muestra a Valeria DESPUÉS de la primera parte del diagnóstico del jueves 06/08, como "momento wooohh". Cruza el destilado de referentes LatAm/España, el contenido real de los audios de Valeria, y 10 marcos teóricos de la biblioteca (UX, persuasión, cultura, hábitos).
---

# Spec — Prototipo Web eFI Studio (v1)
## Para: Antigravity · Deploy: Vercel · Uso: material de venta, no producción final

---

## 0. Contexto y objetivo estratégico

Esto NO es la web definitiva de eFI Studio — es un **prototipo de alto impacto visual** para generar un momento "wooohh" en una instancia de venta posterior al diagnóstico del jueves 06/08 con Valeria Cuenca. Ella todavía no lo pidió ni lo espera — es Copp mostrando, no explicando, lo que es posible.

**Momento de uso:** después de cerrada la primera parte de la sesión del jueves (una vez que ya definieron el frente prioritario — ver `diagnostico-06-08-guia.md`). No se muestra en frío ni de entrada.

**Por qué esto funciona como estrategia (Cialdini — Pre-suasión y Unidad):** mostrar un prototipo tangible, construido específicamente para ella y con su propio lenguaje ("un gerente general de multinacional recibe este nivel de información" — cita textual del audio 04), activa el principio de **Unidad**: no es una propuesta genérica de agencia, es "esto ya empezó a existir, para vos". Pre-suade antes de cotizar un solo guaraní.

**Nota de encuadre (Mik Kersten — Project to Product):** aunque es un prototipo desechable en términos de código, tratarlo como la semilla v1 de un producto real, no como un mockup descartable — si Valeria dice que sí, este mismo repo es el punto de partida, no se tira.

**Por qué subimos la vara (confirmado 04/08, perfil de LinkedIn de Valeria):** no es una fundadora armando su primer sitio a ciegas — son 10 años como Brand/Marketing Manager en Nestlé (llegó a liderar Nescafé, la marca de mayor facturación de la compañía), Samsung Electronics (lanzamientos coordinados en simultáneo al lanzamiento global), Beiersdorf/NIVEA y Grupo Arcor, más un paso por L'UOMO dirigiendo producción y scouting de modelos. Ella sabe de primera mano cómo se ve una pieza de marca de nivel mundial, y va a mirar este prototipo con esa vara — no con la de una PyME local armando su primer sitio. **Cero señales de "hecho rápido con IA":** nada de plantillas genéricas, gradientes default de SaaS, stock photos reconocibles de banco de imágenes, ni iconografía clip-art. Si hace falta más tiempo de producción para lograr esto, se prioriza calidad sobre velocidad — el objetivo es el efecto WOW, no simplemente "tener algo para mostrar".

**Pendiente de confirmar el jueves:** en LinkedIn, Valeria describe eFI como "servicios administrativos y financieros para **empresas y personas**" — más amplio que el foco actual del sitio (personas/familias). Este prototipo se construye con el foco confirmado hoy (personas y familias, ver `diagnostico-06-08-guia.md` y el catálogo real de eFI). Si el jueves surge que el frente empresas es prioritario, ese es un ajuste de v2 — no bloquea el arranque de este prototipo.

---

## 1. Quién es el público (dos capas)

1. **Valeria** — la que lo ve primero. Fundadora, muy profesional, clara, exigente con la calidad. El prototipo tiene que estar a la altura de lo que ella misma entrega a sus clientes ejecutivos.
2. **Los clientes de eFI** — el perfil real al que apunta el portal: "un gerente general de una multinacional... está muy bueno el informe" (audio 04). Ingresos medios-altos, profesionales, dueños de empresa. No es una app para adolescentes ni para gig workers (contraste directo con Balance.cash).

**Lente cultural (Helio Vera):** aunque eFI opera en un mercado hispanohablante amplio, el copy tiene que evitar el registro corporativo frío ("optimizamos su experiencia financiera") — ese lenguaje se percibe como *gua'u* (fachada vacía). El tono correcto es cercano y de confianza real, cercano al *jopara* de la charla genuina: cálido, directo, sin jerga de consultora. La confianza en dinero/finanzas personales se construye con calidez humana, no con vocabulario técnico de banca.

---

## 2. Propuesta de valor a comunicar (Osterwalder + Gart Capote — JTBD)

No vender "una app de finanzas". Vender el trabajo que el cliente contrata, en sus 3 dimensiones:

| Dimensión | Lo que el cliente de eFI realmente busca |
|---|---|
| **Funcional** | Entender dónde está parado con su plata, sin tener que armar planillas él mismo. |
| **Emocional** | Tranquilidad. Dejar de cargar con la ansiedad de no saber. "Sin juicio y sin carga operativa" (copy ya existente de eFI, es bueno, se conserva). |
| **Social** | Sentirse (y verse) como alguien que tiene sus finanzas bajo control — no como alguien que "debería saber esto y no sabe". |

**El diferencial a instalar como mensaje central (del destilado de referentes):**
> "No te pedimos tus claves del banco. Vos mantenés el control — nosotros ponemos la claridad."

Esto no es una disculpa por no tener conexión bancaria automática — es la ventaja competitiva frente a cualquier app que sí pide acceso a la cuenta. Tiene que aparecer temprano en la página (arriba del pliegue o muy cerca), no escondido en un FAQ.

**Nota de autoridad (agregada 04/08, del perfil de LinkedIn de Valeria):** ella es educadora certificada de Bitcoin y declara "Seguridad de la información" como aptitud profesional. Este mensaje no es solo una limitación regulatoria del país — es también su propio criterio experto de seguridad de datos. Puede anclarse con más fuerza que una simple explicación legal, casi como sello personal de la fundadora.

**Posicionamiento de mercado (hallazgo del research):** eFI no es una app fría de autoservicio (Balance, Fintonic, Wallet) ni una consultora patrimonial de altísimo ticket para clientes de banca privada (Life FP). Es el punto medio real: acompañamiento humano de verdad, a un precio accesible para profesionales y familias — porque la IA hace el trabajo pesado atrás. Ese posicionamiento del medio puede nombrarse explícitamente en algún punto de la página.

---

## 3. Arquitectura de la página (aplicando Laws of UX)

Una sola landing, scroll vertical, prototipo estático (sin backend real). Secciones, en orden:

1. **Hero** — la promesa central + el diferencial de "no pedimos tus claves" + un CTA único.
2. **El problema, dicho en criollo** — "tenés la plata, no tenés la claridad" (o similar, no literal). Nombra el dolor sin tecnicismos.
3. **Cómo funciona** — 3-4 pasos como mucho (Miller's Law: nunca más de 7±2 elementos, acá con margen: 3-4 para que se lea de un vistazo). Ej: Nos pasás tus extractos → Los procesamos (IA + humano) → Recibís tu reporte/panel → Repetimos cada mes.
4. **Los 4 servicios reales de eFI** (Clarity Sesion / Personal Finance / Family Care / Wealth Flow) — con la entrada más liviana (Clarity Sesion, 90 min, "arrancá ya") bien visible como la puerta de entrada de menor fricción. **Ver sección 6 — esto es clave para el CTA.**
5. **Vista del portal (mockup, "próximamente")** — la pieza más importante del prototipo, ver sección 5.
6. **Prueba de autoridad** — "14 años en multinacionales, +100 personas acompañadas" — con más jerarquía visual que en el sitio actual (hoy está casi escondida en el pie).
7. **CTA final** — un único camino de contacto (WhatsApp), sin fricción.

**Chunking (Miller's Law):** cada sección con máximo 3-4 elementos visibles simultáneamente. Nada de menús con 8 opciones.

**Fitts's Law:** el CTA principal ("Quiero mi Clarity Sesion" o similar) tiene que ser grande, con área táctil generosa, repetido 2-3 veces en la página (hero + después de servicios + cierre) — no un único botón perdido arriba.

**Jakob's Law:** navegación y patrones de scroll convencionales — este no es el lugar para innovar en UX, es el lugar para que Valeria vea SU contenido brillar, no un experimento de interacción raro.

**Nivel de producción visual (no negociable — ver nota de vara en sección 0):**
- Tipografía: un par serio de fuentes (serif + sans, o dos sans bien diferenciadas) — nunca la fuente default del framework sin curar.
- Paleta de color propia para eFI, no la lila/papel de coppcabanellas.com (esa es la identidad de Copp, no la de eFI) — algo cálido y de confianza, evitando el verde/azul genérico de fintech.
- Fotografía o ilustración: si se usan imágenes de personas, que se sientan editoriales y con dirección real (encuadre, luz, coherencia de estilo) — nunca stock genérico de "gente sonriendo con laptop". Si no hay presupuesto/tiempo para fotografía real, mejor ilustración o abstracción cuidada que un stock photo reconocible.
- Microinteracciones sutiles (hover, transiciones de scroll) — sin exagerar, pero presentes: refuerzan el Aesthetic-Usability Effect (Yablonski) y comunican cuidado de producción.
- Espaciado generoso — el whitespace también es señal de marca premium, no de "faltó contenido".

---

## 4. El "momento wooohh" — dónde vive exactamente

**Peak-End Rule (Yablonski/Kahneman):** la experiencia de ver el prototipo se juzga por su pico y su final, no por el promedio. Dos momentos a diseñar con más cuidado que el resto:

- **El pico:** el mockup del portal (sección 5) — es el momento donde Valeria ve su propia visión ("end game", palabras de ella en el audio 04) ya construida. Ahí va el esfuerzo visual más alto.
- **El final:** el cierre de la página no puede ser un formulario genérico. Tiene que sentirse como una invitación personal, no como el final de un sitio corporativo cualquiera.

**Von Restorff Effect:** dentro de toda la página, UNA sola cosa tiene que verse visualmente distinta a todo el resto (probablemente el mockup del portal, o el mensaje de "no pedimos tus claves") — si todo destaca, nada destaca.

---

## 5. Mockup del portal — sección más importante del prototipo

Esto es la traducción visual directa de lo que Valeria describió en el audio 04: *"los clientes entran a la página de eFI, se loguean y ahí tienen toda su información, tipo sus reportes y Power BI... el nivel de información que recibe un gerente general de una multinacional."*

**Qué mostrar (mockup estático, sin funcionalidad real):**
- Una pantalla simulada de "login" (sin funcionar, solo visual) que da paso a...
- Un dashboard de ejemplo con datos ficticios pero realistas: resumen de ingresos/egresos del mes, 2-3 gráficos tipo panel ejecutivo (barras o líneas, estilo Power BI pero simplificado), y una sección de "puntos importantes" destacados.
- Etiquetarlo explícitamente como "Así se va a ver tu portal" o "Vista previa — próximamente", para que quede claro que es una visión, no algo ya activo (evita generar una expectativa falsa de que ya funciona).

**Inspiración visual (del destilado de referentes, NO copiar literal):** el lenguaje de "claridad de un vistazo" de Balance (calendario) y Fintonic (vista unificada de cuentas) — pero acá es un **snapshot periódico prolijo**, no una promesa de tiempo real (eFI no tiene conexión bancaria, y esa ausencia ya se convirtió en mensaje de marca, no hay que contradecirla con un mockup que insinúe tiempo real).

---

## 6. CTA y framing de la oferta (BJ Fogg + James Clear + Cialdini)

**El error a evitar:** poner como CTA principal algo que suene a compromiso grande ("Contratá tu plan de Wealth Flow"). Eso es alta fricción (Ability baja en términos de Fogg) para un visitante nuevo.

**El CTA correcto:** anclar en el servicio de menor fricción que YA existe en el catálogo de eFI — **eFI Clarity Sesion** (90 minutos, "salís con tu planilla anual armada y un plan concreto"). Es, en términos de Fogg/Clear, el "hábito diminuto" de la relación comercial: un primer paso chico, concreto, con resultado inmediato — no una suscripción anual a ciegas.

**Copy del CTA (ejemplo, ajustar tono):** "Empezá con una sesión de 90 minutos. Salís con tu plata organizada, ese mismo día." — nada de "conocé nuestros planes" o menús de decisión complejos (Hick's Law: menos opciones en el momento de decidir = más conversión).

**Principio de Cialdini a aplicar en el copy, con cuidado:** prueba social/autoridad (el "+100 personas acompañadas") ANTES del CTA, no después — de acuerdo a Pre-suasión, lo que está fresco en la atención justo antes de pedir la acción es lo que más pesa en la decisión.

---

## 7. Tono de copy — checklist rápido

- Cálido y directo, nunca corporativo-frío (Helio Vera).
- Frases cortas, sin jerga de fintech ("agregador", "sincronización", "API") — eso es para nosotros, no para el cliente final.
- El "no pedimos tus claves bancarias" se dice con confianza, no como disculpa.
- Cero promesas de tiempo real o automatización que hoy no existen (el mockup es visión, no funcionalidad — que quede claro en el copy de esa sección).
- Prueba social temprana, no al final.

---

## 8. Stack técnico sugerido

- **React + Vite + Tailwind**, deploy en **Vercel** — mismo patrón que ya usa Copp en `web-coppcabanellas` y que Antigravity ya conoce.
- Proyecto nuevo, repo propio (no vive dentro del repo de coppcabanellas.com).
- 100% estático — sin backend, sin base de datos, sin autenticación real. El "login" del mockup es una animación/transición visual, no un formulario funcional.
- Datos del dashboard mockeado: hardcodeados, ficticios pero verosímiles (montos en Gs. o USD a definir con Copp antes de generar contenido — no inventar cifras reales de clientes de eFI).
- Responsive obligatorio — mobile-first, ya que probablemente Valeria lo vea primero desde el celular.

---

## 9. Fuera de alcance (explícito)

- Sin conexión a ningún banco ni sistema real.
- Sin login funcional.
- Sin los 4 servicios cotizables/comprables online — es un catálogo informativo, no un checkout.
- No reemplaza la web real de eFI (efistudio.co) todavía — es material de pitch.
- No se envía a Valeria antes del jueves. No se menciona en la sesión del jueves salvo que la conversación lo amerite naturalmente al cierre.

---

## 10. Contenido real ya disponible para usar (no inventar de cero)

- Tagline actual de eFI: *"Una nueva forma de vivir tus finanzas"* — conservar, es bueno.
- Descripción actual: *"Estudio boutique que ordena tus números, proyecta tus sueños y te devuelve claridad total sobre tu dinero — de forma simple, sin juicio y sin carga operativa."* — base para el hero.
- Prueba de autoridad: *"14 años en multinacionales · +100 personas acompañadas · Metodología propia basada en datos reales."*
- Los 4 servicios reales: eFI Clarity Sesion (90 min), eFI Personal Finance (1 mes de asesoría), eFI Family Care (1 mes, familia/pareja), eFI Wealth Flow (financiero personal mensual para liquidez).
- Cita textual de Valeria (audio 04, usar como inspiración del mockup, no necesariamente como copy visible): *"la idea es que tipo un gerente general de una multinacional... este es el nivel de información que recibe ese tipo de perfil."*

---

## Próximo paso

Copp revisa este documento, ajusta lo que haga falta, y se lo pasa directo a Antigravity para la construcción. Una vez deployado en Vercel, actualizar este archivo (`status`) y dejar la URL de prueba acá antes de mostrárselo a Valeria.
