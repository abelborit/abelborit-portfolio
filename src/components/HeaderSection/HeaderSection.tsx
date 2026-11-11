import { Link } from "react-router";
import styles from "./HeaderSection.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export const HeaderSection = () => {
  return (
    <header className={`${styles.header} ${styles.boingInUp}`}>
      <div className={styles.link_name}>
        <Link
          to="/"
          className={styles.link_name_btn}
          onClick={() =>
            GTM_EVENTS.GenericRedirect({
              new_location: "/",
              section: "header section",
            })
          }
        >
          AbelBorit
        </Link>
      </div>

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
    </header>
  );
};
