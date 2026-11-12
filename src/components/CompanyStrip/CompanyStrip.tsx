import type { CSSProperties } from "react";
import { COMPANIES } from "../../data/profile";
import styles from "./CompanyStrip.module.css";

/* franja "He trabajado con" (portada e inicio) */
export const CompanyStrip = ({ className = "", style }: { className?: string; style?: CSSProperties }) => (
  <div className={`${styles.strip} ${className}`} style={style}>
    <span className="eyebrow" id="trabajado-con">
      He trabajado con
    </span>
    <ul className={styles.list} aria-labelledby="trabajado-con">
      {COMPANIES.map((company) => (
        <li key={company} className={styles.company}>
          {company}
        </li>
      ))}
      <li className={styles.others}>y otros</li>
    </ul>
  </div>
);
