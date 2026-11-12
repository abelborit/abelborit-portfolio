import type { Project, ProjectCategory } from "../types/content";

/* etiquetas del filtro de la página Proyectos */
export const PROJECT_CATEGORIES: Record<ProjectCategory, string> = {
  mfe: "Microfrontends",
  perf: "Performance y SEO",
  ui: "Producto y UI",
};

/* proyectos realizados, de los más relevantes a los más antiguos (fuente: CV). "value" es el "Adicional" del CV */
export const PROJECTS: Project[] = [
  {
    title: "Nueva Agencia Virtual (Microfrontends)",
    category: "mfe",
    company: "Encora",
    client: "PRIMA AFP",
    period: "Dic 2025 — Actualidad",
    role: "Software Engineer",
    context:
      "Nueva web privada de PRIMA AFP, con trámites y funcionalidades repartidos en varios repositorios Microfrontend, submódulos y paquetes privados en los que trabajan distintos squads.",
    work: "Implemento requerimientos, trámites y funcionalidades; diseño paquetes compartidos para estandarizar componentes, lógica y configuraciones; participo en la definición de la arquitectura frontend; optimizo el rendimiento con lazy loading y modularización; migro componentes legacy, integro Google Analytics y colaboro con UX/UI en interfaces accesibles.",
    value: [
      "Propuse y desarrollé un store global con Zustand que ordena la apertura de los modales del home y consume cada API solo cuando se necesita: de 5 llamadas en la carga inicial a 1 llamada secuencial.",
      "Participo en los procesos de reclutamiento técnico, evaluando competencias frontend y definiendo perfiles.",
    ],
    stack: ["React", "TypeScript", "Microfrontends", "Zustand", "Lazy loading", "Google Analytics"],
    soft: ["Referente técnico", "Mentoría", "Colaboración"],
  },
  {
    title: "SEO y rendimiento en Zona Informativa",
    category: "perf",
    company: "NTT DATA",
    client: "PRIMA AFP",
    period: "Abr 2024 — Jun 2024",
    role: "Medium Frontend Developer",
    context:
      "Web pública informativa de PRIMA AFP que necesitaba mejor posicionamiento en Google y tiempos de carga más cortos.",
    work: "Implementé SEO, modularicé los componentes con code splitting y ordené y limpié el código para mejorar el bundle, la lectura en el navegador y el rendimiento. Además di soporte a observaciones y apoyé a otros squads en las nuevas implementaciones.",
    value: [
      "Corregí una fuga que re-renderizaba toda la página cada 3–4 segundos por un slider: su renderizado bajó de 12.5 ms a 0.2 ms.",
      "Pasé de archivos de +975 líneas a módulos de 80–200 líneas, y las métricas de optimización subieron de 25–30 % a 60–65 %.",
      "Optimicé las imágenes del home: carga de 1.5 s a 0.75 s, tiempo de bloqueo de 3.7 s a 1.65 s y peso de 6.15 kB a 3.98 kB.",
    ],
    stack: ["React", "SEO", "Code splitting", "Optimización de imágenes"],
    soft: ["Proactividad", "Referente técnico", "Apoyo"],
  },
  {
    title: "Agencia Virtual y Zona Informativa",
    category: "mfe",
    company: "NTT DATA",
    client: "PRIMA AFP",
    period: "Jun 2024 — Dic 2025",
    role: "Medium Frontend Developer",
    context:
      "Web privada de PRIMA AFP construida con Microfrontends y web pública Zona Informativa, con requerimientos del mercado y de áreas como legal y marketing.",
    work: "Implementé requerimientos, trámites y funcionalidades en ambos proyectos, diseñé paquetes compartidos, migré componentes legacy, apliqué buenas prácticas (linting, formatting y documentación) e integré Google Analytics. Fui referencia técnica frontend y apoyé a otros squads.",
    value: [
      "En la iniciativa Chapter Frontend probé un monorepo y la consolidación de paquetes internos en el Microfrontend principal, con un informe de velocidad de carga, archivos descargados, dependencias duplicadas y peso del build.",
      "Guié a mis pares en repositorios y flujos de trabajo: commits y PR según los lineamientos, versionado de paquetes internos y soporte en pases a producción.",
      "Participé en procesos de reclutamiento técnico.",
    ],
    stack: ["React", "TypeScript", "Microfrontends", "Monorepo", "Paquetes privados", "Google Analytics"],
    soft: ["Mentoría", "Colaboración", "Rol de entrevistador"],
  },
  {
    title: "Independización de mesas de trabajo",
    category: "mfe",
    company: "NTT DATA",
    client: "PRIMA AFP",
    period: "Jun 2023 — Sep 2023",
    role: "Medium Frontend Developer",
    context:
      "Varios squads compartían el flujo de desarrollo frontend de PRIMA AFP y sus publicaciones colisionaban, lo que alargaba los tiempos de respuesta.",
    work: "Implementé una arquitectura de módulos federados para actualizar partes del frontend de forma incremental, reducir el mantenimiento y que cada característica se desarrolle, pruebe y despliegue de forma independiente. Propuse buenas prácticas para construir aplicaciones autocontenidas y apoyé a otros squads en su adopción.",
    stack: ["Module Federation", "Microfrontends", "React"],
    soft: ["Liderazgo técnico", "Apoyo", "Colaboración"],
  },
  {
    title: "Acelerador de proyectos desde Figma",
    category: "ui",
    company: "NTT DATA",
    client: "Proyecto interno",
    period: "Sep 2023 — Abr 2024",
    role: "Medium Frontend Developer",
    context:
      "Proyecto interno para acelerar la creación de proyectos convirtiendo diseños de Figma en código listo para desplegar.",
    work: "Creé los componentes y funcionalidades iniciales que validan los diseños devueltos por la API de Figma, la configuración base con React y TypeScript y la interfaz inicial. Fui el referente frontend del equipo y resolví las consultas técnicas de mis compañeros.",
    stack: ["React", "TypeScript", "Figma API"],
    soft: ["Referente técnico", "Apoyo"],
  },
  {
    title: "Marketplace",
    category: "ui",
    company: "Consigue Ventas Online",
    client: "Proyecto interno",
    period: "Ene 2023 — Jun 2023",
    role: "Lead Frontend Developer",
    context:
      "Piloto de un Marketplace interno que funciona como intermediario entre compradores y vendedores de diversos productos.",
    work: "Lideré el área frontend y el repositorio del proyecto: maquetación y desarrollo responsive con React, integración con APIs y estilos con Styled Components. Conversaba directamente con el cliente para convertir sus ideas y requerimientos en código.",
    value: [
      "Propuse dailies de 15 minutos al inicio y al final de la jornada, que evitaron demoras de hasta 25–30 minutos.",
      "Refactoricé el código para aplicar mobile first y corregir funcionalidades incompletas o erróneas.",
      "Propuse el diseño y el estilo de la plataforma.",
    ],
    stack: ["React", "Styled Components", "APIs REST", "Mobile first", "SCRUM"],
    soft: ["Liderazgo", "Comunicación con el cliente", "Proactividad", "Creatividad"],
  },
  {
    title: "Sitios web",
    category: "ui",
    company: "Xenial Group",
    period: "Nov 2021 — Dic 2022",
    role: "Frontend Developer",
    context: "Sitios web responsive construidos con React e integrados con distintas APIs.",
    work: "Maqueté y desarrollé con mobile first, participé en el equipo de UI en la interfaz del lado del cliente, apliqué metodologías de UX y SCRUM y creé componentes reutilizables para evitar código redundante.",
    stack: ["React", "Mobile first", "APIs REST", "UX", "SCRUM"],
    soft: ["Colaboración", "Adaptabilidad"],
  },
  {
    title: "NutriBlog",
    category: "ui",
    company: "NutriBlog",
    period: "Feb 2021",
    role: "Frontend Developer (Freelance)",
    context: "Emprendimiento del sector nutricional que necesitaba mostrar su información a través de reseñas.",
    work: "Desarrollé una Single Page Application responsive y la interfaz de los posts de reseñas.",
    stack: ["React", "SPA", "Responsive"],
    soft: ["Autonomía", "Creatividad"],
  },
  {
    title: "Sitio web automovilístico",
    category: "ui",
    company: "Axcel Web",
    period: "Nov 2020 — Nov 2021",
    role: "Frontend Developer",
    context: "Sitio de una empresa del sector automovilístico que necesitaba renovar su diseño y su funcionalidad.",
    work: "Actualicé el diseño visual y la funcionalidad de la interfaz, con maquetación responsive, integración con APIs y componentes reutilizables.",
    stack: ["React", "Responsive", "APIs REST", "UI"],
    soft: ["Colaboración", "Ganas de aprender"],
  },
];
