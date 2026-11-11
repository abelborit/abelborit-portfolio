/* elemento de una línea de tiempo (educación / experiencia) */
export interface TimelineItem {
  title: string;
  description: string;
  /* fecha de inicio, por ejemplo "Nov 2020" */
  since: string;
  /* fecha de fin o "Actualidad" */
  to: string;
}

export interface Project {
  title: string;
  client: string;
  description: string;
}
