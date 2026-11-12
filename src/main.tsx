import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { router } from "./router";

/* fuentes servidas desde el propio sitio (sin peticiones a Google Fonts): solo el subconjunto latino y los pesos que usa el diseño. Usan "font-display: swap", así el texto se muestra de inmediato con la fuente del sistema mientras cargan */
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/jetbrains-mono/latin-500.css";

import "./index.css";

/* las páginas se cargan con "lazy" (archivos JS separados con hash en el nombre). Tras un nuevo deploy, los archivos antiguos dejan de existir y una pestaña que se abrió antes del deploy fallaría al navegar. En ese caso se recarga la página una vez para obtener la versión nueva. https://vite.dev/guide/build#load-error-handling */
const RELOAD_KEY = "lazy-chunk-reload-at";

window.addEventListener("vite:preloadError", (event) => {
  try {
    const lastReload = Number(sessionStorage.getItem(RELOAD_KEY) ?? 0);
    /* si ya se recargó hace menos de 10s no se vuelve a recargar (evita un bucle si el archivo realmente no existe) */
    if (Date.now() - lastReload < 10_000) return;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    /* sessionStorage no disponible: se recarga igual */
  }

  event.preventDefault();

  /* el router todavía no cambió la URL (espera a que cargue la página), así que se reemplaza por la ruta de destino antes de recargar para no volver a la página anterior */
  const pendingLocation = router.state.navigation.location;
  if (pendingLocation) {
    window.history.replaceState(
      null,
      "",
      `#${pendingLocation.pathname}${pendingLocation.search}`,
    );
  }

  window.location.reload();
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
