import React from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import "./Navbar.css";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <NavbarMobile
        handleScrollToSection={props.handleScrollToSection}
        referencias={props.referencias}
      ></NavbarMobile>

      <NavbarDesktop
        handleScrollToSection={props.handleScrollToSection}
        referencias={props.referencias}
      ></NavbarDesktop>
    </div>
  );
};
