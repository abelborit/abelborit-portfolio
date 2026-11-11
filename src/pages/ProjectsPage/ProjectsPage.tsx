import { PageLayout, PageSection } from "../../layouts/PageLayout/PageLayout";
import { PROJECTS } from "../../data/projects";
import projectsImage from "../../assets/optimized-images/projects-image-optimized.webp";

import styles from "./ProjectsPage.module.css";

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
    <PageLayout
      image={projectsImage}
      title="Proyectos Realizados"
      description="Mis proyectos"
      gtmSection="projects page"
    >
      <PageSection number="01" title="Mis Proyectos">
        <div className={styles.portfolio_content}>{listaProyectos}</div>
      </PageSection>
    </PageLayout>
  );
};
