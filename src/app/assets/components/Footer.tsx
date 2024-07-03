"use client";
import { useEffect } from "react";

const Footer = () => {
  const handleReservationClick = () => {
    const block6Element = document.getElementById("block6");
    if (block6Element) {
      block6Element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-blue">
      <div className="w-full mx-auto max-w-screen-xl p-4 lg:flex lg:items-center lg:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-white">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            AB-TAXI™ - Taxis conventionnés VSL et transports de santé agréés
          </a>
          . Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center justify-center mt-5 text-sm font-medium text-gray-500 dark:text-gray-400 lg:mt-0 lg:justify-end">
          <li>
            <a href="#" className="hover:underline me-4 lg:me-6 text-white">
              Home
            </a>
          </li>
          <li>
            <a
              href="/mentions-legales"
              className="hover:underline me-4 lg:me-6 text-white"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              href="/cookies"
              className="hover:underline me-4 lg:me-6 text-white"
            >
              Cookies
            </a>
          </li>
          <li>
            <a href="/CGU" className="hover:underline me-4 lg:me-6 text-white">
              C.G.U.
            </a>
          </li>
          <li>
            <a
              href="tel:+33650017339"
              className="hover:underline me-4 lg:me-6 text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
