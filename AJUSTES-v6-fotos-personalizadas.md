---
status: listo para Antigravity
fecha_actualizacion: 2026-08-13
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v6, fotografia, personalizacion]
summary: Copp dejó 6 fotos reales de Valeria (carpeta Fotos/) elegidas al azar de una carpeta con cientos. De esas 6, se eligieron 4 para reemplazar fotos genéricas/stock del prototipo — ya rotadas, redimensionadas y optimizadas para web en public/assets/. Las otras 2 quedan afuera del sitio (una es una captura de pantalla con la interfaz del teléfono encima, la otra es un editorial de moda muy conceptual que no calza con el tono de rigor financiero).
---

# AJUSTES-v6 — Fotos reales de Valeria reemplazando genéricas/stock

## 0. Contexto

Copp dejó una carpeta `Fotos/` (en la raíz de `web-efi-studio/`, mismo nivel que `public/`) con 6 fotos elegidas al azar de una carpeta con cientos de fotos de Valeria. El pedido: usarlas para personalizar el prototipo, que hoy usa 3 fotos genéricas (`about-valeria.jpg`, `grid-photo-1.jpg`, `faq-photo.jpg` en `public/assets/`) y, en `PhilosophyStrip.jsx`, una foto de stock de Unsplash (ni siquiera es de eFI).

De las 6 originales, 4 fotos sirven y ya están procesadas (rotadas — venían con la orientación de cámara sin corregir — y comprimidas a un peso razonable para web) en `public/assets/`. Las otras 2 no se usan (ver §3).

---

## 1. Reemplazos a hacer (4 componentes)

| Componente | Línea aprox. | Archivo actual | Archivo nuevo | Por qué esta foto en este lugar |
|---|---|---|---|---|
| `Authority.jsx` | `src="/assets/about-valeria.jpg"` | `about-valeria.jpg` | `founder-portrait.jpg` | Retrato cercano, sonrisa genuina, apoyada en la baranda de un patio — es la foto más "cara a cara" de las 6, ideal para la card de fundadora. |
| `BrandPhilosophy.jsx` | `src="/assets/grid-photo-1.jpg"` | `grid-photo-1.jpg` | `philosophy-editorial.jpg` | Valeria trabajando: laptop con la pantalla de bienvenida de eFI (el logo real — ver nota en §2), café, papers, lapicera. Calza literal con el copy de esa foto en el sitio: "Rigor & Tranquilidad — Un método pensado para durar." |
| `FAQ.jsx` | `src="/assets/faq-photo.jpg"` | `faq-photo.jpg` | `faq-personalized.jpg` | Foto cálida, sonriendo, mirando el teléfono — transmite cercanía, calza con el caption existente "Atención Personalizada". |
| `PhilosophyStrip.jsx` | `src="https://images.unsplash.com/photo-1507679799987-..."` | (foto de stock de Unsplash) | `philosophy-band.jpg` | Este es el cambio de mayor impacto: hoy la franja de los 4 pilares usa una foto de escritorio genérica de Unsplash, ni siquiera de eFI. La nueva es una foto editorial real de Valeria en un espacio premium — mucho más alineada con "fotografía editorial propia, no stock genérico", que es justo lo que ya se identificó como punto fuerte del sitio real de la competencia (ver `cliente.md`). |

**Para `PhilosophyStrip.jsx` en particular:** hoy el `<img>` apunta a una URL externa de Unsplash con `className="... grayscale"` y overlay oscuro encima (`bg-efi-dark/82`). Al cambiar a `philosophy-band.jpg`, mantener el mismo tratamiento (grayscale + overlay) para no romper la legibilidad del texto superpuesto — probar primero si el grayscale se ve bien sobre esta foto en particular (tiene más rango tonal que un desk shot promedio) antes de darlo por bueno.

**Todas las fotos nuevas ya vienen:**
- Rotadas correctamente (las 4 originales venían con la orientación de cámara sin corregir — display horizontal con el contenido de costado).
- Redimensionadas (1600px en el lado largo para las 3 verticales/de card, 2400px para la de `PhilosophyStrip` por ser banda full-width).
- Comprimidas a JPEG calidad 85 (141-364 KB cada una — no deberían pesar más que las fotos genéricas actuales).

No hace falta que Antigravity vuelva a procesarlas, solo actualizar el `src` en los 4 componentes.

---

## 2. Nota aparte — el logo real aparece en una de las fotos

`philosophy-editorial.jpg` (la que va a `BrandPhilosophy.jsx`) muestra, de fondo, la pantalla de una laptop con lo que parece ser la pantalla de bienvenida real de la marca eFI: el logo en script elegante (la F efectivamente dibujada como una llave, tal como describe `system-design-efi-v1.md` §12), la tagline "Organización de Finanzas Personales & Familiares" y los 4 pilares (Eficiencia | Simplicidad | Privacidad | Libertad).

Esto **no reemplaza** el pedido de logo real que quedó bloqueante en `AJUSTES-v5` (§3) — es una foto de una pantalla, con reflejo y brillo, no un archivo vectorial limpio. Pero confirma que el archivo del logo existe en algún lado (probablemente una presentación o un Figma de Valeria) y da una referencia visual concreta de cómo es. Vale la pena que Copp le pregunte puntualmente a Valeria por *ese* archivo la próxima vez que hablen, mostrándole esta misma foto como referencia de "esto, en limpio".

---

## 3. Fotos que quedan afuera (de las 6 originales)

- **`IMG_8471.PNG`** — no es una foto, es una captura de pantalla de la app Fotos del celular mostrando otra imagen (se ve la barra de estado, el botón de cerrar y el nombre de archivo "MDZ00552.JPG" superpuestos). Es esencialmente un duplicado de menor calidad de `MDZ00564.jpeg` (misma sesión, ropa y locación), pero con la interfaz del teléfono encima — no usable tal cual.
- **`IMG_0324.PNG`** — editorial de moda muy conceptual (Valeria acostada sobre una superficie de vidrio, traje a rayas con corbata, papers y vasos de agua alrededor). Visualmente fuerte, pero el tono es de editorial de moda, no de consultoría financiera boutique — no calza con el arquetipo Mago-Sabio ni con el resto del sitio. Mejor reservarla para contenido de marca personal / Instagram (el módulo 🎯 Marca Personal de su Torre de Control), no para el funnel de la web.

---

## Resultado esperado

Las 4 fotos genéricas/stock del prototipo (incluida la única que ni siquiera era de eFI) reemplazadas por fotos reales de Valeria, ya optimizadas para web, sin tocar el resto del layout ni los captions existentes.

---

## Conexión con otras notas de este proyecto

- `AJUSTES-v5-aplicar-brand-system-v1.md` — el pedido de logo real sigue bloqueante, esta nota solo da una referencia visual del logo, no lo resuelve.
- `system-design-efi-v1.md` — descripción del logo real (§12) que confirma la foto de `philosophy-editorial.jpg`.
- `cliente.md` — mención de "fotografía editorial propia, no stock genérico" como punto fuerte identificado en el sitio real de eFI.
