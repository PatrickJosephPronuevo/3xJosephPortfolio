import Card from "./Card";
import LinkButton from "./LinkButton";
import Circles from "./Circles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ProjectsData } from "../data/ProjectsData";
import "swiper/css";
import "swiper/css/pagination";

const RecentProjects = () => {
  return (
    <>
      <section className="relative pb-20">
        <div
          className="flex items-center gap-x-2"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <div className="w-[50px] h-[3px] bg-primary"></div>
          <h1 className="text-[22px] sm:text-[25px] font-semibold">
            Featured Projects
          </h1>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            980: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="px-3 pt-5 sm:pt-7 pb-14 mySwiper"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {ProjectsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                title={item.title}
                img={item.img}
                gif={item.gif}
                date={item.date}
                count={index + 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="mt-4 text-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <LinkButton url="/projects" text="see all projects" />
        </div>

        <div className="absolute -bottom-5 sm:bottom-0 right-10 sm:right-20">
          <Circles />
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
