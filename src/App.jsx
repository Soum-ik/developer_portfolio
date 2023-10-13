import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProejectPage from "./pages/Project";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className=" bg-bgColor h-auto min-h-screen">
      {loading ? (
        <div className=" grid place-content-center min-h-screen  text-mainColor/50">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#7B4AE2"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProejectPage />} />
        </Routes>
      )}

    </div>
  );
}
