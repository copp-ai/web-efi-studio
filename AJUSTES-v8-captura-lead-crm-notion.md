---
status: listo para Antigravity — fase de prueba con el CRM propio de Copp, no el de Valeria
fecha_actualizacion: 2026-08-13
tags: [valeria-cuenca, efi-studio, prototipo-web, antigravity, ajustes-v8, captura-lead, notion-api, vercel-serverless, nir-eyal, hooked, prototipo-de-prueba]
summary: Implementación del hallazgo de Nir Eyal (lente 10 de AUDITORIA-9-lentes.md) — capturar el email de quien completa el autodiagnóstico y no escribe por WhatsApp en el momento. Decisión de arquitectura (13/08, confirmada con Copp): el lead cae a un CRM de Notion, no a un ESP tipo MailerLite — hoy no tiene newsletter ni secuencia de nutrición en eFI, así que sumar un ESP sería una herramienta nueva sin uso real todavía. **Pivote (13/08, confirmado con Copp):** el sitio todavía es un prototipo, así que esta primera prueba se conecta al CRM propio de Copp ("🤝 CRM / Cartera de Clientes"), no al de Valeria — nada toca el workspace ni los datos reales de ella en esta etapa. Cuando el sitio deje de ser prototipo y pase a producción para Valeria, este mismo documento se vuelve a correr apuntando a su CRM. Requiere una función serverless en Vercel + la API de Notion.
---

# AJUSTES-v8 — Captura de lead del autodiagnóstico → CRM de Notion (prueba con el CRM propio de Copp)

## 0. Arquitectura, en criollo

Hoy `SelfDiagnostic.jsx` es 100% frontend — no hay ningún servidor propio, por eso no puede "guardar" nada, solo mostrar un resultado en pantalla. Para capturar el email hace falta un lugar del lado servidor que lo reciba y lo escriba en algún sitio persistente. La cadena queda así:

```
[Formulario en SelfDiagnostic.jsx]
        → POST con {nombre, email, programa_recomendado}
[Función serverless en Vercel — /api/lead.js]
        → llama a la API de Notion con un token secreto (nunca visible en el navegador)
[Base "🤝 CRM / Cartera de Clientes" — CRM PROPIO DE COPP, no el de Valeria, ver nota abajo]
        → nueva fila: Etapa = Prospecto, Origen = Otro, Resumen = qué le recomendó el test
```

Vercel ya soporta funciones serverless en cualquier proyecto (no hace falta Next.js) con solo poner archivos en una carpeta `/api` en la raíz del repo — Antigravity puede armar esto directamente.

**Por qué el CRM de Copp y no el de Valeria, en esta pasada:** el sitio de eFI todavía es un prototipo — no está en producción para clientes reales de Valeria. Probar la integración completa (formulario → función serverless → Notion) contra el CRM propio de Copp permite validar que todo el circuito funciona, sin tocar el workspace ni los datos reales de Valeria mientras el sitio esté en etapa de prueba. Cuando el sitio pase a producción, se repite este mismo proceso apuntando a la base de Valeria (que sí requeriría los pasos con su workspace, ver más abajo).

**La base de prueba ya existe y ya tiene los campos necesarios** — a diferencia de lo que se había planteado en un borrador anterior de este documento (que asumía el schema genérico de `torre-de-control-notion/spec-v1.md`, sección 4.4, sin propiedad de contacto), la base real de Copp **ya incluye** `Correo` (tipo email) y `Celular` (tipo teléfono) entre sus propiedades — no hace falta agregar nada al schema para esta prueba:

- Base: **"🤝 CRM / Cartera de Clientes"** — `https://app.notion.com/p/e50c9537445c82e79933013740627d66`
- Data source id: `a66c9537-445c-8247-8020-8780a4baf0cc`
- Propiedades relevantes ya existentes: `Cliente` (title), `Etapa` (status: Prospecto/Conversación/Propuesta/Cerrado/Inactivo), `Origen` (select: Contenido orgánico/DM-SISTEMA/Referido/Otro/ITAE), `Correo` (email), `Celular` (teléfono, no se usa en este formulario), `Resumen` (texto).

Ya hice una prueba en vivo insertando una fila de ejemplo en esa base (simulando lo que mandaría el formulario), para confirmar que el formato de propiedades funciona — se puede ver y borrar en `https://app.notion.com/p/3bbc9537445c814fb70fc5aaa7c5c393`.

**Qué significa "compartir la base con la integración" (por qué es un paso aparte, no automático):** cada integración de Notion (el "token" que usa la función serverless para escribir) arranca sin ver ninguna base, aunque el token sea válido y aunque la base sea del mismo dueño de la cuenta. Es un permiso por-base, no por-cuenta: hay que entrar a la base en Notion, abrir el menú "..." → "Conexiones", y agregar ahí la integración por nombre — recién ahí la API puede leer/escribir en esa base puntual. Es el mismo mecanismo tanto para la base de Copp en esta prueba como para la de Valeria el día de mañana; no es "compartir" en el sentido de invitar a una persona, es autorizar a un programa (la integración) a tocar esa base específica.

**Importante — dos accesos distintos, no confundir:** la prueba en vivo que ya hice (la fila de ejemplo de arriba) usó la conexión de Notion que ya tiene autorizada esta sesión de Claude — eso sirve para demostrar el formato, pero **no es** lo que va a usar el sitio web en producción. Para que la función serverless de Vercel funcione de verdad, hace falta un token de integración **separado y dedicado**, creado directamente por Copp en notion.so (Configuración → Conexiones → Desarrollar o gestionar integraciones → Nueva integración interna). Ese token después se carga como variable de entorno en Vercel — nunca en el código, nunca compartido acá. Ese paso todavía está pendiente y es el único que le queda a Copp antes de que Antigravity pueda dejar esto funcionando en el sitio real.

**Cuando esto se repita para el CRM real de Valeria (fase de producción, no ahora):** ahí sí van a hacer falta los pasos que dependen de su workspace — ella (o Copp con su autorización puntual) crea su propia integración interna en su cuenta, conecta su base "CRM / Cartera de Clientes" a esa integración de la misma manera, y confirma si esa base ya tiene una propiedad de contacto tipo `Correo` o si hay que agregarla primero. Nada de esto es necesario para la prueba actual.

Una vez que Copp tenga su token de integración dedicado (el único paso pendiente), se lo pasa a Antigravity junto con el data source id de arriba y este documento.

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
   - `parent.database_id` = `a66c9537-445c-8247-8020-8780a4baf0cc` (el data source id de "🤝 CRM / Cartera de Clientes" — CRM propio de Copp, esta prueba — cargado igual como variable de entorno `NOTION_CRM_DATABASE_ID`, nunca hardcodeado en el archivo).
   - Header `Authorization: Bearer ${process.env.NOTION_API_KEY}` (variable de entorno, nunca hardcodeada ni expuesta al bundle del cliente — token de integración dedicado que Copp todavía tiene que crear, ver sección 0).
   - Propiedades:
     - `Cliente` (title) = `nombre` si vino, si no `"Lead — " + email`.
     - `Etapa` (status) = `"Prospecto"`.
     - `Origen` (select) = `"Otro"` — ya existe como opción en esta base, no hace falta crear ninguna nueva.
     - `Correo` (email) = `email` — la propiedad ya existe en esta base con este nombre exacto (confirmado, ver sección 0), va directo sin fallback.
     - `Resumen` (rich text) = `"Autodiagnóstico web recomendó: " + programa` (el email ya no necesita ir apretado acá porque tiene su propia propiedad dedicada `Correo`).
4. Devuelve `200` con confirmación simple, o `400/500` con mensaje de error genérico (nunca exponer detalles del error de Notion al frontend).

**Variables de entorno necesarias en Vercel** (Copp las configura desde el dashboard de Vercel, no van en el código ni se commitean):
- `NOTION_API_KEY` — el token de integración dedicado, todavía pendiente de crear (sección 0).
- `NOTION_CRM_DATABASE_ID` = `a66c9537-445c-8247-8020-8780a4baf0cc`

---

## 3. Qué NO hacer en esta pasada

- No conectar ningún ESP (MailerLite, Mailchimp, etc.) — decisión tomada, no es necesaria hoy.
- No convertir esto en un popup ni interrumpir el autodiagnóstico con el pedido de email antes de mostrar la recomendación — el orden importa (primero el valor/la recompensa del test, después el pedido).
- No hacer el campo de email obligatorio para ver la recomendación — el test tiene que seguir funcionando 100% sin fricción para quien solo quiere ver el resultado y listo.

---

## Resultado esperado

Quien completa el autodiagnóstico y no escribe por WhatsApp en el momento puede dejar su mail sin fricción, y ese lead aparece automáticamente en el CRM de Notion (el propio de Copp, en esta etapa de prueba) como Prospecto nuevo, con el programa que el test le recomendó — cerrando el hallazgo de Eyal (lente 10) sin sumar ninguna herramienta nueva al stack de eFI. Cuando el sitio pase a producción, el mismo circuito se reapunta al CRM real de Valeria repitiendo los pasos de workspace descritos en la sección 0.

---

## Conexión con otras notas de este proyecto

- `AUDITORIA-9-lentes.md`, lente 10 (Nir Eyal) — origen del hallazgo. El panel de 10 jueces re-evaluó el sitio el 13/08 tras AJUSTES-v7 y confirmó que este hallazgo sigue **OBSERVADO / PENDIENTE** — es la próxima acción prioritaria que recomendó el plenario, lo que este documento resuelve.
- `torre-de-control-notion/spec-v1.md`, sección 4.4 — schema base/genérico del módulo CRM (sin propiedad de contacto) — aplica al momento de replicar esto en el CRM de Valeria, no a esta prueba.
- `cliente.md` — CRM de Valeria, activado en Sesión 1 (13/08) — todavía no tocado por este documento, ver nota de la sección 0.
