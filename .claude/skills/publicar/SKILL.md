---
name: publicar
description: Usar cuando haya que poner la app online, actualizar la versión publicada, o cuando el link público no funcione.
---

# Publicar la app

Método principal: **GitHub Pages**, que sirve la carpeta del repo gratis. Plan B: **Netlify Drop** (arrastrar la carpeta `app/` a https://app.netlify.com/drop).

## Primera vez (hacerlo en la práctica, no el día del evento)
1. El repo tiene que ser **público** en GitHub (Pages gratis lo requiere).
2. En GitHub: Settings → Pages → Source: "Deploy from a branch" → Branch `main`, carpeta `/ (root)` → Save.
3. La app queda en `https://USUARIO.github.io/NOMBRE-REPO/app/`. El `index.html` de la raíz redirige ahí.
4. La primera publicación tarda 1–3 minutos.

## Cada vez que se publica
1. `git pull`, commit, `git push`.
2. Esperar 1–2 minutos y abrir la URL pública (no el archivo local).
3. Verificar, y contar el resultado:
   - Abre sin errores en la consola del navegador.
   - Los datos de NASA cargan (no solo los de ejemplo).
   - Se ve bien en el celular.
   - La sección de fuentes está visible.
4. Si algo anda local pero no online, lo típico es: rutas con mayúsculas/minúsculas distintas, rutas absolutas (`/data/x.json` en vez de `data/x.json`) o un archivo que no se subió (`git status`).

## Reglas
- Publicar temprano (sábado a la tarde) aunque sea feo. Una app online a medias vale más que una perfecta que no abre.
- No decir "está publicado" sin haber abierto la URL pública y confirmado que carga.
