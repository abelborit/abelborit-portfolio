import type { SkillGroup } from "../types/content";

/* Tech Skills de la página Sobre mí (fuente: CV, "Hard Skills" e "IA Skills") */
export const TECH_SKILLS: SkillGroup[] = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Microfrontends", "Angular", "Gatsby", "React Native", "HTML y CSS (Flex y Grid)"],
  },
  {
    name: "Estado y datos",
    items: ["Zustand", "TanStack Query", "Manejadores de estado", "Integración con APIs", "Postman"],
  },
  {
    name: "Estilos y diseño",
    items: ["Tailwind CSS", "Styled Components", "SASS", "Figma", "UI/UX"],
  },
  {
    name: "Calidad y equipo",
    items: ["SEO", "Git y GitHub", "Uso y creación de paquetes", "Azure", "Metodología SCRUM"],
  },
  {
    name: "Inteligencia artificial",
    items: ["GitHub Copilot", "Prompt engineering", "Buenas prácticas en el uso de IA"],
  },
];

/* Soft Skills (fuente: CV) */
export const SOFT_SKILLS: string[] = [
  "Liderazgo",
  "Apoyo",
  "Ganas de aprender",
  "Rol de entrevistador",
  "Buena comunicación",
  "Proactividad",
  "Escucha",
  "Creatividad",
  "Adaptabilidad",
  "Compañerismo",
  "Colaboración",
  "Empatía",
];
