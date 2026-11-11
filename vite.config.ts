import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { gtmPlugin } from "./vite-plugins/gtm.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Google Tag Manager solo en el sitio desplegado (ver vite-plugins/gtm.ts)
    gtmPlugin({ gtmId: "GTM-WTDXLVNH", productionHost: "abelborit.github.io" }),
  ],
  // El sitio se publica en GitHub Pages bajo /abelborit-portfolio/
  base: "/abelborit-portfolio/",
});
