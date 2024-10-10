import React from "react";
import { Link } from "react-router-dom";

const ViewCodeButton = ({ url }) => {
  return (
    <>
      <button className="bg-accent w-[150px] py-[6px] rounded-[5px] text-white tracking-wide font-medium text-[13px] md:text-[15px] hover:bg-hoveredButton  transform hover:-translate-y-[2px] shadow-md shadow-[rgba(48,18,17,.50)] transition-all duration-200">
        <Link to={url} target="_blank">
          View Code
        </Link>
      </button>
    </>
  );
};

export default ViewCodeButton;
