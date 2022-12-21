import React, { useState } from "react";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { EducationData } from "../../components/EducationData/EducationData";
import { ExperienceData } from "../../components/ExperienceData/ExperienceData";
import { Link } from "react-router-dom";

import styles from "./ResumenPage.module.css";

export const ResumenPage = () => {
  /* se coloca este estado ya que cuando se cambia de ruta hay un desplazamiento hacia arriba, entonces con este setTimeout() hace que se espere lo mínimo para que la página ya se encuentre en la parte de arriba y se muestre con normalidad la página */
  const [loaderInitial, setLoaderInitial] = useState(true);

  setTimeout(() => {
    setLoaderInitial(false);
  }, 1);

  return (
    <>
      {loaderInitial ? null : (
        <>
          <HeaderSection></HeaderSection>

          <div className={`${styles.section} ${styles.slideLeftReturn}`}>
            <div
              className={`${styles.image_container} ${styles.slideRightReturn}`}
            ></div>

            <div className={styles.title_container}>
              <h2 className={styles.title_text}>Estudios / Experiencia</h2>

              <div className={styles.border_container}>
                <span className={styles.border_first}></span>
                <span className={styles.border_second}></span>
              </div>

              <p className={styles.description}>
                Mis estudios y experiencia profesional
              </p>

              <div className={styles.btnBack_effect_container}>
                <Link className={styles.btnBack_effect} to="/home">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
                  </svg>

                  <span>Regresar</span>
                </Link>
              </div>
            </div>
          </div>

          <section className={styles.section_container}>
            <div className={styles.section_content}>
              <div className={styles.section_title}>
                <div className={styles.section_title_number}>
                  <div></div>
                  <span>01</span>
                </div>

                <span className={styles.section_title_text}>Mi Educación</span>
              </div>

              <div className={styles.resume_content_info}>
                <EducationData></EducationData>
              </div>
            </div>
          </section>

          <section className={styles.section_container}>
            <div className={styles.section_content}>
              <div className={styles.section_title}>
                <div className={styles.section_title_number}>
                  <div></div>
                  <span>02</span>
                </div>

                <span className={styles.section_title_text}>
                  Mi Experiencia
                </span>
              </div>

              <div className={styles.resume_content_info}>
                <ExperienceData></ExperienceData>
              </div>
            </div>
          </section>

          <footer className={styles.footer_section}>
            <Link className={styles.footer} to="/home">
              Empecemos a trabajar juntos
            </Link>
          </footer>
        </>
      )}
    </>
  );
};
