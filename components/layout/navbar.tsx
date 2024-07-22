"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    <div className="py-5 px-20">
      <nav className="h-11 flex justify-between items-center">
        <div className="flex gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="shrink-0 size-11"
          />
          <h3 className="font-bold leading-5 text-2xl">
            <span className="text-orange-500">EngTech</span> <br />
            <span className="text-[#103b38]">Engineering</span>
          </h3>
        </div>
        <ul className="flex gap-5">
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
      </nav>
    </div>
  );
};

export default Navbar;
