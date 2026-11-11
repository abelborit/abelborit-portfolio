import type { NavigationProps, SectionRefs } from "../../types/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

/* duración de la animación de salida del menú (slideLeft) antes de desmontarlo */
const CLOSE_ANIMATION_MS = 450;

const NAV_ITEMS: { label: string; ref: keyof SectionRefs }[] = [
  { label: "Acerca", ref: "aboutREF" },
  { label: "Resumen", ref: "resumenREF" },
  { label: "Proyectos", ref: "projectREF" },
  { label: "Contacto", ref: "contactREF" },
];

export const NavbarMobile = (props: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [effectActive, setEffectActive] = useState(false);

  /* timeout pendiente de cierre: se cancela si se vuelve a abrir o si el componente se desmonta */
  const closeTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(closeTimeoutRef.current);
  }, []);

  const openMenu = () => {
    window.clearTimeout(closeTimeoutRef.current);
    setOpen(true);
    setEffectActive(true);
  };

  /* primero se aplica la animación de salida y luego se desmonta el menú */
  const closeMenu = () => {
    setEffectActive(false);
    window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, CLOSE_ANIMATION_MS);
  };

  /* se usa "effectActive" (intención del usuario) y no "open": durante la animación de cierre "open" sigue en true y un nuevo click debe volver a abrir el menú */
  const effectFunction = () => {
    if (effectActive) closeMenu();
    else openMenu();
  };

  return (
    <nav className={styles.linkPage_mobile}>
      <button
        className={`${styles.hamburger} ${open ? styles.is_active : ""}`}
        onClick={effectFunction}
      >
        <div className={`${styles.layer} ${styles.layer_top}`}></div>
        <div className={`${styles.layer} ${styles.layer_mid}`}></div>
        <div className={`${styles.layer} ${styles.layer_bottom}`}></div>
      </button>

      {open && (
        <div
          className={`${styles.links_mobile} ${
            effectActive ? styles.slideLeftReturn : styles.slideLeft
          }`}
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.ref}
                className={styles.link_btn}
                onClick={() => {
                  props.handleScrollToSection(props.referencias[item.ref]);
                  closeMenu(); // para cerrar el menú cuando se haga click
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
