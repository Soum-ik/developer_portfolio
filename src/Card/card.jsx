import Button from "../buttom/Buttom";
// import { Contents } from "../Card/card_content";
import img from "../img/ss.png";
import img1 from "../img/ss1.png";
import img2 from "../img/ss3.png";

export default function Card({ btn1, btn2 }) {
  const Contents = [
    {
      id: 1,
      Title: "Quiz app",
      Dic: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium maxime vitae soluta, iste commodi, debitis saepe doloribus, illum fugiat sit ratione quidem dolorem. Similique explicabo, rem asperiores laudantium accusantium iusto!",
      Image: img,
    },
    {
      id: 2,
      Title: "Cuision",
      Dic: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium maxime vitae soluta, iste commodi, debitis saepe doloribus, illum fugiat sit ratione quidem dolorem. Similique explicabo, rem asperiores laudantium accusantium iusto!",
      Image: img1,
    },
    {
      id: 3,
      Title: "UI Libaray",
      Dic: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium maxime vitae soluta, iste commodi, debitis saepe doloribus, illum fugiat sit ratione quidem dolorem. Similique explicabo, rem asperiores laudantium accusantium iusto!",
      Image: img2,
    },
  ];

  return (
    <div className="pt-6 rounded-lg ">
      <div className=" grid place-content-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {Contents.map((content) => (
          <div
            key={content.id}
            className="border border-mainColor space-y-5 px-5 py-6 rounded-xl md:space-y-12"
          >
            <div className="space-y-2">
              <h1 className="text-white/80 md:text-xl text-base ">
                {content.Title}
              </h1>
              <p className="text-white/50 text-sm md:text-sm">{content.Dic}</p>
            </div>

            <div className="">
              <div className="space-x-3 my-3 text-xs">
                <Button props>{btn1}</Button>
                <Button props>{btn2}</Button>
              </div>
              <div>
                <img className=" rounded-md" src={content.Image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
