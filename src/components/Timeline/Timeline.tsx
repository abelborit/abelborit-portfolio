import type { TimelineItem } from "../../types/content";
import styles from "../../pages/ResumenPage/ResumenPage.module.css";

interface TimelineProps {
  items: TimelineItem[];
}

/* lista de tarjetas con fecha (inicio - fin), título y descripción. Se usa para educación y experiencia */
export const Timeline = ({ items }: TimelineProps) => {
  return (
    <>
      {items.map((item) => (
        <div className={styles.content_card} key={`${item.title}-${item.since}`}>
          <div className={styles.card_date}>
            <div className={styles.card_date_line}></div>
            <span>{item.since}</span>
            <span>-</span>
            <span>{item.to}</span>
            <div className={styles.card_date_line}></div>
          </div>

          <div className={styles.card_info}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
