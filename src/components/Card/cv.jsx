import React from "react";
import { BsDownload } from "react-icons/bs";

const MyCV = () => {
  return (
    <div>
      <a
        href="/path_to_your_cv.pdf"
        className="flex space-x-4 items-center justify-end "
        download="your_cv.pdf"
      >
        {/* <di> */}
        <h1>My CV</h1>
        <BsDownload size={30} />
        {/* </di/v> */}
      </a>
    </div>
  );
};

export default MyCV;
