import React from "react";
import { EducationData } from "../components/EducationData";
import { ExperienceData } from "../components/ExperienceData";
import "./ResumenPage.css";

export const ResumenPage = (props) => {
  return (
    <section ref={props.resumenREF} className="section">
      <div className="section-title">
        <h3>RESUMEN</h3>
        <h4>Extracto</h4>
      </div>

      <div className="resume-content">
        <EducationData></EducationData>
        <div className="line"></div>
        <ExperienceData></ExperienceData>
      </div>
    </section>
  );
};
