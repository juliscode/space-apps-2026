---
name: arrancar-desafio
description: Usar al arrancar la hackathon o una práctica, cuando el equipo pega el enunciado de un desafío de Space Apps y necesita elegir idea, datos y plan de trabajo.
---

# Arrancar un desafío

Objetivo: en **menos de 1 hora** pasar de "leímos el desafío" a "sabemos qué construimos, con qué datos y quién hace qué".

## Pasos

1. **Resumir el enunciado.** Pedí que peguen el texto completo. Devolvé:
   - Qué piden, en 3 viñetas.
   - Qué entregable esperan (app, juego, visualización, herramienta).
   - Qué datos o recursos sugiere el enunciado.
   - Lo ambiguo: preguntas concretas para hacerle a un mentor.

2. **Proponer 3 ideas**, ordenadas de más fácil a más ambiciosa. Para cada una:
   - Nombre corto y la idea en una frase.
   - Usuario concreto (ej.: "una docente de primaria", "un brigadista de incendios").
   - Qué muestra la pantalla principal.
   - Fuente de datos de NASA (usar la skill `datos-nasa`) y si ya está probada.
   - Riesgo principal y plan B.
   - El giro creativo que la diferencia.

3. **Elegir con el equipo.** Recomendá una. Criterio: la más simple que igual cumpla el desafío y tenga un giro creativo. Mejor algo chico que funcione que algo grande a medias.

4. **Escribir el plan** en `EQUIPO.md` (sección "Plan"), con horarios:
   - Hasta 13:00 sáb: versión mínima que abre en el navegador con datos de ejemplo.
   - Hasta 18:00 sáb: datos reales conectados y app publicada.
   - Noche del sáb: congelar funciones. Nada nuevo después.
   - Domingo: pulir, fuentes, demo y entrega antes de las 20:00.
   - Reparto de tareas por persona y archivos de cada uno.

5. **Actualizar `CLAUDE.md`** (sección "Estado del proyecto") con desafío, idea y URL cuando exista. Commit y push, así el Claude del compañero tiene el mismo contexto.

## Reglas
- Si en 60 minutos no hay acuerdo, ir con la idea más fácil.
- No proponer nada que necesite servidor, login de usuarios ni entrenar modelos de IA desde cero.
- Si la idea usa IA (por ejemplo resumir textos), verificar antes que se pueda hacer sin exponer una API key en la página.
