<<<<<<< HEAD
import Nav from "./components/moblie-nav/Nav";
import About from "./components/about";
import Expreience from "./components/experience/experiences_ALl";
import Project from "./components/project";
import Hero from "./components/hero";
import { Routes, Route } from "react-router-dom";
// import Technology from "./components/tecnologys/Techonolgy";
import {HomePage} from ""
=======

import { Routes, Route } from "react-router-dom";
import Recomandation from "./components/recomandation";
import Home from "./pages/Home";
import ProejectPage from "./pages/Project";
>>>>>>> f306a06f7f7e0436784d38143b717b7ad4e118d5


export default function App() {
  return (
    <div className=" bg-bgColor h-auto min-h-screen">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage/>}/>
=======


        <Route path="/" element={<Home  />}/>
        <Route path="/projects" element={<ProejectPage  />}/>
>>>>>>> f306a06f7f7e0436784d38143b717b7ad4e118d5
      </Routes>
    </div>
  );
}
