import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex flex-col justify-between relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full">
      <div className="w-full h-64 overflow-hidden relative">
        {/* Image container with fixed height to ensure equal image heights */}
        <Image
          src={src}
          alt={title}
          layout="fill" // Use fill instead of specifying width and height
          className="object-cover" // Change to object-cover to ensure images cover the area fully
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
