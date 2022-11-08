import React from "react";

const EDUCATION = [
  {
    title: "React JS",
    description:
      "Tengo conocimientos en la librería React JS para crear diversos componentes y con ellos diseñar interfaces de usuarios en SPA (Single Page Application)",
    since: "2022",
    to: "Ahora",
  },
  {
    title: "JavaScript",
    description:
      "Tengo conocimientos en el lenguaje JavaScript para crear las funcionalidades requeridas en una aplicación.",
    since: "2022",
    to: "Ahora",
  },
  {
    title: "HTML y CSS",
    description:
      "Tengo conocimientos en HTML y CSS para realizar la estructura necesaria en la elaboración de páginas web y poder dar estilos y/o diseños creando la presentación de una aplicación.",
    since: "2022",
    to: "Ahora",
  },
  {
    title: "Figma",
    description:
      "Tengo conocimientos en la herramienta Figma para diseñar y generar diferentes wireframes o interfaces previos al desarrollo en código.",
    since: "2022",
    to: "Ahora",
  },
  {
    title: "Balsamiq",
    description:
      "Tengo conocimientos en la herramienta Balsamiq para diseñar y estructurar wireframes plasmando ideas en una representación visual.",
    since: "2022",
    to: "Ahora",
  },
];

export const EducationData = () => {
  const listaEducacion = EDUCATION.map((elemento, index) => (
    <div className="content-card" key={index}>
      <div className="card-date">
        <div className="card-date-line"></div>
        <span>{elemento.to}</span>
        <span>-</span>
        <span>{elemento.since}</span>
        <div className="card-date-line"></div>
      </div>

      <div className="card-info">
        <h4>{elemento.title}</h4>
        <p>{elemento.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="resume-content-info">
      <h3>Mi Educación</h3>

      <div className="resume-content-description">{listaEducacion}</div>
    </div>
  );
};
