import React from 'react';
import ProjectLayout from '@/components/main/ProjectLayout';
import ProjectInfo from '@/components/main/ProjectInfo';

const ProjectPage = () => {
  return (
    <ProjectInfo
    framework="Flutter so in the future I can easily port it to iOS and Android"
      backend="SQLite as local storage without any cloud reliance"
      lessons="The differences from mobile app development to web development and backend development."
      challenges="Each platform has its own quirks and it was a challenge to make the app work on both iOS and Android. You have to keep the different manifests and permissions in mind. "
      projectDescription="This project is a water reminder app that helps users stay hydrated by sending timely notifications. It was a great opportunity to learn about push notifications and background tasks on mobile devices. "
      minorDescriptionLeft="Additional features will included user customization and tracking water intake over time."
      minorDescriptionRight="Future updates will include an release on the App Store and Google Play Store."
      imagePath="/ph20.webp"/>
  );
};

export default ProjectPage;
