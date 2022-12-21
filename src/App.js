import { HashRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./pages/Error404/Error404";
import { PrincipalPage } from "./pages/PrincipalPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";

// import styles from "./App.module.css";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { ResumenPage } from "./pages/ResumenPage/ResumenPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      {/* Fix Scroll Restoration in React Router Dom */}
      <ScrollToTop></ScrollToTop>

      <Routes>
        <Route path="/" element={<PrincipalPage></PrincipalPage>}></Route>
        <Route path="/home" element={<LandingPage></LandingPage>}></Route>

        <Route path="/acerca" element={<AboutPage></AboutPage>}></Route>
        <Route path="/resumen" element={<ResumenPage></ResumenPage>}></Route>
        <Route
          path="/proyectos"
          element={<ProjectsPage></ProjectsPage>}
        ></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
