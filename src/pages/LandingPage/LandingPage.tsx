import { useRef } from "react";
import type { SectionRef, SectionRefs } from "../../types/navigation";
import { Header } from "../../components/Header/Header";
import { AboutSection } from "./AboutSection";
import { ResumenSection } from "./ResumenSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { ScrollTopBtn } from "../../components/ScrollTopBtn/ScrollTopBtn";

import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  const aboutREF = useRef<HTMLDivElement>(null);
  const resumenREF = useRef<HTMLDivElement>(null);
  const projectREF = useRef<HTMLDivElement>(null);
  const contactREF = useRef<HTMLDivElement>(null);

  const REFERENCIAS: SectionRefs = {
    aboutREF: aboutREF,
    resumenREF: resumenREF,
    projectREF: projectREF,
    contactREF: contactREF,
  };
  // console.log(REFERENCIAS);

  const handleScrollToSection = (elementRef: SectionRef) => {
    if (!elementRef.current) return;

    window.scrollTo({
      top: elementRef.current.offsetTop - 50,
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

      <AboutSection aboutREF={aboutREF}></AboutSection>

      <ResumenSection resumenREF={resumenREF}></ResumenSection>

      <ProjectsSection projectREF={projectREF}></ProjectsSection>

      <ContactSection contactREF={contactREF}></ContactSection>

      <ScrollTopBtn></ScrollTopBtn>

      <div className={styles.sky_color}></div>
    </>
  );
};
