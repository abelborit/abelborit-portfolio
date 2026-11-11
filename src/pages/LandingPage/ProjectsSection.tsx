import type { SectionRef } from "../../types/navigation";
import { Link } from "react-router";
import projectsImage from "../../assets/optimized-images/projects-image-optimized.webp";
import styles from "./LandingPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { WaveDecoration } from "../../components/icons/WaveDecoration";

export const ProjectsSection = (props: { projectREF: SectionRef }) => {
  return (
    <div
      ref={props.projectREF}
      className={`${styles.section} ${styles.slideLeftReturn}`}
    >
      <div className={`${styles.image_container} ${styles.slideRightReturn}`}>
        <img
          className={styles.image}
          src={projectsImage}
          alt=""
          width={1920}
          height={1508}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.image_border}></div>
      </div>

      <div className={styles.images_background}>
        <div className={styles.images_first}>
          <WaveDecoration variant="bottom" />
        </div>
      </div>

      <div className={styles.title_container}>
        <h2 className={styles.title_text}>Proyectos Realizados</h2>

        <div className={styles.border_container}>
          <span className={styles.border_first}></span>
          <span className={styles.border_second}></span>
        </div>

        <p className={styles.description}>Mis proyectos</p>

        <div className={styles.btn_effect_container}>
          <Link
            className={styles.btn_effect}
            to="/proyectos"
            onClick={() =>
              GTM_EVENTS.GenericRedirect({
                new_location: "/proyectos",
                section: "projects section",
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
