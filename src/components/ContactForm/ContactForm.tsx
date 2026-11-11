import type { ChangeEvent, FocusEvent } from "react";
import Loader from "../Loader/Loader";
import {
  HONEYPOT_FIELD,
  MAX_LENGTH,
  useForm,
  type FieldValidation,
  type FormField,
} from "../../hooks/useForm";
import styles from "./ContactForm.module.css";

type FormElement = HTMLInputElement | HTMLTextAreaElement;

interface FieldProps {
  name: FormField;
  label: string;
  placeholder: string;
  value: string;
  validation: FieldValidation;
  onChange: (e: ChangeEvent<FormElement>) => void;
  onBlur: (e: FocusEvent<FormElement>) => void;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
}

/* input o textarea con su label (oculto visualmente pero leído por lectores de pantalla) y su mensaje de error asociado */
const Field = ({
  name,
  label,
  placeholder,
  value,
  validation,
  onChange,
  onBlur,
  type = "text",
  autoComplete = "off",
  multiline = false,
}: FieldProps) => {
  const id = `input-${name}`;
  const errorId = `${id}-error`;
  const hasError = Boolean(validation);

  /* null = sin tocar (estilo base), "" = correcto, texto = incorrecto */
  const stateClass =
    validation === null
      ? ""
      : hasError
        ? styles.input_incorrect
        : styles.input_correct;

  const commonProps = {
    id,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    autoComplete,
    maxLength: MAX_LENGTH[name],
    "aria-invalid": hasError,
    "aria-describedby": hasError ? errorId : undefined,
  };

  return (
    <>
      <label htmlFor={id} className={styles.visually_hidden}>
        {label}
      </label>

      {multiline ? (
        <textarea
          {...commonProps}
          className={`${styles.textarea} ${stateClass}`}
        ></textarea>
      ) : (
        <input
          {...commonProps}
          type={type}
          className={`${styles.input_text} ${stateClass}`}
        />
      )}

      {hasError && (
        <p id={errorId} className={styles.incorrect_response}>
          {validation}
        </p>
      )}
    </>
  );
};

export const ContactForm = () => {
  const {
    formState,
    validation,
    honeypot,
    loading,
    response,

    handleChange,
    handleBlur,
    handleHoneypotChange,
    handleSubmit,
  } = useForm();

  const fieldHandlers = { onChange: handleChange, onBlur: handleBlur };

  return (
    <div className={styles.contact_content}>
      {/* noValidate: se usan las validaciones propias en lugar de los mensajes nativos del navegador */}
      <form className={styles.contact_form} onSubmit={handleSubmit} noValidate>
        <Field
          name="name"
          label="Nombre"
          placeholder="Escribe tu nombre..."
          autoComplete="name"
          value={formState.name}
          validation={validation.name}
          {...fieldHandlers}
        />

        <Field
          name="email"
          label="Email"
          type="email"
          placeholder="Escribe tu email..."
          autoComplete="email"
          value={formState.email}
          validation={validation.email}
          {...fieldHandlers}
        />

        <Field
          name="subject"
          label="Asunto"
          placeholder="Escribe el asunto a tratar..."
          value={formState.subject}
          validation={validation.subject}
          {...fieldHandlers}
        />

        <Field
          name="comments"
          label="Comentarios"
          placeholder="Escribe tus comentarios..."
          multiline
          value={formState.comments}
          validation={validation.comments}
          {...fieldHandlers}
        />

        {/* campo trampa (honeypot): invisible para las personas y fuera del orden de tabulación. Los bots suelen llenarlo y así se detectan */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="input-honey">No llenar este campo</label>
          <input
            id="input-honey"
            type="text"
            name={HONEYPOT_FIELD}
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={handleHoneypotChange}
          />
        </div>

        <div className={styles.btn_effect_container}>
          <input
            id="input-submit"
            className={styles.btn_effect}
            type="submit"
            value="Enviar"
            disabled={loading}
          />
        </div>

        {loading && <Loader></Loader>}

        {response === "error" && (
          <p className={styles.incorrect_response} role="alert">
            No se pudo enviar el mensaje. Por favor, inténtalo nuevamente en
            unos minutos.
          </p>
        )}
      </form>

      {response === "success" && (
        <div className={styles.correct_response} role="status">
          <p>Los datos han sido enviados correctamente</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden="true"
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        </div>
      )}
    </div>
  );
};
