---
status: listo para Antigravity — con pasos previos a cargo de Copp/Valeria
fecha_actualizacion: 2026-08-13
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v8, captura-lead, notion-api, vercel-serverless, nir-eyal, hooked]
summary: Implementación del hallazgo de Nir Eyal (lente 10 de AUDITORIA-9-lentes.md) — capturar el email de quien completa el autodiagnóstico y no escribe por WhatsApp en el momento. Decisión de arquitectura (13/08, confirmada con Copp): el lead cae directo al CRM de Notion de Valeria, no a un ESP tipo MailerLite — hoy no tiene newsletter ni secuencia de nutrición en eFI, así que sumar un ESP sería una herramienta nueva sin uso real todavía. Requiere una función serverless en Vercel + la API de Notion. Hay 3 pasos que Antigravity NO puede hacer solo — quedan a cargo de Copp/Valeria, ver sección 0.
---

# AJUSTES-v8 — Captura de lead del autodiagnóstico → CRM de Notion de Valeria

## 0. Arquitectura, en criollo

Hoy `SelfDiagnostic.jsx` es 100% frontend — no hay ningún servidor propio, por eso no puede "guardar" nada, solo mostrar un resultado en pantalla. Para capturar el email hace falta un lugar del lado servidor que lo reciba y lo escriba en algún sitio persistente. La cadena queda así:

```
[Formulario en SelfDiagnostic.jsx]
        → POST con {nombre, email, programa_recomendado}
[Función serverless en Vercel — /api/lead.js]
        → llama a la API de Notion con un token secreto (nunca visible en el navegador)
[Base "CRM / Cartera de Clientes" en el Notion PROPIO de Valeria]
        → nueva fila: Etapa = Prospecto, Origen = (web), Resumen = qué le recomendó el test
```

Vercel ya soporta funciones serverless en cualquier proyecto (no hace falta Next.js) con solo poner archivos en una carpeta `/api` en la raíz del repo — Antigravity puede armar esto directamente.

**Lo que Antigravity NO puede hacer solo, porque requiere acceso a la cuenta de Valeria:**

1. **Crear el token de integración interna de Notion**, adentro del workspace de Valeria (Configuración → Conexiones → Desarrollar o gestionar integraciones → Nueva integración interna). Esto lo tiene que hacer Valeria (o Copp, si ella le da acceso puntual para esto) — es su workspace, nunca invitado en el de Copp, mismo criterio que ya se usó para toda la Torre.
2. **Compartir la base "CRM / Cartera de Clientes" con esa integración** — en Notion, cada base tiene que conectarse explícitamente a la integración (botón "..." de la base → Conexiones → agregar la integración por nombre) o la API no puede escribir ahí aunque el token sea válido.
3. **Confirmar si su CRM real ya tiene una propiedad de contacto (email/teléfono).** Revisé el spec base de la Torre de Control (`torre-de-control-notion/spec-v1.md`, sección 4.4) y **el schema estándar no trae ninguna propiedad de email** — tiene Cliente (title), Etapa, Valor, Próxima interacción, JTBD, Perfil STARS, Resumen, Origen, Cuenta, Costo de inacción, Autoridad confirmada, Objeción de fondo, Operador asociado. Si Valeria no agregó una propiedad de contacto por su cuenta, hay que sumarla (`Email`, tipo texto) antes de que la función serverless tenga dónde escribirlo — si no, el email va apretado dentro de "Resumen" como solución provisoria, pero no es lo ideal.

Una vez resueltos esos 3 puntos, Copp le pasa a Antigravity: el token (como variable de entorno en Vercel, nunca en el código), el ID de la base de CRM, y este documento.

---

## 1. Formulario nuevo en `SelfDiagnostic.jsx`

**Dónde:** en la vista de "Recomendación" (después de `step === questions.length`), agregar un paso intermedio o un bloque adicional antes/junto al botón de WhatsApp — no reemplaza el CTA de WhatsApp, lo complementa para quien no está listo para escribir todavía.

**Copy sugerido (ajustar tono con Valeria, mismo criterio Mago-Sabio de siempre — nunca "suscribite a nuestro newsletter", esto no es eso):**

> "¿Todavía no es el momento de escribir? Dejanos tu mail y te guardamos este resultado."
> Campo: email (requerido) — opcional: nombre.
> Botón: "Guardar mi resultado"

**Comportamiento:**
- Al enviar, POST a `/api/lead` con `{ nombre, email, programa: recommendation.title }`.
- Mostrar confirmación simple ("Listo, te lo guardamos") — no redirigir ni interrumpir el flujo, el botón de WhatsApp sigue disponible al lado.
- Validación de email en el frontend (formato válido) antes de enviar — evitar basura en el CRM.
- Casilla o texto breve de consentimiento, ej. "Usamos tu mail solo para este seguimiento, nunca para spam" — no hace falta un checkbox formal de opt-in tipo newsletter porque no es una suscripción recurrente, es guardar un resultado puntual, pero sí tiene que quedar claro qué se hace con el dato.

---

## 2. Función serverless `/api/lead.js`

**Qué hace:**
1. Recibe `POST { nombre, email, programa }`.
2. Valida en el servidor (no confiar solo en la validación del frontend) — email con formato válido, campos no vacíos.
3. Llama a `POST https://api.notion.com/v1/pages` con:
   - `parent.database_id` = el ID de la base CRM (variable de entorno `NOTION_CRM_DATABASE_ID`).
   - Header `Authorization: Bearer ${process.env.NOTION_API_KEY}` (variable de entorno, nunca hardcodeada ni expuesta al bundle del cliente).
   - Propiedades:
     - `Cliente` (title) = `nombre` si vino, si no `"Lead — " + email`.
     - `Etapa` (status) = `"Prospecto"`.
     - `Origen` (select) = usar el valor existente que mejor calce (ej. `"Otro"`) hasta que Valeria agregue una opción nueva tipo `"Autodiagnóstico web"` al select — Antigravity no puede crear opciones nuevas de un select vía este flujo sin permisos adicionales, usar una opción ya existente por ahora.
     - `Resumen` (rich text) = `"Autodiagnóstico web recomendó: " + programa + ". Contacto: " + email` (así el email queda visible aunque no exista la propiedad dedicada — ver punto 3 de la sección 0).
     - `Email` (rich text) = `email`, **solo si esa propiedad ya existe en la base real** — si no existe, esta línea rompe la llamada a la API (Notion rechaza propiedades que no están en el schema). Confirmar con Copp antes de incluirla.
4. Devuelve `200` con confirmación simple, o `400/500` con mensaje de error genérico (nunca exponer detalles del error de Notion al frontend).

**Variables de entorno necesarias en Vercel** (Copp las configura desde el dashboard de Vercel, no van en el código ni se commitean):
- `NOTION_API_KEY`
- `NOTION_CRM_DATABASE_ID`

---

## 3. Qué NO hacer en esta pasada

- No conectar ningún ESP (MailerLite, Mailchimp, etc.) — decisión tomada, no es necesaria hoy.
- No convertir esto en un popup ni interrumpir el autodiagnóstico con el pedido de email antes de mostrar la recomendación — el orden importa (primero el valor/la recompensa del test, después el pedido).
- No hacer el campo de email obligatorio para ver la recomendación — el test tiene que seguir funcionando 100% sin fricción para quien solo quiere ver el resultado y listo.

---

## Resultado esperado

Quien completa el autodiagnóstico y no escribe por WhatsApp en el momento puede dejar su mail sin fricción, y ese lead aparece automáticamente en el CRM de Valeria como Prospecto nuevo, con el programa que el test le recomendó — cerrando el hallazgo de Eyal (lente 10) sin sumar ninguna herramienta nueva al stack de eFI.

---

## Conexión con otras notas de este proyecto

- `AUDITORIA-9-lentes.md`, lente 10 (Nir Eyal) — origen del hallazgo.
- `torre-de-control-notion/spec-v1.md`, sección 4.4 — schema real del módulo CRM, fuente de verdad de las propiedades disponibles.
- `cliente.md` — CRM de Valeria activado en Sesión 1 (13/08).
