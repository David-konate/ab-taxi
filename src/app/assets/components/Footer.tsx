"use client";
import { useEffect } from "react";

const Footer = () => {
  const handleReservationClick = () => {
    const reservationElement = document.getElementById("block6");
    if (reservationElement) {
      reservationElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-blue  ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-white">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            AB-TAXI™ - Taxis conventionnés VSL et transports de santé agréés
          </a>
          . Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6 text-white">
              Home
            </a>
          </li>
          <li>
            <a
              href="/mentions-legales"
              className="hover:underline me-4 md:me-6 text-white"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              href="/cookies"
              className="hover:underline me-4 md:me-6 text-white"
            >
              Cookies
            </a>
          </li>
          <li>
            <a href="/CGU" className="hover:underline me-4 md:me-6 text-white">
              C.G.U.
            </a>
          </li>
          <li>
            <a
              href="tel:+33650017339"
              className="hover:underline me-4 md:me-6 text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/#"
              id="reservation-link"
              className="hover:underline me-4 md:me-6 text-white"
              onClick={handleReservationClick}
            >
              Réserver
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
