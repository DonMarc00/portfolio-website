import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-4">
        <ProjectCard
          src="/NextWebsite.png"
          title="Vue WYSIWYG Editor"
          description="My latest enterprise project that is already being used by customers in production enviornments. A collaborative editor inspired by Notion. "
        />
        <ProjectCard
          src="/CardImage.png"
          title="Flutter App"
          description="Sometimes when I am to focused on my work I tend to forget to drink throughout the day. A solution was required... This project was used to learn about test-driven development and CI/CD."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Portfolio Website"
          description="You have to present yourself in a unique way."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
          src="/SpaceWebsite.png"
          title="Homelab-Server"
          description="Moving away from comercial cloud providers, hosting my own services and serving my website localy. For that I am running a homelab server. Aside from that it is also a great learning experience for networking."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Intelligent E-Mail client concept"
          description="."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
    
  );
};

export default Projects;