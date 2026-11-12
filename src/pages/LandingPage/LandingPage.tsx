import { Link } from "react-router";
import { TextLink } from "../../components/Button/TextLink";
import { CompanyStrip } from "../../components/CompanyStrip/CompanyStrip";
import { ArrowRightIcon } from "../../components/icons";
import { EXPERIENCE } from "../../data/experience";
import { PROJECTS } from "../../data/projects";
import { usePageTitle } from "../../hooks/usePageTitle";
import { GTM_EVENTS } from "../../utils/gtm";
import { ContactSection } from "./ContactSection";
import styles from "./LandingPage.module.css";

const RECENT_JOBS = EXPERIENCE.slice(0, 3);

/* inicio ("/home"): resumen del perfil y contacto */
export const LandingPage = () => {
  usePageTitle("Inicio");

  return (
    <>
      <section className={`wrap ${styles.intro}`} aria-labelledby="home-title">
        <p className="eyebrow reveal">Inicio</p>
        <h1 id="home-title" className={`reveal-title ${styles.title}`} style={{ animationDelay: "60ms" }}>
          Un vistazo rápido a mi perfil
        </h1>

        <div className={styles.row}>
          <article className={`surface lift reveal ${styles.card} ${styles.about}`} style={{ animationDelay: "120ms" }}>
            <h2 className="eyebrow">Sobre mí</h2>
            <p className={styles.phrase}>
              <span className={styles.highlight}>Ingeniero de formación y frontend por elección.</span> Me interesa que
              las interfaces sean rápidas, claras y fáciles de mantener para el equipo que viene después.
            </p>
            <TextLink
              to="/acerca"
              onClick={() => GTM_EVENTS.GenericRedirect({ new_location: "/acerca", section: "about section" })}
            >
              Conocer más sobre mí
            </TextLink>
          </article>

          <div className={styles.stats}>
            <div className={`surface reveal ${styles.stat}`} style={{ animationDelay: "180ms" }}>
              <span className={styles.statValue}>2020</span>
              <span className={styles.statLabel}>desarrollando frontend</span>
            </div>
            <div className={`surface reveal ${styles.stat}`} style={{ animationDelay: "220ms" }}>
              <span className={styles.statValue}>{EXPERIENCE.length}</span>
              <span className={styles.statLabel}>experiencias profesionales</span>
            </div>
            <Link
              to="/proyectos"
              className={`surface lift reveal ${styles.stat}`}
              style={{ animationDelay: "260ms" }}
              onClick={() => GTM_EVENTS.GenericRedirect({ new_location: "/proyectos", section: "projects section" })}
            >
              <span className={styles.statValue}>{PROJECTS.length}</span>
              <span className={styles.statLabel}>proyectos realizados</span>
              <ArrowRightIcon size={16} className={styles.statArrow} />
            </Link>
          </div>
        </div>

        <div className={styles.row}>
          <article className={`surface lift reveal ${styles.card} ${styles.journey}`} style={{ animationDelay: "300ms" }}>
            <h2 className="eyebrow">Trayectoria reciente</h2>
            <ul className={styles.jobs}>
              {RECENT_JOBS.map((job) => (
                <li key={job.company} className={styles.job}>
                  <span className={styles.jobPeriod}>{job.period}</span>
                  <span className={styles.jobRole}>{job.role}</span>
                  <span className={styles.jobCompany}>{job.company}</span>
                </li>
              ))}
            </ul>
            <TextLink
              to="/resumen"
              onClick={() => GTM_EVENTS.GenericRedirect({ new_location: "/resumen", section: "resume section" })}
            >
              Ver trayectoria completa
            </TextLink>
          </article>
        </div>

        <CompanyStrip className={`reveal ${styles.strip}`} style={{ animationDelay: "360ms" }} />
      </section>

      <ContactSection />
    </>
  );
};
