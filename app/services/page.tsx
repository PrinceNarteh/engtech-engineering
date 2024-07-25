import Banner from "@/components/banner";
import { HeadingTitle } from "@/components/heading-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Installing fuel dispensers",
    content:
      "We specialize in the installation of top-of-the-line fuel dispensers to ensure efficient and reliable fueling solutions for your business.",
    icon: "/icons/pump.png",
  },
  {
    title: "Installation of petroleum underground pipelines",
    content:
      "Our team of experts is experienced in installing underground pipelines with precision and care to ensure safety and efficiency.",
    icon: "/icons/pipe.png",
  },
  {
    title: "Installation of surface tanks",
    content:
      "We offer professional installation services for surface tanks to store petroleum products securely.",
    icon: "/icons/tank.png",
  },
  {
    title: "Repairing and maintenance of fuel dispensers",
    content:
      "Our skilled technicians are available to provide prompt and efficient repair and maintenance services for your fuel dispensers to keep your operations running smoothly.",
    icon: "/icons/tools.png",
  },
  {
    title: "Electrical installation",
    content:
      "We also offer electrical installation services to ensure that all your engineering systems are properly connected and functioning optimally.",
    icon: "/icons/plug.png",
  },
];

const ServicePage = () => {
  return (
    <div>
      <Banner image="/images/hero.jpg" heading="Servies" subHeading="Hello" />
      <section className="py-20 px-20">
        <h3 className="text-4xl text-center font-bold text-gray-500 mb-14">
          Fulfilling Engineering Solutions for a Bright Future
        </h3>
        <div className="flex flex-wrap justify-center gap-7">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-96 h-[570px] bg-red-500 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/hero.jpg"
                alt=""
                height="270"
                width="200"
                className="w-full h-[270px] object-cover"
              />
              <div className="relative bg-gray-100 h-full px-5">
                <div className="flex justify-center">
                  <div className="size-28 bg-orange-500 flex justify-center items-center rounded-full absolute -top-10 mx-auto ring-gray-200 ring-4">
                    <Image src={service.icon} height={60} width={60} alt="" />
                  </div>
                </div>
                <div className="text-center mt-[90px] space-y-3">
                  <h3 className="text-2xl font-semibold h-[65px] flex items-center justify-center">
                    {service.title}
                  </h3>
                  <p className="text-lg line-clamp-2">{service.content}</p>
                  <Button variant="ghost" className="font-bold text-gray-500">
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-20 px-20 flex flex-col items-center">
        <HeadingTitle text="Testimotial" />
        <h3 className="text-4xl mt-5 mb-14">Our Customer Feedback</h3>
        <div>
          <Card className="bg-white w-[410px] p-5 relative">
            <CardContent className="my-5 text-lg text-gray-400 line-clamp-4 h-28">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              animi placeat neque minima quo velit repellat voluptatem qui ab,
              nam sit inventore explicabo ad omnis amet veniam, modi atque
              labore.
            </CardContent>
            <CardFooter className="flex gap-5">
              <Image
                src="/images/hero.jpg"
                height="100"
                width="100"
                alt=""
                className="size-14 rounded-full"
              />
              <div>
                <h4>John Doe</h4>
                <p className="text-orange-500">Manager, Pacific Oil</p>
              </div>
              <div className="absolute right-5 bottom-3 opacity-15">
                <Image src="/icons/quote.png" height="70" width="70" alt="" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
