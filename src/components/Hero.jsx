import React from "react";
import DownloadButton from "./DownloadButton";
import Profile from "../assets/profile.jpg";
import Circles from "./Circles";

const Hero = () => {
  const spanStyle = "text-accent font-semibold";
  return (
    <>
      <section className="h-[65vh] xs:h-[75vh] md:h-[85vh] flex items-center justify-center gap-32 relative">
        <div
          className="w-full max-w-[680px] flex flex-col gap-5"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <div>
            <h3 className="text-center lg:text-start text-[25px] sm:text-[35px] md:text-[42px] lg:text-[32px] xxl:text-[45px] font-semibold tracking-wide">
              Patrick Joseph Pronuevo
            </h3>
            <p className="text-[15px] md:text-[18px] mt-3 lg:mt-0 text-center lg:text-justify lg:text-[15px] xl:text-[16.5px] tracking-wide">
              A Graduate from
              <span className={spanStyle}> Bulacan State University, </span>
              Adept in the realms of
              <span className={spanStyle}> Web Development </span>
              as well as
              <span className={spanStyle}> Mobile Application </span>
              and
              <span className={spanStyle}> Game Development. </span>With a keen
              interest in the latest technologies, I am committed to staying
              updated and continuously expanding my skills to create innovative
              solutions.
            </p>
          </div>
          <DownloadButton />
        </div>
        <div
          className="hidden lg:block bg-primary min-h-[275px] xl:min-h-[350px] xxl:min-h-[400px] rounded-[20px]"
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <img
            src={Profile}
            alt="Profile"
            loading="lazy"
            className="min-w-[275px] xl:min-w-[400px] xxl:min-w-[400px] h-[275px] xl:h-[350px] xxl:h-[400px] object-cover rounded-[20px] rotate-12"
          />
        </div>

        <div className="absolute -bottom-16 xs:bottom-0 left-0 sm:left-20">
          <Circles />
        </div>
      </section>
    </>
  );
};

export default Hero;
