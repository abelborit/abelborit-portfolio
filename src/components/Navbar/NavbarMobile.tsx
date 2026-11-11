import type { NavigationProps } from "../../types/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "./navItems";
import styles from "./Navbar.module.css";

/* duración de la animación de salida del menú (slideLeft) antes de desmontarlo */
const CLOSE_ANIMATION_MS = 450;

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
        aria-label={effectActive ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={effectActive}
        aria-controls="mobile-menu"
      >
        <div className={`${styles.layer} ${styles.layer_top}`}></div>
        <div className={`${styles.layer} ${styles.layer_mid}`}></div>
        <div className={`${styles.layer} ${styles.layer_bottom}`}></div>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className={`${styles.links_mobile} ${
            effectActive ? styles.slideLeftReturn : styles.slideLeft
          }`}
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.ref} className={styles.link_btn}>
                <button
                  type="button"
                  className={styles.link_action}
                  onClick={() => {
                    props.handleScrollToSection(props.referencias[item.ref]);
                    closeMenu(); // para cerrar el menú cuando se haga click
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
