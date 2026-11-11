import type { Plugin } from "vite";

interface GtmPluginOptions {
  /* ID del contenedor de Google Tag Manager */
  gtmId: string;
  /* dominio donde está desplegado el sitio: GTM solo se carga aquí */
  productionHost: string;
}

/**
 * Inyecta Google Tag Manager en el index.html SOLO al hacer el build (`npm run build` / `npm run deploy`).
 *
 * - `npm run dev`: el plugin no se aplica ("apply: build"), GTM no existe en el HTML.
 * - `npm run preview`: el HTML sí lo trae, pero el script revisa el dominio y no carga GTM en localhost.
 * - GitHub Pages: el dominio coincide con `productionHost` y GTM se carga normalmente.
 *
 * Los eventos que la app envía con `sendToDataLayerGTM` se siguen guardando en `window.dataLayer` en local (útil para depurar), pero nadie los envía a Google porque GTM no está cargado.
 *
 * NOTA: Google actualmente recomienda que, si utilizas Google Tag Manager, no necesitas implementar código adicional de gtag.js en el sitio (antes estaba comentado en el index.html con el ID G-YFDKQ6FEWB). Tener ambos puede producir mediciones duplicadas o comportamientos no deseados. (https://support.google.com/tagmanager/answer/7582054?hl=es)
 */
export const gtmPlugin = ({ gtmId, productionHost }: GtmPluginOptions): Plugin => ({
  name: "inject-google-tag-manager",
  apply: "build",
  transformIndexHtml() {
    return [
      {
        tag: "script",
        injectTo: "head",
        children: `
      (function (w, d, s, l, i) {
        if (w.location.hostname !== "${productionHost}") return;
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "${gtmId}");
    `,
      },
      {
        tag: "noscript",
        injectTo: "body-prepend",
        children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display: none; visibility: hidden"></iframe>`,
      },
    ];
  },
});
