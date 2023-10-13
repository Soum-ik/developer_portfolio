import img from "../img/about_img.png";

export default function About() {
  return (
    <div className="container mt-10" id="about">
      <div className="md:section grid grid-cols-1 md:grid-cols-2 gap-5 only:md:gap-12">
        <div className=" flex items-center justify-center relative">
          <img src={img} className="w-80" alt="" />
          <div className=" absolute bg-mainColor opacity-10 sm:w-96 sm:h-96  rounded-full  filter blur-3xl"></div>
        </div>
        <div className="">
          <p className="sing">🧐 About me</p>
          <div className=" bg-mainColor/10 filter sm:w-[200px] sm:h-[300px] blur-3xl right-3 top-3 absolute"></div>
          <h1 className="Tittle">Soumik Sarkar</h1>
          <p className=" text-white opacity-50 line-clamp-5 hover:line-clamp-none duration-1000 ease-in">
            Hi,I am Soumik. I am an experienced Fontend web developer. I have
            worked in multiple technologies to build websites and web
            applications.For me as professional web developer, learning new
            technologies in web is my passion. Right now, I am working as
            Front-end developer on different platform. Just to inform you,
            JavaScript is my love. I love to code in JavaScript, build projects
            in JavaScript .
          </p>
        </div>
      </div>
    </div>
  );
}
