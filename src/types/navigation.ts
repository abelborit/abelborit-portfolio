import type { RefObject } from "react";

/* referencia a cada sección del LandingPage para poder hacer scroll hacia ella */
export type SectionRef = RefObject<HTMLDivElement | null>;

export interface SectionRefs {
  aboutREF: SectionRef;
  resumenREF: SectionRef;
  projectREF: SectionRef;
  contactREF: SectionRef;
}

export interface NavigationProps {
  handleScrollToSection: (elementRef: SectionRef) => void;
  referencias: SectionRefs;
}
