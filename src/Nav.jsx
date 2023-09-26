import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BiSolidCloudDownload } from "react-icons/bi";
import logoImg from "../src/img/Component1.png";
import { BsWhatsapp } from "react-icons/bs";
import Home from "./pages/Home";
/**
 *
 *
 * @export
 * @return {*}
 */
export default function Nav() {
  return (
    <>
      <div className="mx-8 pt-7">
        <div className="flex items-center justify-center space-x-4 text-cyan-50  text-2xl duration-1000 transition-opacity mb-8">
          <BsGithub className="opacity-30 hover:opacity-75" />
          <BsFacebook className="opacity-30 hover:opacity-75" />
          <FaInstagram className="opacity-30 hover:opacity-75" />
        </div>
      </div>
    </>
  );
}
// //width: 122px;
// height: 32px;
// flex-shrink: 0;
