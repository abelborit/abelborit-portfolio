import { useState } from "react";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { Link } from "react-router";
import styles from "./ProjectsPage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";

const PROYECTOS = [
  {
    title: "Nueva Agencia Virtual (MicroFrontends)",
    client: "Encora / PRIMA AFP",
    description: `Participación activa en la definición de arquitectura frontend, proponiendo soluciones orientadas al rendimiento, facilidad y onboarding de nuevos colaboradores como también para la experiencia del usuario o cliente final. Colaboración con diseñadores UX/UI para garantizar la correcta implementación de interfaces accesibles, consistentes y centradas en el usuario.`,
  },
  /* **************************************************************************************************** */
  {
    title: "Agencia Virtual (MicroFrontends)",
    client: "Encora / PRIMA AFP",
    description: `Implementación de requerimientos, trámites y funcionalidades para los repositorios de la web privada Agencia Virtual y sus paquetes privados. Diseño de proyectos y paquetes compartidos, referencia técnica frontend, optimización de performance (lazy loading, bundle size) y migración de componentes legacy hacia una arquitectura modular de Microfrontends.`,
  },
  /* **************************************************************************************************** */
  {
    title: "Agencia Virtual (MicroFrontends) y Zona Informativa",
    client: "Encora / PRIMA AFP",
    description: `Implementación de requerimientos para la web privada Agencia Virtual (MicroFrontends) y para la web pública Zona Informativa, según necesidades de mercado y áreas como legal o marketing. Apoyo a pares en flujos de trabajo, versionado de paquetes internos y pases a producción.`,
  },
  /* **************************************************************************************************** */
  {
    title: "SEO y calidad de código en Zona Informativa",
    client: "NTT DATA / PRIMA AFP",
    description: `Implementación de SEO en la página informativa pública para mejorar el posicionamiento en buscadores. Optimización mediante code splitting, modularización, ordenamiento y limpieza de código para mejorar el bundle, la carga en el navegador y el performance.`,
  },
  /* **************************************************************************************************** */
  {
    title: "Acelerador de proyectos desde Figma",
    client: "NTT DATA",
    description: `Proyecto interno para acelerar la creación de proyectos a partir de diseños de Figma. Creación de componentes y funcionalidades iniciales validando diseños retornados por la API de Figma, con configuraciones iniciales en React y TypeScript.`,
  },
  /* **************************************************************************************************** */
  {
    title: "Independización de Mesas de Trabajo (Microfrontends)",
    client: "NTT DATA / PRIMA AFP",
    description: `Implementación de una arquitectura de módulos federados para independizar el flujo de desarrollo frontend entre squads. El objetivo fue reducir colisiones de publicación, facilitar mantenimiento y permitir desplegar características de forma independiente.`,
  },
  /* **************************************************************************************************** */
  {
    title: "Marketplace",
    client: "Consigue Ventas Online",
    description: `Creación de un Marketplace como espacio comercial virtual entre compradores y vendedores. Maquetación y diseño responsive con React, integración con APIs y Styled Components. Refactoricé el responsive con mobile first, corregí funcionalidades incompletas y propuse metodología SCRUM y el diseño de la plataforma.`,
  },
  /* **************************************************************************************************** */
  {
    title: "Sitios web",
    client: "Xenial Group",
    description: `Maquetación, desarrollo y diseño responsive de páginas web con React (usando mobile first), integración con diferentes API, diseño UI, uso de metodologías de UX y SCRUM. Creación de componentes reutilizables para optimizar el código.`,
  },
  /* **************************************************************************************************** */
  {
    title: "NutriBlog",
    client: "Freelancer",
    description: `Desarrollo de una Single Page Application con responsive design. Creación de la UI para mostrar información de un emprendimiento del sector nutricional a través de posts de reseñas.`,
  },
  /* **************************************************************************************************** */
  {
    title: "Sitio web automovilístico",
    client: "Axcel Web",
    description: `Maquetación, desarrollo y diseño responsive de páginas web con React, integración con diferentes API y diseño UI. Actualicé el diseño visual y la funcionalidad de la interfaz de una página web del sector automovilístico, creando componentes reutilizables.`,
  },
];

export const ProjectsPage = () => {
  /* se coloca este estado ya que cuando se cambia de ruta hay un desplazamiento hacia arriba, entonces con este setTimeout() hace que se espere lo mínimo para que la página ya se encuentre en la parte de arriba y se muestre con normalidad la página */
  const [loaderInitial, setLoaderInitial] = useState(true);

  setTimeout(() => {
    setLoaderInitial(false);
  }, 1);

  const listaProyectos = PROYECTOS.map((elemento, index) => (
    <div
      className={`${styles.project_card} ${styles.border_effect}`}
      key={index}
    >
      <div className={styles.project_card_info}>
        <h3 className={styles.card_info_title}>{elemento.title}</h3>
        <p className={styles.card_info_client}>{elemento.client}</p>
        <p className={styles.card_info_description}>{elemento.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      {loaderInitial ? null : (
        <>
          {/* ******************************************************************************************************************************** */}

          <HeaderSection></HeaderSection>

          <div className={`${styles.section} ${styles.slideLeftReturn}`}>
            <div
              className={`${styles.image_container} ${styles.slideRightReturn}`}
            ></div>

            <div className={styles.title_container}>
              <h2 className={styles.title_text}>Proyectos Realizados</h2>

              <div className={styles.border_container}>
                <span className={styles.border_first}></span>
                <span className={styles.border_second}></span>
              </div>

              <p className={styles.description}>Mis proyectos</p>

              <div className={styles.btnBack_effect_container}>
                <Link
                  className={styles.btnBack_effect}
                  to="/home"
                  onClick={() =>
                    GTM_EVENTS.GenericRedirect({
                      new_location: "/home",
                      section: "projects page",
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

                <span className={styles.section_title_text}>Mis Proyectos</span>
              </div>

              <div className={styles.portfolio_content}>{listaProyectos}</div>
            </div>
          </section>

          <footer className={styles.footer_section}>
            <Link
              className={styles.footer}
              to="/home"
              onClick={() =>
                GTM_EVENTS.GenericRedirect({
                  new_location: "/home",
                  section: "projects page",
                })
              }
            >
              Empecemos a trabajar juntos
            </Link>
          </footer>
        </>
      )}
    </>
  );
};
