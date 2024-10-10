import ViewCodeButton from "../components/ViewCodeButton";
import { ProjectsData } from "../data/ProjectsData";

const Projects = () => {
  const myProjectDescription =
    "A showcase of my latest and most impactful work. This portfolio highlights a diverse range of projects that demonstrate my skills, creativity, and dedication to excellence. Each project is a testament to my ability to tackle complex challenges, innovate solutions, and deliver results that exceed expectations.";

  return (
    <>
      <main className="text-primary mt-10 mx-[20px] sm:mx-[50px] md:mx-[120px]">
        <section className="sm:container mx-auto">
          <div>
            <div
              className="flex flex-col items-center gap-y-1"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              <h1 className="text-[30px] sm:text-[40px] font-semibold tracking-wide">
                My Projects
              </h1>
              <div className="w-[140px] h-[5px] rounded-full bg-accent"></div>
            </div>
            <p
              className="text-[15px] text-center mt-4 tracking-wide"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {myProjectDescription}
            </p>
          </div>
          <div className="mt-10 md:mt-16 space-y-14">
            {ProjectsData.map((item, index) => (
              <div
                key={index}
                className="block lg:flex gap-5 space-y-3 lg:space-y-0"
              >
                <div data-aos="fade-up-right" data-aos-duration="500">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="max-w-full lg:max-w-[450px] xl:max-w-[500px] rounded-[10px]"
                  />
                </div>
                <div data-aos="fade-up-left" data-aos-duration="500">
                  <h1 className="text-[20px] xs:text-[22px] xl:text-[25px] font-semibold tracking-wide">
                    {item.title}
                    <span className="font-semibold text-[16px] xs:text-[18px]">
                      {` (${item.date})`}
                    </span>
                  </h1>
                  <p className="text-[13px] xs:text-[15px] mt-2 text-justify">
                    {item.description}
                  </p>

                  {/* Play and Install buttons styled like ViewCodeButton */}
                  <div className="my-4 flex space-x-3">
                    {item.play && (
                      <a
                        href={item.play}
                        className="bg-[#008FBF] w-[120px] py-[4px] rounded-[5px] text-white tracking-wide font-medium text-[12px] md:text-[14px] hover:bg-[#007B9A] transform hover:-translate-y-[2px] shadow-md shadow-[rgba(48,18,17,.50)] transition-all duration-200 text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Play
                      </a>
                    )}
                    {item.install && (
                      <a
                        href={item.install}
                        className="bg-[#28A745] w-[120px] py-[4px] rounded-[5px] text-white tracking-wide font-medium text-[12px] md:text-[14px] hover:bg-[#218838] transform hover:-translate-y-[2px] shadow-md shadow-[rgba(48,18,17,.50)] transition-all duration-200 text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Install
                      </a>
                    )}
                  </div>

                  <div className="my-4 flex flex-wrap gap-3">
                    {item.tools.map((tool, index) => (
                      <p
                        key={index}
                        className="text-[12px] xs:text-[13px] bg-primary rounded-full px-4 py-1 text-white font-medium tracking-wide"
                      >
                        {tool}
                      </p>
                    ))}
                  </div>

                  <ViewCodeButton url={item.url} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;


