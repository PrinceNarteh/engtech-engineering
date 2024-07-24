import Banner from "@/components/banner";
import { HeadingTitle } from "@/components/heading-title";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Banner
        image="/images/hero.jpg"
        heading="About Us"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
      <section className="py-20 px-20 flex">
        <div className="flex-1 space-y-6">
          <HeadingTitle text="About Us" />
          <h2 className="text-5xl font-semibold leading-[1.2]">
            Your Trusted Partner for Engineering Solutions
          </h2>
          <p className="text-lg w-11/12">
            Engtech Engineering Services is a leading provider of engineering
            solutions, specializing in the installation of fuel dispensers,
            petroleum underground pipelines, surface tanks, repairing and
            maintenance of fuel dispensers, and electrical installation. With a
            team of experienced professionals, we are committed to delivering
            high-quality services tailored to meet your specific needs.
          </p>
        </div>
        <div className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, optio
          enim repellendus sequi porro facilis blanditiis deleniti officia
          magnam quae praesentium sapiente iusto, rerum et non maxime tenetur,
          velit voluptatibus?
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
