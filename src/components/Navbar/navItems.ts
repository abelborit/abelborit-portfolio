import type { SectionRefs } from "../../types/navigation";

/* secciones del LandingPage a las que se puede navegar desde la navbar (desktop y mobile) */
export const NAV_ITEMS: { label: string; ref: keyof SectionRefs }[] = [
  { label: "Acerca", ref: "aboutREF" },
  { label: "Resumen", ref: "resumenREF" },
  { label: "Proyectos", ref: "projectREF" },
  { label: "Contacto", ref: "contactREF" },
];
