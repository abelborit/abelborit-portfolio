import { useEffect, useState } from "react";
import { ArrowUpIcon } from "../icons";
import styles from "./ScrollTopBtn.module.css";

/* botón flotante para volver arriba: aparece después de 400px de scroll */
export const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* solo se actualiza el estado al cruzar el umbral, no en cada evento de scroll */
    let isVisible = false;

    const onScroll = () => {
      const shouldShow = window.scrollY >= 400;
      if (shouldShow === isVisible) return;
      isVisible = shouldShow;
      setVisible(shouldShow);
    };

    /* "passive": el navegador sabe que no se bloqueará el scroll */
    window.addEventListener("scroll", onScroll, { passive: true });

    /* la posición inicial se revisa en el siguiente fotograma: leer scrollY justo al montar obligaría al navegador a calcular el layout antes de tiempo (reflow forzado) */
    const frame = requestAnimationFrame(onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
      /* oculto: fuera del orden de tabulación y de los lectores de pantalla */
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <ArrowUpIcon size={20} />
    </button>
  );
};
