import Nav from "./components/moblie-nav/Nav";
import About from "./components/about";
import Expreience from "./components/experience/experiences_ALl";
import Project from "./components/project";
import Hero from "./components/hero";
import { Routes, Route } from "react-router-dom";
// import Technology from "./components/tecnologys/Techonolgy";



export default function App() {
  return (
    <div className=" bg-bgColor h-auto min-h-screen">
      <Routes>


        <Route path="/" element={<Nav/>}/>
        <Route path="" element={<Hero/>}/>
        <Route path="/" element={<Expreience/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/" element={<Project/>}/>
        {/* <Route path="/" element={<About/>}/> */}
      {/* <Nav />
      <Hero />
      <Expreience/>
      <About />
      <Project/> */}
      {/* <Videos/> */}
      </Routes>
    </div>
  );
}
