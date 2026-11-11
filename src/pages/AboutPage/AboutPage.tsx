import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import profileOptimized from "../../assets/optimized-images/profile-optimized.webp";
import curriculumPDF from "../../assets/AbelBoritCurriculumVitae.pdf";
import { Link } from "react-router";

import styles from "./AboutPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { getAge } from "../../helpers/getAge";

const HABILIDADES = [
  "React JS",
  "Microfrontends",
  "JavaScript & TypeScript",
  "Zustand",
  "TanStack Query",
  "Tailwind CSS",
  "Git & GitHub",
  "Uso y creación de paquetes",
  "Angular",
  "Gatsby",
  "React Native",
  "SEO (Search Engine Optimization)",
  "HTML & CSS (Flex & Grid)",
  "Styled Components",
  "Conocimientos en Azure",
  "SASS",
  "UI/UX",
  "Figma",
  "Postman",
  "Metodología SCRUM",
  "GitHub Copilot",
  "Prompt engineering",
  "Best practices for the use of AI",
];

export const AboutPage = () => {
  const listaHabilidades = HABILIDADES.map((elemento) => (
    <p key={elemento}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
      </svg>

      <span>{elemento}</span>
    </p>
  ));

  return (
    <>
      <HeaderSection></HeaderSection>

      <div className={`${styles.section} ${styles.slideLeftReturn}`}>
        <div
          className={`${styles.image_container} ${styles.slideRightReturn}`}
        ></div>

        <div className={styles.title_container}>
          <h1 className={styles.title_text}>Abel Borit Guitton</h1>

          <div className={styles.border_container}>
            <span className={styles.border_first}></span>
            <span className={styles.border_second}></span>
          </div>

          <p className={styles.description}>
            Frontend Developer con grado profesional en ingeniería
          </p>

          <div className={styles.btnBack_effect_container}>
            <Link
              className={styles.btnBack_effect}
              to="/home"
              onClick={() =>
                GTM_EVENTS.GenericRedirect({
                  new_location: "/home",
                  section: "about page",
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
              </svg>

              <span>Regresar</span>
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.section_container}>
        <div className={styles.section_content}>
          <div className={styles.section_title}>
            <div className={styles.section_title_number}>
              <div></div>
              <span>01</span>
            </div>

            <span className={styles.section_title_text}>¿Quién Soy?</span>
          </div>

          <div className={styles.about_bio}>
            <div className={styles.about_bio_title}>
              <span>Abel Borit Guitton</span>
            </div>

            <div className={styles.about_bio_info}>
              <p>
                Soy Frontend Developer con grado profesional en ingeniería.
                Me considero una persona responsable y proactiva, con
                capacidad de liderazgo, con buen manejo en las redes
                interpersonales y con la aptitud de trabajar en equipo.
              </p>
              <br />
              <p>
                Inicié en el mundo del desarrollo digital porque me es
                interesante la cantidad de herramientas existentes y
                proyectos que se pueden realizar y creo que la
                transformación digital será la llave para resolver retos en
                el futuro.
              </p>
            </div>

            <div className={styles.about_bio_date}>
              <span>
                <b>Edad:</b> {getAge()} años
              </span>
              <span>
                <b>Ubicación:</b> Arequipa, Perú
              </span>
            </div>

            <div className={styles.about_bio_profile}>
              <img
                src={profileOptimized}
                alt="profile"
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section_container}>
        <div className={styles.section_content}>
          <div className={styles.section_title}>
            <div className={styles.section_title_number}>
              <div></div>
              <span>02</span>
            </div>

            <span className={styles.section_title_text}>Mis Skills</span>
          </div>

          <div className={styles.about_skills}>{listaHabilidades}</div>

          <div className={styles.btn_effect_container}>
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

      <footer className={styles.footer_section}>
        <Link
          className={styles.footer}
          to="/home"
          onClick={() =>
            GTM_EVENTS.GenericRedirect({
              new_location: "/home",
              section: "footer section",
            })
          }
        >
          Empecemos a trabajar juntos
        </Link>
      </footer>
    </>
  );
};
