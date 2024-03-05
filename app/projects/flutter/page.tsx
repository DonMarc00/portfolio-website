import React from 'react';
import ProjectLayout from '@/components/main/ProjectLayout';

const projectData = {
  title: "Flutter - Drink Water",
  description: "In my latest project at work I noticed that I would sometimes forget to drink water the entire day. So I build an app that would remind me to drink water. It calcualted the required amount for each person (by some basic formula) and distributed the reminders automatically along a defined timespan. And yes... - I am aware that plenty such apps are available to download. Nonetheless I was still interested in mobile devlopment and found this to be a simple but interesting enough use-case to do some mobile development",
  specifications: [
    "Specification 1",
    "Specification 2",
    "Specification 3",
    // ...other specifications
  ],
  imageUrl: "/NextWebsite.png", // This should be the path to your image
};

const ProjectPage = () => {
  return (
    <ProjectLayout title={projectData.title}
     description={projectData.description}
     specifications={projectData.specifications}
     imageUrl= {projectData.imageUrl} />
  );
};

export default ProjectPage;
