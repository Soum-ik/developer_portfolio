import { BsPlayBtn } from "react-icons/bs";
import Button from "../../../buttom/Buttom";
// import {} from "react-icons"

export default function Video() {
  return (
    <div className="border border-mainColor/25 rounded-2xl flex flex-col items-center py-3 px-3">
      <iframe  className=" aspect-video rounded-lg" src="https://www.youtube.com/embed/p0vPBuwzjA4" frameborder="0"  allowFullScreen></iframe>

      <div>
        <h1>Video</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          explicabo numquam dicta porro exercitatio
        </p>
        <div className="">
          <Button children={"React"} />
          <Button children={"React"} />
          <div>
            <h1>Play</h1>
            <BsPlayBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
