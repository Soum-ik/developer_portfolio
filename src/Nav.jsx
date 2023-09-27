import React, { useState } from "react";
import logo from "../src/img/logo.svg";
import { useEffect } from "react";

export default function Nav() {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setWidth(false);
    }
  }, [width]);

  console.log(width);

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
      <div className="mx-10 pt-3 text-cyan-50">
        <nav
          className={` backdrop-blur-2xl bg-mainColor/10 w-full h-auto py-3 rounded-xl px-3 `}
        >
          <div className=" flex justify-between items-center px-7">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className=" flex items-center ">
              <div className=" hidden md:block">
                <ul className="flex space-x-8">
                  {manus.map((manu) => (
                    <div
                      key={manu.id}
                      className=" first:text-mainColor opacity-50 hover:opacity-100 duration-500 cursor-pointer selection:select-none"
                    >
                      <li className="">{manu.name}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
