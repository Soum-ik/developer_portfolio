import { BsArrow90DegUp, BsGithub } from "react-icons/bs";
import Button from "../../buttom/Buttom";
// import { Contents } from "../Card/card_content";
import img from "../../img/ss.png";
import img1 from "../../img/ss1.png";
import img2 from "../../img/ss3.png";
import img3 from "../../img/morden.png";
import img4 from "../../img/resume.png";
import img5 from "../../img/img5.png";
export default function Card({ btn1, btn2 }) {
  const Contents = [
    {
      id: 1,
      Title: "Quiz app",
      Dic: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium maxime vitae soluta, iste commodi, debitis saepe doloribus, illum fugiat sit ratione quidem dolorem. Similique explicabo, rem asperiores laudantium accusantium iusto!",
      Image: img,
      git: "https://github.com/Soum-ik/React_Quiz",
      live: "https://soum-ikquiz.netlify.app/",
    },
    {
      id: 2,
      Title: "Cuision",
      Dic: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium maxime vitae soluta, iste commodi, debitis saepe doloribus, illum fugiat sit ratione quidem dolorem. Similique explicabo, rem asperiores laudantium accusantium iusto!",
      Image: img1,
      git: "https://github.com/Soum-ik/soumik-cuisine-res",
      live: "https://soumik-s-cuision.netlify.app/",
    },
    {
      id: 3,
      Title: "UI Libaray",
      Dic: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium maxime vitae soluta, iste commodi, debitis saepe doloribus, illum fugiat sit ratione quidem dolorem. Similique explicabo, rem asperiores laudantium accusantium iusto!",
      Image: img2,
      git: "https://github.com/Soum-ik/Soum-ik",
    },
    {
      id: 4,
      Title: "Morden UI",
      Dic: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium maxime vitae soluta, iste commodi, debitis saepe doloribus, illum fugiat sit ratione quidem dolorem. Similique explicabo, rem asperiores laudantium accusantium iusto!",
      Image: img3,
      live: "https://morden-ui.vercel.app/",
      git: "https://github.com/Soum-ik/result_Finder-",
    },
    {
      id: 5,
      Title: "Resume Builder",
      Dic: "Unlock new possibilities for career advancement with our Resume Builder application, streamlining CV creation in just 3 minutes. Stay tuned for exciting updates as we enhance your experience with additional features!   Revolutionize Your CV Creation! ",
      Image: img4,
      live: "https://resume-builder-soum-ik.vercel.app/",
      git: "https://github.com/Soum-ik/Resume_Builder/",
    },
    {
      id: 6,
      Title: "Netflix Clone",
      Dic: " 🚀 Dive into the magic of my Netflix clone, crafted with love using React.js, tailwind CSS, and powered by the epic TMDB API. 🍿💻 Check out the binge-worthy experience now! 🌟 If you're feeling the excitement, show some love by giving it a star on GitHub. Let's celebrate the thrill of DIY streaming! 🌈🚀",
      Image: img5,
      live: "https://netflixwebsiteclone.vercel.app/",
      git: "https://github.com/Soum-ik/InnovixionTech-Dec1-",
    },
  ];

  return (
    <div className="pt-6 rounded-lg ">
      <div className=" grid  md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5 ">
        {Contents.map((content) => (
          <div
            key={content.id}
            className="border border-mainColor space-y-5 px-3 sm:px-5 py-6 rounded-xl md:space-y-12"
          >
            <div className="space-y-2">
              <h1 className="text-white/80 md:text-xl text-base ">
                {content.Title}
              </h1>
              <p className="text-white/50 text-sm md:text-sm">{content.Dic}</p>
            </div>

            <div className="">
              <div className=" my-3 text-xs flex items-center flex-col sm:flex-row justify-between sm:gap-0 gap-3">
                {/* some cahnge */}
                <div className="space-x-3 space-y-2 flex-1 text-[15px] ">
                  <Button>{btn1}</Button>
                  <Button>{btn2}</Button>
                </div>
                <div className=" text-mainColor/30 flex items-center space-x-3 text-2xl">
                  <a href={content.git} target="_blank" rel="noreferrer">
                    <BsGithub />
                  </a>
                  <a href={content.live} target="_blank" rel="noreferrer">
                    <BsArrow90DegUp />
                  </a>
                </div>
              </div>
              <div>
                <img
                  className=" rounded-md aspect-video object-cover"
                  src={content.Image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
