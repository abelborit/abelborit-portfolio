import type { ChangeEvent, FocusEvent } from "react";
import Loader from "../Loader/Loader";
import { buttonClass, buttonStyles } from "../Button/button";
import { ArrowRightIcon, CheckIcon } from "../icons";
import {
  HONEYPOT_FIELD,
  MAX_LENGTH,
  REASONS,
  useForm,
  type FieldValidation,
  type FormField,
} from "../../hooks/useForm";
import styles from "./ContactForm.module.css";

type FormElement = HTMLInputElement | HTMLTextAreaElement;

interface FieldProps {
  name: FormField;
  label: string;
  value: string;
  validation: FieldValidation;
  onChange: (e: ChangeEvent<FormElement>) => void;
  onBlur: (e: FocusEvent<FormElement>) => void;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
  className?: string;
}

/* campo con etiqueta visible y su mensaje de error asociado (aria-describedby) */
const Field = ({
  name,
  label,
  value,
  validation,
  onChange,
  onBlur,
  type = "text",
  autoComplete = "off",
  multiline = false,
  className = "",
}: FieldProps) => {
  const id = `input-${name}`;
  const errorId = `${id}-error`;
  const hasError = Boolean(validation);

  /* null = sin tocar, "" = correcto, texto = error */
  const stateClass = validation === null ? "" : hasError ? styles.invalid : styles.valid;

  const commonProps = {
    id,
    name,
    value,
    onChange,
    onBlur,
    autoComplete,
    maxLength: MAX_LENGTH[name],
    "aria-invalid": hasError,
    "aria-describedby": hasError ? errorId : undefined,
    className: `${styles.input} ${stateClass}`,
  };

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {multiline ? <textarea {...commonProps} rows={5} /> : <input {...commonProps} type={type} />}
      {hasError && (
        <p id={errorId} className={styles.error}>
          {validation}
        </p>
      )}
    </div>
  );
};

export const ContactForm = () => {
  const {
    formState,
    validation,
    honeypot,
    reasons,
    loading,
    response,

    handleChange,
    handleBlur,
    handleHoneypotChange,
    handleReasonChange,
    handleSubmit,
  } = useForm();

  const fieldHandlers = { onChange: handleChange, onBlur: handleBlur };

  return (
    <div className={`surface ${styles.card}`}>
      {/* noValidate: se usan las validaciones propias en lugar de los mensajes nativos del navegador */}
      <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
        <fieldset className={styles.reasons}>
          <legend className={styles.legend}>
            ¿Sobre qué quieres hablar? <span className={styles.hint}>(puedes elegir varias)</span>
          </legend>
          {REASONS.map((reason) => (
            <label key={reason} className={styles.choice}>
              <input
                type="checkbox"
                name="reason"
                value={reason}
                checked={reasons.includes(reason)}
                onChange={handleReasonChange}
              />
              <span className={styles.choiceBox} aria-hidden="true">
                <CheckIcon size={12} />
              </span>
              {reason}
            </label>
          ))}
        </fieldset>

        <div className={styles.row}>
          <Field
            name="name"
            label="Nombre"
            autoComplete="name"
            value={formState.name}
            validation={validation.name}
            className={styles.half}
            {...fieldHandlers}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={formState.email}
            validation={validation.email}
            className={styles.half}
            {...fieldHandlers}
          />
        </div>

        <Field name="subject" label="Asunto" value={formState.subject} validation={validation.subject} {...fieldHandlers} />

        <Field
          name="comments"
          label="Mensaje"
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

        <div className={styles.actions}>
          <button type="submit" className={buttonClass("primary")} disabled={loading}>
            {loading ? "Enviando…" : "Enviar mensaje"}
            <ArrowRightIcon className={buttonStyles.arrow} />
          </button>
          {loading && <Loader />}
        </div>

        {response === "error" && (
          <p className={styles.responseError} role="alert">
            No se pudo enviar el mensaje. Por favor, inténtalo nuevamente en unos minutos.
          </p>
        )}

        {response === "success" && (
          <p className={styles.responseSuccess} role="status">
            <CheckIcon size={20} />
            ¡Gracias! Tu mensaje se envió correctamente.
          </p>
        )}
      </form>
    </div>
  );
};
