import styles from "./TagList.module.css";

interface TagListProps {
  items: string[];
  variant?: "stack" | "soft";
  /* etiqueta visible encima de la lista ("Stack", "Soft Skills") */
  label?: string;
  size?: "default" | "large";
}

export const TagList = ({ items, variant = "stack", label, size = "default" }: TagListProps) => {
  const tagClass = [styles.tag, variant === "soft" && styles.soft, size === "large" && styles.large]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      {label && <p className={styles.label}>{label}</p>}
      <ul className={styles.list} aria-label={label}>
        {items.map((item) => (
          <li key={item} className={tagClass}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

/* Stack y Soft Skills juntos (Trayectoria y Proyectos) */
export const StackAndSoftSkills = ({ stack, soft }: { stack: string[]; soft: string[] }) => (
  <div className={styles.groups}>
    <div className={styles.groupStack}>
      <TagList items={stack} label="Stack" />
    </div>
    <div className={styles.groupSoft}>
      <TagList items={soft} label="Soft Skills" variant="soft" />
    </div>
  </div>
);
