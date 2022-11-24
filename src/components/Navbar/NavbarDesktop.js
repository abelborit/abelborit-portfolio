import React from "react";
// import { NavLink } from "react-router-dom";

export const NavbarDesktop = (props) => {
  return (
    <nav className="link-page-desktop">
      {/* <NavLink to="/home">Home</NavLink>
      <NavLink to="/acerca">Acerca</NavLink>
      <NavLink to="/resumen">Resumen</NavLink>
      <NavLink to="/proyectos">Proyectos</NavLink>
      <NavLink to="/contacto">Contacto</NavLink> */}

      <ul>
        <li
          className="link-btn bottom-line"
          onClick={() =>
            props.handleScrollToSection(props.referencias.aboutREF)
          }
        >
          Acerca
        </li>

        <li
          className="link-btn bottom-line"
          onClick={() =>
            props.handleScrollToSection(props.referencias.resumenREF)
          }
        >
          Resumen
        </li>

        <li
          className="link-btn bottom-line"
          onClick={() =>
            props.handleScrollToSection(props.referencias.projectREF)
          }
        >
          Proyectos
        </li>

        <li
          className="link-btn bottom-line"
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
