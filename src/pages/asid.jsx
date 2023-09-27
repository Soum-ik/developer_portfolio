import {BiSolidCloudDownload} from "react-icons/bi"
import {BsWhatsapp} from "react-icons/bs"

export default function Asid() {
  return (
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
  );
}
