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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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
    label: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="py-5 px-10 md:px-20">
      <nav className="h-11 flex justify-between items-center">
        <div className="flex gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="shrink-0 size-11"
          />
          <h3 className="font-bold leading-5 text-2xl hidden md:block">
            <span className="text-orange-500">EngTech</span> <br />
            <span className="text-[#103b38]">Engineering</span>
          </h3>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#103b38]" side="right">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4"></div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
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
