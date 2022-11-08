import React from "react";
import profileCompressed from "../assets/optimized-images/profile-optimized.jpg";
import curriculumPDF from "../assets/curriculum.pdf";
import "./AboutPage.css";

const HABILIDADES = [
  "React JS",
  "JavaScript",
  "HTML",
  "CSS",
  "Figma",
  "Balsamiq",
];

export const AboutPage = (props) => {
  const listaHabilidades = HABILIDADES.map((elemento, index) => (
    <p key={index}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z" />
      </svg>

      <span>{elemento}</span>
    </p>
  ));

  return (
    <section ref={props.aboutREF} className="section">
      <div className="section-title">
        <h3>ACERCA</h3>
        <h4>Sobre Mi</h4>
      </div>

      <div className="about-content">
        <div className="about-bio">
          <div className="about-bio-title">
            <h3>Abel Borit Guitton</h3>
            <h4>Ingeniero Mecánico Electricista & Front-End Developer</h4>
          </div>

          <div className="about-bio-info">
            <p>
              Soy Ingeniero Mecánico Electricista & Front-End Developer. Me
              considero una persona responsable y proactiva, con capacidad de
              liderazgo, con buen manejo en las redes interpersonales y con la
              aptitud de trabajar en equipo.
            </p>
            <br />
            <p>
              Inicié en el mundo del desarrollo digital porque me es interesante
              la cantidad de herramientas existentes y proyectos que se pueden
              realizar y creo que la transformación digital será la llave para
              resolver retos en el futuro. Quiero seguir mejorando y aprendiendo
              nuevas cosas de este gran mundo del desarrollo digital.
            </p>
          </div>

          <div className="about-bio-date">
            <span>
              <b>Edad:</b> 24 años
            </span>
            <span>
              <b>Ubicación:</b> Arequipa, Perú
            </span>
          </div>
        </div>

        <div className="about-profile">
          <div className="profile-img">
            <img src={profileCompressed} alt="Abel Borit Guitton" />
          </div>
        </div>

        <div className="about-skills">
          <h3>Mis Habilidades</h3>

          <div className="list-habilities">{listaHabilidades}</div>
        </div>

        <div className="curriculum-btn">
          <a href={curriculumPDF} download>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};
