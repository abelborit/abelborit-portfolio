import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/original-images/about-image.jpg";
import styles from "./LandingPage.module.css";

export const AboutSection = (props) => {
  return (
    <div
      ref={props.aboutREF}
      className={`${styles.section} ${styles.slideLeftReturn}`}
    >
      <div className={`${styles.image_container} ${styles.slideRightReturn}`}>
        <img className={styles.image} src={aboutImage} alt="Imagen Acerca" />
        <div className={styles.image_border}></div>
      </div>

      <div className={styles.images_background}>
        <div className={styles.images_first}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="475"
            height="229"
            viewBox="0 0 475 229"
          >
            <g fill="#072142" fillRule="evenodd">
              <path d="M48.1283 167.1805C48.1283 160.1405 41.2163 154.3795 32.7683 154.3795L15.3593 154.3795C6.9123 154.3795.0003 160.1405.0003 167.1805.0003 174.2195 6.9123 179.9805 15.3593 179.9805L32.7683 179.9805C41.2163 179.9805 48.1283 174.2195 48.1283 167.1805M350.7201 215.8201C350.7201 208.7801 344.9601 203.0201 337.9201 203.0201 330.8801 203.0201 325.1201 208.7801 325.1201 215.8201 325.1201 222.8601 330.8801 228.6201 337.9201 228.6201 344.9601 228.6201 350.7201 222.8601 350.7201 215.8201M431.1039 115.9803C431.1039 108.9403 424.1919 103.1803 415.7449 103.1803L398.3359 103.1803C389.8879 103.1803 382.9759 108.9403 382.9759 115.9803 382.9759 123.0203 389.8879 128.7803 398.3359 128.7803L415.7449 128.7803C424.1919 128.7803 431.1039 123.0203 431.1039 115.9803" />
              <path d="M458.7523 26.3797L335.8723 26.3797C327.4243 26.3797 320.5123 32.1407 320.5123 39.1807 320.5123 46.2197 327.4243 51.9807 335.8723 51.9807L342.5273 51.9807C350.9763 51.9807 357.8883 57.7397 357.8883 64.7797 357.8883 71.8197 350.9763 77.5797 342.5273 77.5797L259.0713 77.5797C250.6243 77.5797 243.7123 83.3397 243.7123 90.3797 243.7123 97.4197 250.6243 103.1807 259.0713 103.1807L359.4243 103.1807C367.8723 103.1807 374.7833 108.9407 374.7833 115.9807 374.7833 123.0207 367.8723 128.7797 359.4243 128.7797L229.3763 128.7797C220.9283 128.7797 214.0163 134.5397 214.0163 141.5797 214.0163 148.6197 220.9283 154.3797 229.3763 154.3797L336.8963 154.3797C345.3443 154.3797 352.2563 160.1407 352.2563 167.1807 352.2563 174.2197 345.3443 179.9807 336.8963 179.9807L75.7753 179.9807C67.3283 179.9807 60.4163 174.2197 60.4163 167.1807 60.4163 160.1407 67.3283 154.3797 75.7753 154.3797L173.5673 154.3797C182.0163 154.3797 188.9283 148.6197 188.9283 141.5797 188.9283 134.5397 182.0163 128.7797 173.5673 128.7797L136.7043 128.7797C128.2563 128.7797 121.3443 123.0207 121.3443 115.9807 121.3443 108.9407 128.2563 103.1807 136.7043 103.1807L136.1913 103.1807C144.6403 103.1807 151.5523 97.4197 151.5523 90.3797 151.5523 83.3397 144.6403 77.5797 136.1913 77.5797L19.9683 77.5797C11.5203 77.5797 4.6073 71.8197 4.6073 64.7797 4.6073 57.7397 11.5203 51.9807 19.9683 51.9807L221.1843 51.9807C229.6323 51.9807 236.5443 46.2197 236.5443 39.1807 236.5443 32.1407 229.6323 26.3797 221.1843 26.3797L197.6323 26.3797C189.1843 26.3797 182.2723 20.6197 182.2723 13.5797 182.2723 6.5397 189.1843.7797 197.6323.7797L458.7523.7797C467.1993.7797 474.1113 6.5397 474.1113 13.5797 474.1113 20.6197 467.1993 26.3797 458.7523 26.3797M306.1761 215.8201C306.1761 208.7801 299.2641 203.0201 290.8161 203.0201L136.7041 203.0201C128.2561 203.0201 121.3441 208.7801 121.3441 215.8201 121.3441 222.8601 128.2561 228.6201 136.7041 228.6201L290.8161 228.6201C299.2641 228.6201 306.1761 222.8601 306.1761 215.8201" />
            </g>
          </svg>
        </div>
      </div>

      <div className={styles.title_container}>
        <h1 className={styles.title_text}>Abel Borit Guitton</h1>

        <div className={styles.border_container}>
          <span className={styles.border_first}></span>
          <span className={styles.border_second}></span>
        </div>

        <p className={styles.description}>
          Front-End Developer con Grado en Ingeniería
        </p>

        <div className={styles.btn_effect_container}>
          <Link className={styles.btn_effect} to="/acerca">
            Mostrar más
          </Link>
        </div>
      </div>
    </div>
  );
};