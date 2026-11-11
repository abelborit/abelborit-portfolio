import { Outlet } from "react-router";
import ScrollToTop from "../components/ScrollToTop";

/* layout raíz compartido por todas las rutas */
export const RootLayout = () => {
  return (
    <>
      {/* Fix Scroll Restoration: al cambiar de ruta hace scroll hacia arriba */}
      {/* NOTA: no se usa <ScrollRestoration /> de react-router porque las páginas renderizan "null" en su primer render (loaderInitial) y junto con "scroll-behavior: smooth" del index.css no llega a subir al inicio */}
      <ScrollToTop />

      {/* aquí se renderiza la página de la ruta actual */}
      <Outlet />
    </>
  );
};
