# Space Apps 2026 · base del equipo

Base para el NASA Space Apps Challenge (14–15 nov 2026). Trae instrucciones compartidas para Claude, skills para cada etapa del evento, una app de arranque que ya usa datos reales de NASA y plantillas para la demo.

## Qué hay
| Archivo | Para qué |
|---|---|
| `CLAUDE.md` | Contexto que leen los dos Claudes: reglas, equipo, estado del proyecto |
| `.claude/skills/` | 6 skills: arrancar desafío, datos NASA, trabajo en equipo, publicar, demo, revisión de jueces |
| `app/` | App de arranque: mapa con eventos naturales activos (EONET) sobre imagen satelital (GIBS) |
| `EQUIPO.md` | Roles, reparto de archivos y plan de las 48 h |
| `FUENTES.md` | Registro de cada dato y su fuente |
| `demo/` | Plantillas de slides y del formulario de entrega |
| `DIA-D.md` | Checklist de los días previos y del evento |

## Puesta en marcha (cada uno en su compu)
1. Tener cuenta de GitHub, Git y Claude Code instalados.
2. Clonar el repo: `git clone https://github.com/USUARIO/space-apps-2026.git`
3. Abrir la carpeta en VS Code y abrir Claude Code ahí.
4. Pedirle: "Leé el CLAUDE.md y decime qué skills tiene este proyecto". Si nombra las 6, está todo listo.
5. Para ver la app: abrir `app/index.html` en el navegador. Si el navegador bloquea la carga, pedirle a Claude que levante un servidor local.

## Si tu compañero usa Claude en la web (claude.ai) y no Claude Code
Crear un Proyecto en claude.ai y subir como conocimiento del proyecto `CLAUDE.md` y los `SKILL.md` de `.claude/skills/`. Va a tener el mismo contexto, pero tendrá que subir sus cambios a GitHub desde la web (Add file → Upload files).
