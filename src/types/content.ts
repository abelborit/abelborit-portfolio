/* experiencia laboral (página Trayectoria e Inicio) */
export interface Experience {
  company: string;
  /* cliente para el que se trabajó, si aplica (por ejemplo PRIMA AFP) */
  client?: string;
  role: string;
  /* periodo legible, por ejemplo "Jun 2023 — Dic 2025" */
  period: string;
  /* país desde el que se trabajó */
  location: string;
  /* modalidad, si aplica: "Remoto" o "Freelance" */
  modality?: string;
  /* trabajo actual: muestra el indicador animado */
  current?: boolean;
  summary: string;
  /* tecnologías usadas */
  stack: string[];
  soft: string[];
}

/* categorías del filtro de la página Proyectos */
export type ProjectCategory = "mfe" | "perf" | "ui";

export interface Project {
  title: string;
  category: ProjectCategory;
  company: string;
  client?: string;
  period: string;
  role: string;
  context: string;
  work: string;
  /* "Adicional" del CV: logros concretos. Si no hay, la tarjeta no muestra el recuadro */
  value?: string[];
  stack: string[];
  soft: string[];
  /* enlace externo opcional (repositorio, paquete, demo) */
  link?: { href: string; label: string };
}

/* formación (página Sobre mí) */
export interface Education {
  title: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ExternalLink {
  title: string;
  detail: string;
  href: string;
}

export interface Certification {
  title: string;
  detail: string;
  href: string;
}
