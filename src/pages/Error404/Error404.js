import React from "react";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import NotFoundSVG from "../../assets/svg/404_Page_Not_Found _Monochromatic.svg";
import styles from "./Error404.module.css";

export const Error404 = () => {
  return (
    <>
      <HeaderSection></HeaderSection>

      <div className={`${styles.notFound_container} ${styles.vanishIn}`}>
        <img
          className={styles.notFound_container_svg}
          src={NotFoundSVG}
          alt="404 Not Found"
        />
      </div>

      <div className={styles.sky_color}></div>
    </>
  );
};
