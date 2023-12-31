import logo from "../img/Component1.png";
import MyCV from "./Card/cv";
import WhatsAppLink from "./Card/whats_Up";
import Moblie_item from "./moblie-nav/moblie";

const Hero = () => {
  return (
    <div className="md:mx-10 pt-20">
      <div className=" sm:container">
        <div className="flex flex-col-reverse md:flex-row text-white items-center ">
          <div className=" grow flex flex-col max-w-sm">
            <h1 className="sing">Hello</h1>
            <h1 className="Tittle">Soumik Sarkar</h1>
            <p className="text-white/30 text-xl">Fontend Developer</p>
            <div className="hidden md:block md:-ml-[282px]">
              {/* Here is my CV */}
              {<Moblie_item />}
            </div>
          </div>
          <img src={logo} className="md:grow-[2] w-[400px]" alt="" />
          <div className=" grow text-mainColor/50 hidden md:block space-y-2">
            {/* <div className="flex space-x-4 items-center justify-end "> */}
            <MyCV />

            <div className="flex space-x-4 items-center justify-end">
              <WhatsAppLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
