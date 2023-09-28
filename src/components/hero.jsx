import { BsDownload, BsWhatsapp } from "react-icons/bs";
import logo from "../img/Component1.png";
import Moblie_item from "./moblie-nav/moblie";
// import { GrDownloadOption } from "react-icons/gr";

export default function Hero() {
  return (
    <div className="mx-10 pt-20">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row text-white items-center ">
          <div className=" grow flex flex-col max-w-sm">
            <h1 className="sing">Hello</h1>
            <h1 className="Tittle">Soumik Sarkar</h1>
            <p className="text-white/30 text-xl">Fontend Developer</p>
            <div className="hidden md:block md:-ml-[282px]">{<Moblie_item />}</div>
          </div>
          <img src={logo} className="md:grow-[2] w-[400px]" alt="" />
          <div className=" grow text-mainColor/50 hidden md:block space-y-2" >
            <div className="flex space-x-4 items-center justify-end ">
              <p>Here is My CV</p>
              < BsDownload/>
            </div>
            <div className="flex space-x-4 items-center justify-end ">
              <p>Conversation</p>
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
