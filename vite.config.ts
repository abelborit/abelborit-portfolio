import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // El sitio se publica en GitHub Pages bajo /abelborit-portfolio/
  base: "/abelborit-portfolio/",
});
