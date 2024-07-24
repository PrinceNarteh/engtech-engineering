import React from "react";

interface HeadingTitleProps {
  text: string;
}

export const HeadingTitle = ({ text }: HeadingTitleProps) => {
  return (
    <h3 className="uppercase font-bold tracking-widest text-xl text-[#f7b550]">
      {text}
    </h3>
  );
};
