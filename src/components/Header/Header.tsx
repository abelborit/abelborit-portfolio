import type { NavigationProps } from "../../types/navigation";
import { Link } from "react-router";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

/* si recibe "navigation" (LandingPage) muestra el navbar con scroll a las secciones sobre un fondo transparente. Si no (páginas internas y 404) muestra los enlaces a redes sociales sobre un fondo sólido */
interface HeaderProps {
  navigation?: NavigationProps;
}

export const Header = ({ navigation }: HeaderProps) => {
  const variant = navigation ? styles.header_landing : styles.header_page;

  return (
    <header className={`${styles.header} ${variant} ${styles.boingInUp}`}>
      <div className={styles.link_name}>
        <Link
          to="/"
          className={styles.link_name_btn}
          onClick={() =>
            GTM_EVENTS.GenericRedirect({
              new_location: "/",
              section: navigation ? "header" : "header section",
            })
          }
        >
          AbelBorit
        </Link>
      </div>

      {navigation ? (
        <Navbar
          handleScrollToSection={navigation.handleScrollToSection}
          referencias={navigation.referencias}
        />
      ) : (
        <div className={styles.link_media}>
          <a
            href="https://github.com/abelborit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Abel Borit (se abre en una nueva pestaña)"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/abelborit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Abel Borit (se abre en una nueva pestaña)"
          >
            <LinkedInIcon />
          </a>
        </div>
      )}
    </header>
  );
};
