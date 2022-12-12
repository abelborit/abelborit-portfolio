import React from "react";
import styles from "./ProjectsPage.module.css";

const PROYECTOS = [
  {
    title: "Portafolio - CV",
    description:
      "Este es mi portafolio digital, es la representación de lo que he aprendido y consolidado en las diferentes tecnologías de React JS, JavaScript, HTML y CSS.",
    urlRepository: "https://github.com/abelborit/abelborit-portfolio",
    urlProject: "https://abelborit.github.io/abelborit-portfolio/",
  },
  /* **************************************************************************************************** */
  {
    title: "React API Country",
    description:
      "Proyecto con React donde se usará Fetch y API de REST Countries para obtener los datos necesarios y mostarlos en distintas cards o tarjetas donde a su vez al entrar a cada card nos mostrará más información sobre cada elemento.",
    urlRepository: "https://github.com/abelborit/react-api-country",
    urlProject: "https://abelborit.github.io/react-api-country/",
  },
  /* **************************************************************************************************** */
  {
    title: "React API Pokemon",
    description:
      "Proyecto con React donde se usará Fetch y la API de Pokemon para obtener los datos necesarios y mostarlos en distintas cards o tarjetas donde a su vez al entrar a cada card nos mostrará más información sobre cada elemento.",
    urlRepository: "https://github.com/abelborit/react-api-pokemon",
    urlProject: "https://abelborit.github.io/react-api-pokemon/",
  },
  /* **************************************************************************************************** */
  {
    title: "Contact Form",
    description:
      "Este es un modelo para utilizar un formulario de contacto con Fetch y el API de Form Submit y a su vez cuenta con validaciones.",
    urlRepository: "https://github.com/abelborit/contact-form",
    urlProject: "https://abelborit.github.io/contact-form/",
  },
  /* **************************************************************************************************** */
  {
    title: "API Pokemon",
    description:
      "Proyecto con Javascript donde se usará Fetch y la API de Pokemon para obtener los datos necesarios y mostarlos en distintas cards o tarjetas.",
    urlRepository: "https://github.com/abelborit/api-pokemon",
    urlProject: "https://abelborit.github.io/api-pokemon/",
  },
  /* **************************************************************************************************** */
  {
    title: "Utility Loaders",
    description:
      "Aquí podrás encontrar diferentes tipos de loaders para poder reutilizarlos. Escoge el que más te guste y añádelo en tu próximo proyecto.",
    urlRepository: "https://github.com/abelborit/loaders",
    urlProject: "https://abelborit.github.io/loaders/",
  },
];

export const ProjectsPage = (props) => {
  const listaProyectos = PROYECTOS.map((elemento, index) => (
    <div
      className={`${styles.project_card} ${styles.border_effect}`}
      key={index}
    >
      <div className={styles.project_card_img}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z" />
        </svg>
      </div>

      <div className={styles.project_card_info}>
        <h3 className={styles.card_info_title}>{elemento.title}</h3>

        <p className={styles.card_info_description}>{elemento.description}</p>
      </div>

      <div className={styles.project_card_btn}>
        <a
          href={elemento.urlRepository}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn_effect}
        >
          Repositorio
        </a>

        <a
          href={elemento.urlProject}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn_effect}
        >
          Proyecto
        </a>
      </div>
    </div>
  ));

  return (
    <section ref={props.projectREF} className="section">
      <div className="section-title">
        <h3>PROYECTOS</h3>
        <h4>Portafolio</h4>
      </div>

      <div className={styles.portfolio_content}>{listaProyectos}</div>
    </section>
  );
};
