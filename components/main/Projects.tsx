import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[30]"
      id="projects"
    >
      <Link href="/projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 z-[30] c">
        My Projects →
      </h1>
      </Link>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-4">
        <ProjectCard
          src="/Editor.png"
          title="Vue WYSIWYG Editor"
          description="My latest enterprise project that is already being used by customers in production enviornments. A collaborative editor inspired by Notion. "
        />
        <ProjectCard
          src="/flutter_banner.svg"
          title="Flutter App"
          description="My latest enterprise project that is already being used by customers in production enviornments. A collaborative editor inspired by Notion. "
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Portfolio Website"
          description="My latest enterprise project that is already being used by customers in production enviornments. A collaborative editor inspired by Notion. "
        />
      </div>
    </div>
    
  );
};

export default Projects;