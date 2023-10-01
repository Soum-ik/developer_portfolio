import { BiSolidCopyAlt } from "react-icons/bi";
import { BsSend, BsWhatsapp } from "react-icons/bs";
import WhatsAppLink from "./Card/whats_Up";

export default function Contact() {
  return (
    <div className=" container  pt-5 md:px-7 md:py-10 pb-10 text-white" id="contact">
      <div className=" px-8 py-7 section">
        <div className=" flex items-center justify-center flex-col px-4 space-y-10">
          <div className=" items-center flex flex-col space-y-3">
            <h1 className="sing">Contact</h1>
            <h1 className="Tittle text-base  ">Conversation</h1>
          </div>
          <div className=" flex flex-col md:flex-row md:space-x-9 space-y-3">
            <div className=" flex items-center justify-center">
              <button className="border text-mainColor/50 border-mainColor/25 space-x-4  items-center px-4 py-5 flex rounded-2xl ">
                <WhatsAppLink/>
                {/* <BsWhatsapp size={30} /> */}
              </button>
            </div>

            <div
              className=" sm:space-y-3 flex pt-4 text-xl items-center flex-col space-y-4
               text-mainColor/50"
            >
              <BsSend size={30} />
              <h1>Email:</h1>
              <p className=" text-white/50 select-none">
                sarkarsoumik215@gmail.com
              </p>
              <BiSolidCopyAlt size={23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
