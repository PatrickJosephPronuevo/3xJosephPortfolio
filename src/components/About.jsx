import Profile from "../assets/profile4.png";
import Circles from "./Circles";

const About = () => {
  const about = [
    "I am a passionate and creative game developer with expertise in both 2D and 3D game development using Unity. My goal is to craft immersive and engaging experiences that resonate with players, blending innovative mechanics with compelling storytelling. I thrive on continuously learning and adapting to new technologies, trends, and techniques in the gaming industry, ensuring that each project I work on delivers fresh, exciting gameplay. Always striving for excellence, I am committed to pushing the boundaries of interactive entertainment.",
    
  ];

  return (
    <>
      <section className="relative mt-14 sm:mt-20">
        <div
          className="flex items-center gap-x-2"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <div className="w-[50px] h-[3px] bg-primary"></div>
          <h1 className="text-[22px] sm:text-[25px] font-semibold">About Me</h1>
        </div>
        <div className="flex items-center justify-center gap-0 lg:gap-20 xl:gap-32 mt-6 sm:mt-10">
          <div
            className="hidden lg:block bg-primary min-h-[275px] xl:min-h-[350px] xxl:min-h-[400px] rounded-[20px]"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              src={Profile}
              alt="Profile"
              loading="lazy"
              className="min-w-[275px] xl:min-w-[400px] xxl:min-w-[400px] h-[275px] xl:h-[350px] xxl:h-[400px] object-cover rounded-[20px] -rotate-12"
            />
          </div>
          <div
            className="w-full lg:max-w-[680px]"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            {about.map((item, index) => (
              <p
                key={index}
                className="tracking-wide text-[15px] xl:text-[18px] text-justify"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="absolute -top-10 left-[80%] sm:left-[40%]">
          <Circles />
        </div>
      </section>
    </>
  );
};

export default About;
