---
status: listo para Antigravity
fecha_actualizacion: 2026-08-13
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v9, comite-10-lentes, philosophy-strip, sobrecorreccion, kahneman, helio-vera, james-clear, bj-fogg, john-doerr, ben-lamorte, dan-koe, mik-kersten, cialdini]
summary: AJUSTES-v8 (captura de lead a Notion) queda en pausa por decisión de Copp — se retoma después de cerrar esta ronda. Este documento junta dos cosas — (1) un fix urgente, la foto de PhilosophyStrip quedó demasiado oscura tras aplicar los 3 fixes de AJUSTES-v7 juntos (sobre-corrección, confirmado con captura de pantalla de Copp), y (2) las 9 observaciones menores que dejó el panel de 10 jueces al re-evaluar el sitio el 13/08 (acta post-AJUSTES-v7), una por cada lente salvo Nir Eyal (ese hallazgo ya lo cubre AJUSTES-v8, pausado).
---

# AJUSTES-v9 — Sobre-corrección de PhilosophyStrip + hallazgos menores del panel de 10 jueces

## 0. Nota de alcance

`AJUSTES-v8` (captura de lead del autodiagnóstico al CRM de Notion) queda pausado por ahora — Copp quiere cerrar primero esta ronda de ajustes de superficie antes de meterse con la integración de Notion. No hace falta tocar nada de v8 en esta pasada.

Este documento junta dos frentes:

1. **Un fix urgente (sección 1):** la foto de `PhilosophyStrip.jsx` quedó demasiado oscura — efecto secundario de haber aplicado los 3 fixes de `AJUSTES-v7` a la vez (filtro + overlay subido + sombra de texto). El texto ahora se lee perfecto, pero la foto real de Valeria (el punto entero de `AJUSTES-v6`) casi no se ve. Confirmado con captura de pantalla de Copp.
2. **Las 9 observaciones menores (secciones 2-10)** que dejó el panel de 10 jueces al re-evaluar el sitio el 13/08, una por cada lente de `AUDITORIA-9-lentes.md` salvo Nir Eyal (lente 10) — ese hallazgo es justamente el que resuelve `AJUSTES-v8`, ya cubierto y en pausa, no se repite acá.

---

## 1. URGENTE — PhilosophyStrip quedó demasiado oscuro (sobre-corrección de AJUSTES-v7)

**Dónde:** `PhilosophyStrip.jsx`, el mismo bloque que tocó `AJUSTES-v7` punto 2.

**Qué pasó:** el acta del comité confirmó que se aplicaron los 3 fixes juntos — filtro `grayscale brightness-75 contrast-90` en la imagen, overlay subido a `bg-efi-dark/90`, y `textShadow` en eyebrow/h3/p. Cada uno por separado era razonable, pero los 3 apilados se pisan: el filtro ya oscurece la foto, y encima el overlay al 90% de opacidad prácticamente la tapa. El texto quedó perfectamente legible (objetivo cumplido), pero la foto real de Valeria — que es el punto entero de `AJUSTES-v6`, reemplazar el stock por algo personalizado y reconocible — ahora es casi indistinguible de un fondo negro liso. Se ve en la captura que mandó Copp: el título y la descripción de cada pilar se leen sin problema, pero atrás no queda foto, queda una mancha oscura genérica.

**Fix — aflojar, no repetir la receta completa:**

1. **Bajar el overlay primero, es la palanca más fuerte:** de `bg-efi-dark/90` a algo en el rango `/70-75`. Es el ajuste que más impacto visual tiene sobre cuánto se ve la foto debajo.
2. **Aflojar el filtro de la imagen:** de `brightness-75 contrast-90` a algo más suave, ej. `brightness-90 contrast-95` — probar visualmente, la idea es que la foto se reconozca como foto (no como textura oscura) mientras siga sirviendo de base para el overlay.
3. **Dejar el `textShadow` como está** — ese fix no le resta nada a la visibilidad de la foto, solo ayuda al texto, no hace falta tocarlo.
4. **Verificar de nuevo con captura real** (desktop y mobile) después de ajustar los 2 primeros puntos — el objetivo es el balance que ya pedía `AJUSTES-v7`: texto legible en cualquier punto de la foto, **y** la foto reconocible como la foto real de Valeria, no las dos cosas por separado.

Si después de aflojar overlay y filtro el texto vuelve a perder legibilidad en alguna zona, es preferible subir el overlay un poco (ej. `/78-80`) antes que volver a bajar el filtro de la imagen — el overlay es más fácil de controlar de forma pareja que el filtro, que afecta a toda la foto por igual sin importar cuán clara u oscura sea cada zona.

---

## 2. Kahneman — el precio en Gs. aparece muy grande antes de asimilar el valor

**Dónde:** `SelfDiagnostic.jsx`, pantalla de recomendación (líneas ~59-92 según el acta del comité) — el precio en Guaraníes se muestra en `font-serif text-3xl font-bold` apenas se calcula la recomendación.

**Por qué:** el comité señaló que esto activa el dolor del pago (Sistema 1) antes de que el usuario termine de procesar por qué ese programa le calza (Sistema 2) — el precio compite con el valor en vez de venir después.

**Fix:** reordenar la jerarquía visual de la pantalla de resultado — primero el nombre del programa recomendado y 1-2 líneas de por qué le calza a su perfil, y recién después (más abajo o en un tamaño de fuente menor al actual) el precio. No hace falta esconder el precio, solo que no sea lo primero que salta a la vista.

---

## 3. Helio Vera — "Retainer Mensual Continuo" sigue sonando a jerga importada

**Dónde:** `ServicesCatalog.jsx` (línea ~60 según el acta) y el resultado de `SelfDiagnostic.jsx` (línea ~71) — ambos usan el término "Retainer Mensual Continuo".

**Por qué:** mismo criterio que ya se aplicó en `AJUSTES-v3` y `AJUSTES-v7` — "retainer" es vocabulario de consultoría corporativa en inglés, no encaja con el resto del tono cercano que ya tiene el sitio.

**Fix:** reemplazar por **"Acompañamiento Mensual Continuo"** en los dos lugares — mismo significado, en español llano.

---

## 4. James Clear — el paso final de la metodología es transaccional, no de identidad

**Dónde:** `HowItWorks.jsx`, paso 04 (líneas ~22-23 según el acta): *"Decidís: Tomás decisiones estratégicas respaldadas en datos reales con total previsibilidad y paz mental"*.

**Por qué:** Clear insiste en anclar el cambio de comportamiento a una transformación de identidad, no solo a una acción puntual — "tomar decisiones" es una tarea, no una nueva forma de ser.

**Fix (ajustar tono con Valeria antes de aplicar, esto es copy sensible):** algo en la línea de *"Lideras: Te convertís en quien conduce y proyecta su patrimonio con total previsibilidad y paz mental"* — mantener el resto de la frase, solo virar el verbo de apertura de una acción a una identidad.

---

## 5. BJ Fogg — el CTA principal del Hero no refuerza la facilidad inmediata

**Dónde:** `Hero.jsx`, botón principal (línea ~34-37 según el acta): *"Agendar Clarity Session · 90 min"*.

**Por qué:** el modelo de Fogg (B=MAP) señala que ya la Habilidad está resuelta (WhatsApp con texto prellenado, un solo toque), pero el CTA depende todavía de la motivación reflexiva del visitante — falta un micro-refuerzo que baje la barrera percibida.

**Fix:** agregar un micro-copy chico debajo o al lado del botón, ej. *"Respuesta en el día · Sin compromiso"* — no cambia el botón en sí, solo reduce la fricción percibida de dar el primer paso.

---

## 6. John Doerr — el Key Result de Clarity Session no cuantifica el fondo de tranquilidad

**Dónde:** `ServicesCatalog.jsx` (línea ~17 según el acta): *"Estructuración de fondo de tranquilidad"*.

**Por qué:** el resto de los Key Results del catálogo son específicos y auditables (ej. "presupuesto mensual definido y primera meta de ahorro con fecha") — este quedó como el único sin número concreto.

**Fix (confirmar el número real con Valeria antes de aplicar, no inventar):** algo como *"Estructuración de fondo de tranquilidad de 3 a 6 meses de gastos fijos"* — el rango estándar que suele usarse en planificación financiera personal, pero se confirma con Valeria cuál es el criterio que ella realmente aplica.

---

## 7. Ben Lamorte — falta mostrar que los programas son una escalera, no opciones excluyentes

**Dónde:** `ServicesCatalog.jsx` (grid de 4 tarjetas, líneas ~93-163 según el acta).

**Por qué:** las 4 tarjetas se muestran en un grid horizontal plano — aunque Clarity tiene el badge "Puerta de Entrada", no hay ninguna señal visual de que Personal Finance o Wealth Flow son pasos posteriores opcionales (progresión Crawl→Walk→Run), no elecciones que compiten entre sí desde el día 1.

**Fix:** agregar un conector visual simple entre las tarjetas (una flecha o línea sutil, o texto chico tipo "siguiente paso natural" en las tarjetas 2-4) que comunique la secuencia sin rediseñar todo el grid — el objetivo es que quede claro que no hay que elegir una sola opción para siempre.

---

## 8. Dan Koe — el subtítulo del Hero es institucional, no la voz de la fundadora

**Dónde:** `Hero.jsx` (líneas ~23-25 según el acta): *"Estudio boutique que ordena tus números..."*.

**Por qué:** Koe insiste en que el posicionamiento de autoridad funciona mejor en primera persona, desde la voz real de quien lo construyó — el resto del sitio (Authority.jsx, FounderStatement.jsx) ya está en la voz de Valeria, pero el Hero, que es lo primero que se lee, arranca en tercera persona institucional.

**Fix (ajustar tono con Valeria, es su voz):** algo en la línea de *"Aplico 14 años de estrategia corporativa a tu economía personal"* — primera persona, específico, consistente con el resto del sitio.

---

## 9. Mik Kersten — la metodología se lee como un proceso lineal, no como flujo continuo

**Dónde:** `HowItWorks.jsx` (los 4 pasos, líneas ~4-24 según el acta) — termina en el paso 04 "Decidís" sin indicar que para quienes eligen Wealth Flow esto sigue siendo un ciclo mensual, no un proyecto que termina ahí.

**Por qué:** el sitio sí distingue en el copy de `ServicesCatalog.jsx` entre proyecto cerrado y flujo continuo, pero la sección de Metodología (que es donde más gente mira el "cómo funciona") no refleja esa distinción visualmente.

**Fix:** agregar una indicación chica de loop/ciclo después del paso 04 para quienes están en Wealth Flow — ej. un quinto elemento visual (no necesariamente un "paso 05" nuevo) tipo "→ Se repite cada mes en Wealth Flow" con un ícono de ciclo, sin alterar la numeración 1-4 que ya funciona para el resto de los programas.

---

## 10. Cialdini — testimonios secundarios con rótulo genérico

**Dónde:** `Testimonials.jsx` (líneas ~21, 26, 31 según el acta) — tres testimonios usan "Cliente eFI" en vez de nombre.

**Por qué:** los dos testimonios principales sí llevan nombre y apellido real (María Fe Figueredo, Fabiola Bogado) — el contraste con "Cliente eFI" genérico en los otros tres resta credibilidad por comparación directa, aunque la confidencialidad esté justificada.

**Fix (confirmar con los clientes involucrados si están de acuerdo antes de aplicar):** reemplazar "Cliente eFI" por iniciales con rol, ej. *"C.R. · Profesional Independiente"* — mantiene la confidencialidad pero se lee más específico y real que un rótulo repetido 3 veces.

---

## Resultado esperado

La foto de PhilosophyStrip vuelve a verse como la foto real de Valeria (no una mancha oscura) sin perder la legibilidad del texto que logró `AJUSTES-v7`, y las 9 observaciones menores del panel quedan resueltas — ninguna es estructural, son ajustes de pulido que suman coherencia editorial fina al criterio Mago-Sabio que ya viene guiando todo el sitio.

---

## Conexión con otras notas de este proyecto

- `AJUSTES-v7-correcciones-post-v5-v6.md` — origen del fix que se sobre-corrigió en la sección 1 de este documento.
- `AUDITORIA-9-lentes.md` — los 9 lentes que originaron cada observación de las secciones 2-10 (todos menos Nir Eyal, lente 10).
- `AJUSTES-v8-captura-lead-crm-notion.md` — resuelve el hallazgo de Nir Eyal (lente 10) que el mismo panel marcó como acción prioritaria; queda en pausa, se retoma después de cerrar este documento.
- `AJUSTES-v3-copy-y-conversion-9-lentes.md` — mismo criterio de Helio Vera sobre lenguaje importado, ya aplicado antes al navbar, ahora a "Retainer".
