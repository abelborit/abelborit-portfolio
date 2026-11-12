import type { Experience } from "../types/content";

/* experiencia laboral, de la más reciente a la más antigua (fuente: CV) */
export const EXPERIENCE: Experience[] = [
  {
    company: "Encora",
    client: "PRIMA AFP",
    role: "Software Engineer",
    period: "Dic 2025 — Actualidad",
    location: "Perú, Lima",
    modality: "Remoto",
    current: true,
    summary:
      "Desarrollo requerimientos, trámites y funcionalidades para los repositorios de la nueva Agencia Virtual de PRIMA AFP (Microfrontends), sus submódulos y paquetes privados. Soy referencia técnica frontend dentro del equipo y frente al cliente: oriento decisiones, reviso código, participo en la definición de la arquitectura y diseño paquetes compartidos. También optimizo el rendimiento con lazy loading y modularización, migro componentes legacy, colaboro con UX/UI, documento los desarrollos y acompaño a nuevos desarrolladores.",
    stack: ["React", "TypeScript", "Microfrontends", "Zustand", "Paquetes privados", "Lazy loading", "Google Analytics", "Git"],
    soft: ["Referente técnico", "Mentoría", "Comunicación con el cliente", "Colaboración", "Rol de entrevistador", "Trabajo bajo presión", "Mejora continua"],
  },
  {
    company: "NTT DATA",
    client: "PRIMA AFP y proyectos internos",
    role: "Medium Frontend Developer",
    period: "Jun 2023 — Dic 2025",
    location: "Perú, Lima",
    modality: "Remoto",
    summary:
      "Trabajé en la Agencia Virtual (Microfrontends) y la web pública Zona Informativa de PRIMA AFP, y en un acelerador interno basado en Figma. Implementé la independización de mesas de trabajo con módulos federados, SEO y mejoras de rendimiento, y apliqué buenas prácticas de linting, formatting y documentación. Fui referencia técnica frontend, apoyé a otros squads, guié a mis pares en los flujos de trabajo y pases a producción y participé en procesos de reclutamiento técnico.",
    stack: ["React", "TypeScript", "Microfrontends", "Module Federation", "SEO", "Monorepo", "Figma API", "Google Analytics"],
    soft: ["Liderazgo técnico", "Mentoría", "Proactividad", "Colaboración", "Rol de entrevistador", "Trabajo bajo presión", "Apoyo"],
  },
  {
    company: "Consigue Ventas Online",
    client: "Proyecto interno",
    role: "Lead Frontend Developer",
    period: "Ene 2023 — Jun 2023",
    location: "Perú, Lima",
    modality: "Remoto",
    summary:
      "Líder del área frontend y co-líder del departamento de sistemas en el piloto de un Marketplace interno. Estuve a cargo del repositorio frontend: maquetación y desarrollo responsive con React, integración con APIs y estilos con Styled Components. Conversaba directamente con el cliente para convertir sus ideas en código y participé en la creación de un nuevo puesto y en las entrevistas.",
    stack: ["React", "Styled Components", "APIs REST", "Mobile first", "SCRUM"],
    soft: ["Liderazgo", "Comunicación con el cliente", "Rol de entrevistador", "Proactividad", "Creatividad", "Organización"],
  },
  {
    company: "Xenial Group",
    role: "Frontend Developer",
    period: "Nov 2021 — Dic 2022",
    location: "Perú, Lima",
    modality: "Remoto",
    summary:
      "Formé parte del equipo frontend: maquetación, desarrollo y diseño responsive de páginas web con React usando mobile first, integración con distintas APIs y metodologías de UX y SCRUM. En el equipo de UI participé en la creación de la interfaz visual del lado del cliente y creé componentes reutilizables.",
    stack: ["React", "JavaScript", "Mobile first", "APIs REST", "UX", "SCRUM"],
    soft: ["Colaboración", "Adaptabilidad", "Ganas de aprender"],
  },
  {
    company: "NutriBlog",
    role: "Frontend Developer (Freelance)",
    period: "Feb 2021",
    location: "Perú",
    modality: "Freelance",
    summary:
      "Desarrollé una Single Page Application responsive y su interfaz para mostrar la información de un emprendimiento del sector nutricional a través de posts de reseñas.",
    stack: ["React", "SPA", "Responsive"],
    soft: ["Autonomía", "Creatividad", "Responsabilidad"],
  },
  {
    company: "Axcel Web",
    role: "Frontend Developer",
    period: "Nov 2020 — Nov 2021",
    location: "Perú, Lima",
    modality: "Remoto",
    summary:
      "Maquetación, desarrollo y diseño responsive de páginas web con React e integración con distintas APIs. En el equipo de UI actualicé el diseño visual y la funcionalidad de un sitio del sector automovilístico y creé componentes reutilizables.",
    stack: ["React", "HTML y CSS", "Responsive", "APIs REST", "UI"],
    soft: ["Colaboración", "Ganas de aprender", "Adaptabilidad"],
  },
];
