import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";
import { helpHttp } from "../helpers/helpHttp";

export interface FormState {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

export type FormField = keyof FormState;

/* null = el campo aún no se ha tocado (se muestra con el estilo base), "" = válido, texto = mensaje de error */
export type FieldValidation = string | null;
export type FormValidation = Record<FormField, FieldValidation>;

/* estado de la respuesta del envío: null = sin enviar */
export type FormResponseStatus = "success" | "error" | null;

/* respuesta de https://formsubmit.co/ajax/... */
interface FormSubmitResponse {
  success: "true" | "false" | boolean;
  message?: string;
}

type FormElement = HTMLInputElement | HTMLTextAreaElement;

/* TODO: reemplazar el correo por el alias aleatorio que entrega formsubmit para no exponer la dirección en el código público */
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/abelboritguitton@gmail.com";

/* nombre del campo trampa (honeypot). Formsubmit descarta los envíos que lo traen con contenido */
export const HONEYPOT_FIELD = "_honey";

/* longitudes máximas. También se usan como maxLength en los inputs */
export const MAX_LENGTH: Record<FormField, number> = {
  name: 50,
  email: 254,
  subject: 100,
  comments: 2000,
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const initialValidation: FormValidation = {
  name: null,
  email: null,
  subject: null,
  comments: null,
};

const MENSAJE_VACIO = "Este es un campo requerido, no puede ir vacío";

/* reglas por campo: expresión regular (opcional) y mensaje si no se cumple */
const REGLAS: Record<FormField, { regex?: RegExp; mensaje: string }> = {
  name: {
    /* letras (con tildes y ñ), espacios, apóstrofo y guion: "O'Connor", "Jean-Pierre" */
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿÑñ' -]+$/,
    mensaje: `Este campo solo acepta hasta ${MAX_LENGTH.name} caracteres: letras, espacios, apóstrofos y guiones`,
  },
  email: {
    /* acepta mayúsculas, "+", guiones y guiones bajos: "Juan.Perez+trabajo@mi-empresa.com" */
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/,
    mensaje:
      "Email incorrecto, coloque un correo con este formato correo@correo.com",
  },
  subject: {
    mensaje: `El asunto no debe exceder los ${MAX_LENGTH.subject} caracteres`,
  },
  comments: {
    mensaje: `Tu comentario no debe exceder los ${MAX_LENGTH.comments} caracteres`,
  },
};

/* devuelve "" si el valor es válido o el mensaje de error correspondiente */
const validateField = (field: FormField, value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return MENSAJE_VACIO;

  const { regex, mensaje } = REGLAS[field];
  if (trimmed.length > MAX_LENGTH[field]) return mensaje;
  if (regex && !regex.test(trimmed)) return mensaje;

  return "";
};

const trimForm = (form: FormState): FormState => ({
  name: form.name.trim(),
  email: form.email.trim(),
  subject: form.subject.trim(),
  comments: form.comments.trim(),
});

export const useForm = () => {
  const [formState, setFormState] = useState(initialForm);
  const [validation, setValidation] = useState(initialValidation);
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FormResponseStatus>(null);

  /* temporizador que limpia el formulario después del envío exitoso. Se cancela si el componente se desmonta */
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const validateAll = () => {
    const nextValidation = {} as FormValidation;
    let isValid = true;

    for (const field of Object.keys(formState) as FormField[]) {
      const message = validateField(field, formState[field]);
      nextValidation[field] = message;
      if (message) isValid = false;
    }

    setValidation(nextValidation);
    return isValid;
  };

  /* mientras se escribe solo se valida un campo que ya se tocó, para no mostrar errores antes de tiempo */
  const handleChange = (e: ChangeEvent<FormElement>) => {
    const field = e.target.name as FormField;
    const value = e.target.value;

    setFormState((prev) => ({ ...prev, [field]: value }));

    setValidation((prev) =>
      prev[field] === null
        ? prev
        : { ...prev, [field]: validateField(field, value) },
    );
  };

  /* al salir de un campo se valida, salvo que se haya pasado por él sin escribir nada (por ejemplo navegando con Tab) */
  const handleBlur = (e: FocusEvent<FormElement>) => {
    const field = e.target.name as FormField;
    const value = formState[field];

    if (validation[field] === null && !value) return;

    setValidation((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleHoneypotChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHoneypot(e.target.value);
  };

  const showSuccessAndReset = () => {
    setResponse("success");

    /* después de mostrar el mensaje de éxito se limpia el formulario */
    resetTimer.current = setTimeout(() => {
      setFormState(initialForm);
      setValidation(initialValidation);
      setResponse(null);
    }, 3000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* evita envíos duplicados mientras hay una petición en curso */
    if (loading) return;

    const isValid = validateAll();
    if (!isValid) return;

    /* si el campo trampa tiene contenido lo llenó un bot: se simula un envío exitoso sin mandar nada */
    if (honeypot) {
      showSuccessAndReset();
      return;
    }

    setLoading(true);
    setResponse(null);

    const data = trimForm(formState);

    helpHttp()
      .post<FormSubmitResponse>(FORMSUBMIT_ENDPOINT, {
        body: {
          ...data,
          /* opciones de formsubmit: asunto del correo recibido, formato en tabla y campo trampa */
          _subject: `Portafolio: ${data.subject}`,
          _template: "table",
          [HONEYPOT_FIELD]: honeypot,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((respuesta) => {
        setLoading(false);

        /* helpHttp no lanza errores: los devuelve como { err: true, ... }. Además formsubmit puede responder 200 con success: "false" (por ejemplo si el formulario no está activado) */
        const isError =
          "err" in respuesta || String(respuesta.success) !== "true";

        if (isError) {
          /* se mantienen los datos del formulario para que se pueda reintentar */
          setResponse("error");
          return;
        }

        showSuccessAndReset();
      });
  };

  return {
    formState,
    validation,
    honeypot,
    loading,
    response,

    handleChange,
    handleBlur,
    handleHoneypotChange,
    handleSubmit,
  };
};
