---
status: listo para Antigravity
fecha_actualizacion: 2026-08-14
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v12, logo, tamano]
summary: El logo real aplicado en AJUSTES-v11 quedó muy chico en Navbar.jsx y FooterCTA.jsx — confirmado con captura de pantalla de Copp. La palabra "Studio" del lockup es casi ilegible al tamaño actual. Se sube el tamaño en ambos lugares.
---

# AJUSTES-v12 — Subir el tamaño del logo en Navbar y Footer

## 1. Navbar.jsx

**Dónde:** el `<img>` del logo real aplicado en AJUSTES-v11.

```jsx
<img 
  src="/assets/logo/efi-studio-lockup-sage.png" 
  alt="eFI Studio" 
  className="h-8 sm:h-9 w-auto object-contain ..." 
/>
```

**Cambio:** subir de `h-8 sm:h-9` (32px/36px) a **`h-11 sm:h-14`** (44px/56px) — casi el doble. A ese tamaño la palabra "Studio" del lockup debería leerse bien; hoy es casi ilegible en la captura que mandó Copp.

## 2. FooterCTA.jsx

**Dónde:** el `<img>` del logo real, junto a "· Finanzas Boutique".

```jsx
<img 
  src="/assets/logo/efi-studio-lockup-sage.png" 
  alt="eFI Studio" 
  className="h-7 sm:h-8 w-auto object-contain" 
/>
```

**Cambio:** subir de `h-7 sm:h-8` (28px/32px) a **`h-9 sm:h-11`** (36px/44px).

## 3. Si con eso "Studio" todavía no se lee bien

El lockup completo tiene una "F" en script fino y "Studio" en versalita chica — es un diseño con detalle, no escala perfecto a tamaños muy chicos. Si después de subir el tamaño la palabra "Studio" sigue sin leerse con claridad (sobre todo en mobile), la alternativa es usar **solo el monograma** (`/assets/logo/efi-mark-sage.png`, la "F" sola) en el navbar cuando está scrolleado/compacto, y reservar el lockup completo para el estado inicial del navbar (sin scroll) donde hay más espacio vertical. No aplicar este cambio de entrada — probar primero el tamaño más grande y ver cómo queda.

---

## Resultado esperado

El logo se ve con el peso visual que le corresponde al lado del botón "Clarity Session" y de los links del navbar — ni compitiendo de más ni perdido de chico como está ahora.

---

## Conexión con otras notas de este proyecto

- `AJUSTES-v11-logo-real-y-miller-banner.md` — aplicó el logo por primera vez, con el tamaño que ahora se corrige.
