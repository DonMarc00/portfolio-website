import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/sub/bento-grid";
import {
  IconArrowIteration,
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBrain,
  IconBuilding,
  IconClipboardCopy,
  IconEaseInControlPoint,
  IconFileBroken,
  IconInfinity,
  IconSignature,
  IconTableColumn,
  IconUserCheck,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ src }: { src: string }) => (
    <Image src={src} alt="" width={0} height={0} sizes="100vw" className="w-full h-full rounded-md bg-white"/>
);
const items = [
  {
    title: "Scrum/Agile",
    description: "As certified Scrum Master, it's my passion to help the team to succeed.",
    header: <Skeleton src="/scrum.jpg" />,
    icon: <IconArrowIteration className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Quality Management",
    description: "Quality is not an act, it's a habit. It translates into the satisfaction of our customers.",  
    header: <Skeleton src="/iso.png" />,
    icon: <IconEaseInControlPoint className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Requirements Engineering",
    description: "Requirements are the key to measure the success of a project.",
    header: <Skeleton src="/re.webp" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "DevOps",
    description:
      "It is the key to create world-class agility, reliability, and security. It can severly impact the success of a company and improve customer satisfaction. The effictiveness is portrayed in the quality of the product.",
    header: <Skeleton src="/devops.svg" />,
    icon: <IconInfinity className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Customer-Centricity",
    description: "The customer is our revenue. They are not dependent on us, we are dependent on them.",
    header: <Skeleton src="/customer.png" />,
    icon: <IconUserCheck className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Software-Architecture",
    description: "The architecture of a software system is a metaphor for the structure of the system. It is a blueprint for the system and the project.",
    header: <Skeleton src="/architecture.webp" />,
    icon: <IconBuilding className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "AI/ML",
    description: "AI is the topic of my bachelor thesis. It's a passion of mine to create intelligent systems that can learn from data. From Document Understanding Transformers to Scenario Management Systems, I enjoy experimenting in this field.",
    header: <Skeleton src="/ai-banner.png" />,
    icon: <IconBrain className="h-4 w-4 text-neutral-300" />,
  },
];
