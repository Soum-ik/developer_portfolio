import { AiOutlineLink } from "react-icons/ai";
import Card from "../components/Card/card";
import Button from "../buttom/Buttom";

export default function Project() {
  return (
    <div className="pb-9 px-8 md:container">
      <div className=" space-y-5">
        <div className="sing  flex items-center gap-1 justify-center py-1">
          <AiOutlineLink className=" hover:bg-mainColor/10 duration-500 rounded-xl hover:w-6 hover:h-5 hover:p-1" />
          <h1 className=" ">Portfolio</h1>
        </div>
        <div className=" flex md:flex-row flex-col justify-between md:px-4">
          <div>
            <p className="Tittle first-letter:odd:text-mainColor">Project</p>
          </div>
          <div className=" flex gap-4 ">
            <Button children="UI DEGINER" />
            <Button props="special" children="API" />
            <Button children="SERVER" />
          </div>
        </div>

        <div className=" px-5 ">
          <Card btn1="React" btn2="Tailwindcss" />
        </div>
      </div>
    </div>
  );
}