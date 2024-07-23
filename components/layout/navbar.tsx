"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="py-5 px-7 md:px-10 lg:px-20">
      <nav className="h-11 flex justify-between items-center">
        <Link href="/" className="flex gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="shrink-0 size-11"
          />
          <h3 className="font-bold leading-5 text-2xl hidden md:block">
            <span className="text-orange-500 inline-block mb-1">EngTech</span>{" "}
            <br />
            <span className="text-[#103b38]">Engineering</span>
          </h3>
        </Link>
        <div>
          <Sheet>
            <SheetTrigger className="block md:hidden" asChild>
              <Button
                variant="outline"
                size="icon"
                className="flex justify-center items-center"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="mt-5">
                  <div className="flex gap-2">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={40}
                      height={40}
                      className="shrink-0 size-11"
                    />
                    <h3 className="font-bold leading-5 text-2xl text-left">
                      <span className="inline-block text-orange-500 mb-1">
                        EngTech
                      </span>
                      <br />
                      <span className="text-[#103b38]">Engineering</span>
                    </h3>
                  </div>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4 divide-y">
                {links.map((link, idx) => (
                  <SheetClose key={idx} asChild>
                    <Link href={link.path} className="pt-3">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <ul className="hidden md:flex gap-5">
            {links.map((link, idx) => {
              const isActive = pathname === link.path;
              return (
                <li key={idx} className="text-lg font-semibold">
                  <Link
                    href={link.path}
                    className={`${isActive ? "text-orange-500" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
