---
status: listo para Antigravity
fecha_actualizacion: 2026-08-06
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v3, copy, conversion, kahneman, cialdini, doerr, lamorte, koe, fogg, clear, kersten, helio-vera]
summary: Brief de ajustes de copy y jerarquía de contenido (no de diseño visual) derivado de la auditoría en 9 lentes teóricos (`AUDITORIA-9-lentes.md`). Cubre 4 cambios estructurales concretos + criterios de tono para cualquier copy nuevo que se escriba de acá en más.
---

# AJUSTES-v3 — Copy y conversión, resultado de la auditoría en 9 lentes

Este documento asume que la fusión visual (EVOLUCION-v2) y los ajustes de paleta/testimonios/navbar/footer/hero ya están aplicados. Acá el trabajo es de contenido y orden, no de estilo visual.

---

## 1. Subir el Autodiagnóstico por encima de la tabla de precios

**Por qué (Kahneman):** decidir "¿qué programa me sirve?" comparando 4 opciones es trabajo de Sistema 2 (lento, exige esfuerzo). El autodiagnóstico convierte esa misma decisión en 3 clics de Sistema 1. Hoy la tabla de precios aparece antes en el recorrido — le pide al visitante el trabajo más difícil antes de ofrecerle el camino fácil.

**Instrucción:** reordenar las secciones para que `SelfDiagnostic` aparezca antes (o, como mínimo, al mismo nivel de visibilidad) que `ServicesCatalog`. El visitante que no sabe qué programa necesita debería toparse primero con el autodiagnóstico; la tabla de precios queda como la vista de referencia para quien ya sabe lo que quiere (puede seguir accesible desde el navbar en cualquier momento).

---

## 2. Un resultado concreto y verificable por programa

**Por qué (Doerr + Lamorte + Koe, los tres apuntan a lo mismo):** la promesa más fuerte del sitio hoy es la de Clarity Session — "salís con tu planilla anual armada ese mismo día" — es específica, medible, con timeframe. Los otros 3 programas describen el proceso ("sistema presupuestario a medida", "reporte familiar integrado") pero no el resultado verificable, y ninguna de las 5 preguntas de value packaging de Koe sobre "¿cuándo van a ver resultados?" queda respondida con precisión fuera de Clarity Session.

**Instrucción:** agregar a la descripción de `Personal Finance`, `Family Care` y `Wealth Flow` (en `ServicesCatalog.jsx` y en el autodiagnóstico) una frase de resultado concreto, con timeframe, formato "salís con X definido" — no un adjetivo de proceso. Ejemplos de referencia (ajustar redacción final, la idea es la estructura, no el texto literal):
- Personal Finance: "salís con tu presupuesto mensual definido y tu primera meta de ahorro con fecha."
- Family Care: "salen con la distribución de gastos del hogar acordada y un plan de metas compartido, puesto por escrito."
- Wealth Flow: "cada mes recibís tu reporte actualizado con los desvíos ya identificados, sin tener que pedirlo."

---

## 3. Una línea de "por qué ahora" cerca del CTA principal

**Por qué (Lamorte + Koe):** el "Why Now?" de Lamorte y la 5ª pregunta de Koe ("¿por qué debería importarle al visitante justo ahora?") no tienen respuesta visible cerca de ningún botón de acción. La sección de costo de la inacción existe pero está a mitad de página, lejos del momento de decisión.

**Instrucción:** agregar una línea corta (no un párrafo, una frase) cerca del CTA principal del `FooterCTA.jsx` y/o de `ServicesCatalog.jsx` — el costo de esperar un mes más, en una frase directa. Ejemplo de referencia: "Cada mes que pasa sin un sistema es un mes más de decisiones tomadas a ciegas." Ya existe una versión de esta idea más abajo en la página — se trata de traer una versión corta cerca de la acción, no de duplicar la sección completa.

---

## 4. Escasez real + lenguaje de Unidad en los CTAs

**Por qué (Cialdini):** el sitio real de Valeria menciona "cupos limitados" en su FAQ — es un dato real, no un gatillo inventado, y hoy no está confirmado que se haya traído a este sitio. Además, los CTAs actuales ("Agendar", "Empezar ahora") son transaccionales — el gatillo de Unidad de Cialdini (mayor efecto persuasivo cuando el lenguaje es colaborativo, "nosotros" en vez de "usted/vos, cliente") está subutilizado.

**Instrucción:**
- Traer la mención real de "cupos limitados por mes" (verificar el texto exacto en el FAQ del sitio real) a la sección de precios o al footer — no inventar una cifra, usar la misma idea que ya está validada por Valeria.
- Reescribir el CTA principal del Footer de un verbo transaccional a uno colaborativo — ejemplo de referencia: en vez de "Agendar eFI Clarity Session", algo como "Empecemos a ordenar tus números". No aplicar este cambio a todos los CTAs del sitio, solo al principal — el resto puede seguir siendo directo y claro.

---

## 5. Criterios de tono para cualquier copy nuevo (no son cambios puntuales, son reglas de fondo)

Estos no son instrucciones de una sección específica — aplican a cualquier texto nuevo que se escriba de acá en más en este sitio (incluyendo los 4 puntos de arriba):

- **(Helio Vera)** Nunca redactar en registro corporativo distante ("optimice su experiencia financiera") — mantener el tono directo y personal que ya tiene el copy heredado del sitio real. La autoridad de Valeria se apoya en su criterio humano, no en la tecnología — evitar cualquier frase que suene a "la IA analiza tus finanzas"; la tecnología queda invisible, atrás.
- **(Clear + Fogg)** Nombrar la escalera Clarity Session → Personal Finance/Family Care → Wealth Flow como una progresión deliberada ("empezá con una sesión, no con un compromiso de meses"), no como 4 opciones paralelas sin jerarquía. Balancear el copy emocional ("cambiá tu relación con el dinero") con mensajes de facilidad de arranque ("te toma 5 minutos ver si es para vos") — la motivación sola no sostiene la decisión, según Fogg; la facilidad percibida sí.
- **(Kersten)** Cuando se hable de Wealth Flow, explicitar la idea de flujo continuo vs. proyecto con final — ya está insinuada en el nombre, falta explicarla en una frase: "tu reporte no tiene por qué terminar cuando termina el mes: pasa de ser un proyecto único a un flujo que se mantiene solo."

---

## Resultado esperado

El embudo queda estructuralmente igual (mismo Hero, misma franja de Filosofía, mismo Portal), pero el orden de las secciones prioriza la vía de menor esfuerzo cognitivo (autodiagnóstico antes que comparación), cada programa tiene una promesa verificable en vez de solo descriptiva, y el copy de conversión (CTAs, costo de inacción, escasez) está más cerca del punto de decisión en vez de disperso por la página.
