---
status: listo para Antigravity — con 1 punto bloqueante externo y 1 decisión de Copp
fecha_actualizacion: 2026-08-13
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v10, comite-marca, limpieza, tokens-legacy, tipografia, logo, em-dash]
summary: Cierre de las 5 observaciones que dejó el panel de 5 jueces de marca (13/08) al auditar `system-design-efi-v1.md` contra el código real. 4 de las 5 son limpieza directa (tokens `pine` huérfanos, 2 em dash en metadatos de `index.html`, archivo muerto `BrandPhilosophy.jsx`) y 1 es una decisión de Copp (ratificar Cormorant Garamond como titular web definitivo). El logo (Juez 3) sigue BLOQUEANTE — no hay nada que Antigravity pueda hacer ahí, se repite el estado por trazabilidad.
---

# AJUSTES-v10 — Limpieza post-panel de marca (tokens legacy, em dash, código muerto)

## 0. Contexto

El panel de 5 jueces evaluó el sitio contra `system-design-efi-v1.md` en 5 dimensiones (paleta, tipografía, logo, voz, arquetipo). 4 de 5 salieron **APROBADO CON OBSERVACIÓN** y 1 (logo) salió **NO APROBADO — bloqueante**. Ninguna observación es estructural — son residuos de versiones anteriores del sitio (antes de que existiera el brand system formal) que quedaron sin barrer.

---

## 1. Limpiar tokens y clases `pine` huérfanas

**Dónde (3 lugares, todos citados por el Juez 1):**

1. `App.jsx`, línea ~19 — la selección de texto del navegador todavía usa:
   ```jsx
   selection:bg-efi-pine/30 selection:text-efi-pine-light
   ```
   Reemplazar por el equivalente en dorado, ej. `selection:bg-efi-gold/30 selection:text-efi-gold-light`.

2. `Testimonials.jsx`, línea ~40 — usa la clase `bg-pine-glow`. Reemplazar por el equivalente dorado ya existente en `tailwind.config.js` (`bg-gold-glow`, agregado en AJUSTES-v5) o quitarla si el glow no es necesario ahí.

3. `tailwind.config.js` (líneas ~21-25, ~38-44) e `index.css` (líneas ~20-46) — siguen declaradas las utilidades `.glass-panel-pine`, `.text-pine-gradient` y `bg-pine-glow`. Si después de los puntos 1 y 2 ningún componente las usa (confirmar con una búsqueda de texto en `src/` antes de borrar), eliminarlas del todo — dejar clases muertas en el config invita a que se vuelvan a usar por error más adelante.

**Nota aparte — NO tocar el verde `emerald` de `PortalMockup.jsx`:** el Juez 1 ya aclaró que ese uso es legítimo (representa métricas financieras positivas y estados completados dentro del mockup del portal, no es un acento de marca compitiendo con el dorado). Dejar como está.

---

## 2. Dos em dash sobrevivientes en `index.html`

**Dónde:** `index.html`, líneas ~7-8 — la etiqueta `<title>` y el `<meta name="description">` todavía tienen una raya `—` cada uno.

**Por qué:** todos los componentes JSX ya están limpios de em dash (confirmado por el Juez 4 sobre 5 frases reales), pero estos dos metadatos quedaron afuera de esa limpieza porque viven en `index.html`, no en un componente React — es lo que ve Google/redes sociales al compartir el link, así que vale la pena corregirlo igual.

**Fix:** reemplazar la raya `—` por `·` o reformular sin separador, según cómo quede mejor la frase completa en cada caso.

---

## 3. Borrar `BrandPhilosophy.jsx` (código muerto)

**Dónde:** `src/components/BrandPhilosophy.jsx`.

**Por qué:** el Juez 5 confirmó que este componente ya no se renderiza en `App.jsx` — fue reemplazado por `PhilosophyStrip.jsx` en algún punto anterior de este proyecto y quedó el archivo viejo sin borrar.

**Fix:** eliminar el archivo. Antes de borrar, confirmar con una búsqueda rápida que ningún otro archivo lo importa (debería dar cero resultados, ya que `App.jsx` no lo referencia).

---

## 4. Decisión pendiente de Copp — Cormorant Garamond vs. Miller Banner

**No es un fix de código, es una decisión de documentación.** El Juez 2 confirmó que el código ya opera 100% sobre `Cormorant Garamond` como fuente serif (`tailwind.config.js`, `index.html`) y que la jerarquía titular/cuerpo está perfectamente implementada — el único punto abierto es que `system-design-efi-v1.md` todavía menciona Miller Banner como la opción principal y Cormorant como sustituto, sin que se haya ratificado formalmente cuál es la definitiva para la versión web.

**Qué falta:** que Copp confirme si Cormorant Garamond queda como la tipografía titular definitiva del sitio web (dado que ya es lo que está en producción y funcionando bien), o si en algún momento se va a licenciar/cargar Miller Banner. Si se ratifica Cormorant, hay que actualizar la sección de tipografía de `system-design-efi-v1.md` para que el documento de marca refleje la realidad del sitio en vez de seguir listando una opción no implementada como la principal.

---

## 5. Logo — sigue BLOQUEANTE, sin acción posible por ahora

**Estado:** sin cambios desde `AJUSTES-v5`. El Juez 3 confirmó otra vez que no existe ningún archivo vectorial del logo real (la "F con forma de llave", el monograma "efi") en `public/assets/` ni en ningún otro lugar del repo — el favicon actual es un SVG genérico, no el isotipo oficial, y tanto el navbar como el footer siguen usando wordmark de texto plano.

**No hay nada que Antigravity pueda resolver acá.** Se repite este punto solo por trazabilidad — sigue esperando el archivo real de parte de Valeria. Cuando llegue, se aplica en un ajuste aparte (reemplazo de wordmark por el logo real en Navbar.jsx, FooterCTA.jsx y favicon.svg).

---

## Resultado esperado

El sitio queda sin residuos visuales o de código de versiones anteriores al brand system (tokens `pine`, em dash en metadatos, componente muerto), con la decisión tipográfica formalmente asentada en el documento de marca, y el logo real sigue como el único pendiente genuinamente externo — no hay más limpieza de superficie que hacer después de este documento salvo lo que dependa de activos que Valeria todavía no entregó.

---

## Conexión con otras notas de este proyecto

- `system-design-efi-v1.md` — documento de marca que se actualiza en el punto 4 una vez que Copp confirme la tipografía.
- `AJUSTES-v5-aplicar-brand-system-v1.md` — origen de la migración de paleta pine→gold y del bloqueo del logo, ambos referenciados acá.
- `AJUSTES-v9-sobrecorreccion-y-hallazgos-comite.md` — ronda anterior de limpieza de observaciones del panel (esa fue del panel de 10 lentes de conversión; esta es del panel de 5 jueces de marca).
