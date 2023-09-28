import About from "../components/about";
import Contact from "../components/contact";
import Expreience from "../components/experience/experiences_ALl";
import Last from "../components/footer";
import Hero from "../components/hero";
import Nav from "../components/moblie-nav/Nav";
import Project from "../components/project";
import Recomandation from "../components/recomandation";
import Technology from "../components/tecnologys/Techonolgy";



export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Expreience/>
      <About/>
      <Project/>
      <Technology/>
      <Recomandation/>
      <Contact/>
      <Last/>
    </>
  );
}
