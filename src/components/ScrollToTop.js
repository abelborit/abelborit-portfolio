/* Fix Scroll Restoration in React Router Dom */
/* https://www.youtube.com/watch?v=IPESg2qXl8w&ab_channel=TsbSankara */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
