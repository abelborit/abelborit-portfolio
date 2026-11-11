type EventParams = Record<string, unknown>;

interface DataLayerObject {
  eventName: string;
  eventParams: EventParams;
}

const EXCLUDED_DATA_LAYER_KEYS = new Set(["token"]);

// ===========================================================
// Funciones auxiliares
// ===========================================================

/**
 * Obtiene la URL actual de forma segura.
 * Si `window.location` no está disponible (SSR), devuelve un fallback.
 */
const getCurrentUrl = () => {
  try {
    return new URL(window.location.href);
  } catch {
    return new URL(
      "/",
      typeof window !== "undefined" ? window.location.origin : undefined,
    );
  }
};

const sanitizeEventParams = (eventParams: EventParams): EventParams => {
  return Object.fromEntries(
    Object.entries(eventParams).filter(
      ([key]) => !EXCLUDED_DATA_LAYER_KEYS.has(key.toLowerCase()),
    ),
  );
};

/**
 * Limpia un objeto eliminando propiedades `undefined`.
 */
// const cleanPayload = (
//   eventParams: Record<string, unknown>,
// ): Record<string, unknown> => {
//   console.log('[GTM][cleanPayload] =>', {
//     cleanPayload: Object.fromEntries(
//       Object.entries(eventParams).filter(([, value]) => value === undefined),
//     ),
//   });

//   return Object.fromEntries(
//     Object.entries(eventParams).filter(([, value]) => value !== undefined),
//   );
// };

/**
 * Mezcla los parámetros de query string en el eventParams, sin sobrescribir claves existentes.
 */
const mergeQueryParams = (url: URL, eventParams: EventParams) => {
  console.log("[GTM][mergeQueryParams] =>", { url, eventParams });

  url.searchParams.forEach((value, key) => {
    if (EXCLUDED_DATA_LAYER_KEYS.has(key.toLowerCase())) {
      return;
    }

    if (!(key in eventParams)) {
      eventParams[key] = value;
    }
  });
};

// ===========================================================
// Función principal
// ===========================================================

const sendToDataLayer =
  window.sendToDataLayer ||
  ((eventName: string, eventParams: EventParams) => {
    console.info("[GTM][sendToDataLayer] =>", { eventName, eventParams });

    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];

    // Validar que se pase el nombre del evento
    if (eventName) {
      // Limpiar los parámetros del evento previo
      window.dataLayer.push({ event_data: null });

      // Añadir el evento nuevo
      window.dataLayer.push({
        event: "atm.event",
        event_name: eventName,
        event_data: eventParams,
      });
    }
  });

/**
 * Envía datos al dataLayer
 */
export const sendToDataLayerGTM = (objectDataLayer: DataLayerObject) => {
  if (!objectDataLayer?.eventParams || typeof window === "undefined") return;

  const { eventName, eventParams: originalPayload } = objectDataLayer;

  const newEventParams = sanitizeEventParams(originalPayload);

  const url = getCurrentUrl();
  mergeQueryParams(url, newEventParams);

  // const cleanedPayload = cleanPayload(newEventParams);
  // sendToDataLayer(eventName, cleanedPayload);

  sendToDataLayer(eventName, newEventParams);
};
// export const sendToDataLayerATM = (eventName, eventParams) => {
//   if (window?.dataLayer) {
//     const sanitizedEventParams = sanitizeEventParams(eventParams);

//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: "atm.event",
//       event_name: eventName,
//       ...sanitizedEventParams,
//     });
//   }
// };
