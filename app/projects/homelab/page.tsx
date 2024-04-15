import React from 'react';
import ProjectLayout from '@/components/main/ProjectLayout';
import ProjectInfo from '@/components/main/ProjectInfo';

const ProjectPage = () => {
  return (
    <ProjectInfo
    framework="Not a framework, but I use portainer and CasaOS to manage my homelab"
      backend="Docker containers for all my services, including a reverse proxy, databases, and cloud storage"
      lessons="Networking, system administration, and the differences between virtualization and containerization, as well as IT security and monitoring."
      challenges="This is the first time where I really got into networking. It is really hard to keep track of where which ip and domain are pointing and what is proxied. This does get confusing at times "
      projectDescription="This project is a homelab that I use to host all my services. I use it to host my services like nextcloud, my portfolio, and my projects. I also use it to host my databases and password manager and a Minecraft server for my brother."
      minorDescriptionLeft="Whilst now just I am using it, I plan to offer services like cloud-storage to my friends and family."
      minorDescriptionRight="In the future I plan to add a GPU to the server so I can use it for machine learning"
      imagePath="/homelab.jpg"/>
  );
};

export default ProjectPage;
