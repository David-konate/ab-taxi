"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ResaButton = () => {
  const handleResaClick = () => {
    const block6Element = document.getElementById("block6");
    if (block6Element) {
      block6Element.scrollIntoView({ behavior: "smooth" });
    }
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
