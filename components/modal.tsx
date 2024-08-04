import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";

interface ModalProps {
  images: string[];
  isOpen: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ images, isOpen, closeModal }: ModalProps) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index - 1 < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index + 1 > images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/80 z-50 px-5 ${
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } duration-500`}
    >
      <div className="relative max-w-[1000px] mx-auto h-[calc(100dvh_-_50px)] my-auto mt-[25px]">
        <Button
          onClick={() => closeModal(false)}
          size="icon"
          className="rounded-full absolute -top-4 -right-4"
        >
          <CircleX />
        </Button>
        <Image
          src={images[index]}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute top-1/2 px-5 w-full">
          <div className="flex justify-between">
            <Button onClick={prev} size="icon" className="shrink-0">
              <ChevronLeft />
            </Button>
            <Button onClick={next} size="icon" className="shrink-0">
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
