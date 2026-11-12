import { useEffect } from "react";

const SITE_NAME = "Abel Borit Guitton";

/* título de la pestaña para cada página: "Proyectos | Abel Borit Guitton" (sin título: el nombre del sitio con el rol) */
export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Frontend Developer`;
  }, [title]);
};
