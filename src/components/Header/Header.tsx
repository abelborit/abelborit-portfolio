import type { NavigationProps } from "../../types/navigation";
import { Link } from "react-router";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { GTM_EVENTS } from "../../utils/gtm";

export const Header = (props: NavigationProps) => {
  return (
    // <header className={styles.header}>
    <header className={`${styles.header} ${styles.boingInUp}`}>
      <div className={styles.link_name}>
        <Link
          to="/"
          className={styles.link_name_btn}
          onClick={() =>
            GTM_EVENTS.GenericRedirect({ new_location: "/", section: "header" })
          }
        >
          AbelBorit
        </Link>
      </div>

      <Navbar
        handleScrollToSection={props.handleScrollToSection}
        referencias={props.referencias}
      ></Navbar>

      {/* <div className={styles.link_media}>
        <a
          href="https://github.com/abelborit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/abelborit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div> */}
    </header>
  );
};
