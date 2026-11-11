import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { Link } from "react-router";
import styles from "./ProjectsPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { PROJECTS } from "../../data/projects";
import { DoubleArrowLeftIcon } from "../../components/icons/DoubleArrowLeftIcon";

export const ProjectsPage = () => {
  const listaProyectos = PROJECTS.map((elemento) => (
    <div
      className={`${styles.project_card} ${styles.border_effect}`}
      key={elemento.title}
    >
      <div className={styles.project_card_info}>
        <h3 className={styles.card_info_title}>{elemento.title}</h3>
        <p className={styles.card_info_client}>{elemento.client}</p>
        <p className={styles.card_info_description}>{elemento.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      {/* ******************************************************************************************************************************** */}

      <HeaderSection></HeaderSection>

      <div className={`${styles.section} ${styles.slideLeftReturn}`}>
        <div
          className={`${styles.image_container} ${styles.slideRightReturn}`}
        ></div>

        <div className={styles.title_container}>
          <h2 className={styles.title_text}>Proyectos Realizados</h2>

          <div className={styles.border_container}>
            <span className={styles.border_first}></span>
            <span className={styles.border_second}></span>
          </div>

          <p className={styles.description}>Mis proyectos</p>

          <div className={styles.btnBack_effect_container}>
            <Link
              className={styles.btnBack_effect}
              to="/home"
              onClick={() =>
                GTM_EVENTS.GenericRedirect({
                  new_location: "/home",
                  section: "projects page",
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

            <span className={styles.section_title_text}>Mis Proyectos</span>
          </div>

          <div className={styles.portfolio_content}>{listaProyectos}</div>
        </div>
      </section>

      <footer className={styles.footer_section}>
        <Link
          className={styles.footer}
          to="/home"
          onClick={() =>
            GTM_EVENTS.GenericRedirect({
              new_location: "/home",
              section: "projects page",
            })
          }
        >
          Empecemos a trabajar juntos
        </Link>
      </footer>
    </>
  );
};
