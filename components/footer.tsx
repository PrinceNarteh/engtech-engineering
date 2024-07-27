import { links } from "@/data";
import {
  ChevronsRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#103b38] py-10 ">
      <div className="w-10/12 mx-auto text-white flex flex-col lg:flex-row gap-5">
        <div className="flex-[3] space-y-5">
          <Link href="/" className="flex gap-2">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="shrink-0 size-11"
            />
            <h3 className="font-bold leading-5 text-2xl">
              <span className="text-orange-500 inline-block mb-1">EngTech</span>{" "}
              <br />
              <span className="">Engineering</span>
            </h3>
          </Link>
          <p className="text-justify tracking-wider mt-7 lg:w-11/12">
            Engtech Engineering Services is a leading provider of engineering
            solutions, specializing in the installation of fuel dispensers,
            petroleum underground pipelines, surface tanks, repairing and
            maintenance of fuel dispensers, and electrical installation.
          </p>
          <div className="flex items-center gap-5">
            <Facebook />
            <Instagram />
          </div>
        </div>
        <div className="flex-[2] flex gap-5">
          <div className="flex-1">
            <h3 className="text-orange-500 font-bold tracking-widest text-xl">
              USEFUL LINKS
            </h3>

            <div className="space-y-2 pl-5 mt-5">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  className="flex gap-2 hover:text-orange-500"
                >
                  <ChevronsRight />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-orange-500 font-bold tracking-widest text-xl">
              CONTACT
            </h3>

            <div className="space-y-3 pl-5">
              <div className="flex items-center gap-3 mt-5">
                <div className="bg-orange-500 rounded-full size-7 flex-center text-white">
                  <MapPin size={15} />
                </div>
                <span className="text-lg">Satellite, Accra - Ghana</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="shrink-0 bg-orange-500 rounded-full size-7 flex-center text-white">
                  <PhoneIcon size={15} />
                </div>
                <div className="text-lg">
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
        </div>
      </div>
    </div>
  );
};
