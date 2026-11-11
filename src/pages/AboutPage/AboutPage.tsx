import { PageLayout, PageSection } from "../../layouts/PageLayout/PageLayout";
import aboutImage from "../../assets/optimized-images/about-image-optimized.webp";
import profileOptimized from "../../assets/optimized-images/profile-optimized.webp";
import curriculumPDF from "../../assets/AbelBoritCurriculumVitae.pdf";

import styles from "./AboutPage.module.css";
import { getAge } from "../../helpers/getAge";
import { SKILLS } from "../../data/skills";
import { BoltIcon } from "../../components/icons/BoltIcon";

export const AboutPage = () => {
  const listaHabilidades = SKILLS.map((elemento) => (
    <p key={elemento}>
      <BoltIcon />

      <span>{elemento}</span>
    </p>
  ));

  return (
    <PageLayout
      image={aboutImage}
      title="Abel Borit Guitton"
      description="Frontend Developer con grado profesional en ingeniería"
      gtmSection="about page"
      footerGtmSection="footer section"
    >
      <PageSection number="01" title="¿Quién Soy?">
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
      </PageSection>

      <PageSection number="02" title="Mis Skills">
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
      </PageSection>
    </PageLayout>
  );
};
