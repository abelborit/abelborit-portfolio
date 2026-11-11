/* opciones que recibe el helper: iguales a las de fetch, pero el "body" puede ser cualquier objeto porque se convierte a JSON internamente */
export interface HelpHttpOptions extends Omit<RequestInit, "body" | "headers"> {
  body?: unknown;
  headers?: Record<string, string>;
}

export interface HelpHttpError {
  err: true;
  status: number | string;
  statusText: string;
}

const isHelpHttpError = (value: unknown): value is HelpHttpError =>
  typeof value === "object" && value !== null && "err" in value;

export const helpHttp = () => {
  const customFetch = <T = unknown>(
    endpoint: string,
    options: HelpHttpOptions,
  ): Promise<T | HelpHttpError> => {
    /* por lo general todas las peticiones que hacemos por librerías como axios, toda la data nos la devuelve en formato json, entonces para eso se creará una cabecera por defecto */
    const defaultHeader = {
      /* esto quiere decir que es capaz de aceptar data tipo json pero ya depende de uno lo que se quiera mandar, ya sea texto plano, etc. Es una cabecera que no afecta mucho si se coloca o no */
      accept: "application/json",
    };

    /* cuando hacemos peticiones fetch puede ser que al servidor donde hayamos hecho la petición esté caído y la petición fetch puede estar mucho tiempo ciclando/cargando porque no recibe ninguna respuesta, entonces se usa "new AbortController()" para que cuando detecte que no hay una respuesta del servidor podemos abortar la petición hecha */ /* https://developer.mozilla.org/en-US/docs/Web/API/AbortController */
    const controller = new AbortController();

    /* cuando son peticiones donde se mandarán datos: */
    /* si es que existe "options.body" entonces los datos que se manden se tendrán que mandar en forma de cadena de texto a la base de datos y si no existe no se envía el body */
    const { body, headers, ...restOptions } = options;

    const requestOptions: RequestInit = {
      ...restOptions,
      signal: controller.signal,
      /* para los métodos y las cabeceras */
      method: options.method || "POST",
      headers: headers ? { ...defaultHeader, ...headers } : defaultHeader,
    };

    if (body) requestOptions.body = JSON.stringify(body);

    /* si después de 8 segundos no se recibe una respuesta se aborta la petición, lo que genera el error (catch) del fetch. El temporizador se cancela cuando la petición termina */
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    return fetch(endpoint, requestOptions)
      .then(
        (respuesta): Promise<T> =>
          respuesta.ok
            ? (respuesta.json() as Promise<T>)
            : Promise.reject({
              err: true,
              status: respuesta.status || "00",
              statusText:
                respuesta.statusText || "Ocurrió un problema con el servidor",
            }),
      )
      .catch((error: unknown): HelpHttpError => {
        /* errores de respuesta (los rechazados arriba) */
        if (isHelpHttpError(error)) return error;

        /* errores de red o petición abortada por el tiempo de espera */
        const aborted =
          error instanceof DOMException && error.name === "AbortError";
        return {
          err: true,
          status: "00",
          statusText: aborted
            ? "El servidor tardó demasiado en responder"
            : "No se pudo conectar con el servidor",
        };
      })
      .finally(() => clearTimeout(timeoutId));
  };

  const fetchPost = <T = unknown>(url: string, options: HelpHttpOptions = {}) => {
    options.method = "POST";
    return customFetch<T>(url, options);
  };

  return { post: fetchPost };
};
