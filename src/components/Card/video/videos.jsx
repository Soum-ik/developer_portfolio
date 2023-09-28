
import Video from "./video";
export default function Videos() {
  return (
    <div className=" container text-white py-7">
      <h1 className=" text-4xl">Project Video</h1>
      <p className=" text-base text-white/20"></p>
      <div className="custom_Grid px-4 py-4">
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}
