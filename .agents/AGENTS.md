# Reglas de Copy y Contenido

- **Moneda Local:** No agregar menciones redundantes a "en Guaraníes" en el copy narrativo (ej. descripciones de Servicios, Metodología, Hero). La única excepción válida para mencionar la moneda es el campo estático de "Moneda de visualización" en la interfaz del Portal.

---

# Assets de Marca (Logos y Tipografía)

**Logos:** deben vivir en `public/brand/logos/`. Origen: carpeta de Drive que compartió Valeria (logos y tipografías de eFI). Hay 8 PNG en dos colorways (normal / verde) y dos lockups (isotipo `Efi_Logo.png` + logo completo `Efi studio_Logo.png`, más 2 variantes con el tagline "Tu Tiempo Tu Lujo"). Los archivos fuente `.ai` y `.psd` de esa carpeta no van al repo — son para edición, no para el sitio.

**⚠️ El logo todavía no está en su versión final.** Según `eFI-Brand-System-v1.md` §12 y §14 (v1.1): el logo vectorizado en color crema para fondos oscuros sigue "pendiente de revisión con Valeria". Ninguna de las 2 variantes actuales (gris neutro / verde oscuro sobre transparente) es la versión "crema sobre fondo oscuro" que pide el brand doc para usar sobre el fondo del sitio (`#0A1113`). Tratar estos PNG como placeholder/referencia, no como el asset final de producción — confirmar con Valeria antes de dar el logo por definitivo en el header o el footer.

**Estado actual del Navbar:** `src/components/Navbar.jsx` usa hoy un wordmark de texto ("eFI Studio" en `font-serif`), no una imagen de logo. Si se reemplaza por el logo real: usar el isotipo (`Efi_Logo.png`, "monograma efi como sello compacto") en header/footer, y el logo completo solo en cierres de marca — así lo define el brand doc §12.

**Tipografía — ya resuelto, no reinstalar nada:** el sitio ya carga Inter + Cormorant Garamond vía Google Fonts CDN (`index.html`, bloque `<!-- Google Fonts -->`) y están mapeadas en `tailwind.config.js` (`font-sans` → Inter, `font-serif` → Cormorant Garamond). **No hace falta bajar ni embeber archivos de fuente localmente, y Miller Banner no corresponde a este proyecto:** Miller Banner es la tipografía editorial de los carruseles de Instagram (pipeline offline, sin red, por eso ahí sí va embebida en base64 — ver brand doc §12 "Tipografía en HTML"). El brand doc ratifica explícitamente **Cormorant Garamond** como la fuente serif oficial para "la versión web y prototipos digitales" (§12, historial v1.1). Si Antigravity ve archivos `.ttf` de Miller Banner sueltos en el repo, son para otro pipeline (carruseles), no para este sitio.
