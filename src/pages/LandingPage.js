import React, { useRef } from "react";
import { Header } from "../components/Header/Header";
import { ScrollTopBtn } from "../components/ScrollTopBtn/ScrollTopBtn";
import { AboutPage } from "./AboutPage/AboutPage";
import { ResumenPage } from "./ResumenPage/ResumenPage";
import { ProjectsPage } from "./ProjectsPage/ProjectsPage";
import { ContactPage } from "./ContactPage/ContactPage";

const divisionSection = (
  <div className="sectionDivision">
    <div className="sectionDivision-line"></div>
    <div className="sectionDivision-circle"></div>
    <div className="sectionDivision-circle"></div>
    <div className="sectionDivision-circle"></div>
    <div className="sectionDivision-circle"></div>
    <div className="sectionDivision-line"></div>
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
