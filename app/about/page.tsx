import Banner from "@/components/banner";
import { HeadingTitle } from "@/components/heading-title";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const services = [
  "Installing Fuel Dispensers",
  "Installation of Petroleum Underground Pipelines",
  "Installation of Surface Tanks",
  "Repairing and Maintenance of Fuel Dispensers",
  "Electrical Installation",
];

const AboutUsPage = () => {
  return (
    <div>
      <Banner
        image="/images/hero.jpg"
        heading="About Us"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
      <section className="py-20 px-10 md:px-20 flex flex-col lg:flex-row gap-y-10">
        <div className="flex-1 space-y-6">
          <HeadingTitle text="About Us" />
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.2]">
            Your Trusted Partner for Engineering Solutions
          </h2>
          <p className="text-xl w-11/12 text-gray-600">
            Engtech Engineering Services is a leading provider of engineering
            solutions, specializing in the installation of fuel dispensers,
            petroleum underground pipelines, surface tanks, repairing and
            maintenance of fuel dispensers, and electrical installation. With a
            team of experienced professionals, we are committed to delivering
            high-quality services tailored to meet your specific needs.
          </p>
          <div className="flex flex-wrap gap-3 pl-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-100 flex gap-2 border py-2 px-2.5 rounded-full items-center"
              >
                <CircleCheck className="text-orange-500" />
                <span className="text-xl">{service}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/images/hero.jpg"
            className="w-11/12 mx-auto rounded-3xl h-full object-cover"
            height="386"
            width="386"
            alt="about us"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
