import React from "react";
import { ContactForm } from "../components/ContactForm";
import "./ContactPage.css";

export default function ContactPage(props) {
  return (
    <section ref={props.contactREF} className="section">
      <div className="section-title">
        <h3>CONTACTO</h3>
        <h4>Comunicación</h4>
      </div>

      <ContactForm></ContactForm>
    </section>
  );
}
