import type { Project } from "../types/content";

/* proyectos realizados (de más reciente a más antiguo) */
export const PROJECTS: Project[] = [
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
