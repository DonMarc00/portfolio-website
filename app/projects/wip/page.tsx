import React from "react";
import Link from "next/link";
import { EvervaultCard, Icon } from "@/components/sub/evervault-card";

const EvervaultCardDemo = () => {
  return (
    <div className="flex w-full h-full mt-40 justify-center">
        <div className="relative md:fixed group md:top-24 md:left-16 text-white z-[30]">
        <Link href="/projects">
        ← Back
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-violet-900"></span>
        </Link>
      </div>s
        <div className="border border-[#2A0E61] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] z-[30]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
          <EvervaultCard text="WIP" />
          <h2 className="text-white  mt-4 text-sm font-light">
            Nothing to see here. Go away...
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            (hover)
          </p>
        </div>
    </div>
  );
}

export default EvervaultCardDemo;