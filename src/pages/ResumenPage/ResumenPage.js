import React from "react";
import { EducationData } from "../../components/EducationData/EducationData";
import { ExperienceData } from "../../components/ExperienceData/ExperienceData";
import styles from "./ResumenPage.module.css";

export const ResumenPage = (props) => {
  return (
    <section ref={props.resumenREF} className="section">
      <div className="section-title">
        <h3>RESUMEN</h3>
        <h4>Extracto</h4>
      </div>

      <div className={styles.resume_content}>
        <EducationData></EducationData>
        <div className={styles.line}></div>
        <ExperienceData></ExperienceData>
      </div>
    </section>
  );
};
