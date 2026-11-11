import { useEffect, useState } from "react";
import styles from "./ScrollTopBtn.module.css";

export const ScrollTopBtn = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [effectActive, setEffectActive] = useState(false);

  useEffect(() => {
    /* último estado aplicado: solo se actualiza cuando se cruza el umbral de 400px, no en cada evento de scroll */
    let isVisible: boolean | null = null;
    let timeoutId: number | undefined;

    function onScroll() {
      const shouldShow = window.scrollY >= 400;
      if (shouldShow === isVisible) return;
      isVisible = shouldShow;

      /* primero se aplica la animación de entrada/salida y luego (100ms) se monta/desmonta el botón */
      setEffectActive(shouldShow);
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setScrollActive(shouldShow);
      }, 100);
    }

    /* se registra una sola vez (dependencias vacías). "passive" le indica al navegador que no se llamará a preventDefault, así el scroll no se bloquea */
    window.addEventListener("scroll", onScroll, { passive: true });

    /* revisa la posición inicial (por ejemplo al volver con "atrás" y restaurar el scroll) */
    onScroll();

    /* función de limpieza: quita el listener y el timeout pendiente al desmontar */
    return function cleanUp() {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timeoutId);
    };
  }, []);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {scrollActive && (
        <div>
          <button
            className={`${styles.scrollTopBtn} ${
              effectActive ? styles.swashIn : styles.swashOut
            }`}
            onClick={handleScrollToTop}
            aria-label="Volver al inicio de la página"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              aria-hidden="true"
            >
              <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
