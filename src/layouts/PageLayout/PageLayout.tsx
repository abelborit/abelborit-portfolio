import type { ReactNode } from "react";
import { Link } from "react-router";
import { buttonClass, buttonStyles } from "../../components/Button/button";
import { CvDownloadLink } from "../../components/Button/CvDownloadLink";
import { ArrowRightIcon } from "../../components/icons";
import { GTM_EVENTS } from "../../utils/gtm";
import styles from "./PageLayout.module.css";

interface PageLayoutProps {
  /* valor de "section" que se envía a GTM al pulsar "Volver al inicio" */
  backGtmSection: string;
  /* valor de "section" del botón "Contactar" del bloque final */
  ctaGtmSection: string;
  children: ReactNode;
}

/* estructura común de las páginas internas: "Volver al inicio", contenido y bloque final de contacto */
export const PageLayout = ({ backGtmSection, ctaGtmSection, children }: PageLayoutProps) => (
  <>
    <div className={`wrap ${styles.page}`}>
      <Link
        to="/home"
        className={buttonClass("tertiary", { className: "reveal" })}
        onClick={() => GTM_EVENTS.GenericRedirect({ new_location: "/home", section: backGtmSection })}
      >
        ← Volver al inicio
      </Link>
    </div>

    {children}

    <section className={`wrap ${styles.cta}`} aria-labelledby="cta-title">
      <div className={`surface ${styles.ctaCard}`}>
        <div className={styles.ctaText}>
          <h2 id="cta-title" className={styles.ctaTitle}>
            Empecemos a trabajar juntos
          </h2>
          <p>Cuéntame sobre el rol o el proyecto y te respondo lo antes posible.</p>
        </div>
        <div className={styles.ctaActions}>
          <Link
            to="/home#contacto"
            className={buttonClass("primary")}
            onClick={() => GTM_EVENTS.GenericRedirect({ new_location: "/home", section: ctaGtmSection })}
          >
            Contactar
            <ArrowRightIcon className={buttonStyles.arrow} />
          </Link>
          <CvDownloadLink />
        </div>
      </div>
    </section>
  </>
);

/* encabezado de una página interna: etiqueta, título y descripción */
export const PageIntro = ({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) => (
  <header className={`wrap ${styles.intro}`}>
    <p className="eyebrow reveal">{eyebrow}</p>
    <h1 className={`reveal-title ${styles.title}`} style={{ animationDelay: "60ms" }}>
      {title}
    </h1>
    <p className={`reveal ${styles.description}`} style={{ animationDelay: "100ms" }}>
      {description}
    </p>
  </header>
);
