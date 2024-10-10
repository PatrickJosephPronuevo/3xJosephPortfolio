import { Link } from "react-router-dom";
import Links from "./Links";

const Header = () => {
  return (
    <>
      <header
        className="mx-[20px] sm:mx-[50px] md:mx-[120px] mt-[25px] sm:mt-[50px] text-primary"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <div className="sm:container mx-auto flex justify-between items-center">
          <Link to="/">
            <span className="kanit font-medium tracking-wide text-[18px] sm:text-[20px]">
              @3xjoseph.
            </span>
          </Link>
          <div className="flex items-center gap-x-[15px]">
            <Links />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
