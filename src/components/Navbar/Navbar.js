// import React, { useState, useEffect } from "react";
import React from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import styles from "./Navbar.module.css";

export const Navbar = (props) => {
  // const [screenWidth, setScreenWidth] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth > 768) {
  //       setScreenWidth(true);
  //     } else if (window.innerWidth <= 768) {
  //       setScreenWidth(false);
  //     }
  //   });

  //   // console.log(window.innerWidth);

  //   return function cleanUp() {
  //     window.removeEventListener("resize", () => {
  //       if (window.innerWidth > 768) {
  //         setScreenWidth(true);
  //       }

  //       if (window.innerWidth <= 768) {
  //         setScreenWidth(false);
  //       }
  //     });
  //   };
  // }, []);

  return (
    <div className={styles.navbar}>
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
