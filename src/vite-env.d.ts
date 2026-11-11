/// <reference types="vite/client" />

interface Window {
  dataLayer?: Record<string, unknown>[];
  sendToDataLayer?: (
    eventName: string,
    eventParams: Record<string, unknown>,
  ) => void;
}
