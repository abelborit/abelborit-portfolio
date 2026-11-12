import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

/* color de la barra del navegador en móvil para cada tema */
const THEME_COLOR: Record<Theme, string> = {
  dark: "#060E1B",
  light: "#FFFFFF",
};

/* el tema inicial ya lo aplicó el script de index.html antes de pintar: aquí solo se lee */
const readInitialTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[theme]);
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);

    /* se recuerda la elección para la próxima visita */
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage no disponible (modo privado): el cambio vale solo para esta visita */
    }
  };

  return { theme, toggleTheme };
};
