import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const initialValidation = {
  name: "",
  email: "",
  subject: "",
  comments: "",
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
  const [response, setResponse] = useState(null);

  /* se usará para detectar si podemos habilitar o deshabilitar el botón del Submit */
  const validateAll = () => {
    const validation = {
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
  const validateOne = (e) => {
    const value = formState[e.target.name];
    let message = "";

    if (!value) {
      message = `${mensajeValidacion.mensajeVacio}`;
    }

    if (
      value &&
      e.target.name === "name" &&
      !expresionesRegulares.expresionRegularName.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaName}`;
    }

    if (
      value &&
      e.target.name === "email" &&
      !expresionesRegulares.expresionRegularEmail.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaEmail}`;
    }

    if (
      value &&
      e.target.name === "subject" &&
      !expresionesRegulares.expresionRegularSubject.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaSubject}`;
    }

    if (
      value &&
      e.target.name === "comments" &&
      !expresionesRegulares.expresionRegularComments.test(value.trim())
    ) {
      message = `${mensajeValidacion.mensajeCoincidenciaComments}`;
    }

    setValidation({ ...validation, [e.target.name]: message });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,

      /* Nombre de Propiedad Calculado: Puedes especificar el nombre de una propiedad a través de una expresión si la pones entre corchetes */
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();

    if (!isValid) {
      return false;
    } else {
      setLoading(true);

      helpHttp()
        .post("https://formsubmit.co/ajax/abelboritguitton@gmail.com", {
          body: formState,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        .then((respuesta) => {
          setLoading(false);
          setResponse(true);

          setTimeout(() => {
            setFormState(initialForm);
            setResponse(false);
            // window.location.reload();
          }, 3000);
        });
    }
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
