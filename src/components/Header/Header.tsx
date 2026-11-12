import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { GTM_EVENTS } from "../../utils/gtm";
import { buttonClass } from "../Button/button";
import { CloseIcon, MenuIcon } from "../icons";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { to: "/home", label: "Inicio" },
  { to: "/acerca", label: "Sobre mí" },
  { to: "/resumen", label: "Trayectoria" },
  { to: "/proyectos", label: "Proyectos" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

export const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /* mismos valores de GTM que antes: "header" en la portada y el inicio, "header section" en el resto */
  const gtmSection = pathname === "/" || pathname === "/home" ? "header" : "header section";

  const trackAndClose = (newLocation: string) => {
    GTM_EVENTS.GenericRedirect({ new_location: newLocation, section: gtmSection });
    setMenuOpen(false);
  };

  /* el menú móvil se cierra con Escape y el foco vuelve al botón */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const renderLinks = () =>
    NAV_ITEMS.map((item) => (
      <NavLink key={item.to} to={item.to} className={navLinkClass} onClick={() => trackAndClose(item.to)}>
        {item.label}
      </NavLink>
    ));

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link to="/" className={styles.logo} onClick={() => trackAndClose("/")}>
          <span className={styles.logoMark} aria-hidden="true">
            AB
          </span>
          AbelBorit
          <span className="visually-hidden"> — ir a la portada</span>
        </Link>

        <nav aria-label="Principal" className={styles.nav}>
          {renderLinks()}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle className={styles.iconBtn} />
          <Link
            to="/home#contacto"
            className={buttonClass("primary", { small: true, className: styles.contactDesktop })}
            onClick={() => trackAndClose("/home")}
          >
            Contactar
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className={`${styles.iconBtn} ${styles.menuBtn}`}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="menu-movil" className={`wrap ${styles.mobilePanel}`}>
          <nav aria-label="Principal (móvil)" className={styles.mobileNav}>
            {renderLinks()}
          </nav>
          <Link
            to="/home#contacto"
            className={buttonClass("primary", { className: styles.mobileContact })}
            onClick={() => trackAndClose("/home")}
          >
            Contactar
          </Link>
        </div>
      )}
    </header>
  );
};
