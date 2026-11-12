import { useTheme } from "../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../icons";

/* botón de modo oscuro / claro. El aria-label dice a qué modo cambia */
export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";

  return (
    <button type="button" className={className} onClick={toggleTheme} aria-label={label} title={label}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
