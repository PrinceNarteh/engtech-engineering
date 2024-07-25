import Banner from "@/components/banner";
import { HeadingTitle } from "@/components/heading-title";
import { MapPin } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Banner
        image="/images/hero.jpg"
        heading="Contact Us"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim"
      />
      <section className="py-20 px-20">
        <div className="flex-1">
          <HeadingTitle text="GET IN TOUCH" />
          <h2 className="text-5xl w-10/12">
            Let's Discuss Your Engineering Needs
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quam
            optio fuga eaque dolorem non vel facilis suscipit, neque tempora
            totam ipsam rem, illo cum repudiandae voluptatem nihil, veniam
            debitis!
          </p>
          <div className="divide-black"></div>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 rounded-full size-10 flex justify-center items-center text-white">
                <MapPin />
              </div>
              <span className="text-2xl">Satellite, Accra - Ghana</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 rounded-full size-10 flex justify-center items-center text-white">
                <MapPin />
              </div>
              <span className="text-2xl">
                (+233) 24 324 2804 / (+233) 50 453 5410
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 rounded-full size-10 flex justify-center items-center text-white">
                <MapPin />
              </div>
              <span className="text-2xl">tettbroni@yahoo.com</span>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </section>
    </div>
  );
};

export default ContactPage;
