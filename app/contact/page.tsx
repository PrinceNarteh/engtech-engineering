import Banner from "@/components/banner";
import { HeadingTitle } from "@/components/heading-title";
import { ContactForm } from "@/components/ui/contact-form";
import { MapPin, PhoneIcon, Mail } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Banner
        image="/images/hero.jpg"
        heading="Contact Us"
        subHeading="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim"
      />
      <section className="flex flex-col py-20 px-5 md:px-10 lg:px-20 md:flex-row gap-10">
        <div className="flex-1 space-y-5">
          <HeadingTitle text="GET IN TOUCH" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl w-10/12">
            Let's Discuss Your Engineering Needs
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quam
            optio fuga eaque dolorem non vel facilis suscipit, neque tempora
            totam ipsam rem, illo cum repudiandae voluptatem nihil, veniam
            debitis!
          </p>
          <div className="divide-black"></div>
          <div className="space-y-5 pl-5">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 rounded-full size-7 flex-center text-white">
                <MapPin size={15} />
              </div>
              <span className="text-xl">Satellite, Accra - Ghana</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="shrink-0 bg-orange-500 rounded-full size-7 flex-center text-white">
                <PhoneIcon size={15} />
              </div>
              <div className="text-xl">
                <p>(+233) 24 324 2804</p>
                <p>(+233) 50 453 5410</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 rounded-full size-7 flex-center text-white">
                <Mail size={15} />
              </div>
              <span className="text-xl">tettbroni@yahoo.com</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="lg:w-10/12 mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
