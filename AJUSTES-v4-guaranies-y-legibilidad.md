---
status: listo para Antigravity
fecha_actualizacion: 2026-08-06
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v4, copy, legibilidad]
summary: Dos correcciones puntuales de copy — sacar menciones redundantes de "en Guaraníes" en texto narrativo (Paraguay ya usa Guaraníes, no hace falta aclararlo) y subir el tamaño de texto del bloque de confidencialidad/cupos limitados en ServicesCatalog, que quedó en text-xs, casi ilegible.
---

# AJUSTES-v4 — Sacar "en Guaraníes" redundante + legibilidad del bloque de garantía/escasez

## 1. Sacar las menciones narrativas de "en Guaraníes"

**Por qué:** Paraguay usa Guaraníes como moneda oficial — aclararlo en el copy es información redundante que no aporta nada, salvo en un lugar puntual (ver excepción abajo).

**Buscar y corregir estas líneas (el texto puede haber cambiado levemente, buscar por la idea, no solo el string exacto):**

- `ServicesCatalog.jsx` — el subtítulo de la sección: "Transparencia total en precios **en Guaraníes** y alcance claro de cada servicio..." → sacar "en Guaraníes", queda "Transparencia total en precios y alcance claro de cada servicio. Sin sorpresas ni costos ocultos."
- `HowItWorks.jsx` — paso "Visibilizamos": "...tablero ejecutivo visual e intuitivo **en Guaraníes**." → sacar "en Guaraníes".
- `PortalMockup.jsx` — varias menciones narrativas a corregir:
  - "Tendencia de flujo libre y acumulación mensual **en Guaraníes**" → sacar "en Guaraníes".
  - "Desglose de Salida Mensual **(Guaraníes)**" → sacar "(Guaraníes)".
  - "...separaremos estrictamente tus gastos estructurales de tus metas patrimoniales **en Guaraníes**, garantizando..." → sacar "en Guaraníes".
  - "Todos los datos están **cifrados en Guaraníes (Gs.)**" — esta frase además no tiene mucho sentido tal cual (los datos no se "cifran en una moneda") → cambiar a "Todos los datos son confidenciales y están cifrados."

**Excepción — NO tocar:** el campo "Moneda de visualización: Guaraníes Paraguayos (Gs.)" dentro del Portal (`PortalMockup.jsx`) — ahí es un dato de interfaz (como un selector de moneda en un dashboard real), no una aclaración narrativa de más. Se queda como está.

---

## 2. Legibilidad del bloque de confidencialidad + cupos limitados

**Dónde:** `ServicesCatalog.jsx`, el bloque debajo de las 4 cards de precios (comentario `{/* Subtitle Guarantee & Scarcity Note */}`).

**Problema:** las dos líneas están en `text-xs` — casi ilegible, y es texto de confianza/escasez que sí tiene que leerse (va contra la regla ya establecida en `AJUSTES-v1`: texto chico solo para micro-labels, no para copy que el usuario necesita leer).

**Corrección:**
- Línea de confidencialidad ("Todos los programas incluyen 100% de confidencialidad y garantía de satisfacción eFI.") → subir de `text-xs` a `text-sm`, e ícono de `ShieldCheck` de `w-4 h-4` a `w-5 h-5`.
- Línea de cupos limitados ("Para sostener la calidad y la atención personalizada, trabajamos con un número limitado de cupos por mes.") → subir de `text-xs` a `text-base` — es el gatillo de escasez (Cialdini) de la sección de precios, tiene que verse con más peso que la línea de confidencialidad, no menos.

---

## Resultado esperado

Sin menciones redundantes de "Guaraníes" en el copy narrativo, con la única excepción del selector de moneda del Portal, y con el bloque de confidencialidad/escasez de la sección de precios legible a simple vista.
