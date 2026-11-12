import { buttonClass } from "../../components/Button/button";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SOCIAL } from "../../data/profile";
import styles from "./LandingPage.module.css";

const SOCIALS = [
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "GitHub", href: SOCIAL.github },
];

/* sección de contacto de /home (destino de todos los botones "Contactar": /home#contacto) */
export const ContactSection = () => (
  <section id="contacto" className={`wrap ${styles.contact}`} aria-labelledby="contact-title">
    <div className={styles.contactGrid}>
      <div className={styles.contactText}>
        <p className="eyebrow">Contacto</p>
        <h2 id="contact-title" className={styles.contactTitle}>
          ¿Buscas un frontend para tu equipo?
        </h2>
        <p className={styles.contactSubtitle}>¿Tienes un proyecto en mente?</p>
        <p className={styles.contactBody}>
          Cuéntame sobre el rol o el proyecto. Escríbeme y te respondo lo antes posible. También me encuentras en LinkedIn y
          GitHub.
        </p>
        <div className={styles.socials}>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("secondary", { small: true })}
            >
              {social.label} <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> (se abre en una nueva pestaña)</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </div>
  </section>
);
