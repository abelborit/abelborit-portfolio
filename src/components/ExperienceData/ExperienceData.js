import React from "react";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

const EXPERIENCE = [
  {
    title: "Proyectos Personales",
    description:
      "Actualmente me encuentro en la realización de proyectos personales para mejorar mis habilidades como Front-End Developer.",
    since: "2022",
    to: "Ahora",
  },
  {
    title: "Practicante del Área de Mantenimiento",
    description:
      "Realicé prácticas de ingeniería mecánica eléctrica en el área de mantenimiento donde fortalecí y aprendí nuevos conocimientos y al estar trabajando a la par de un gran número de personal pude mejorar habilidades interpersonales y de liderazgo.",
    since: "2021",
    to: "2022",
  },
  {
    title: "Desarrollo de páginas web",
    description:
      "Maquetación y desarrollo de páginas web, creación de UI, uso de metodologías de UX.",
    since: "2021",
    to: "2022",
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

      {/* <div className={`${styles.card_info} ${styles.gradientMove}`}> */}
      <div className={styles.card_info}>
        <h4>{elemento.title}</h4>
        <p>{elemento.description}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.resume_content_info}>
      <h3>Mis Experiencias</h3>

      <div className={styles.resume_content_description}>
        {listaExperiencia}
      </div>
    </div>
  );
};
