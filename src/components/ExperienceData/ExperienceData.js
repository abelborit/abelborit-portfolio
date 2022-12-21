import React from "react";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

const EXPERIENCE = [
  {
    title: "Front-End Developer - Xenial Group, Perú",
    description:
      "Maquetación, desarrollo y diseño responsive de páginas web con React, diseño UI, uso de metodologías de UX y SCRUM.",
    to: "Actualidad",
    since: "Nov 2021",
  },
  {
    title: "Front-End Developer - Axcel Web, Perú",
    description:
      "Maquetación, desarrollo y diseño responsive de páginas web con React, diseño UI.",
    to: "Nov 2021",
    since: "Nov 2020",
  },
];

export const ExperienceData = () => {
  const listaExperiencia = EXPERIENCE.map((elemento, index) => (
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

  return <>{listaExperiencia}</>;
};
