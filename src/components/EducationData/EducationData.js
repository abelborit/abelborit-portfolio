import React from "react";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

const EDUCATION = [
  {
    title: "React",
    description:
      "Tengo conocimientos en la librería React para crear diversos componentes y con ellos diseñar interfaces de usuarios en SPA (Single Page Application)",
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
    <div className={styles.content_card} key={index}>
      <div className={styles.card_date}>
        <div className={styles.card_date_line}></div>
        <span>{elemento.to}</span>
        <span>-</span>
        <span>{elemento.since}</span>
        <div className={styles.card_date_line}></div>
      </div>

      <div className={`${styles.card_info} ${styles.gradientMove}`}>
        <h4>{elemento.title}</h4>
        <p>{elemento.description}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.resume_content_info}>
      <h3>Mi Educación</h3>

      <div className={styles.resume_content_description}>{listaEducacion}</div>
    </div>
  );
};
