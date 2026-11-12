import { Link } from "react-router";
import { buttonClass, buttonStyles } from "../../components/Button/button";
import { CvDownloadLink } from "../../components/Button/CvDownloadLink";
import { CompanyStrip } from "../../components/CompanyStrip/CompanyStrip";
import { Constellation } from "../../components/Constellation/Constellation";
import { ArrowRightIcon } from "../../components/icons";
import { FACTS } from "../../data/profile";
import { usePageTitle } from "../../hooks/usePageTitle";
import { GTM_EVENTS } from "../../utils/gtm";
import styles from "./PrincipalPage.module.css";

/* mismo evento de GTM que el antiguo botón "Explorar" de la portada */
const trackHero = () => GTM_EVENTS.GenericRedirect({ new_location: "/home", section: "hero image" });

/* portada ("/") */
export const PrincipalPage = () => {
  usePageTitle();

  return (
    <section className={`wrap ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.top}>
        <div className={styles.text}>
          <p className="eyebrow reveal">Frontend Developer — Arequipa, Perú · Remoto</p>
          <h1 id="hero-title" className={`reveal-title ${styles.title}`} style={{ animationDelay: "60ms" }}>
            Interfaces web rápidas, accesibles y listas para escalar.
          </h1>
          <div className={`reveal ${styles.intro}`} style={{ animationDelay: "120ms" }}>
            <p>
              Hola, soy <strong>Abel Borit Guitton</strong>
            </p>
            <p>Frontend Developer con grado en ingeniería.</p>
          </div>
          <div className={`reveal ${styles.actions}`} style={{ animationDelay: "180ms" }}>
            <Link to="/home#contacto" className={buttonClass("primary")} onClick={trackHero}>
              Contactar
              <ArrowRightIcon className={buttonStyles.arrow} />
            </Link>
            <CvDownloadLink />
            <Link to="/home" className={buttonClass("tertiary")} onClick={trackHero}>
              Explorar portafolio
            </Link>
          </div>
        </div>

        <div className={`reveal ${styles.art}`} style={{ animationDelay: "220ms" }}>
          <Constellation />
        </div>
      </div>

      <dl className={`reveal ${styles.facts}`} style={{ animationDelay: "300ms" }}>
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow">{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <CompanyStrip className={`reveal ${styles.strip}`} style={{ animationDelay: "360ms" }} />
    </section>
  );
};
