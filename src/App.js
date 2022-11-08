import { HashRouter, Route, Routes } from "react-router-dom";
// import { AboutPage } from "./pages/AboutPage";
// import { ContactPage } from "./pages/ContactPage";
// import { ProjectsPage } from "./pages/ProjectsPage";
// import { ResumenPage } from "./pages/ResumenPage";
import { Error404 } from "./pages/Error404";
import { LandingPage } from "./pages/LandingPage";
import { PrincipalPage } from "./pages/PrincipalPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrincipalPage></PrincipalPage>}></Route>

        <Route path="home" element={<LandingPage></LandingPage>}></Route>

        {/* <Route path="/acerca" element={<AboutPage></AboutPage>}></Route> */}

        {/* <Route path="/resumen" element={<ResumenPage></ResumenPage>}></Route> */}

        {/* <Route
          path="/proyectos"
          element={<ProjectsPage></ProjectsPage>}
        ></Route> */}

        {/* <Route path="/contacto" element={<ContactPage></ContactPage>}></Route> */}

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
