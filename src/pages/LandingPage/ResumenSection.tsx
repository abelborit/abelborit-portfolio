import type { SectionRef } from "../../types/navigation";
import { Link } from "react-router";
import resumenImage from "../../assets/optimized-images/resumen-image-optimized.webp";
import styles from "./LandingPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { WaveDecoration } from "../../components/icons/WaveDecoration";

export const ResumenSection = (props: { resumenREF: SectionRef }) => {
  return (
    <div
      ref={props.resumenREF}
      className={`${styles.section} ${styles.slideLeftReturn}`}
    >
      <div className={`${styles.image_container} ${styles.slideRightReturn}`}>
        <img
          className={styles.image}
          src={resumenImage}
          alt=""
          width={1920}
          height={1509}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.image_border}></div>
      </div>

      <div className={styles.images_background}>
        <div className={styles.images_first}>
          <WaveDecoration variant="top" />
        </div>
      </div>

      <div className={styles.title_container}>
        <h2 className={styles.title_text}>Estudios / Experiencia</h2>

        <div className={styles.border_container}>
          <span className={styles.border_first}></span>
          <span className={styles.border_second}></span>
        </div>

        <p className={styles.description}>
          Mis estudios y experiencia profesional
        </p>

        <div className={styles.btn_effect_container}>
          <Link
            className={styles.btn_effect}
            to="/resumen"
            onClick={() =>
              GTM_EVENTS.GenericRedirect({
                new_location: "/resumen",
                section: "resume section",
              })
            }
          >
            Mostrar más
          </Link>
        </div>
      </div>
    </div>
  );
};
