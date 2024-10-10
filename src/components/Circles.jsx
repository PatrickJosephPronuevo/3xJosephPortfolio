import React from "react";

const Circles = () => {
  return (
    <>
      <div className="relative w-[85px] sm:w-[100px] h-[85px] sm:h-[100px] animate-bounce">
        <div className="flex -space-x-10 sm:-space-x-20 absolute bottom-0 left-0 animate-spin">
          <div className="w-[50px] sm:w-[65px] h-[50px] sm:h-[65px] rounded-full bg-[rgba(48,18,7,.25)]"></div>
          <div className="w-[50px] sm:w-[65px] h-[50px] sm:h-[65px] rounded-full bg-[rgba(225,98,17,.50)]"></div>
        </div>

        <div className="flex -space-x-5 sm:-space-x-10 absolute top-0 right-0 animate-spin">
          <div className="w-[25px] sm:w-[33px] h-[25px] sm:h-[33px] rounded-full bg-[rgba(48,18,7,.25)]"></div>
          <div className="w-[25px] sm:w-[33px] h-[25px] sm:h-[33px] rounded-full bg-[rgba(225,98,17,.50)]"></div>
        </div>
      </div>
    </>
  );
};

export default Circles;
