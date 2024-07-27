import React from "react";

interface BannerProps {
  image: string;
  heading: string;
  subHeading: string;
}

const Banner = ({ image, heading, subHeading }: BannerProps) => {
  return (
    <div
      className={`relative h-96 bg-cover z-10 overlay`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full text-white flex flex-col justify-center px-7 md:px-10 lg:px-20">
        <h2 className="text-6xl font-bold mb-3 lg:w-10/12">{heading}</h2>
        <p className="text-xl tracking-wider w-11/12 md:w-10/12 lg:w-6/12">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default Banner;
