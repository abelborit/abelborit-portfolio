import { Link } from "react-router";
import styles from "./HeroImage.module.css";
import { GTM_EVENTS } from "../../utils/gtm";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export const HeroImage = () => {
  return (
    <>
      <div className={`${styles.heroImage} ${styles.gradientMove}`}>
        <div className={styles.heroImage_opacity}>
          <div className={styles.vanishIn}>
            <div className={styles.heroImage_content}>
              <div className={styles.heroImage_text}>
                <h2>Hey, yo soy</h2>

                <h1 className={styles.typeWriter}>Abel Borit Guitton</h1>
                {/* <h1>Abel Borit Guitton</h1> */}

                <h3>Frontend Developer con grado profesional en ingeniería</h3>
                <p>
                  Siento curiosidad por la tecnología y creo que la
                  transformación digital será la llave para resolver retos en el
                  futuro. Disfruto llevar acabo la maquetación, diseño e
                  interactividad de interfaces web, quiero seguir mejorando y
                  aprendiendo nuevas cosas de este gran mundo del desarrollo
                  digital.
                </p>
              </div>

              <div className={styles.heroImage_pages}>
                <Link
                  className={styles.btn_effect}
                  to="home"
                  onClick={() =>
                    GTM_EVENTS.GenericRedirect({
                      new_location: "/home",
                      section: "hero image",
                    })
                  }
                >
                  Explorar
                </Link>
              </div>

              <div className={styles.heroImage_media}>
                <a
                  href="https://github.com/abelborit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Abel Borit (se abre en una nueva pestaña)"
                >
                  <GitHubIcon />
                </a>

                <a
                  href="https://www.linkedin.com/in/abelborit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Abel Borit (se abre en una nueva pestaña)"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sky_color}></div>
    </>
  );
};
