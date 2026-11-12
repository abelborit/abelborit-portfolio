import { StackAndSoftSkills } from "../../components/TagList/TagList";
import { EXPERIENCE } from "../../data/experience";
import { usePageTitle } from "../../hooks/usePageTitle";
import { PageIntro, PageLayout } from "../../layouts/PageLayout/PageLayout";
import styles from "./ResumenPage.module.css";

/* trayectoria ("/resumen") */
export const ResumenPage = () => {
  usePageTitle("Trayectoria");

  return (
    <PageLayout backGtmSection="resume page" ctaGtmSection="resume page">
      <PageIntro
        eyebrow="Trayectoria"
        title="Experiencia profesional"
        description="Las empresas en las que trabajé, mi rol en cada una y lo más importante que realicé."
      />

      <ol className={`wrap ${styles.list}`}>
        {EXPERIENCE.map((job, i) => (
          <li key={job.company} className={`reveal ${styles.item}`} style={{ animationDelay: `${140 + i * 60}ms` }}>
            <div className={styles.meta}>
              <span className={styles.period}>
                {job.current && <span className={styles.pulse} aria-hidden="true" />}
                {job.period}
                {job.current && <span className="visually-hidden"> (trabajo actual)</span>}
              </span>
              <span className={styles.place}>
                {job.location}
                {job.modality && <span className={styles.modality}>{job.modality}</span>}
              </span>
            </div>

            <div className={styles.body}>
              <div>
                <h2 className={styles.role}>{job.role}</h2>
                <p className={styles.companyLine}>
                  <span className={styles.company}>{job.company}</span>
                  {job.client && (
                    <span className={styles.client}>
                      <span className={`eyebrow ${styles.clientLabel}`}>Cliente</span>
                      {job.client}
                    </span>
                  )}
                </p>
              </div>
              <p className={styles.summary}>{job.summary}</p>
              <StackAndSoftSkills stack={job.stack} soft={job.soft} />
            </div>
          </li>
        ))}
      </ol>
    </PageLayout>
  );
};
