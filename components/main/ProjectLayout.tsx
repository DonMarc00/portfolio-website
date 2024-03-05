// Define the shape of the project data with an interface
"use client"
import React from 'react';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';

interface Project {
    title: string;
    description: string;
    specifications: string[];
    imageUrl: string;
  }
  
  // Define the shape of the props for ProjectLayout
  interface ProjectLayoutProps {
    project: Project;
  }
  
  const ProjectLayout = ( {
    title, description, specifications, imageUrl
  } : Project) => {
    return (
        <main className='h-full w-full wrapper'>
      <div className="flex sm:flex-row flex-col justify-center items-center mx-auto px-0 mt-40 md:px-0 h-full w-full">
        <div className="sm:w-1/2 p-4 text-white h-full flex flex-col gap-5 m-auto text-lg text-balance justify-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-2">{description}</p>
          <ul className="list-disc text-center list-inside">
            {specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          {/* Add more details if needed */}
        </div>
        <div className="sm:w-1/2 flex relative z-[30]">
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[40] md:w-[1400px]'>
          {/* Ensure you have @types/next installed for proper Image typing */}
          <Spline scene="https://prod.spline.design/yj5XT0y4j472nv59/scene.splinecode" />
          </div>
        </div>
      </div>
      </main>
    );
  };
  
  export default ProjectLayout;
