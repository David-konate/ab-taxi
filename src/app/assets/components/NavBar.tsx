"use client";

import { useState, useEffect } from "react";
import { linksNav } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ResaButton from "./buttons/ResaButton";
import ContactButtonNav from "./buttons/ContactButtonNav";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleBurgerClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const burger = document.querySelector(".navbar-burger");
    const close = document.querySelector(".navbar-close");
    const backdrop = document.querySelector(".navbar-backdrop");

    if (burger) {
      burger.addEventListener("click", handleBurgerClick);
    }

    if (close) {
      close.addEventListener("click", handleBurgerClick);
    }

    if (backdrop) {
      backdrop.addEventListener("click", handleBurgerClick);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (burger) {
        burger.removeEventListener("click", handleBurgerClick);
      }
      if (close) {
        close.removeEventListener("click", handleBurgerClick);
      }
      if (backdrop) {
        backdrop.removeEventListener("click", handleBurgerClick);
      }
    };
  }, [isMenuOpen]);

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

        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
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
      <div
        className={`navbar-menu ${isMenuOpen ? "" : "hidden"} relative z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image
                className="h-20"
                src="/ab-logo.webp"
                width={100}
                height={100}
                alt="Hero"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {linksNav.map((link, index) => (
                <li key={index}>
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href={link.path}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <div className="mt-5">
                <Link href="/#">
                  <li className="image-text-container">
                    <p className="text-sm ms-2 text-gray-400 hover:text-gray-500">
                      Contact
                    </p>
                  </li>
                </Link>
                <Link href="/#">
                  <li className="image-text-container mt-2">
                    <p className="text-sm ms-2 text-gray-400 hover:text-gray-500">
                      Reservation
                    </p>
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
