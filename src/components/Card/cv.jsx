import React from "react";
import { BsDownload } from "react-icons/bs";

const MyCV = () => {
  return (
    <div>
      <a
        href="https://drive.google.com/file/d/13hzrDrEpy7JTxPUE9WOSrA6wUCw19ejG/view?usp=drive_link"
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
// https://drive.google.com/file/d/13hzrDrEpy7JTxPUE9WOSrA6wUCw19ejG/view?usp=drive_link
export default MyCV;
