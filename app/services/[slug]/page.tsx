import Banner from "@/components/banner";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServiceDetails = () => {
  return (
    <div>
      <Banner
        image="/images/hero.jpg"
        heading="Service Details"
        subHeading="This is the service details page"
      />
      <section className="flex py-20 px-5 md:px-10 lg:px-20">
        <div className="flex-[3]">
          <div className="w-11/12">
            <h3 className="text-3xl text-gray-800 font-bold mb-5">
              Description
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laudantium, doloribus. Molestias vitae maxime ipsum, alias
                ratione laudantium iste voluptatem beatae, optio itaque esse
                repellat deleniti illo, sint ad id deserunt.
              </p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laudantium, doloribus. Molestias vitae maxime ipsum, alias
                ratione laudantium iste voluptatem beatae, optio itaque esse
                repellat deleniti illo, sint ad id deserunt.
              </p>
            </div>
            <div className="flex gap-10 mt-10">
              <div>
                <Image
                  src="/images/hero.jpg"
                  width="400"
                  height="200"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
              <div>
                <h4 className="text-2xl text-gray-800 font-bold mb-5">
                  Features
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <div className="bg-[#103b38] w-full h-full rounded-xl p-10 text-white">
            <h3 className="text-3xl font-bold">Other Services</h3>
            <div className="space-y-2 mt-5">
              <div className="flex items-center rounded-2xl gap-5 bg-[#f4f6f5] p-3">
                <div className="size-5 rounded-full bg-orange-500 flex-center">
                  <ArrowRight size={14} />
                </div>
                <span className="text-gray-800 text-lg">
                  Lorem ipsum dolor sit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
