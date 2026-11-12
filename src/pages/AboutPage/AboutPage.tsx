import profilePhoto from "../../assets/optimized-images/profile-optimized.webp";
import { buttonStyles } from "../../components/Button/button";
import { BadgeIcon } from "../../components/icons";
import { TagList } from "../../components/TagList/TagList";
import { EDUCATION } from "../../data/education";
import { CERTIFICATIONS, EXTERNAL_LINKS } from "../../data/profile";
import { SOFT_SKILLS, TECH_SKILLS } from "../../data/skills";
import { getAge } from "../../helpers/getAge";
import { usePageTitle } from "../../hooks/usePageTitle";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import pageStyles from "../../layouts/PageLayout/PageLayout.module.css";
import styles from "./AboutPage.module.css";

const NEW_TAB = <span className="visually-hidden"> (se abre en una nueva pestaña)</span>;

/* sobre mí ("/acerca") */
export const AboutPage = () => {
  usePageTitle("Sobre mí");

  return (
    <PageLayout backGtmSection="about page" ctaGtmSection="footer section">
      <section className={`wrap ${styles.hero}`} aria-labelledby="about-title">
        <div className={`reveal ${styles.photo}`} style={{ animationDelay: "80ms" }}>
          <img
            src={profilePhoto}
            alt="Foto de perfil de Abel Borit Guitton"
            width={600}
            height={600}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className={styles.text}>
          <p className="eyebrow reveal">Sobre mí</p>
          <h1 id="about-title" className={`reveal-title ${styles.name}`} style={{ animationDelay: "60ms" }}>
            Abel Borit Guitton
          </h1>
          <p className={`reveal ${styles.phrase}`} style={{ animationDelay: "120ms" }}>
            <span className={styles.highlight}>Ingeniero de formación y frontend por elección.</span> Me interesa que las
            interfaces sean rápidas, claras y fáciles de mantener para el equipo que viene después.
          </p>
          <div className={`reveal ${styles.bio}`} style={{ animationDelay: "180ms" }}>
            <p>
              Soy Frontend Developer con grado profesional en ingeniería. Me considero una persona responsable y
              proactiva, con capacidad de liderazgo, buen manejo de las relaciones interpersonales y aptitud para trabajar
              en equipo.
            </p>
            <p>
              Inicié en el desarrollo digital por la cantidad de herramientas y proyectos que se pueden crear, y creo que
              la transformación digital será la llave para resolver los retos del futuro.
            </p>
          </div>
          <dl className={`reveal ${styles.facts}`} style={{ animationDelay: "240ms" }}>
            <div>
              <dt className="eyebrow">Edad</dt>
              <dd>{getAge()} años</dd>
            </div>
            <div>
              <dt className="eyebrow">Ubicación</dt>
              <dd>Arequipa, Perú</dd>
            </div>
            <div>
              <dt className="eyebrow">Modalidad</dt>
              <dd>Remoto</dd>
            </div>
            <div>
              <dt className="eyebrow">Idiomas</dt>
              <dd>Español (nativo) · Inglés (B1)</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={`wrap ${pageStyles.section}`} aria-labelledby="edu-title">
        <h2 id="edu-title" className={pageStyles.sectionTitle}>
          Formación
        </h2>
        <ol className={styles.grid}>
          {EDUCATION.map((item) => (
            <li key={item.title} className={`surface lift ${styles.card}`}>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`wrap ${pageStyles.section}`} aria-labelledby="skills-title">
        <h2 id="skills-title" className={pageStyles.sectionTitle}>
          Habilidades
        </h2>

        <h3 className={`eyebrow ${styles.subTitle}`}>Tech Skills</h3>
        <ul className={styles.grid}>
          {TECH_SKILLS.map((group) => (
            <li key={group.name} className={`surface lift ${styles.card}`}>
              <h4 className={styles.cardTitle}>{group.name}</h4>
              <TagList items={group.items} />
            </li>
          ))}
        </ul>

        <h3 className={`eyebrow ${styles.subTitle} ${styles.softTitle}`}>Soft Skills</h3>
        <div className={`surface ${styles.softCard}`}>
          <TagList items={SOFT_SKILLS} variant="soft" size="large" />
        </div>
      </section>

      <section className={`wrap ${pageStyles.section}`} aria-labelledby="certs-title">
        <h2 id="certs-title" className={pageStyles.sectionTitle}>
          Certificaciones
        </h2>
        <ul className={styles.grid}>
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.title} className={`surface lift ${styles.card}`}>
              <div className={styles.cert}>
                <span className={styles.certIcon}>
                  <BadgeIcon />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>{cert.title}</h3>
                  <p className={styles.certDetail}>{cert.detail}</p>
                </div>
              </div>
              <a href={cert.href} target="_blank" rel="noopener noreferrer" className={`${buttonStyles.textLink} ${styles.certLink}`}>
                <span className={buttonStyles.textLabel}>Ver credencial</span>
                <span aria-hidden="true">↗</span>
                {NEW_TAB}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={`wrap ${pageStyles.section}`} aria-labelledby="links-title">
        <h2 id="links-title" className={pageStyles.sectionTitle}>
          Enlaces
        </h2>
        <ul className={styles.grid}>
          {EXTERNAL_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={`surface lift ${styles.extLink}`}>
                <span>
                  <span className={styles.extTitle}>{link.title}</span>
                  <span className={styles.extDetail}>{link.detail}</span>
                </span>
                <span aria-hidden="true" className={styles.extArrow}>
                  ↗
                </span>
                {NEW_TAB}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
};
