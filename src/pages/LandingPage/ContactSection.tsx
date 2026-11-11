import type { SectionRef } from "../../types/navigation";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import styles from "./LandingPage.module.css";
import { WaveDecoration } from "../../components/icons/WaveDecoration";

export const ContactSection = (props: { contactREF: SectionRef }) => {
  return (
    <div
      ref={props.contactREF}
      className={`${styles.section} ${styles.slideLeftReturn}`}
    >
      <div className={styles.images_background}>
        <div className={styles.images_first}>
          <WaveDecoration variant="bottom" />
        </div>
      </div>

      <div className={styles.title_container_contact}>
        <h2 className={styles.title_text}>Contáctame</h2>

        <div className={styles.border_container}>
          <span className={styles.border_first}></span>
          <span className={styles.border_second}></span>
        </div>

        <p className={styles.description}>¡Empecemos!</p>

        <ContactForm></ContactForm>
      </div>
    </div>
  );
};
