import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import profileOptimized from "../../assets/optimized-images/profile-optimized.webp";
import curriculumPDF from "../../assets/AbelBoritCurriculumVitae.pdf";
import { Link } from "react-router";

import styles from "./AboutPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { getAge } from "../../helpers/getAge";
import { SKILLS } from "../../data/skills";
import { BoltIcon } from "../../components/icons/BoltIcon";
import { DoubleArrowLeftIcon } from "../../components/icons/DoubleArrowLeftIcon";

export const AboutPage = () => {
  const listaHabilidades = SKILLS.map((elemento) => (
    <p key={elemento}>
      <BoltIcon />

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
              <DoubleArrowLeftIcon />

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
                alt="Foto de perfil de Abel Borit Guitton"
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
