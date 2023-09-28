import Nav from "./components/moblie-nav/Nav";
import About from "./components/about";
import Expreience from "./components/experience/experiences_ALl";
import Project from "./components/project";
import Hero from "./components/hero";

export default function App() {
  return (
    <div className=" bg-bgColor h-auto min-h-screen">
      <Nav />
      <Hero />
      <Expreience/>
      <About />
      <Project/>
    </div>
  );
}
