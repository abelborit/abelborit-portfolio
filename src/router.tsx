import { createHashRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { PrincipalPage } from "./pages/PrincipalPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ResumenPage } from "./pages/ResumenPage/ResumenPage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { Error404 } from "./pages/Error404/Error404";

/* se usa HashRouter (/#/ruta) porque GitHub Pages no soporta rutas del lado del cliente */
export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    /* se muestra si alguna ruta lanza un error al renderizar */
    errorElement: <Error404 />,
    children: [
      { index: true, element: <PrincipalPage /> },
      { path: "home", element: <LandingPage /> },
      { path: "acerca", element: <AboutPage /> },
      { path: "resumen", element: <ResumenPage /> },
      { path: "proyectos", element: <ProjectsPage /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);
