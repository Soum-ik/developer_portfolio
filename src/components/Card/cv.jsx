import React from "react";
import { BsDownload } from "react-icons/bs";

const MyCV = () => {
  return (
    <div>
      <a
        href="https://drive.google.com/file/d/1WeoVPEpnINd1Zo3bj4tMnJ-jD5jc0TE8/view?usp=drive_link"
        className="flex space-x-4 items-center justify-end "
        download="your_cv.pdf"
        target="_blank"
      >
        {/* <di> */}
        <h1>My CV</h1>
        <BsDownload size={20} />
        {/* </di/v> */}
      </a>
    </div>
  );
};

export default MyCV;
