"use client"; // Add this line
import Image from "next/image";
import React from "react";

const ResaButton2 = () => {
  const handleResaClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdKIJ7RonbJJrn4gi_Sa5b-f-b7YRrXh6EBgLpbTGhWpx8Zug/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      <button
        className="button-resa  rounded-full bg-transparent focus:outline-none = hover:bg-gradient-to-r from-blue-300 to-blue-350 p-2"
        onClick={handleResaClick}
      >
        <Image
          src="/taxi.svg"
          width={25}
          height={25}
          alt="Icône de réservation"
          className="icon-resa-2 "
        />
      </button>
    </div>
  );
};

export default ResaButton2;
