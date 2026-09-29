---
name: datos-nasa
description: Usar cuando haya que buscar, elegir, descargar o mostrar datos de NASA en la app, o citar de dónde sale un dato.
---

# Datos de NASA

Fuentes probadas el 29-sep-2026. "CORS sí" = se puede llamar con `fetch()` directo desde la página. "CORS no" = hay que bajar el archivo antes y guardarlo en `app/data/`.

| Fuente | Qué trae | Ejemplo | CORS | Notas |
|---|---|---|---|---|
| NASA POWER | Clima diario por coordenada: temperatura, lluvia, radiación solar, viento | `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,PRECTOTCORR&community=AG&longitude=-64.86&latitude=-27.49&start=20260801&end=20260831&format=JSON` | sí | Sin clave. Ideal para agricultura y energía solar. |
| EONET v3 | Eventos naturales activos: incendios, volcanes, tormentas, hielo | `https://eonet.gsfc.nasa.gov/api/v3/events?status=open` | sí | Sin clave. Cada evento trae coordenadas y link a la fuente. |
| NASA Image and Video Library | Fotos y videos oficiales de NASA con metadatos | `https://images-api.nasa.gov/search?q=perseverance&media_type=image` | sí | Sin clave. Citar el `nasa_id` y el crédito. |
| GIBS (Earthdata) | Imágenes satelitales como capas de mapa, por fecha | `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{fecha}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg` | sí | Se usa como capa de Leaflet. Ojo: el orden es `{z}/{y}/{x}`. |
| APOD | Foto astronómica del día | `https://api.nasa.gov/planetary/apod?api_key=CLAVE` | sí | `DEMO_KEY` estaba caída en la prueba (error 503). Sacar clave gratis en api.nasa.gov antes del evento. |
| JPL Close Approach (CAD) | Asteroides que pasan cerca de la Tierra | `https://ssd-api.jpl.nasa.gov/cad.api?dist-max=0.05&date-min=2026-10-01` | **no** | Bajar el JSON con curl a `app/data/` y leerlo local. |
| FIRMS | Focos de incendio casi en tiempo real (MODIS/VIIRS) | `https://firms.modaps.eosdis.nasa.gov/api/area/csv/CLAVE/VIIRS_SNPP_NRT/world/1` | — | Requiere MAP_KEY gratis (firms.modaps.eosdis.nasa.gov/api/map_key). Sacarla antes. |

Para explorar a mano, no para llamar desde la app: NASA Worldview (worldview.earthdata.nasa.gov), Eyes on the Solar System (eyes.nasa.gov), Mars Trek (trek.nasa.gov/mars), data.nasa.gov y earthdata.nasa.gov. Los datos que traiga cada enunciado van primero: los jueces miran si usamos los que sugiere el desafío.

## Cómo trabajar con los datos
1. Probar la URL antes de escribir código: `curl -s "URL" | head -c 500`. Si falla, decirlo y buscar alternativa. No asumir que funciona.
2. Mostrar en la app de dónde viene cada dato: nombre de la fuente, link y fecha de consulta.
3. Anotar cada fuente en `FUENTES.md`: nombre, URL, qué dato usamos y fecha.
4. Si la API es lenta o puede caerse durante la demo, guardar una copia en `app/data/` y usarla de respaldo si falla el `fetch`.
5. Nunca completar huecos con números inventados. Si un valor falta, mostrarlo como "sin dato".
6. Las claves de API gratuitas de NASA se pueden ver en el código publicado. Es aceptable para estas APIs públicas, pero nunca poner claves de servicios pagos (ni de Claude u OpenAI) en la página.
