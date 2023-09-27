import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Moblie_nav() {
  return (


    <div className="mx-8 pt-7">
      <div className="flex items-center justify-center space-x-4 text-cyan-50  text-2xl duration-1000 transition-opacity mb-8">
        <BsFacebook className="opacity-30 hover:opacity-75" />
        <BsGithub className="opacity-30 hover:opacity-75" />
        <FaInstagram className="opacity-30 hover:opacity-75" />
      </div>
    </div>
  );
}
