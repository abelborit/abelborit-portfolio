import React from "react";

const EXPERIENCE = [
  {
    title: "Proyectos Personales",
    description:
      "Actualmente me encuentro en la realización de proyectos personales para mejorar mis habilidades comoFront-End Developer.",
    since: "2022",
    to: "Ahora",
  },
  {
    title: "Practicante de Mantenimiento",
    description:
      "Realicé prácticas de ingeniería mecánica eléctrica en el área de mantenimiento donde fortalecí y aprendí nuevos conocimientos y al estar trabajando a la par de un gran número de personal pude mejorar habilidades interpersonales y de liderazgo.",
    since: "2021",
    to: "2022",
  },
];

export const ExperienceData = () => {
  const listaExperiencia = EXPERIENCE.map((elemento, index) => (
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
      <h3>Mis Experiencias</h3>

      <div className="resume-content-description">{listaExperiencia}</div>
    </div>
  );
};
