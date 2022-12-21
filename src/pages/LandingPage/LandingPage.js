import React, { useRef, useState } from "react";
import { Header } from "../../components/Header/Header";
import { AboutSection } from "./AboutSection";
import { ResumenSection } from "./ResumenSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { ScrollTopBtn } from "../../components/ScrollTopBtn/ScrollTopBtn";

import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  /* se coloca este estado ya que cuando se cambia de ruta hay un desplazamiento hacia arriba, entonces con este setTimeout() hace que se espere lo mínimo para que la página ya se encuentre en la parte de arriba y se muestre con normalidad la página */
  const [loaderInitial, setLoaderInitial] = useState(true);

  setTimeout(() => {
    setLoaderInitial(false);
  }, 1);

  const aboutREF = useRef(null);
  const resumenREF = useRef(null);
  const projectREF = useRef(null);
  const contactREF = useRef(null);

  const REFERENCIAS = {
    aboutREF: aboutREF,
    resumenREF: resumenREF,
    projectREF: projectREF,
    contactREF: contactREF,
  };
  // console.log(REFERENCIAS);

  const handleScrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 50,
      behavior: "smooth",
    });
    // console.log(elementRef);
  };

  return (
    <>
      {loaderInitial ? null : (
        <>
          <Header
            handleScrollToSection={handleScrollToSection}
            referencias={REFERENCIAS}
          ></Header>

          <AboutSection aboutREF={aboutREF}></AboutSection>

          <ResumenSection resumenREF={resumenREF}></ResumenSection>

          <ProjectsSection projectREF={projectREF}></ProjectsSection>

          <ContactSection contactREF={contactREF}></ContactSection>

          <ScrollTopBtn></ScrollTopBtn>

          <div className={styles.sky_color}></div>
        </>
      )}
    </>
  );
};
