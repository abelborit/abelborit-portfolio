import { useState } from "react";
import { PROJECT_CATEGORIES, PROJECTS } from "../../data/projects";
import { usePageTitle } from "../../hooks/usePageTitle";
import { PageIntro, PageLayout } from "../../layouts/PageLayout/PageLayout";
import type { ProjectCategory } from "../../types/content";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectsPage.module.css";

type Filter = "all" | ProjectCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Todos" },
  ...(Object.entries(PROJECT_CATEGORIES) as [ProjectCategory, string][]).map(([id, label]) => ({ id, label })),
];

/* proyectos ("/proyectos") */
export const ProjectsPage = () => {
  usePageTitle("Proyectos");
  const [filter, setFilter] = useState<Filter>("all");

  const visible = PROJECTS.filter((project) => filter === "all" || project.category === filter);

  /* se reparten alternando columnas para que se lean de izquierda a derecha */
  const columns = [0, 1].map((column) =>
    visible.map((project, index) => ({ project, index })).filter(({ index }) => index % 2 === column),
  );

  return (
    <PageLayout backGtmSection="projects page" ctaGtmSection="projects page">
      <PageIntro
        eyebrow="Proyectos"
        title="Proyectos realizados"
        description="Qué construí, con qué rol y qué resultado tuvo cada proyecto."
      />

      <div className="wrap">
        <div className={`reveal ${styles.toolbar}`} style={{ animationDelay: "140ms" }}>
          <div role="group" aria-label="Filtrar proyectos por tipo" className={styles.filters}>
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={styles.filter}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className={styles.count} aria-live="polite">
            Mostrando {visible.length} {visible.length === 1 ? "proyecto" : "proyectos"}
          </p>
        </div>

        {/* "key" con el filtro: al cambiarlo las tarjetas se montan de nuevo y repiten la animación de entrada */}
        <div key={filter} className={styles.columns}>
          {columns.map((items, column) => (
            <div key={column} className={styles.column}>
              {items.map(({ project, index }) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  style={{ order: index, animationDelay: `${180 + index * 50}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
