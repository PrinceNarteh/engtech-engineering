import Banner from "@/components/banner";
import { HeadingTitle } from "@/components/heading-title";
import Image from "next/image";
import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <Banner
        image="/images/hero.jpg"
        heading="Projects"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim"
      />
      <section className="py-20">
        <div className="w-10/12 mx-auto">
          <HeadingTitle text="Our Projects" />
          <div className="flex flex-col lg:flex-row items-end mt-2 mb-10 gap-5">
            <h3 className="text-5xl flex-1 font-semibold tracking-wider">
              Discover Our Latest Projects Showcase
            </h3>
            <p className="flex-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              recusandae perspiciatis nam pariatur, illum vero quidem iusto in
              nemo et ipsa sit. Ullam quas maxime quibusdam pariatur inventore,
              ipsa nesciunt.
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="relative rounded-2xl flex-1 lg:flex-[3] h-[460px] overflow-hidden group">
                <Image
                  src="/images/hero.jpg"
                  width="800"
                  height={800}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="flex flex-col items-center justify-end pb-10 absolute inset-0 bg-gradient-to-t from-[#103b38] opacity-0 transform translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 cursor-pointer">
                  <h4 className="text-4xl text-white">Electrical Repairs</h4>
                  <p className="text-[#F7B550] uppercase text-lg font-semibold tracking-wider">
                    Goil Filling Station, Takoradi
                  </p>
                </div>
              </div>
              <div className="rounded-2xl flex-1 lg:flex-[2] overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  width="800"
                  height={800}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="rounded-2xl flex-1 lg:flex-[2] h-[460px] overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  width="800"
                  height={800}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl flex-1 lg:flex-[3] overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  width="800"
                  height={800}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="rounded-2xl flex-1 lg:flex-[3] h-[460px] overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  width="800"
                  height={800}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl flex-1 lg:flex-[2] overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  width="800"
                  height={800}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
