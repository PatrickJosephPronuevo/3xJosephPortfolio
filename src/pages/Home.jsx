import React from "react";
import Hero from "../components/Hero";
import RecentProjects from "../components/RecentProjects";
import Skills from "../components/Skills";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <main className="text-primary mb-10">
        <div className="mx-[20px] sm:mx-[50px] md:mx-[120px]">
          <div className="sm:container mx-auto space-y-20">
            <Hero />
            <RecentProjects />
          </div>
        </div>

        <div className="mt-10 bg-[#D9D9D9]">
          <Skills />
        </div>

        <div className="mx-[20px] sm:mx-[50px] md:mx-[120px]">
          <div className="sm:container mx-auto">
            <About />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
