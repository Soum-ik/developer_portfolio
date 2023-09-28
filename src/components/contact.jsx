import { BiSolidCopyAlt } from "react-icons/bi";
import { BsSend, BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <div className=" container pt-5 px-7 py-10 pb-10 text-white">
      <div className=" px-8 py-7 section">
        <div className=" flex items-center justify-center flex-col px-4 space-y-10">
          <div className=" items-center flex flex-col space-y-3">
            <h1 className="sing">Contact</h1>
            <h1 className="Tittle">Conversation</h1>
          </div>
          <div className=" flex float-left md:items-center md:flex-row flex-col space-x-14">
            <button className="border text-mainColor/50 border-mainColor/25 space-x-4 flex items-center px-4 py-5 rounded-2xl ">
              <p className=" text-xl">Conversation</p>
              <BsWhatsapp size={30} />
            </button>
            <div className=" space-y-3 flex  text-xl items-center flex-col text-mainColor/50">
              <BsSend size={30} />
              <h1>Email:</h1>
              <p className=" text-white/50 select-none">sarkarsoumik215@gmail.com</p>
              <BiSolidCopyAlt size={23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
