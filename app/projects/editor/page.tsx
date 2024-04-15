import React from 'react';
import ProjectLayout from '@/components/main/ProjectLayout';
import ProjectInfo from '@/components/main/ProjectInfo';

const ProjectPage = () => {
  return (
    <ProjectInfo
    framework="Vue3 with TypeScript"
      backend="Java for indexing and textprocessing and PostgreSQL for storage"
      lessons="How to manage real-time collaboaoration and how to make a good user experience."
      challenges="It wasn't easy to make the editor work in an application that originally wasn't designed for content creation."
      projectDescription="An enterprise project I worked on for some time that was recently annouced to the customers. The receüption was great and we are now working on the next features."
      minorDescriptionLeft="There still needs to be some testing done especially on the performance side."
      minorDescriptionRight="Updates will focus on the customers feedback."
      imagePath="/editor.png"/>
  );
};

export default ProjectPage;
