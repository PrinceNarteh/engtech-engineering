import React from "react";

interface HeadingTitleProps {
  text: string;
}

export const HeadingTitle = ({ text }: HeadingTitleProps) => {
  return (
    <h3 className="uppercase tracking-widest text-xl font-semibold text-[#f7b550]">
      {text}
    </h3>
  );
};
