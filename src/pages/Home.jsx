import { BiSolidCloudDownload } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import logoImg from "../img/Component1.png";
export default function Home() {
  return (
    <div className="px-6 mx-auto md:px-12 py-8 text-white max-w-screen-md">
      <div className="space-y-12 md:flex items-center justify-around ">
        <div className="flex flex-col-reverse md:flex md:flex-row space-y-4">
          <div className=" max-w-md">
            <h1 className="sing">
              👋 Hello!
            </h1>
            <h1 className="Tittle">
              Soumik <br />
              Sarkar
            </h1>
            <p className=" text-white opacity-50 text-lg font-normal">
              Front-end developer ·
            </p>
          </div>
          <div className="">
            <img src={logoImg} className="" />
          </div>
        </div>
        <div className=" mt-8 text-mainColor opacity-50 flex items-center  gap-8 text-lg md:flex-col sm:gap-1 sm:mx-8 md:mx-12">
          <div className="flex items-center space-x-2">
            <h1 className=" text-base ">Baixar CV</h1>
            <BiSolidCloudDownload />
          </div>
          <button className=" border-2 flex p-2 items-center gap-3 border-mainColor rounded-lg">
            <BsWhatsapp />
            <h1 className=" text-base">Conversation</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
