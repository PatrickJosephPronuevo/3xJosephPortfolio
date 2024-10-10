import { useState } from "react";

const Card = ({ title, img, gif, date, count }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="relative col-span-4 bg-background shadow-lg shadow-[rgba(48,17,8,.25)] rounded-[8px] hover:scale-105 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={isHovered ? gif : img}
            alt={title}
            loading="lazy"
            className="w-full h-[160px] xs:h-[250px] sm:h-[300px] md:h-[350px] mdl:h-[200px] lg:h-[215px] object-cover rounded-t-[8px]"
          />
        </div>
        <div className="py-3 px-5 flex items-center justify-between">
          <h1 className="text-[18px] font-bold tracking-wide truncate uppercase">
            {title}
          </h1>
          <span className="font-bold tracking-wide">{date}</span>
        </div>

        <div className="absolute -top-2 -end-2 bg-[rgba(48,18,7,.5)] rotate-6 w-[35px] h-[35px] grid place-items-center rounded-[5px] border-2 border-accent text-white font-semibold z-[1]">
          <p>{count}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
