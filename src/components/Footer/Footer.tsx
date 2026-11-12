import { SOCIAL } from "../../data/profile";
import styles from "./Footer.module.css";

/* se calcula una sola vez al cargar el módulo (no en cada render) */
const CURRENT_YEAR = new Date().getFullYear();

const LINKS = [
  { label: "GitHub", href: SOCIAL.github },
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "NPM", href: SOCIAL.npm },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={`wrap ${styles.inner}`}>
      <span>© {CURRENT_YEAR} Abel Borit Guitton</span>
      <ul className={styles.links}>
        {LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> (se abre en una nueva pestaña)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
