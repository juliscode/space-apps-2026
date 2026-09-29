// Starter: carga eventos de EONET y los dibuja sobre imágenes satelitales de GIBS.
// Patrón a reutilizar: fetch a la API -> si falla, usar copia local en data/ -> mostrar fuente y fecha.

const EONET_URL = "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=150";
const BACKUP_URL = "data/eonet-backup.json";

// GIBS publica la imagen de cada día con demora, así que usamos la de hace 2 días.
const imageryDate = new Date(Date.now() - 2 * 86400000).toISOString().slice(0, 10);

const map = L.map("map", { worldCopyJump: true }).setView([-30, -64], 3);
L.tileLayer(
  `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/${imageryDate}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg`,
  { maxZoom: 9, attribution: `NASA GIBS · MODIS Terra ${imageryDate}` }
).addTo(map);

const COLORS = { wildfires: "#ff5a36", volcanoes: "#ffb000", severeStorms: "#4fb3ff", seaLakeIce: "#b8f0ff" };
const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");

async function loadEvents() {
  try {
    const res = await fetch(EONET_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { data: await res.json(), live: true };
  } catch (err) {
    console.warn("EONET no respondió, uso la copia local:", err);
    const res = await fetch(BACKUP_URL);
    return { data: await res.json(), live: false };
  }
}

function lastPoint(event) {
  const g = event.geometry[event.geometry.length - 1];
  if (g.type === "Point") return { lat: g.coordinates[1], lon: g.coordinates[0], date: g.date };
  const ring = g.coordinates[0]; // Polygon: usamos el primer vértice
  return { lat: ring[0][1], lon: ring[0][0], date: g.date };
}

loadEvents()
  .then(({ data, live }) => {
    const events = data.events || [];
    statusEl.textContent = `${events.length} active events · ${live ? "live from NASA EONET" : "offline backup copy"}`;
    document.getElementById("fetched").textContent = `Data retrieved: ${new Date().toUTCString()}`;
    events.forEach((ev) => {
      const p = lastPoint(ev);
      const cat = ev.categories[0];
      const src = ev.sources[0];
      const marker = L.circleMarker([p.lat, p.lon], {
        radius: 6, color: COLORS[cat.id] || "#ffffff", weight: 2, fillOpacity: 0.7,
      }).addTo(map);
      const popup = document.createElement("div");
      popup.innerHTML = "<b></b><br><span></span><br>";
      popup.querySelector("b").textContent = ev.title;
      popup.querySelector("span").textContent = `${cat.title} · ${p.date.slice(0, 10)}`;
      if (src) {
        const a = document.createElement("a");
        a.href = src.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = `Source: ${src.id}`;
        popup.appendChild(a);
      }
      marker.bindPopup(popup);

      const btn = document.createElement("button");
      btn.innerHTML = "<span></span><small></small>";
      btn.querySelector("span").textContent = ev.title;
      btn.querySelector("small").textContent = `${cat.title} · ${p.date.slice(0, 10)}`;
      btn.addEventListener("click", () => { map.setView([p.lat, p.lon], 6); marker.openPopup(); });
      listEl.appendChild(btn);
    });
  })
  .catch((err) => {
    statusEl.textContent = "Could not load NASA data. Check your connection.";
    console.error(err);
  });
