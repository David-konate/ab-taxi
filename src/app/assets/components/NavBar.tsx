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
              <Image
                className="h-20"
                src="/ab-logo.webp"
                width={100}
                height={80}
                alt="ABV-taxi logo"
              />
              <h4 className="title text-xl text-black font-bold ms-5">
                AB - Taxi
              </h4>
            </div>
          </Link>
        </div>

        <ul className="hidden lg:flex lg:ml-auto lg:items-center lg:space-x-6">
          {linksNav.map((link, index) => (
            <li key={index}>
              <a
                className="text-sm text-gray-400 hover:text-gray-500"
                href={link.path}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
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
