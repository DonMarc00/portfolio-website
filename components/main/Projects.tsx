import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 z-[30]" id="projects">
      <Link href="/projects">
        <h1 className="group cursor-pointer text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 z-[30]">
          My Projects →
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 z-[30]"></span>
        </h1>
      </Link>
      <div className="h-full w-full text-balance flex flex-wrap justify-center lg:justify-start lg:flex-row gap-10 px-10 mb-4">
        {/* Ensure flex items fill the container evenly */}
        <div className="flex flex-1 flex-col">
          <ProjectCard
            src="/Editor.png"
            title="Vue Editor"
            description="My latest enterprise project that is already being used by customers in production environments. A collaborative editor inspired by Notion."
          />
        </div>
        <div className="flex flex-1 flex-col">
          <ProjectCard
            src="/flutter_banner.svg"
            title="Flutter App"
            description="You know how sometimes you get so absorbed in your work that you forget to hydrate for hours on end? Well I needed an app to fix that problem :D"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <ProjectCard
            src="/website.png"
            title="Portfolio Website"
            description="Well you have to differentiate yourself from the rest somehow, right? So I built this website to showcase my skills and projects."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
