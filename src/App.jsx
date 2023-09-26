import Nav from "./Nav";
import About from "./about";
import Expreience from "./experience";
import Home from "./pages/Home";


export default function App() {
    return (
        <div className=" bg-bgColor h-auto min-h-screen">
          <Nav/>
          <Home/>
          <Expreience/>
          <About/>
        </div>
    );
}