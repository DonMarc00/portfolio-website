import React from 'react';
import ProjectLayout from '@/components/main/ProjectLayout';
import ProjectInfo from '@/components/main/ProjectInfo';

const ProjectPage = () => {
  return (
    <ProjectInfo
    framework="Next.js, React, and TailwindCSS"
      backend="None. Don't want another security risk :D"
      lessons="Advantages and disadvantages of using server side rendering."
      challenges="The biggest challenge was to make the website look good on all devices. I had to learn about responsive design and how to make the website look good on all devices. A huge drawback of ssr is that if you want to make something look really nice, you will probably have to rely on the client."
      projectDescription="This project is a portfolio website that showcases my projects and skills. It was a great opportunity to learn about server side rendering and how to make a website look good on all devices."
      minorDescriptionLeft="There is always something to improve on a website. I will continue to add more projects and improve the design."
      minorDescriptionRight="If I have a fun idea, I will probably add it to the website."
      imagePath="/website.png"/>
  );
};

export default ProjectPage;
