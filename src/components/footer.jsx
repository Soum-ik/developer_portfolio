import Moblie_item from "../components/moblie-nav/moblie";
import Footer from "../components/moblie-nav/moblie";
export default function last() {
  return (
    <div className=" px-5 w-full text-xl bg-mainColor/10   py-6">
      <div className=" flex items-center justify-evenly px-4">
        <div className=" space-y-3 ">
          <h1 className=" text-white/20 text-center">
            Built & Desigend by @{" "}
            <span className=" text-white/80 text-xl">Soumik Sarkar </span> 2023
          </h1>
          <Moblie_item />
        </div>
      </div>
    </div>
  );
}
