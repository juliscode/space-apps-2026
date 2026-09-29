# Equipo Space Apps 2026

Este repo es la base de un equipo de 2 personas para el **NASA Space Apps Challenge 2026 (14–15 nov)**. Somos Juli y su compañero. Ninguno de los dos escribe código a mano: trabajamos con Claude (vibecoding). Cada uno usa su propia compu y su propia cuenta de Claude, y los dos clonamos este mismo repo. Este archivo es el contexto compartido: los dos Claudes leen lo mismo.

## Cómo hablarnos
- En español rioplatense, simple, sin jerga. Si usás un término técnico, explicalo en una frase.
- Antes de cambios grandes, decí en 2–3 líneas qué vas a hacer.
- Cuando algo falle, explicá la causa en una frase y después arreglalo.

## Foco: resolver el problema, nada más
- Lo único que importa es resolver el problema del desafío. No nos enroscamos en lo accesorio.
- **Login, registro, cuentas, permisos, pagos, paneles de admin: se simulan.** Usuario ficticio, datos de ejemplo, un botón que entra directo. Avisá en una línea que está simulado y seguí.
- **Si hay plantilla, se usa.** Antes de construir algo desde cero, buscá una librería, componente o ejemplo hecho (mapas, gráficos, juegos, diseño) y partí de ahí.
- Ante cada tarea, preguntate: ¿esto acerca a resolver el problema o es accesorio? Si es accesorio, simulalo o dejalo afuera.

## Reglas técnicas (no negociables)
- **Sitio estático, sin build.** HTML + CSS + JavaScript plano. Nada de npm, React con build, servidores ni bases de datos. Librerías solo por CDN (jsDelivr, unpkg, cdnjs), con versión fija.
- La app vive en `app/`. La página principal es `app/index.html`. Se publica con GitHub Pages.
- Tiene que funcionar abriendo el archivo en el navegador y en el celular.
- **Datos de NASA reales.** Usar las fuentes de la skill `datos-nasa`. Si una API no permite llamarla desde el navegador, bajar el JSON/CSV a `app/data/` y leerlo de ahí.
- **Cero datos inventados.** Cada cifra que se muestre tiene fuente en `FUENTES.md` y en la sección "Fuentes" de la app. Si no estás seguro de un dato, marcalo "A VERIFICAR" y avisá. Esto es el criterio "Validity" de los jueces.
- Textos de la app en inglés (los jueces son internacionales) salvo que pidamos otra cosa. Nuestras conversaciones, en español.

## Trabajo en equipo por git
- Antes de empezar cualquier tarea: `git pull`.
- Commits chicos y seguidos, con mensaje claro en español. Después de cada commit: `git push`.
- Cada persona es dueña de sus archivos (ver `EQUIPO.md`). No edites archivos del otro sin avisar.
- Si hay conflicto de git, resolvelo vos explicando qué versión quedó y por qué. Nunca uses `git push --force`.

## Skills de este proyecto
- `arrancar-desafio`: del enunciado del desafío a una idea elegida y un plan de 48 h.
- `datos-nasa`: catálogo de fuentes de datos probadas y cómo usarlas.
- `trabajo-en-equipo`: sincronizar el trabajo entre las dos compus.
- `publicar`: poner la app online en GitHub Pages y verificarla.
- `demo-pitch`: guion del video de 30 s, subtítulos y 7 slides.
- `revision-jueces`: revisión final con los 5 criterios antes de entregar.

## Estado del proyecto
Completar el sábado a la mañana:
- Desafío elegido: (pendiente)
- Idea en una frase: (pendiente)
- URL publicada: (pendiente)
