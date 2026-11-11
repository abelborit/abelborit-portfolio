import type { SectionRef } from "../../types/navigation";
import { Link } from "react-router";
import aboutImage from "../../assets/optimized-images/about-image-optimized.webp";
import styles from "./LandingPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { WaveDecoration } from "../../components/icons/WaveDecoration";

export const AboutSection = (props: { aboutREF: SectionRef }) => {
  return (
    <div
      ref={props.aboutREF}
      className={`${styles.section} ${styles.slideLeftReturn}`}
    >
      <div className={`${styles.image_container} ${styles.slideRightReturn}`}>
        <img
          className={styles.image}
          src={aboutImage}
          alt=""
          width={1920}
          height={1508}
          fetchPriority="high"
        />
        <div className={styles.image_border}></div>
      </div>

      <div className={styles.images_background}>
        <div className={styles.images_first}>
          <WaveDecoration variant="bottom" />
        </div>
      </div>

      <div className={styles.title_container}>
        <h1 className={styles.title_text}>Abel Borit Guitton</h1>

        <div className={styles.border_container}>
          <span className={styles.border_first}></span>
          <span className={styles.border_second}></span>
        </div>

        <p className={styles.description}>
          Frontend Developer con grado profesional en ingeniería
        </p>

        <div className={styles.btn_effect_container}>
          <Link
            className={styles.btn_effect}
            to="/acerca"
            onClick={() =>
              GTM_EVENTS.GenericRedirect({
                new_location: "/acerca",
                section: "about section",
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
