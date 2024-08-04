"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "./modal";

interface ProjectCardProps {
  images: string[];
  heading: string;
  location: string;
  className?: string;
}

export const ProjectCard = ({
  images,
  heading,
  location,
  className,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "relative rounded-2xl flex-1 h-[460px] overflow-hidden group",
          className
        )}
      >
        <Image
          src={images[0]}
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
      <Modal images={images} />
    </>
  );
};
