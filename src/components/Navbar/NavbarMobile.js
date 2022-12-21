import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const NavbarMobile = (props) => {
  const [open, setOpen] = useState(false);
  const [effectActive, setEffectActive] = useState(false);

  const effectFunction = () => {
    if (open === false) {
      setOpen(!open);
      setEffectActive(true);
    } else {
      setTimeout(() => {
        setOpen(!open);
      }, 450);

      setEffectActive(false);
    }
  };

  const hamburgerBarsIcon = (
    <button className={styles.hamburger} onClick={effectFunction}>
      <div className={`${styles.layer} ${styles.layer_top}`}></div>
      <div className={`${styles.layer} ${styles.layer_mid}`}></div>
      <div className={`${styles.layer} ${styles.layer_bottom}`}></div>
    </button>
  );

  const hamburgerCloseIcon = (
    <button
      className={`${styles.hamburger} ${styles.is_active}`}
      onClick={effectFunction}
    >
      <div className={`${styles.layer} ${styles.layer_top}`}></div>
      <div className={`${styles.layer} ${styles.layer_mid}`}></div>
      <div className={`${styles.layer} ${styles.layer_bottom}`}></div>
    </button>
  );

  return (
    <nav className={styles.linkPage_mobile}>
      {open ? hamburgerCloseIcon : hamburgerBarsIcon}

      {open && (
        <div
          className={`${styles.links_mobile} ${
            effectActive ? styles.slideLeftReturn : styles.slideLeft
          }`}

          // className={styles.links_mobile}
        >
          <ul>
            <li
              className={styles.link_btn}
              onClick={() => {
                props.handleScrollToSection(props.referencias.aboutREF);
                setEffectActive(false);
                setTimeout(() => {
                  setOpen(false); // para cerrar el menú cuando se haga click
                }, 450);
              }}
            >
              Acerca
            </li>

            <li
              className={styles.link_btn}
              onClick={() => {
                props.handleScrollToSection(props.referencias.resumenREF);
                setEffectActive(false);
                setTimeout(() => {
                  setOpen(false); // para cerrar el menú cuando se haga click
                }, 450);
              }}
            >
              Resumen
            </li>

            <li
              className={styles.link_btn}
              onClick={() => {
                props.handleScrollToSection(props.referencias.projectREF);
                setEffectActive(false);
                setTimeout(() => {
                  setOpen(false); // para cerrar el menú cuando se haga click
                }, 450);
              }}
            >
              Proyectos
            </li>

            <li
              className={styles.link_btn}
              onClick={() => {
                props.handleScrollToSection(props.referencias.contactREF);
                setEffectActive(false);
                setTimeout(() => {
                  setOpen(false); // para cerrar el menú cuando se haga click
                }, 450);
              }}
            >
              Contacto
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
