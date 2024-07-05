"use client";

import { useState, useEffect } from "react";
import { linksNav } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ResaButton from "./buttons/ResaButton";
import ContactButtonNav from "./buttons/ContactButtonNav";

const NavBar = () => {
  return (
    <header className="bg-white">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <Link href="/#">
            <div className="flex items-center">
              {/* <Image
                className="h-20 rounded-lg"
                src="/ab-logo.webp"
                width={100}
                height={100}
                alt="ABV-taxi logo"
              /> */}
              <h4
                className="title text-xl font-bold ms-5 italic"
                style={{ color: "#0080FF" }}
              >
                AB - Taxi
              </h4>
            </div>
          </Link>
        </div>

        <ul className="hidden lg:flex lg:ml-auto lg:items-center lg:space-x-6">
          <Link href="/#">
            <li className="image-text-container flex items-center">
              <ContactButtonNav />
            </li>
          </Link>
          <Link href="/#">
            <li className="image-text-container flex items-center">
              <ResaButton />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
