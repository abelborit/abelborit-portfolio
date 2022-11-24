import React from "react";
import "./ProjectsPage.css";

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
    title: "React API Pokemon",
    description:
      "Proyecto con React donde se usará Fetch y la API de Pokemon para obtener los datos necesarios y mostarlos en distintas cards o tarjetas donde a su vez al entrar a cada card nos mostrará más información sobre cada elemento.",
    urlRepository: "https://github.com/abelborit/react-api-pokemon",
    urlProject: "https://abelborit.github.io/react-api-pokemon/",
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
    <div className="project-card" key={index}>
      <div className="project-card-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
        </svg>
      </div>

      <div className="project-card-info">
        <h3 className="card-info-title">{elemento.title}</h3>

        <p className="card-info-description">{elemento.description}</p>
      </div>

      <div className="project-card-btn">
        <a
          href={elemento.urlRepository}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </a>

        <a href={elemento.urlProject} target="_blank" rel="noopener noreferrer">
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

      <div className="portfolio-content">{listaProyectos}</div>
    </section>
  );
};
