import Nav from "./Nav";
import Expreience from "./experience";
import Home from "./pages/Home";


export default function App() {
    return (
        <h1 className=" bg-bgColor h-auto min-h-screen">
          <Nav/>
          <Expreience/>
        </h1>
    );
}