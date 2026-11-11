import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { Timeline } from "../../components/Timeline/Timeline";
import { EDUCATION } from "../../data/education";
import { EXPERIENCE } from "../../data/experience";
import { Link } from "react-router";

import styles from "./ResumenPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { DoubleArrowLeftIcon } from "../../components/icons/DoubleArrowLeftIcon";

export const ResumenPage = () => {
  return (
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
            <Link
              className={styles.btnBack_effect}
              to="/home"
              onClick={() =>
                GTM_EVENTS.GenericRedirect({
                  new_location: "/home",
                  section: "resume page",
                })
              }
            >
              <DoubleArrowLeftIcon />

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
            <Timeline items={EDUCATION} />
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
            <Timeline items={EXPERIENCE} />
          </div>
        </div>
      </section>

      <footer className={styles.footer_section}>
        <Link
          className={styles.footer}
          to="/home"
          onClick={() =>
            GTM_EVENTS.GenericRedirect({
              new_location: "/home",
              section: "resume page",
            })
          }
        >
          Empecemos a trabajar juntos
        </Link>
      </footer>
    </>
  );
};
