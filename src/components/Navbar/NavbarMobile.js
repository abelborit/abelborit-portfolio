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
    <button onClick={effectFunction}>
      <svg
        // onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </button>
  );

  const hamburgerCloseIcon = (
    <button onClick={effectFunction}>
      <svg
        // onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
      </svg>
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
