import React from "react";
import Loader from "../components/Loader";
import { useForm } from "../hooks/useForm";
import "./ContactPage.css";

export default function ContactPage(props) {
  const {
    hookFormState,
    hookValidation,
    hookLoading,
    hookResponse,

    hookhandleKeyUp,
    hookHandleChange,
    hookHandleSubmit,
  } = useForm();

  return (
    <section ref={props.contactREF} className="section">
      <div className="section-title">
        <h3>CONTACTO</h3>
        <h4>Comunicación</h4>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={hookHandleSubmit}>
          <legend>¿Estás interesado en trabajar juntos?</legend>
          <legend>¡Empecemos!</legend>

          <input
            id="input-name"
            autoComplete="off"
            className={
              !hookValidation.name ? "input-correct" : "input-incorrect"
            }
            type="text"
            name="name"
            placeholder="Escribe tu nombre..."
            onKeyUp={hookhandleKeyUp}
            onChange={hookHandleChange}
            value={hookFormState.name}
          />

          {hookValidation.name && (
            <p className="incorrect-response">{hookValidation.name}</p>
          )}

          <input
            id="input-email"
            autoComplete="off"
            className={
              !hookValidation.email ? "input-correct" : "input-incorrect"
            }
            type="email"
            name="email"
            placeholder="Escribe tu email..."
            onKeyUp={hookhandleKeyUp}
            onChange={hookHandleChange}
            value={hookFormState.email}
          />

          {hookValidation.email && (
            <p className="incorrect-response">{hookValidation.email}</p>
          )}

          <input
            id="input-subject"
            autoComplete="off"
            className={
              !hookValidation.subject ? "input-correct" : "input-incorrect"
            }
            type="text"
            name="subject"
            placeholder="Escribe el asunto a tratar..."
            onKeyUp={hookhandleKeyUp}
            onChange={hookHandleChange}
            value={hookFormState.subject}
          />

          {hookValidation.subject && (
            <p className="incorrect-response">{hookValidation.subject}</p>
          )}

          <textarea
            id="input-textarea"
            autoComplete="off"
            className={
              !hookValidation.comments ? "input-correct" : "input-incorrect"
            }
            name="comments"
            placeholder="Escribe tus comentarios..."
            onKeyUp={hookhandleKeyUp}
            onChange={hookHandleChange}
            value={hookFormState.comments}
          ></textarea>

          {hookValidation.comments && (
            <p className="incorrect-response">{hookValidation.comments}</p>
          )}

          <input
            id="input-submit"
            className="input-submit"
            type="submit"
            value="Enviar"
          />

          {hookLoading && <Loader></Loader>}

          {hookResponse && (
            <div class="correct-response">
              <p>Los datos han sido enviados correctamente</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
