import { PageLayout, PageSection } from "../../layouts/PageLayout/PageLayout";
import { Timeline } from "../../components/Timeline/Timeline";
import { EDUCATION } from "../../data/education";
import { EXPERIENCE } from "../../data/experience";
import resumenImage from "../../assets/optimized-images/resumen-image-optimized.webp";

import styles from "./ResumenPage.module.css";

export const ResumenPage = () => {
  return (
    <PageLayout
      image={resumenImage}
      title="Estudios / Experiencia"
      description="Mis estudios y experiencia profesional"
      gtmSection="resume page"
    >
      <PageSection number="01" title="Mi Educación">
        <div className={styles.resume_content_info}>
          <Timeline items={EDUCATION} />
        </div>
      </PageSection>

      <PageSection number="02" title="Mi Experiencia">
        <div className={styles.resume_content_info}>
          <Timeline items={EXPERIENCE} />
        </div>
      </PageSection>
    </PageLayout>
  );
};
