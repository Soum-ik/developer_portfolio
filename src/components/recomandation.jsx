import Recomandations from "./util/recomandtion";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export default function Recomandation() {
  return (
    <div className=" pt-6 container py-7">
      <div className=" space-y-8">
        <h1 className=" sing">Recomandtion</h1>
        <div className=" space-y-4 flex flex-row items-center justify-between">
          <p className="Tittle"> Meet Up</p>
          <button className=" flex flex-row gap-2">
            <BiLeftArrow size={30} className=" bg-mainColor/30" />
            <BiRightArrow size={30} className=" bg-mainColor/30" />
          </button>
        </div>
        <div className=" custom_Blur absolute bottom-7 sm:left-52">

        </div>
        <div className=" custom_Grid">
          {Recomandations.map((rec) => (
            <div
              className=" border border-mainColor/25 bg-gradient-to-b from-mainColor/5 to-white/5 rounded-2xl px-6 py-6 text-white/50 space-y-6"
              key={rec.id}
            >
              <div>
                <h1 className=" text-5xl">{rec.icon}</h1>
                <h1 className=" text-base">{rec.text}</h1>
              </div>
              <div className=" flex space-x-5">
                <img src={rec.Image} alt="" />
                <div className=" flex flex-col">
                  <h1 className="text-white">{rec.name}</h1>
                  <h1 className=" text-mainColor/50">{rec.dep}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
