---
status: listo para Antigravity
fecha_actualizacion: 2026-08-14
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v13, logo, tamano]
summary: AJUSTES-v12 no fue suficiente — Copp lo sigue viendo chico. Se encontró la causa real (los PNG tenían ~20-23% de margen transparente, ya recortado, mismos nombres de archivo) y se sube el tamaño en CSS de forma más agresiva.
---

# AJUSTES-v13 — Logo bien grande, esta vez de verdad

## 0. Qué se encontró y ya se corrigió del lado del archivo

Los PNG del logo (`efi-mark-sage.png`, `efi-studio-lockup-sage.png`, y sus variantes "forest") tenían entre 20% y 23% de margen transparente alrededor del diseño real — es decir, aunque se subiera el alto en CSS, una parte de esa altura era espacio vacío, no logo. **Ya se reemplazaron los 4 archivos en `public/assets/logo/` por versiones recortadas al contenido real** (mismo nombre de archivo, no hace falta cambiar ningún `src` en el código). Esto ya de por sí hace que el logo se vea ~20% más grande a la misma altura de CSS.

## 1. Navbar.jsx — subir bastante más

```jsx
<img 
  src="/assets/logo/efi-studio-lockup-sage.png" 
  alt="eFI Studio" 
  className="h-11 sm:h-14 w-auto object-contain ..." 
/>
```

**Cambio:** de `h-11 sm:h-14` (44px/56px, el de AJUSTES-v12) a **`h-16 sm:h-24`** (64px/96px). Es un salto grande a propósito — el header no tiene una altura fija, se va a estirar para acomodar el logo más grande, eso es esperado y está bien.

## 2. FooterCTA.jsx

```jsx
<img 
  src="/assets/logo/efi-studio-lockup-sage.png" 
  alt="eFI Studio" 
  className="h-9 sm:h-11 w-auto object-contain" 
/>
```

**Cambio:** de `h-9 sm:h-11` (36px/44px) a **`h-12 sm:h-16`** (48px/64px).

## 3. Si en la captura siguiente Copp lo ve bien pero el header quedó demasiado alto

Ajustar el padding vertical del header en vez de volver a achicar el logo — en `Navbar.jsx`, el contenedor tiene `py-5` (sin scroll) y `py-3` (con scroll). Si el logo empuja el header a una altura incómoda, bajar esos paddings antes que el tamaño del logo.

---

## Resultado esperado

El logo se ve como el elemento de marca principal del navbar, no como un detalle chico al lado del botón de WhatsApp — comparable en peso visual al de sitios boutique reales, no un ícono perdido.

---

## Conexión con otras notas de este proyecto

- `AJUSTES-v11-logo-real-y-miller-banner.md` — aplicó el logo por primera vez.
- `AJUSTES-v12-tamano-logo.md` — primer intento de subir el tamaño, insuficiente según Copp.
