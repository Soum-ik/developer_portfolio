import Nav from "./Nav";
import About from "./about";
import Expreience_Buttom from "./components/experience/experience";
import Moblie_nav from "./components/moblie-nav/moblie";
import Expreience from "./experience";
// import Home from "./pages/Home";
import Project from "./project";

export default function App() {
  return (
    <div className=" bg-bgColor h-auto min-h-screen">
      <Expreience/>
      <Expreience_Buttom/>
    </div>
  );
}
