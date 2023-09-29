import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Moblie_item() {
  return (


    <div className=" sm:pl-7  sm:pt-3  ">
      <div className="flex items-center justify-center space-x-4 text-cyan-50  text-4xl duration-1000 transition-opacity ">
        <BsFacebook className="opacity-30 hover:opacity-75" />
        <BsGithub className="opacity-30 hover:opacity-75" />
        <FaInstagram className="opacity-30 hover:opacity-75" />
      </div>
    </div>
  );
}
