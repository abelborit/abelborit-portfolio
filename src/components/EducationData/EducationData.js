import React from "react";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

const EDUCATION = [
  {
    title: "Front-End Developer",
    description:
      "Conocimientos de desarrollor Front-End usando diversas herramientas como React, JavaScript, HTML & CSS, entre otras.",
    since: "2020",
    to: "Ahora",
  },
  {
    title: "Grado de Ingeniero Mecánico Electricista",
    description:
      "Logro obtenido del Grado de Ingeniero de la carrera profesional de Ingeniería Mecánica Eléctrica.",
    since: "2022",
    to: "2022",
  },
  {
    title: "Bachillerato Ingeniería Mecánica Eléctrica",
    description:
      "Logro obtenido del Grado de Bachiller de la carrera profesional de Ingeniería Mecánica Eléctrica (Perteneciente al Décimo Superior). ",
    since: "2015",
    to: "2019",
  },
];

export const EducationData = () => {
  const listaEducacion = EDUCATION.map((elemento, index) => (
    <div className={styles.content_card} key={index}>
      <div className={styles.card_date}>
        <div className={styles.card_date_line}></div>
        <span>{elemento.since}</span>
        <span>-</span>
        <span>{elemento.to}</span>
        <div className={styles.card_date_line}></div>
      </div>

      {/* <div className={`${styles.card_info} ${styles.gradientMove}`}> */}
      <div className={styles.card_info}>
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
