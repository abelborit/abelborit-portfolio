import type { CSSProperties } from "react";
import { buttonStyles } from "../../components/Button/button";
import { CheckIcon } from "../../components/icons";
import { StackAndSoftSkills } from "../../components/TagList/TagList";
import type { Project } from "../../types/content";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project, style }: { project: Project; style?: CSSProperties }) => (
  <article className={`surface lift reveal ${styles.card}`} style={style}>
    <div className={styles.header}>
      <span className={styles.companyLine}>
        <span className={styles.company}>{project.company}</span>
        {project.client && (
          <span className={styles.client}>
            <span className={`eyebrow ${styles.clientLabel}`}>Cliente</span>
            {project.client}
          </span>
        )}
      </span>
      <span className={styles.period}>{project.period}</span>
    </div>

    <div>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.role}>
        Rol: <strong>{project.role}</strong>
      </p>
    </div>

    <dl className={styles.details}>
      <div>
        <dt className="eyebrow">Contexto</dt>
        <dd>{project.context}</dd>
      </div>
      <div>
        <dt className="eyebrow">Qué hice</dt>
        <dd>{project.work}</dd>
      </div>
      {project.value && project.value.length > 0 && (
        <div className={styles.value}>
          <dt className="eyebrow">Valor agregado</dt>
          <dd>
            <ul className={styles.valueList}>
              {project.value.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
    </dl>

    <div className={styles.footer}>
      <StackAndSoftSkills stack={project.stack} soft={project.soft} />
    </div>

    {project.link && (
      <a href={project.link.href} target="_blank" rel="noopener noreferrer" className={buttonStyles.textLink}>
        <span className={buttonStyles.textLabel}>{project.link.label}</span>
        <span aria-hidden="true">↗</span>
        <span className="visually-hidden"> (se abre en una nueva pestaña)</span>
      </a>
    )}
  </article>
);
