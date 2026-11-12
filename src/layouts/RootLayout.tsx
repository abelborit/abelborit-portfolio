import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ScrollTopBtn } from "../components/ScrollTopBtn/ScrollTopBtn";
import styles from "./RootLayout.module.css";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* layout raíz compartido por todas las rutas */
export const RootLayout = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  /* en cada cambio de ruta: scroll suave hasta arriba (o hasta el ancla, por ejemplo /home#contacto) */
  useEffect(() => {
    const isFirstLoad = location.key === "default";
    const behavior: ScrollBehavior = isFirstLoad || prefersReducedMotion() ? "auto" : "smooth";
    const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;

    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
      return;
    }

    /* en la primera carga el navegador ya está arriba: no se mueve el scroll ni el foco */
    if (isFirstLoad) return;

    window.scrollTo({ top: 0, behavior });

    /* los lectores de pantalla empiezan a leer la página nueva desde el contenido */
    mainRef.current?.focus({ preventScroll: true });
  }, [location.key, location.hash]);

  return (
    <>
      <a href="#contenido" className={styles.skip} onClick={(e) => {
        e.preventDefault();
        mainRef.current?.focus();
      }}>
        Saltar al contenido
      </a>

      <Header />

      {/* aquí se renderiza la página de la ruta actual */}
      <main id="contenido" ref={mainRef} tabIndex={-1} className={styles.main}>
        <Outlet />
      </main>

      <Footer />
      <ScrollTopBtn />
    </>
  );
};
