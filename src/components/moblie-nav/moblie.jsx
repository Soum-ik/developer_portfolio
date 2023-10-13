import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

export default function Moblie_item() {


  return (

    <div className=" sm:pl-7  sm:pt-3  ">
      <div className="flex items-center justify-center space-x-4 text-cyan-50  text-2xl duration-1000 transition-opacity ">
        <a target="_blank" href="https://www.facebook.com/soumik.sarkar.16547">
          <BsFacebook className="opacity-30 hover:opacity-75" />
        </a>
        <a target="_blank" href="https://github.com/Soum-ik/">
          <BsGithub className="opacity-30 hover:opacity-75" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/soumik.sarkar.16547/"
        >
          <FaInstagram className="opacity-30 hover:opacity-75" />
        </a>
      </div>
    </div>
  );
}
