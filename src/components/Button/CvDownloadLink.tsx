import curriculumPDF from "../../assets/AbelBoritCurriculumVitae.pdf";
import { DownloadIcon } from "../icons";
import { buttonClass, type ButtonVariant } from "./button";

/* botón "Descargar CV" (portada y bloque final de las páginas internas) */
export const CvDownloadLink = ({ variant = "secondary" }: { variant?: ButtonVariant }) => (
  <a href={curriculumPDF} download="AbelBorit-CurriculumVitae" className={buttonClass(variant)}>
    <DownloadIcon />
    Descargar CV
  </a>
);
