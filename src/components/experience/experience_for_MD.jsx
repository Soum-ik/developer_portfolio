export default function Expreience_Buttom() {
  const exps = [
    { id: 1, sub_tittle: "Development", tittle: "Font-end" },
    { id: 2, sub_tittle: "Projects", tittle: "Experiences"},
    { id: 3, sub_tittle: "Programming", tittle: "C . JS"},
  ];

  return (
    <div className=" bg-mainColor/10 text-white py-7 rounded-xl ">
      <div className=" custom_Grid px-8 ">
        {exps.map((exp) =>(
            <div className="flex flex-col items-center justify-center text-mainColor " key={exp.id}>
                <p className=" text-base ">{exp.sub_tittle}</p>      
                <h1 className=" text-3xl">{exp.tittle}</h1>      
            </div>
        ))}
      </div>
    </div>
  );
}
