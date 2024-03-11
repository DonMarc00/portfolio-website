"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { RxArrowLeft } from 'react-icons/rx';
import Link from 'next/link';

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
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Use `useTransform` to interpolate mouse position to rotation angles
  const rotateX = useTransform(y, [0, 1], [-20, 20]);
  const rotateY = useTransform(x, [0, 1], [20, -20]);

  // Function to handle mouse move over the image container
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width;
    const mouseY = (event.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };
  useEffect(() => {
    const cardsElement = document.getElementById("elems");
    if (cardsElement) {
      cardsElement.onmousemove = e => {
        for (const card of document.getElementsByClassName("info-card")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        };
      }
    }
  }, []);
  return (
    <div className="container mx-auto mt-20 md:mt-40 px-4 text-white z-[30]" id='elems'>
      <div className="fixed top-24 left-16 text-white underline z-[30]">
        <RxArrowLeft/>
        <Link href="/projects">
        Back
        </Link>
        </div>
      <div className="flex flex-wrap -mx-4 overflow-visible lg:-mx-4 xl:-mx-4">
  
        <motion.div className="info-card rounded-md my-4 mx-2 p-4 w-full overflow-hidden sm:w-full md:mx-0 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/4 z-[31]" whileHover={{scale: 1.05}}>
          <h2 className="text-xl font-bold">Framework</h2>
          <p>{framework}</p>
          <h2 className="text-xl font-bold mt-4">Backend</h2>
          <p>{backend}</p>
        </motion.div>

        <div className="my-4 px-4 w-full overflow-visible sm:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/2 z-[40]">
        <motion.div
           className="overflow-visible"
           style={{ rotateX, rotateY, x, y }}
           onMouseMove={handleMouseMove}
           onMouseLeave={() => {
             x.set(0.5); // Center the image again
             y.set(0.5); // Center the image again
           }}
           whileHover={{ scale: 1.07, transition: {duration: 0.2} }}>
          <Image className="rounded-md"src={imagePath} alt="Project Image" layout="responsive" width={700} height={475} />
        </motion.div>
        </div>

        <motion.div className="info-card rounded-md mx-2 first-line:my-4 p-4 w-full overflow-hidden sm:w-full md:mx-0 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/4 z-[31]" whileHover={{scale: 1.05}}>
          <h2 className="text-xl font-bold">Lessons Learned</h2>
          <p>{lessons}</p>
          <h2 className="text-xl font-bold mt-4">Challenges</h2>
          <p>{challenges}</p>
        </motion.div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap md:flex-row -mx-4 overflow-visible lg:-mx-4 xl:-mx-4">
        {/* Ensure the gap is accounted for in the total width */}
        <motion.div className="info-card rounded-md my-4 mx-2 p-4 w-full overflow-visible sm:w-full md:mx-0 lg:my-4 lg:px-4 lg:w-1/4 xl:my-4 xl:px-4 xl:w-1/4 z-[31]" whileHover={{scale: 1.05}}>
          <p>{minorDescriptionLeft}</p>
        </motion.div>

        {/* Increased width for the middle container */}
        <motion.div className="info-card rounded-md my-4 mx-2 p-4 w-full overflow-visible sm:w-full md:m-4 lg:my-4 lg:p-4 lg:w-1/2 xl:m-4 xl:p-4 xl:w-1/2 z-[31]" whileHover={{scale: 1.05}}>
          <h2 className="text-2xl font-bold">Project Description</h2>
          <p>{projectDescription}</p>
        </motion.div>

        <motion.div className="info-card rounded-md my-4 mx-2 p-4 w-full overflow-visible sm:w-full md:mx-0 lg:my-4 lg:px-4 lg:w-1/4 xl:my-4 xl:px-4 xl:w-1/4 z-[31]" whileHover={{scale: 1.05}}>
          <p>{minorDescriptionRight}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectInfo;
