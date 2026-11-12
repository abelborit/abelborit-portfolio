import { createHashRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { PrincipalPage } from "./pages/PrincipalPage/PrincipalPage";
import { Error404 } from "./pages/Error404/Error404";

/* se usa HashRouter (/#/ruta) porque GitHub Pages no soporta rutas del lado del cliente */
export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    /* se muestra si alguna ruta lanza un error al renderizar (sin el layout, por eso incluye header y footer) */
    errorElement: <Error404 standalone />,
    /* al abrir directamente una página "lazy" (por ejemplo recargando /#/proyectos) se muestra un espacio vacío del alto de la pantalla mientras se descarga, en lugar de nada */
    hydrateFallbackElement: <div style={{ minHeight: "100vh" }} aria-busy="true" />,
    children: [
      /* la página principal y la 404 se cargan de inmediato; el resto con "lazy" para que cada página se descargue recién cuando se visita (el router espera a que cargue antes de cambiar de página) */
      { index: true, element: <PrincipalPage /> },
      {
        path: "home",
        lazy: async () => ({
          Component: (await import("./pages/LandingPage/LandingPage"))
            .LandingPage,
        }),
      },
      {
        path: "acerca",
        lazy: async () => ({
          Component: (await import("./pages/AboutPage/AboutPage")).AboutPage,
        }),
      },
      {
        path: "resumen",
        lazy: async () => ({
          Component: (await import("./pages/ResumenPage/ResumenPage"))
            .ResumenPage,
        }),
      },
      {
        path: "proyectos",
        lazy: async () => ({
          Component: (await import("./pages/ProjectsPage/ProjectsPage"))
            .ProjectsPage,
        }),
      },
      { path: "*", element: <Error404 /> },
    ],
  },
]);
