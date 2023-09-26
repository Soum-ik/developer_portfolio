import img from "../src/img/about_img.png";

export default function About() {
  return (
    <div className="container">
      <div className="section grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className=" flex items-center justify-center ">
          <img src={img} className="" alt="" />
        </div>
        <div className="">
          <p className="sing">🧐 About me</p>
          <h1 className="Tittle">Washington Henrique</h1>
          <p className=" text-white opacity-50 backdrop-blur-2xl bg-white/5">
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
