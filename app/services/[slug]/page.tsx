"use client";

import Banner from "@/components/banner";
import { services } from "@/data";
import slugify from "@/lib/slugify";
import { ArrowRight, Asterisk } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((service) => slugify(service.title) === slug);

  if (!service) {
    return (
      <div>
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <div>
      <Banner
        image={service.image}
        heading={service.title}
        subHeading={service.subHeading}
      />
      <section className="flex flex-col lg:flex-row gap-x-5 gap-y-10 py-20 px-5 md:px-10 lg:px-20">
        <div className="flex-[3]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <Image
                src={service.image}
                width="400"
                height="200"
                alt=""
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-2xl text-gray-700">{service?.overview}</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-bold mb-2">Scope of Work</h3>
            <div className="pl-5 space-y-1">
              {service.scope.map((scope, idx) => (
                <p key={idx} className="text-xl flex items-start gap-2">
                  <Asterisk
                    size={15}
                    className="text-orange-500 shrink-0 mt-1.5"
                  />
                  {scope}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-bold mb-2">Benefits</h3>
            <div className="pl-5 space-y-1">
              {service.benefits.map((benefit, idx) => (
                <p key={idx} className="text-xl flex items-start gap-2">
                  <Asterisk
                    size={15}
                    className="text-orange-500 shrink-0 mt-1.5"
                  />
                  {benefit}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <div className="bg-[#103b38] w-full h-fit rounded-xl p-10 text-white">
            <h3 className="text-3xl font-bold">Other Services</h3>
            <div className="space-y-5 mt-5">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={`/services/${slugify(service.title)}`}
                  className="flex items-center rounded-2xl gap-5 bg-[#f4f6f5] p-3"
                >
                  <div className="shrink-0 size-5 rounded-full bg-orange-500 flex-center">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-gray-800 text-lg">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
