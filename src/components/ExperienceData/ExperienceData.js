import React from "react";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

const EXPERIENCE = [
  {
    title: "Software Engineer - Encora, Perú (Remoto)",
    description: `Cliente PRIMA AFP. Parte del desarrollo en la implementación de requerimientos, trámites y funcionalidades para la nueva web privada Agencia Virtual (MicroFrontends), incluyendo submódulos y paquetes privados. Soporte técnico y funcional frente a observaciones, incidencias o tareas adicionales relacionadas con el flujo de trabajo, garantizando continuidad operativa y cumplimiento de entregables`,
    to: "Actualidad",
    since: "Dic 2025",
  },
  {
    title: "Medium Frontend Developer - NTT DATA, Perú (Remoto)",
    description: `Cliente PRIMA AFP e iniciativas internas. Parte del desarrollo de la web privada Agencia Virtual (MicroFrontends) y la web pública Zona Informativa. Participé en la independización de mesas de trabajo con módulos federados. Implementé SEO y optimización de código. También apoyé a pares en flujos, versionado de paquetes y coordinaciones para pases a producción.`,
    to: "Dic 2025",
    since: "Jun 2023",
  },
  {
    title: "Lead Frontend Developer - Consigue Ventas Online, Perú (Remoto)",
    description: `Líder del área de Frontend y co-líder del departamento de sistemas. Encargado del repositorio frontend de un Marketplace con React y Styled Components. Conversación directa con el cliente. Participación en entrevistas para nuevos colaboradores y propuesta de metodología SCRUM.`,
    to: "Jun 2023",
    since: "Ene 2023",
  },
  {
    title: "Frontend Developer - Xenial Group, Perú",
    description: `Parte del equipo de frontend para maquetar sitios web usando mobile first. También participé en el equipo de UI para la creación de la interfaz visual del lado del cliente.`,
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
    description: `Parte del equipo de frontend para maquetar sitios web usando mobile first. También participé en el equipo de UI para actualizar el diseño visual y la funcionalidad de la interfaz de una página web del sector automovilístico. Participé en la maquetación de sitios web y del responsive design de los mismos.`,
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
