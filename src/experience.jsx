import img1 from "./img/CodeIcon.svg";
import img2 from "./img/Component 2.png";
import img3 from "./img/ProjectsIcon.svg";

export default function Expreience() {
  const array = [
    {
      noq: 1,
      Image: img1,
      titel_sub: "6 month+",
      tittle: "Programmer",
    },
    {
      noq: 2,
      Image: img2,
      titel_sub: "1 year+",
      tittle: "Deginer",
    },
    {
      noq: 1,
      Image: img1,
      titel_sub: "7 months +",
      tittle: "Developement",
    },
  ];

  return (
    <>
      <div className="mx-8 pt-12 space-y-4 flex flex-col items-center justify-center">
        {array.map((key) => {
            <div className="border border-mainColor " key={key}>
                
            </div>
        })}
      </div>
    </>
  );
}
