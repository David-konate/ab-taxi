"use client"; // Add this line
import Image from "next/image";
import React from "react";

const ResaButton = () => {
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
        className="button-resa p-2 flex items-center custom-button"
        onClick={handleResaClick}
      >
        <Image
          src="/taxi.svg"
          width={20}
          height={20}
          alt="Icône de réservation"
          className="custom-image3"
        />
        <span className="ml-2">RÉSERVER</span>
      </button>
    </div>
  );
};

export default ResaButton;
