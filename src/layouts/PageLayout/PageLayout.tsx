import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router";
import { Header } from "../../components/Header/Header";
import { DoubleArrowLeftIcon } from "../../components/icons/DoubleArrowLeftIcon";
import { GTM_EVENTS } from "../../utils/gtm";
import styles from "./PageLayout.module.css";

interface PageLayoutProps {
  /* imagen de fondo del hero (import de un .webp) */
  image: string;
  title: string;
  description: string;
  /* valor de "section" que se envía a GTM al pulsar "Regresar" */
  gtmSection: string;
  /* valor de "section" para el enlace del footer. Si no se indica se usa gtmSection */
  footerGtmSection?: string;
  children: ReactNode;
}

/* estructura común de las páginas internas (sobre mí, estudios/experiencia y proyectos): header, hero con título y botón "Regresar", secciones y footer */
export const PageLayout = ({
  image,
  title,
  description,
  gtmSection,
  footerGtmSection = gtmSection,
  children,
}: PageLayoutProps) => {
  const imageStyle = { "--page-image": `url(${image})` } as CSSProperties;

  return (
    <>
      <Header />

      <div className={`${styles.section} ${styles.slideLeftReturn}`}>
        <div
          className={`${styles.image_container} ${styles.slideRightReturn}`}
          style={imageStyle}
        ></div>

        <div className={styles.title_container}>
          <h1 className={styles.title_text}>{title}</h1>

          <div className={styles.border_container}>
            <span className={styles.border_first}></span>
            <span className={styles.border_second}></span>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.btnBack_effect_container}>
            <Link
              className={styles.btnBack_effect}
              to="/home"
              onClick={() =>
                GTM_EVENTS.GenericRedirect({
                  new_location: "/home",
                  section: gtmSection,
                })
              }
            >
              <DoubleArrowLeftIcon />

              <span>Regresar</span>
            </Link>
          </div>
        </div>
      </div>

      {children}

      <footer className={styles.footer_section}>
        <Link
          className={styles.footer}
          to="/home"
          onClick={() =>
            GTM_EVENTS.GenericRedirect({
              new_location: "/home",
              section: footerGtmSection,
            })
          }
        >
          Empecemos a trabajar juntos
        </Link>
      </footer>
    </>
  );
};

interface PageSectionProps {
  /* número que se muestra junto al título: "01", "02"... */
  number: string;
  title: string;
  children: ReactNode;
}

/* sección numerada de una página interna */
export const PageSection = ({ number, title, children }: PageSectionProps) => {
  return (
    <section className={styles.section_container}>
      <div className={styles.section_content}>
        <div className={styles.section_title}>
          <div className={styles.section_title_number}>
            <div></div>
            <span>{number}</span>
          </div>

          <h2 className={styles.section_title_text}>{title}</h2>
        </div>

        {children}
      </div>
    </section>
  );
};
