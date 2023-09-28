
import { Routes, Route } from "react-router-dom";
import Recomandation from "./components/recomandation";
import Home from "./pages/Home";


export default function App() {
  return (
    <div className=" bg-bgColor h-auto min-h-screen">
      <Routes>


        <Route path="/" element={<Home  />}/>
      </Routes>
    </div>
  );
}
