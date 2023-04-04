import React from "react";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

const EDUCATION = [
  {
    title: "Frontend Developer (autodidacta)",
    description:
      "Desarrollador Frontend desde el 2020 usando diversas herramientas como React, JavaScript, HTML & CSS, entre otras.",
    to: "Actualidad",
    since: "Nov 2020",
  },
  {
    title: "Investigación en Ingeniería en la UCV",
    description:
      "Logro obtenido tras culminar curso de investigación en Ingeniería.",
    to: "Jun 2022",
    since: "Ene 2022",
  },
  {
    title: "Grado en Ingeniería en la UJCM",
    description:
      "Logro obtenido del Grado en Ingeniería (Perteneciente al Top 10)",
    to: "Dic 2019",
    since: "Abr 2015",
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

      <div className={styles.card_info}>
        <h4>{elemento.title}</h4>
        <p>{elemento.description}</p>
      </div>
    </div>
  ));

  return <>{listaEducacion}</>;
};
