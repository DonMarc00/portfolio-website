import React from 'react';
import ProjectLayout from '@/components/main/ProjectLayout';
import ProjectInfo from '@/components/main/ProjectInfo';

// const projectData = {
//   title: "Flutter - Drink Water",
//   description: "In my latest project at work I noticed that I would sometimes forget to drink water the entire day. So I build an app that would remind me to drink water. It calcualted the required amount for each person (by some basic formula) and distributed the reminders automatically along a defined timespan. And yes... - I am aware that plenty such apps are available to download. Nonetheless I was still interested in mobile devlopment and found this to be a simple but interesting enough use-case to do some mobile development",
//   specifications: [
//     "Specification 1",
//     "Specification 2",
//     "Specification 3",
//     // ...other specifications
//   ],
//   imageUrl: "/NextWebsite.png", // This should be the path to your image
// };

const ProjectPage = () => {
  return (
    <ProjectInfo
    framework="React.js with TypeScript with a little bit more text lol"
      backend="Node.js with Express with a little bit more text lol with a little bit more text lol"
      lessons="Refactoring components for better reusability"
      challenges="Implementing complex state management"
      projectDescription="This project is a water reminder app that helps users stay hydrated by sending timely notifications. It was a great opportunity to learn about push notifications and background tasks on mobile devices. "
      minorDescriptionLeft="Additional features included user customization and tracking water intake over time."
      minorDescriptionRight="Future updates will include integration with health tracking platforms."
      imagePath="/ph20.webp"/>
  );
};

export default ProjectPage;
