import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { helpHttp } from "../helpers/helpHttp";

interface FormState {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

type FormField = keyof FormState;

/* estado de la respuesta del envío: null = sin enviar */
export type FormResponseStatus = "success" | "error" | null;

/* respuesta de https://formsubmit.co/ajax/... */
interface FormSubmitResponse {
  success: "true" | "false" | boolean;
  message?: string;
}
type FormElement = HTMLInputElement | HTMLTextAreaElement;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const initialValidation: FormState = {
  /* se coloca "inputEstiloBase" ya que se está trabajando con los condicionales y con el CSS en ContactForm.js, ya que si en las validaciones de React Developer Tools dice "inputEstiloBase" entonce se mostrará el valor del input por defecto como lo colocamos, pero cuando se escriba bien o mal entonces mostrará los estilos correctos o estilos incorrectos */
  name: "inputEstiloBase",
  email: "inputEstiloBase",
  subject: "inputEstiloBase",
  comments: "inputEstiloBase",
};

/* objeto que hace referencia a los mensajes de error por input */
const mensajeValidacion = {
  mensajeVacio: "Este es un campo requerido, no puede ir vacio",
  mensajeCoincidenciaName:
    "Este campo solo acepta hasta 20 caracteres, letras mayúsculas, minúsculas y espacios en blanco",
  mensajeCoincidenciaEmail:
    "Email incorrecto, coloque un correo con este formato correo@correo.com",
  mensajeCoincidenciaSubject: "El Asunto no debe exceder los 40 caracteres",
  mensajeCoincidenciaComments:
    "Tu comentario no debe exceder los 255 caracteres",
};

/* objeto que hace referencia a las expresiones regulares por input */
const expresionesRegulares = {
  expresionRegularName: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,20}$/,
  expresionRegularEmail:
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  expresionRegularSubject: /^.{1,40}$/,
  expresionRegularComments: /^.{1,255}$/,
};

export const useForm = () => {
  /* variable de estado para los datos de los inputs del formulario */
  /* variable de estado para las validaciones de los inputs del formulario */
  /* variable de estado para el loader del formulario */
  /* variable de estado para mostrar o no la respuesta una vez enviado el formulario */
  const [formState, setFormState] = useState(initialForm);
  const [validation, setValidation] = useState(initialValidation);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FormResponseStatus>(null);

  /* se usará para detectar si podemos habilitar o deshabilitar el botón del Submit */
  const validateAll = () => {
    const validation: FormState = {
      name: "",
      email: "",
      subject: "",
      comments: "",
    };
    let isValid = true;

    /* ******************** VALIDATION NAME  ********************* */
    if (!formState.name.trim()) {
      validation.name = `${mensajeValidacion.mensajeVacio}`;
      isValid = false;
    }

    if (
      formState.name.trim() &&
      !expresionesRegulares.expresionRegularName.test(formState.name.trim())
    ) {
      validation.name = `${mensajeValidacion.mensajeCoincidenciaName}`;
      isValid = false;
    }
    /* ******************** VALIDATION NAME  ********************* */

    /* ******************** VALIDATION EMAIL  ********************* */
    if (!formState.email.trim()) {
      validation.email = `${mensajeValidacion.mensajeVacio}`;
      isValid = false;
    }

    if (
      formState.email.trim() &&
      !expresionesRegulares.expresionRegularEmail.test(formState.email.trim())
    ) {
      validation.email = `${mensajeValidacion.mensajeCoincidenciaEmail}`;
      isValid = false;
    }
    /* ******************** VALIDATION EMAIL  ********************* */

    /* ******************** VALIDATION SUBJECT  ********************* */
    if (!formState.subject.trim()) {
      validation.subject = `${mensajeValidacion.mensajeVacio}`;
      isValid = false;
    }

    if (
      formState.subject.trim() &&
      !expresionesRegulares.expresionRegularSubject.test(
        formState.subject.trim()
      )
    ) {
      validation.subject = `${mensajeValidacion.mensajeCoincidenciaSubject}`;
      isValid = false;
    }
    /* ******************** VALIDATION SUBJECT  ********************* */

    /* ******************** VALIDATION COMMENTS  ********************* */
    if (!formState.comments.trim()) {
      validation.comments = `${mensajeValidacion.mensajeVacio}`;
      isValid = false;
    }

    if (
      formState.comments.trim() &&
      !expresionesRegulares.expresionRegularComments.test(
        formState.comments.trim()
      )
    ) {
      validation.comments = `${mensajeValidacion.mensajeCoincidenciaComments}`;
      isValid = false;
    }
    /* ******************** VALIDATION COMMENTS  ********************* */

    if (!isValid) {
      setValidation(validation);
    }

    return isValid;
  };

  /* se usará para confirmar las validaciones de los input del formulario y sus mensajes aparecerán debajo de su input correspondiente como también en su variable de estado */
  const validateOne = (e: KeyboardEvent<FormElement>) => {
    const fieldName = e.currentTarget.name as FormField;
    const value = formState[fieldName];
    let message = "";

    if (!value) {
      message = `${mensajeValidacion.mensajeVacio}`;
    }

    if (
      value &&
      fieldName === "name" &&
      !expresionesRegulares.expresionRegularName.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaName}`;
    }

    if (
      value &&
      fieldName === "email" &&
      !expresionesRegulares.expresionRegularEmail.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaEmail}`;
    }

    if (
      value &&
      fieldName === "subject" &&
      !expresionesRegulares.expresionRegularSubject.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaSubject}`;
    }

    if (
      value &&
      fieldName === "comments" &&
      !expresionesRegulares.expresionRegularComments.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaComments}`;
    }

    setValidation({ ...validation, [fieldName]: message });
  };

  const handleChange = (e: ChangeEvent<FormElement>) => {
    setFormState({
      ...formState,

      /* Nombre de Propiedad Calculado: Puedes especificar el nombre de una propiedad a través de una expresión si la pones entre corchetes */
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* evita envíos duplicados mientras hay una petición en curso */
    if (loading) return;

    const isValid = validateAll();
    if (!isValid) return;

    setLoading(true);
    setResponse(null);

    helpHttp()
      .post<FormSubmitResponse>(
        "https://formsubmit.co/ajax/abelboritguitton@gmail.com",
        {
          body: formState,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      )
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

        setResponse("success");

        /* después de mostrar el mensaje de éxito se limpia el formulario (antes se recargaba toda la página) */
        setTimeout(() => {
          setFormState(initialForm);
          setValidation(initialValidation);
          setResponse(null);
        }, 3000);
      });
  };

  return {
    hookFormState: formState,
    hookValidation: validation,
    hookLoading: loading,
    hookResponse: response,

    hookhandleKeyUp: validateOne,
    hookHandleChange: handleChange,
    hookHandleSubmit: handleSubmit,
  };
};
