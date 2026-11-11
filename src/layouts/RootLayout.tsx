import { Outlet, ScrollRestoration } from "react-router";

/* layout raíz compartido por todas las rutas */
export const RootLayout = () => {
  return (
    <>
      {/* al navegar a una ruta nueva hace scroll hacia arriba y al volver (botón "atrás") restaura la posición anterior */}
      <ScrollRestoration />

      {/* aquí se renderiza la página de la ruta actual */}
      <Outlet />
    </>
  );
};
