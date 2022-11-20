import { HashRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./pages/Error404/Error404";
import { LandingPage } from "./pages/LandingPage";
import { PrincipalPage } from "./pages/PrincipalPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrincipalPage></PrincipalPage>}></Route>

        <Route path="home" element={<LandingPage></LandingPage>}></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
