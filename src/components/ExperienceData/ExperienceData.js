import React from "react";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

const EXPERIENCE = [
  {
    title: "Leader Frontend Developer – Consigue Ventas Online, Perú",
    description: `Actualmente soy co-lider del departamento de sistemas y líder del área de Frontend. Fuí co-lider del departamento Frontend. Participación en la solicitud de creación de nuevo rol/puesto de trabajo para el departamento y fui partícipe de entrevistas para nuevos colaboradores. 
    `,
    to: "Actualidad",
    since: "Dic 2022",
  },
  {
    title: "Frontend Developer - Xenial Group, Perú",
    description: `Fui parte del equipo de frontend para poder maquetar sitios web usando mobile first. También participé en el equipo de UI para la creación de la interfaz visual por el lado del cliente.`,
    to: "Dic 2022",
    since: "Nov 2021",
  },
  {
    title: "Freelancer Frontend Developer - NutriBlog",
    description: `Desarrollo de una Single Page Application con responsive design. Creación de la UI para mostrar información de un emprendimiento del sector nutricional a través de posts de reseñas.`,
    to: "Feb 2021",
    since: "Feb 2021",
  },
  {
    title: "Frontend Developer - Axcel Web, Perú",
    description: `Fui parte del equipo de frontend para poder maquetar sitios web usando mobile first. También participé en el equipo de UI para actualizar el diseño visual y la funcionalidad de la interfaz de una página web del sector automovilístico. Participé en la maquetación de sitios web y del responsive design de los mismos.`,
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
