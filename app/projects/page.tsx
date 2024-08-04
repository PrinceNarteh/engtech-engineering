import Banner from "@/components/banner";
import { HeadingTitle } from "@/components/heading-title";
import { ProjectCard } from "@/components/project-card";
import React from "react";

const images = [
  "/images/electrical-repairs.jpg",
  "/images/fuel-dispenser-repairs.jpg",
  "/images/fuel-dispenser.jpg",
  "/images/hero.jpg",
  "/images/surface-tank.jpg",
  "/images/underground-pipes.jpg",
];

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
              <ProjectCard
                images={images}
                heading="Electrical Works"
                location="Goil Filling Station, Takoradi"
                className="lg:flex-[3]"
              />
              <ProjectCard
                images={images}
                heading="Fuel Dispenser Repairs"
                location="Total Filling Station, Kasoa"
                className="lg:flex-[2]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <ProjectCard
                images={images}
                heading="Fuel Dispenser"
                location="Pacific Filling Station, Cape Coast"
                className="lg:flex-[2]"
              />
              <ProjectCard
                images={images}
                heading="Electrical Works"
                location="Total Filling Station, Kasoa"
                className="lg:flex-[3]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <ProjectCard
                images={images}
                heading="Underground Pipes"
                location="Total Filling Station, Kasoa"
                className="lg:flex-[3]"
              />
              <ProjectCard
                images={images}
                heading="Fuel Dispenser"
                location="Total Filling Station, Kasoa"
                className="lg:flex-[3]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
