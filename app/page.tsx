import { HeadingTitle } from "@/components/heading-title";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { services } from "@/data";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

const about = [
  "Safety Equipment Installation",
  "Energy Efficiency",
  "Enhanced Functionality",
  "Skilled Technician",
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-wrap gap-5 justify-center py-10 px-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-100 flex gap-2 border p-5 rounded-full items-center w-fit"
          >
            <CircleCheck className="text-orange-500 shrink-0" />
            <span className="text-2xl">{service.title}</span>
          </div>
        ))}
      </section>
      <section className="flex flex-col md:flex-row py-20 px-10 lg:px-20 bg-gray-100">
        <div className="flex-1 space-y-5">
          <HeadingTitle text="About us" />
          <h2 className="text-4xl font-semibold">
            Empowering You Through Engineering Excellence
          </h2>
          <p className="text-lg text-gray-500">
            Founded on the principles of quality, safety, and reliability,
            ENGTECH ENGINEERING SERVICES has established itself as a trusted
            partner in the engineering sector. Our team comprises skilled
            professionals with extensive expertise in various engineering
            disciplines. We pride ourselves on our ability to adapt to the
            unique challenges faced by our clients, ensuring tailored solutions
            that meet industry standards
          </p>
          <div className="pl-10 grid grid-cols-1 md:grid-cols-2 gap-2">
            {about.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CircleCheck size={16} className="text-orange-500" />
                <span className="">{item}</span>
              </div>
            ))}
          </div>
          <p className="border-l-2 border-l-orange-500 pl-5 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            deleniti. Nam voluptas adipisci, et amet quibusdam perspiciatis
            saepe fugit maiores architecto vitae laudantium qui soluta numquam
            ad! Numquam, nisi saepe.
          </p>
          <Button size="lg">READ MORE</Button>
        </div>
        <div className="flex-1 flex justify-end relative">
          <div className="w-10/12 mx-auto h-full justify-self-end relative">
            <Image
              src="/images/hero.jpg"
              width="200"
              height="400"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
