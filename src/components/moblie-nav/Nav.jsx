import React, { useState } from "react";
import logo from "../../img/Logo.svg";
import { Link } from "react-router-dom";

import { AiOutlineAlignRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleChange = () => {
    setIsNavOpen(!isNavOpen);
  };

  const manus = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Skill",
      link: "/skill",
    },
    {
      id: 4,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 5,
      name: "Resume",
      link: "/resume",
    },
    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="mx-10 pt-3 text-cyan-50 relative">
        <nav
          className={` backdrop-blur-2xl bg-mainColor/10 w-full h-auto py-3 rounded-xl px-3 `}
        >
          <div className=" flex justify-between items-center md:px-6">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className=" flex items-center ">
              <div className=" hidden md:block">
                <ul className="flex space-x-8">
                  {manus.map((manu) => (
                    <Link
                      to="#te"
                      key={manu.id}
                      className=" first:text-mainColor opacity-50 hover:opacity-100 duration-500 cursor-pointer selection:select-none"
                    >
                      <li className="">{manu.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>

              <div
                className=" block md:hidden ease-in-out duration-700"
                onClick={handleChange}
              >
                {!isNavOpen ? (
                  <AiOutlineAlignRight
                    size="40"
                    className=" text-mainColor/20"
                  />
                ) : (
                  <GrClose size="40px" className=" text-mainColor/20" />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
        {
          <div
            className={
              isNavOpen
                ? ` ease-linear duration-700 absolute px-6 w-full h-full top-28 text-2xl overflow-hidden  bg-transparent`
                : ` hidden`
            }
          >
            <div className=" ease-in-out md:hidden duration-700 bg-mainColor w-full z-50">
              <ul className="flex flex-col space-y-4 mx-6 my-10 ">
                {manus.map((manu) => (
                  <div
                    key={manu.id}
                    className=" first:text-white opacaity-100  hover:opacity-100 duration-500 cursor-pointer selection:select-none"
                  >
                    <li className="">{manu.name}</li> 
                  </div>
                ))}
              </ul>
            </div>
          </div>
        }
    </>
  );
}
