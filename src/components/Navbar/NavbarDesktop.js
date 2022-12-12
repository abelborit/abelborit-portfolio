import React from "react";
import styles from "./Navbar.module.css";

export const NavbarDesktop = (props) => {
  return (
    <nav className={styles.linkPage_desktop}>
      <ul>
        <li
          className={`${styles.link_btn} ${styles.bottom_line}`}
          onClick={() =>
            props.handleScrollToSection(props.referencias.aboutREF)
          }
        >
          Acerca
        </li>

        <li
          className={`${styles.link_btn} ${styles.bottom_line}`}
          onClick={() =>
            props.handleScrollToSection(props.referencias.resumenREF)
          }
        >
          Resumen
        </li>

        <li
          className={`${styles.link_btn} ${styles.bottom_line}`}
          onClick={() =>
            props.handleScrollToSection(props.referencias.projectREF)
          }
        >
          Proyectos
        </li>

        <li
          className={`${styles.link_btn} ${styles.bottom_line}`}
          onClick={() =>
            props.handleScrollToSection(props.referencias.contactREF)
          }
        >
          Contacto
        </li>
      </ul>
    </nav>
  );
};
