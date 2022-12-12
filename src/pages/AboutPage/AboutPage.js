import React from "react";
import profileOptimized from "../../assets/optimized-images/profile-optimized.jpg";
import curriculumPDF from "../../assets/AbelBoritCurriculumVitae.pdf";
import styles from "./AboutPage.module.css";

const HABILIDADES = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "SASS",
  "UI/UX",
  "Figma",
  "Balsamiq",
  "Metodología SCRUM",
];

export const AboutPage = (props) => {
  const listaHabilidades = HABILIDADES.map((elemento) => (
    <p key={elemento}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
      </svg>

      <span>{elemento}</span>
    </p>
  ));

  return (
    <section ref={props.aboutREF} className="section">
      <div className="section-title">
        <h3>ACERCA</h3>
        <h4>Sobre Mi</h4>
      </div>

      <div className={styles.about_content}>
        <div className={styles.about_bio}>
          <div className={styles.about_bio_title}>
            <h3>Abel Borit Guitton</h3>
            <h4>Front-End Developer con Grado en Ingeniería</h4>
          </div>

          <div className={styles.about_bio_info}>
            <p>
              Soy Front-End Developer con grado en ingeniería. Me considero una
              persona responsable y proactiva, con capacidad de liderazgo, con
              buen manejo en las redes interpersonales y con la aptitud de
              trabajar en equipo.
            </p>
            <br />
            <p>
              Inicié en el mundo del desarrollo digital porque me es interesante
              la cantidad de herramientas existentes y proyectos que se pueden
              realizar y creo que la transformación digital será la llave para
              resolver retos en el futuro. Quiero seguir mejorando y aprendiendo
              nuevas cosas de este gran mundo del desarrollo digital.
            </p>
          </div>

          <div className={styles.about_bio_date}>
            <span>
              <b>Edad:</b> 24 años
            </span>
            <span>
              <b>Ubicación:</b> Arequipa, Perú
            </span>
          </div>
        </div>

        <div className={styles.about_profile}>
          <div className={styles.profile_img}>
            <img src={profileOptimized} alt="Abel Borit Guitton" />
          </div>

          <div className={styles.profile_media}>
            <a
              href="https://github.com/abelborit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/abelborit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.about_skills}>
          <h3>Mis Habilidades</h3>

          <div className={styles.list_habilities}>{listaHabilidades}</div>
        </div>

        <div className={styles.curriculum_btn}>
          <a
            href={curriculumPDF}
            download="AbelBorit-CurriculumVitae"
            className={styles.btn_effect}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};
