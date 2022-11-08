import React, { useRef } from "react";
import { Header } from "../components/Header";
import { ScrollTopBtn } from "../components/ScrollTopBtn";
import { AboutPage } from "./AboutPage";
import { ProjectsPage } from "./ProjectsPage";
import { ResumenPage } from "./ResumenPage";
import ContactPage from "./ContactPage";

const divisionSection = (
  <div className="section-division">
    <div className="section-division-line"></div>
    <div className="section-division-circle"></div>
    <div className="section-division-circle"></div>
    <div className="section-division-circle"></div>
    <div className="section-division-circle"></div>
    <div className="section-division-line"></div>
  </div>
);

export const LandingPage = () => {
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
      top: elementRef.current.offsetTop - 30,
      behavior: "smooth",
    });
    // console.log(elementRef);
  };

  return (
    <>
      <Header
        handleScrollToSection={handleScrollToSection}
        referencias={REFERENCIAS}
      ></Header>

      <AboutPage aboutREF={aboutREF}></AboutPage>
      {divisionSection}

      <ResumenPage resumenREF={resumenREF}></ResumenPage>
      {divisionSection}

      <ProjectsPage projectREF={projectREF}></ProjectsPage>
      {divisionSection}

      <ContactPage contactREF={contactREF}></ContactPage>

      <ScrollTopBtn></ScrollTopBtn>
    </>
  );
};
