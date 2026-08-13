---
status: listo para Antigravity
fecha_actualizacion: 2026-08-13
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v7, correcciones, legibilidad, guaranies, navbar, localizacion]
summary: Tres correcciones puntuales detectadas por Copp revisando el resultado de AJUSTES-v5/v6 ya aplicados — un stat vacío ("Gs. / Moneda Local") que sobrevivió a la limpieza de AJUSTES-v4, un problema de legibilidad del texto de PhilosophyStrip.jsx sobre la nueva foto real de Valeria (philosophy-band.jpg), y el label "FAQ" del navbar, que no todo el público paraguayo de eFI entiende y conviene llevar a español.
---

# AJUSTES-v7 — Stat vacío en Authority, legibilidad de PhilosophyStrip y navbar en español

## 1. Sacar (o reemplazar) el stat "Gs. / Moneda Local" en Authority.jsx

**Dónde:** `Authority.jsx`, grid de 4 stats al pie de la columna derecha (líneas ~60-77), el cuarto bloque:

```jsx
<div>
  <span className="block font-serif text-3xl font-bold text-efi-sand">Gs.</span>
  <span className="text-xs text-efi-muted uppercase font-medium">Moneda Local</span>
</div>
```

**Por qué:** es un stat sin información real — "Gs." como logro/dato destacado no dice nada (Paraguay ya usa Guaraníes, es lo mismo que se corrigió en `AJUSTES-v4` para el copy narrativo, esto es el mismo problema pero en un stat en vez de una frase). Al lado de "14+ Años Corporativos", "+100 Familias Ordenadas" y "100% Confidencialidad" — que sí son datos reales — este cuarto bloque queda como relleno vacío y le resta seriedad al resto.

**Fix recomendado (más simple, sin inventar un dato nuevo):** sacar el cuarto bloque y pasar el grid de `grid-cols-2 sm:grid-cols-4` a `grid-cols-3` — 3 stats reales y contundentes se leen mejor que 3 reales + 1 relleno.

**Alternativa (si Valeria tiene un 4º dato real para mostrar):** reemplazar por algo verificable — ej. un monto de patrimonio gestionado, años desde la fundación de eFI, o clientes activos — pero solo si es un número real confirmado por Valeria, no inventar uno para llenar el espacio.

---

## 2. Legibilidad del texto en PhilosophyStrip.jsx sobre la foto nueva

**Dónde:** `PhilosophyStrip.jsx` — la franja full-width de los 4 pilares (Privacidad, Libertad, Eficiencia, Simplicidad).

**Problema (con captura de pantalla de Copp):** desde que `AJUSTES-v6` reemplazó la foto de stock de Unsplash por `philosophy-band.jpg` (foto real de Valeria), el texto se volvió difícil de leer. La foto de stock anterior era más uniforme en tono; esta foto real tiene zonas mucho más claras (la camisa blanca, la puerta de vidrio con luz de fondo) que compiten directamente con el texto crema/dorado, y el overlay actual (`bg-efi-dark/82`, un overlay plano) no alcanza a parejar esas zonas claras.

**Fix — combinar los tres, no uno solo (son complementarios, no alternativos):**

1. **Bajarle brillo/contraste a la foto de base**, antes del overlay — agregar al `<img>` un filtro CSS, ej. `className="... grayscale brightness-75 contrast-90"` (ajustar los valores probando visualmente — la idea es que ninguna zona de la foto quede tan clara como para competir con texto crema encima).
2. **Subir la opacidad del overlay** de `bg-efi-dark/82` a algo en el rango `/88` a `/92` — probar y quedarse con el mínimo que garantice legibilidad (no ennegrecer de más, la foto tiene que seguir siendo reconocible, ese es el punto de `AJUSTES-v6`).
3. **Agregar sombra de texto** a los títulos y descripciones de los 4 pilares como red de seguridad adicional, independiente de lo que haya detrás — ej. `style={{ textShadow: '0 2px 16px rgba(0,0,0,0.75)' }}` o la clase de utilidad equivalente en Tailwind, tanto en el `<h3>` del nombre del pilar como en el `<p>` de la descripción.

**Si con eso no alcanza (opción estructural, más grande):** en vez de texto flotando directo sobre la foto, poner cada bloque de pilar (o el bloque completo de los 4) sobre un panel semi-opaco tipo `.glass-panel` (la clase que ya existe en `index.css`, usada en otras partes del sitio) — garantiza legibilidad total sin depender de qué tan clara u oscura sea la zona de la foto debajo. Usar esto solo si las 3 correcciones de arriba no alcanzan, porque tapa más la foto real que es el punto de este cambio.

**Verificar en mobile también** — el grid de pilares pasa a 1 columna apilada (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) y la foto se recorta distinto en pantallas angostas (`object-cover`), puede que la zona más clara de la foto quede justo detrás del texto en mobile aunque en desktop se vea bien.

---

## 3. "FAQ" del navbar, a español

**Dónde:** `Navbar.jsx`, array `navLinks`:

```jsx
{ name: "FAQ", href: "#faq" },
```

**Por qué:** "FAQ" es una sigla en inglés (Frequently Asked Questions) — parte del público de eFI en Paraguay no la reconoce de forma automática, y el resto del navbar ya está en español ("Servicios & Precios", "Autodiagnóstico", "Testimonios"). Es el mismo criterio de fondo de `AJUSTES-v3`/Helio Vera: mantener el registro cercano, nada que suene a jerga importada sin necesidad.

**Fix:** cambiar el `name` a **"Preguntas Frecuentes"** — es además el texto que ya usa el propio `<h2>` de esa sección en `FAQ.jsx` ("Preguntas Frecuentes"), así que queda consistente entre el link del navbar y el título real de la sección a la que lleva. **No tocar** el `href="#faq"` ni el `id="faq"` de `FAQ.jsx` — eso es solo el ancla interna, no texto visible.

Si "Preguntas Frecuentes" resulta muy largo para el navbar en mobile/tablet (revisar cómo queda en el menú desplegable de `Navbar.jsx`), alternativa más corta manteniendo el español: **"Preguntas"**.

---

## Resultado esperado

Los 3 stats reales de Authority.jsx sin el relleno de "Gs. / Moneda Local", el texto de los 4 pilares de PhilosophyStrip legible en cualquier punto de la foto de Valeria (desktop y mobile, sin perder la foto real como fondo reconocible), y el navbar 100% en español, sin siglas en inglés.

---

## Conexión con otras notas de este proyecto

- `AJUSTES-v4-guaranies-y-legibilidad.md` — mismo tipo de hallazgo (mención vacía de "Guaraníes"), ahora en un stat en vez de en copy narrativo.
- `AJUSTES-v6-fotos-personalizadas.md` — introdujo `philosophy-band.jpg`, origen de este problema de legibilidad.
- `AJUSTES-v3-copy-y-conversion-9-lentes.md` — criterio de Helio Vera sobre registro cercano vs. lenguaje importado, aplicable acá al navbar.
- `system-design-efi-v1.md` — paleta y tratamiento visual de referencia.
