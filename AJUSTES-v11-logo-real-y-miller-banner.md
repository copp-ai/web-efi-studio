---
status: listo para Antigravity — con 1 punto de licencia a confirmar antes de activar en producción
fecha_actualizacion: 2026-08-14
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v11, logo, miller-banner, tipografia, licencia-fuente]
summary: Se encontró el logo real de eFI y la fuente Miller Banner completa (10 pesos, TTF originales de Carter & Cone / Font Bureau) en la carpeta de Drive que compartió Valeria. Ambos ya están copiados a `web-efi-studio/public/`. Este documento resuelve el punto bloqueante de logo (abierto desde AJUSTES-v5) y reabre correctamente la decisión de tipografía que AJUSTES-v10 había ratificado sobre datos incompletos — con una advertencia de licencia que hay que confirmar con Valeria antes de activar Miller Banner en el sitio en vivo.
---

# AJUSTES-v11 — Logo real aplicado + Miller Banner disponible (pendiente de confirmar licencia web)

## 0. De dónde salió esto

Copp compartió el link de la carpeta de Drive de Valeria con los logos y la tipografía (`https://drive.google.com/drive/folders/1MdyAu8tzmNgs-URy4WEFS4waFv_24Whp`). Adentro había justo lo que faltaba desde `AJUSTES-v5`:

- **Logo real de eFI** — 4 archivos PNG de alta resolución (962-1840px), fondo transparente, en 2 variantes: el monograma "efi" solo, y el lockup completo "efi Studio". Cada uno en 2 colores.
- **Fuente Miller Banner completa** — 10 pesos en `.ttf`, archivos originales firmados digitalmente por Carter & Cone Type Inc. / The Font Bureau Inc. (fuente real, no una copia pirateada).
- **Fuente Inter completa** — familias 18pt/24pt/28pt en `.ttf`. No se tocó nada acá: el sitio ya carga Inter vía Google Fonts CDN, que es más simple que auto-hospedar, así que estos archivos quedan disponibles en Drive por si algún día hace falta una versión offline, pero no se copiaron al proyecto.
- Además había un `eFi_Logo.ai` (vector, Illustrator) y un `Efi_Insignia.psd` (Photoshop, 44MB) — son archivos fuente de diseño, no assets web utilizables directo por el navegador. Quedan en Drive; si en algún momento hace falta re-exportar el logo a otro tamaño o formato, están ahí.

**Ya copiados a `web-efi-studio/public/`:**

```
public/assets/logo/efi-mark-sage.png              (962×1706, monograma "efi", sage #8C9180)
public/assets/logo/efi-mark-forest.png             (962×1706, monograma "efi", verde oscuro #2B4138)
public/assets/logo/efi-studio-lockup-sage.png       (1840×1706, "efi Studio" completo, sage #8C9180)
public/assets/logo/efi-studio-lockup-forest.png     (1840×1706, "efi Studio" completo, verde oscuro #2B4138)
public/fonts/miller-banner/MillerBanner-Roman.ttf
public/fonts/miller-banner/MillerBanner-Light.ttf
public/fonts/miller-banner/MillerBanner-LightItalic.ttf
public/fonts/miller-banner/MillerBanner-Italic.ttf
public/fonts/miller-banner/MillerBanner-SemiBold.ttf
public/fonts/miller-banner/MillerBanner-SemiBoldItalic.ttf
public/fonts/miller-banner/MillerBanner-Bold.ttf
public/fonts/miller-banner/MillerBanner-BoldItalic.ttf
public/fonts/miller-banner/MillerBanner-Black.ttf
public/fonts/miller-banner/MillerBanner-BlackItalic.ttf
```

---

## 1. Logo — reemplazar el wordmark de texto por el logo real

**Ninguno de los 2 colores es literalmente "crema" como pedía `system-design-efi-v1.md` §12** ("Versión crema sobre fondos oscuros") — lo que hay son 2 tonos: sage/verde grisáceo (`#8C9180`) y verde bosque oscuro (`#2B4138`). Contra el fondo casi negro del sitio (`efi.dark #0A1113`):

- **Sage (`#8C9180`) tiene contraste suficiente para leerse bien** — es el que hay que usar en todo el sitio.
- **Verde bosque (`#2B4138`) es casi tan oscuro como el fondo — prácticamente invisible ahí.** No usarlo en ningún lugar del sitio actual (fondo 100% oscuro). Queda guardado por si en el futuro se necesita una versión sobre fondo claro (ej. un footer o sección con fondo crema).

**Dónde aplicar (`efi-studio-lockup-sage.png`, el lockup completo):**

1. `Navbar.jsx` — reemplazar el `<span>` de texto `eFI Studio` (wordmark tipográfico) por `<img src="/assets/logo/efi-studio-lockup-sage.png" alt="eFI Studio" className="h-8 w-auto" />` (ajustar la altura contra el diseño real del navbar, probar 32-40px de alto).
2. `FooterCTA.jsx` — mismo criterio, reemplazar el texto `"eFI Studio · Finanzas Boutique"` por el logo (mantener el "· Finanzas Boutique" como texto aparte al lado o debajo si se quiere conservar esa aclaración).

**Dónde aplicar (`efi-mark-sage.png`, el monograma solo):**

3. `favicon.svg` — reemplazar el SVG genérico actual (una "F" simple) por una versión del monograma. El PNG no sirve directo como favicon de buena calidad en todos los tamaños; si Antigravity puede convertir el PNG a un favicon multi-resolución (16x16, 32x32, apple-touch-icon), mejor. Si no, dejar el favicon actual como está por ahora y avisar — no es bloqueante, es un detalle menor.

**Verificar proporción y legibilidad en mobile** después de aplicar — el lockup es más ancho que alto (1840×1706 ≈ casi cuadrado en realidad, revisar), puede necesitar un breakpoint donde el navbar en mobile use solo el monograma (`efi-mark-sage.png`) en vez del lockup completo si no entra cómodo.

---

## 2. Miller Banner — disponible, pero con un freno de licencia antes de activarlo en producción

**Esto es lo que faltaba desde `AJUSTES-v5` y lo que `AJUSTES-v10` (punto 4) no pudo resolver del todo** — en ese momento no existían los archivos reales, así que se ratificó Cormorant Garamond como sustituto. Ahora los 10 pesos de Miller Banner están confirmados como archivos originales y legítimos (firma digital de Carter & Cone / Font Bureau intacta).

**Hay un punto de licencia que sigue sin confirmar — no es lo mismo tener el archivo que tener el derecho de usarlo en una web:**

Miller Banner se vende con licencias separadas: una de escritorio (para diseño gráfico, PSD, Illustrator, impresos) y otra de **web, que es una suscripción anual aparte, tarifada por volumen de páginas vistas por mes** (esto ya se investigó en `cliente.md`, nota pendiente para Valeria). Tener el `.ttf` no confirma automáticamente que la licencia cubra `@font-face` en un sitio en producción — muchas licencias de escritorio de fuentes comerciales prohíben explícitamente el embebido web.

**Decisión de Copp (14/08): activar igual ahora, para ver cómo queda, y confirmar la licencia con Valeria después.** Si al confirmar resulta que la licencia no cubre uso web, se revierte sin drama (ver paso 4). No es una decisión definitiva de producción, es una prueba visual.

**Instrucción para Antigravity — activar ahora:**

1. Agregar el `@font-face` para los 10 pesos en `src/index.css`, apuntando a `/fonts/miller-banner/MillerBanner-*.ttf` (Roman → weight 400, Light → 300, SemiBold → 600, Bold → 700, Black → 900, cada uno con su itálica correspondiente vía `font-style: italic`).
2. Cambiar `fontFamily.serif` en `tailwind.config.js` de `['"Cormorant Garamond"', 'Georgia', 'serif']` a `['"Miller Banner"', '"Cormorant Garamond"', 'Georgia', 'serif']` — Cormorant queda como fallback, no se borra, por si algún peso puntual no carga bien.
3. Dejar un comentario arriba del bloque `@font-face` en `index.css` que diga textualmente: *"Miller Banner activado 14/08 a pedido de Copp para vista previa visual. PENDIENTE: confirmar con Valeria si la licencia cubre uso web. Si no la cubre, revertir el paso 4 de AJUSTES-v11."* — así queda visible en el código mismo, no solo en este documento.
4. **Paso de reversión, documentado para cuando haga falta (no ejecutar ahora):** si Valeria confirma que la licencia no cubre web, volver `fontFamily.serif` a `['"Cormorant Garamond"', 'Georgia', 'serif']` en `tailwind.config.js` y quitar el bloque `@font-face` de `index.css` — el sitio vuelve exactamente al estado de antes de este punto, sin dejar residuos (Cormorant sigue cargado vía Google Fonts en `index.html`, no depende de nada de esto).

**Actualización de `system-design-efi-v1.md`:** el punto 4 de `AJUSTES-v10` había agregado una entrada "v1.1" ratificando Cormorant Garamond como la fuente serif oficial del sitio web — eso se hizo sin que existieran los archivos reales de Miller Banner todavía. La entrada "v1.2" corrige eso, y ahora se agrega una "v1.3" que registra la activación real, en modo de prueba visual, pendiente de la confirmación de licencia de Valeria.

---

## 3. Qué NO se trajo al proyecto (y por qué)

- **`eFi_Logo.ai`** (vector Illustrator) — no es un formato que un navegador pueda renderizar directo. Útil para reexportar el logo a otros tamaños/formatos en el futuro (ej. un SVG real, que sería mejor que el PNG para nitidez en cualquier resolución). Si se quiere un SVG del logo, ese es el archivo fuente para pedírselo a quien lo diseñó o exportarlo con Illustrator/Inkscape.
- **`Efi_Insignia.psd`** (Photoshop, 44MB) — parece ser una versión tipo sello/emblema del monograma, distinta a lo que ya se trajo. No se pudo previsualizar por el tamaño del archivo. Si el "sello compacto" que menciona `system-design-efi-v1.md` §12 (para footer/portada) es distinto a `efi-mark-sage.png`, vale la pena que Copp lo abra directo en Drive para confirmar si hace falta traerlo también.
- **Fuentes Inter en `.ttf`** — el sitio ya funciona bien con Inter vía Google Fonts CDN, no hace falta duplicar.

---

## Resultado esperado

El sitio deja de mostrar un wordmark de texto plano y pasa a usar el logo real de eFI (versión sage, la que se lee bien sobre el fondo oscuro) en navbar y footer — se cierra el punto bloqueante que venía desde `AJUSTES-v5`. Miller Banner queda listo técnicamente para activarse como tipografía titular real en cuanto Valeria confirme que la licencia cubre uso web — hasta entonces, el sitio sigue funcionando con Cormorant Garamond sin ningún cambio visible para el usuario final.

---

## Conexión con otras notas de este proyecto

- `AJUSTES-v5-aplicar-brand-system-v1.md` — origen del punto bloqueante de logo, que este documento cierra.
- `AJUSTES-v10-limpieza-post-comite-marca.md`, punto 4 — la ratificación de Cormorant que se hizo sin los archivos reales de Miller Banner; este documento la deja pendiente de una decisión mejor informada.
- `system-design-efi-v1.md` §12 — se actualiza con la entrada v1.2 del historial de versiones.
- `cliente.md` — nota pendiente para tratar con Valeria sobre licenciamiento de Miller Banner, ahora con el dato adicional de que ya tiene los archivos (falta confirmar bajo qué licencia).
