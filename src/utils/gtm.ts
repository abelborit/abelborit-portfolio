import { sendToDataLayerGTM } from "../helpers/gtmEvents";

const current_path = () => {
  const { hash, pathname } = window.location;
  return hash ? hash.slice(1) : pathname;
};

export const GTM_EVENTS = {
  GenericRedirect: ({
    new_location,
    section,
  }: {
    new_location: string;
    section: string;
  }) => {
    sendToDataLayerGTM({
      eventName: "redirect_page",
      eventParams: {
        new_location,
        current_location: current_path(),
        section,
      },
    });
  },
};
