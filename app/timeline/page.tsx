import Timeline from "@/components/sub/Timeline";
import React from "react";

export default function page() {
return (
    <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
        <h2 className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto">
            Have a look at my vita to see where I am comming from.</h2>
        <Timeline events={events} />
    </div>
);
}

const events: Event[] = [
    {
      heading: '2021-Present: ELO Digital Office GmbH',
      subHeading: 'Working at ELO as a Fullstack-Developer.',
      direction: 'left'
    },
    {
      heading: '2021-Present: DHBW Stuttgart (Wirtschaftsinformatik)',
      subHeading: 'Studying Business at DHBW Stuttgart and currently working on my bachelor thesis.',
      direction: 'right'
    },
    {
      heading: '2013-2021: Allgemeine Hochschulreife',
      subHeading: 'Abitur am Stiftsgymnasium Sindelfingen.',
      direction: 'left'
    }
  ]
  
  type Event = {
    heading: string;
    subHeading: string;
    direction: 'left' | 'right';
  };