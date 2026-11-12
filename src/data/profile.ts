import type { Certification, ExternalLink } from "../types/content";

/* redes y enlaces externos */
export const SOCIAL = {
  github: "https://github.com/abelborit",
  linkedin: "https://www.linkedin.com/in/abelborit/",
  npm: "https://www.npmjs.com/package/react-typescript-storybook-app",
};

/* franja "He trabajado con" (las más relevantes; al final se muestra "y otros") */
export const COMPANIES: string[] = ["Encora", "NTT DATA", "PRIMA AFP", "Consigue Ventas Online"];

/* datos breves de la portada */
export const FACTS: { label: string; value: string }[] = [
  { label: "Frontend desde", value: "Noviembre 2020" },
  { label: "Formación", value: "Grado en Ingeniería" },
  { label: "Especialidad", value: "Frontend Developer" },
  { label: "Idiomas", value: "Español · Inglés B1" },
];

/* certificaciones con su credencial en Microsoft Learn (fuente: CV) */
export const CERTIFICATIONS: Certification[] = [
  {
    title: "GitHub Copilot",
    detail: "Credencial en Microsoft Learn",
    href: "https://learn.microsoft.com/api/credentials/share/es-mx/AbelBoritGuitton-9200/B04AD983BC924E9B?sharingId=CDB1C1A36446654",
  },
  {
    title: "AZ-900: Azure Fundamentals",
    detail: "Credencial en Microsoft Learn",
    href: "https://learn.microsoft.com/api/credentials/share/es-mx/AbelBoritGuitton-9200/99BE24797D76B5BC?sharingId=CDB1C1A36446654",
  },
];

/* enlaces de la página Sobre mí */
export const EXTERNAL_LINKS: ExternalLink[] = [
  {
    title: "Paquete NPM: guía con Storybook y TypeScript",
    detail: "react-typescript-storybook-app · apoyo a la comunidad",
    href: SOCIAL.npm,
  },
  { title: "GitHub", detail: "github.com/abelborit", href: SOCIAL.github },
  { title: "LinkedIn", detail: "linkedin.com/in/abelborit", href: SOCIAL.linkedin },
];
