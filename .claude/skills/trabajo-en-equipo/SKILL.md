---
name: trabajo-en-equipo
description: Usar al empezar o terminar una tarea, cuando haya que subir o bajar cambios del compañero, cuando git muestre un conflicto, o cuando pregunten "qué hizo el otro".
---

# Trabajo en equipo entre dos compus

Los dos trabajamos sobre el mismo repo de GitHub, cada uno con su Claude. Git es lo que nos conecta. Todo en la rama `main`, sin ramas extra, para que sea simple.

## Al empezar una tarea
1. `git pull` y contar en una frase qué cambió desde la última vez (`git log --oneline -5` y `git diff --stat HEAD@{1}` si aplica).
2. Leer `EQUIPO.md`: qué archivos son de quién y qué está haciendo cada uno.
3. Si la tarea toca un archivo del compañero, avisar antes y sugerir coordinar por WhatsApp.

## Mientras trabajás
- Commit cada vez que algo funciona, aunque sea chico. Mensaje en español que diga qué cambió.
- `git push` justo después de cada commit.
- Si el push falla porque el otro subió algo: `git pull --no-rebase`, resolver y volver a pushear.

## Si hay conflicto
1. Mostrar qué archivos están en conflicto y explicar en lenguaje simple qué cambió cada uno.
2. Combinar las dos versiones conservando el trabajo de ambos. Si no se puede combinar, preguntar cuál queda.
3. Abrir la app y verificar que sigue funcionando antes de hacer commit.
4. Nunca `git push --force`, nunca `git reset --hard` sobre trabajo sin subir.

## Reparto sugerido de archivos
- `app/index.html`, `app/style.css`, `app/app.js`: quien construye la app.
- `app/data/`, `FUENTES.md`, `demo/`: quien investiga datos y arma la demo.
- `EQUIPO.md` y `CLAUDE.md`: los dos, con cambios chicos y avisando.

Si la app crece, conviene separar pantallas o secciones en archivos distintos para que cada uno trabaje en el suyo sin pisarse.

## "¿Qué hizo mi compañero?"
Correr `git pull` y resumir `git log --since="3 hours ago" --stat` en lenguaje simple: qué agregó, qué arregló y si hay algo que requiera mi acción.
