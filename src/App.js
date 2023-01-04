import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Particles from "./components/Particles/Particles";
import GlitchingTitles from "./components/GlitchingTitles/GlitchingTitles";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Documents from "./components/Documents/Documents";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <NavBar />
          <Particles className={"particles-container"} />
          <Particles className={"particles-container"} isFaster={true} />
          <Particles className={"particles-container-2"} />
          <Particles className={"particles-container-3"} />
        </header>
        <Routes>
          <Route path="/:page" element={<Documents />} />
          <Route path="/" element={<Documents />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
