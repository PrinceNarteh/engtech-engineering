import React from "react";
import { HeadingTitle } from "./heading-title";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-[calc(100vh_-_84px)]  bg-cover bg-[url(/images/hero.jpg)] z-10 overlay">
      <div className="space-y-5 px-10 md:px-20 flex flex-col justify-center items-start h-full md:w-9/12">
        <HeadingTitle text="Welcome to Engtech Engineering Services" />
        <div className="text-5xl md:text-8xl font-semibold text-white">
          Your Trusted Partner for Engineering Solutions
        </div>
        <Button
          size="lg"
          variant="expandIcon"
          iconPlacement="right"
          Icon={ArrowRightIcon}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};
