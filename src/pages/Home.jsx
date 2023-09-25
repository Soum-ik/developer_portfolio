import { BiSolidCloudDownload } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import logoImg from "../img/Component1.png";
export default function Home() {
  return (
    <div className="mx-6 space-y-6">
      <div className="">
        <img src={logoImg} className="selection:select-none" />
      </div>
      <div className="w-[375px]">
        <h1 className="w-[122px] rounded-md text-center justify-center text-mainColor  p-1 bg-mainColor bg-opacity-10 font-medium">
          👋 Hello!
        </h1>
        <h1 className=" py-4 text-white text-5xl font-extrabold line-clamp-3">
          Soumik <br />
          Sarkar
        </h1>
        <p className=" text-white opacity-50 text-lg font-normal">
          Front-end developer · Trader
        </p>
      </div>
      <div className=" mt-8 text-mainColor opacity-50 flex items-center  gap-8 text-lg">
        <div className="flex items-center space-x-2 ">
          <h1>Baixar CV</h1>
          <BiSolidCloudDownload />
        </div>
        <button className=" border-2 flex p-2 items-center gap-3 border-mainColor rounded-lg">
          <BsWhatsapp />
          <h1>Vamos conversar </h1>
        </button>
      </div>
    </div>
  );
}
