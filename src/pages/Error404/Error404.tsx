import { Link } from "react-router";
import { buttonClass } from "../../components/Button/button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { usePageTitle } from "../../hooks/usePageTitle";
import { GTM_EVENTS } from "../../utils/gtm";
import styles from "./Error404.module.css";

const NotFoundContent = () => {
  usePageTitle("Página no encontrada");

  return (
    <section className={`wrap ${styles.page}`} aria-labelledby="nf-title">
      <p className="eyebrow reveal">Error 404</p>
      <h1 id="nf-title" className={`reveal-title ${styles.title}`} style={{ animationDelay: "60ms" }}>
        Esta página no existe
      </h1>
      <p className={`reveal ${styles.text}`} style={{ animationDelay: "100ms" }}>
        Puede que el enlace esté roto o que la página se haya movido.
      </p>
      <div className={`reveal ${styles.actions}`} style={{ animationDelay: "140ms" }}>
        <Link
          to="/home"
          className={buttonClass("primary")}
          onClick={() => GTM_EVENTS.GenericRedirect({ new_location: "/home", section: "not found page" })}
        >
          Ir al inicio
        </Link>
        <Link
          to="/proyectos"
          className={buttonClass("secondary")}
          onClick={() => GTM_EVENTS.GenericRedirect({ new_location: "/proyectos", section: "not found page" })}
        >
          Ver proyectos
        </Link>
      </div>
    </section>
  );
};

/* "standalone": cuando se usa como errorElement del router no hay layout, así que incluye el header y el footer */
export const Error404 = ({ standalone = false }: { standalone?: boolean }) =>
  standalone ? (
    <>
      <Header />
      <main id="contenido">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  ) : (
    <NotFoundContent />
  );
