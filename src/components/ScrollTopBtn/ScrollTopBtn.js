import React, { useEffect, useState } from "react";
import styles from "./ScrollTopBtn.module.css";

export const ScrollTopBtn = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [effectActive, setEffectActive] = useState("");

  useEffect(() => {
    function onScroll() {
      if (window.scrollY >= 400) {
        setTimeout(() => {
          setScrollActive(true);
        }, 100);

        setEffectActive(true);
      } else if (window.scrollY < 400) {
        setTimeout(() => {
          setScrollActive(false);
        }, 100);

        setEffectActive(false);
      }
    }

    /* en cada render se está colocando un eventListener de "scroll" y tiene que ser limpiado porque en el primer "scroll" tenemos un addEventListener pero en el segundo "scroll" tenemos el anterior y el nuevo que pongamos y así sucesivamente se van acumulando y al final afecta al rendimiento porque se está mandando a llamar a la función "onScroll" más veces de las necesarias */
    window.addEventListener("scroll", onScroll);

    // console.log(scrollActive);
    // console.log(currentScroll);

    /* estas funciones de limpiado que tiene useEffect() se pueden colocar por ejemplo cuando se colocan addEventListener() para que no se vayan acumulando de forma desproporcionada. No hace falta colocar por ejemplo cuando se llama a una API porque solo queremos que muestre la información  */
    return function cleanUp() {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollActive]);

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
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
