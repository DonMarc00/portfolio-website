"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'

type ProjectInfoProps = {
  framework: string;
  backend: string;
  lessons: string;
  challenges: string;
  projectDescription: string;
  minorDescriptionLeft: string;
  minorDescriptionRight: string;
  imagePath: string;
};

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  framework,
  backend,
  lessons,
  challenges,
  projectDescription,
  minorDescriptionLeft,
  minorDescriptionRight,
  imagePath,
}) => {
  useEffect(() => {
    const cardsElement = document.getElementById("container");
    if (cardsElement) {
      cardsElement.onmousemove = e => {
        for(const card of document.getElementsByClassName("event-card")) {
          const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
                console.log(x, y);

          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        };
      }
    }
  }, []);
  return (
    <div className="container mx-auto mt-20 md:mt-40 px-4 text-white z-[30]">
      <div className="flex flex-wrap -mx-4 overflow-hidden lg:-mx-4 xl:-mx-4">

        <div className="event-card border rounded-md my-4 p-4 w-full overflow-hidden sm:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/4">
          <h2 className="text-xl font-bold">Framework</h2>
          <p>{framework}</p>
          <h2 className="text-xl font-bold mt-4">Backend</h2>
          <p>{backend}</p>
        </div>

        <div className="my-4 px-4 w-full overflow-hidden sm:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/2 z-[40]">
          <Image src={imagePath} alt="Project Image" layout="responsive" width={700} height={475} />
        </div>

        <div className="border rounded-md first-line:my-4 p-4 w-full overflow-hidden sm:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/4">
          <h2 className="text-xl font-bold">Lessons Learned</h2>
          <p>{lessons}</p>
          <h2 className="text-xl font-bold mt-4">Challenges</h2>
          <p>{challenges}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row -mx-4 overflow-hidden lg:-mx-4 xl:-mx-4">
        {/* Ensure the gap is accounted for in the total width */}
        <div className="border rounded-md my-4 p-4 w-full overflow-hidden sm:w-full lg:my-4 lg:px-4 lg:w-1/4 xl:my-4 xl:px-4 xl:w-1/4">
          <p>{minorDescriptionLeft}</p>
        </div>
        
        {/* Increased width for the middle container */}
        <div className="border rounded-md my-4 p-4 w-full overflow-hidden sm:w-full lg:my-4 lg:p-4 lg:w-1/2 xl:m-4 xl:p-4 xl:w-1/2">
          <h2 className="text-2xl font-bold">Project Description</h2>
          <p>{projectDescription}</p>
        </div>
        
        <div className="border rounded-md my-4 p-4 w-full overflow-hidden sm:w-full lg:my-4 lg:px-4 lg:w-1/4 xl:my-4 xl:px-4 xl:w-1/4">
          <p>{minorDescriptionRight}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
