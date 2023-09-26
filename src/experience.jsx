import img1 from "./img/CodeIcon.svg";
import img2 from "./img/Component 2.png";
import img3 from "./img/ProjectsIcon.svg";

export default function Expreience() {
  const experiences = [
    {
      id: 1,
      Image: img1,
      titel_sub: "6 month+",
      tittle: "Programming",
    },
    {
      id: 2,
      Image: img2,
      titel_sub: "1 year+",
      tittle: "Degineing",
    },
    {
      id: 1,
      Image: img3,
      titel_sub: "1.3 year +",
      tittle: "Developement",
    },
  ];

  return (
    <div className="container C_box">
      <div className="section gap-4">
        <div className=" max-w-md grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-y-3">
          {experiences.map((experience, index) => (
            <div className="border border-mainColor border-opacity-20 hover:shadow-2xl hover:border-white duration-1000 transition-colors shadow-mainColor rounded-xl px-10 py-10 flex items-center justify-center flex-col last:bg-mainColor last:bg-opacity-10 space-x-2" key={index}>
              <img src={experience.Image} alt="" />
              <p className=" text-base">{experience.titel_sub}</p>
              <h1 className=" text-2xl">{experience.tittle}</h1>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  );
}
