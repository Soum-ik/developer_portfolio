import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BiSolidCloudDownload } from "react-icons/bi";
import logoImg from "../src/img/Component1.png";
import { BsWhatsapp } from "react-icons/bs";
import Home from "./pages/Home";
import { NavLink } from "react-router-dom";
import logo from "../src/img/logo.svg"

const navItems = [
  {
    name: "Home",
    id: 1,
  },
  {
    name: "About me",
    id: 2,
  },
  {
    name: "Projects ",
    id: 3,
  },
  {
    name: "Recomanded",
    id: 4,
  },
  {
    name: "Contact",
    id: 5,
  },
];

/**
 *
 *
 * @export
 * @return {*}
 */
export default function Nav() {
  return (
    <>
      <div className="mx-10 pt-3 text-cyan-50">
        <nav className=" bg-mainColor/10 w-full h-auto py-3 rounded-xl px-3">
          <div className=" flex justify-between items-center px-7">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              
              <h1>Hh</h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
// //width: 122px;
// height: 32px;
// flex-shrink: 0;

// <div className="mx-8 pt-7">
//   <div className="flex items-center justify-center space-x-4 text-cyan-50  text-2xl duration-1000 transition-opacity mb-8">
//     <BsGithub className="opacity-30 hover:opacity-75" />
//     <BsFacebook className="opacity-30 hover:opacity-75" />
//     <FaInstagram className="opacity-30 hover:opacity-75" />
//   </div>
// </div>
