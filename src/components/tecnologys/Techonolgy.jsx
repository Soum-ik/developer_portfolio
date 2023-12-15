import { BiLogoTailwindCss } from "react-icons/bi";
import {
  FaCss3,
  FaFigma,
  FaFire,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiNetlify,
  SiNextdotjs,
  SiNotion,
  SiRedux,
  SiVercel,
} from "react-icons/si";

export default function Technology() {
  return (
    <div className=" container text-white max-w-4xl" id="skill">
      <div className=" -left-[300px] -bottom-5  absolute custom_Blur"></div>
      <div className="section space-y-14">
        <div className=" flex flex-col space-y-12">
          <div className=" flex items-center justify-center flex-col md:space-y-3 space-y-8">
            <button className="sing">🧑‍💻 Skills · Experiências</button>
            <p className=" text-3xl font-semibold">Technologies and skills</p>
          </div>
          {/* <div className=" top-0 right-0 absolute custom_Blur"></div> */}
          <div className=" -bottom-4 right-2 absolute custom_Blur"></div>
          <div className=" flex items-center justify-center flex-col space-y-5 overflow-x-hidden">
            <p className=" text-white/50 font-medium">
              Techs I use regulary for my project..
            </p>
            <div className=" flex space-x-8 md:text-5xl text-4xl  text-mainColor/50 ">
              <FaHtml5 className=" hover:shadow-xl shadow-white" />
              <FaCss3 className=" hover:shadow-xl shadow-white" />
              <FaFigma className=" hover:shadow-xl shadow-white" />
              <FaJs className=" hover:shadow-xl shadow-white" />
              <FaReact className=" hover:shadow-xl shadow-white" />
              <FaFire className=" hover:shadow-xl shadow-white" />
              <FaGit className=" hover:shadow-xl shadow-white" />
              <FaGithub className=" hover:shadow-xl shadow-white" />
              <SiNetlify className=" hover:shadow-xl shadow-white " />
              <SiNextdotjs className=" hover:shadow-xl shadow-white " />
              <SiVercel className=" hover:shadow-xl shadow-white " />
              <SiNotion className=" hover:shadow-xl shadow-white " />
              <SiRedux className=" hover:shadow-xl shadow-white " />
            </div>
          </div>

          <div className=" bottom-78 left-0 absolute custom_Blur"></div>
          <div className=" flex items-center justify-center flex-col space-y-5 overflow-hidden">
            <p className=" text-white/50 font-medium">
              Favorite and most of the time..
            </p>
            {/* <div className=" "> */}
            <div className=" flex space-x-8 md:text-5xl text-4xl text-mainColor/50 ">
              <FaFigma />
              <BiLogoTailwindCss />
              <FaJs />
              <FaReact />
              <FaGithub />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
