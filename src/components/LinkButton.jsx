import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ url, text }) => {
  const buttonStyle =
    "bg-accent text-white w-[200px] py-2 rounded-[5px] hover:bg-hoveredButton  transform hover:-translate-y-[2px] shadow-md shadow-[rgba(48,18,17,.50)] transition-all duration-200";
  return (
    <>
      <button className={buttonStyle}>
        <Link to={url} className="tracking-wider font-medium text-[16px]">
          <span className="capitalize">{text}</span>
        </Link>
      </button>
    </>
  );
};

export default LinkButton;
