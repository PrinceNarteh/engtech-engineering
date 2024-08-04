import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  image: string;
  heading: string;
  location: string;
  className?: string;
}

export const ProjectCard = ({
  image,
  heading,
  location,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl flex-1 h-[460px] overflow-hidden group",
        className
      )}
    >
      <Image
        src={image}
        width="800"
        height={800}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col items-center justify-end pb-10 absolute inset-0 bg-gradient-to-t from-[#103b38] opacity-0 transform translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 cursor-pointer">
        <h4 className="text-4xl text-white">{heading}</h4>
        <p className="text-[#F7B550] uppercase text-lg font-semibold tracking-wider">
          {location}
        </p>
      </div>
    </div>
  );
};
