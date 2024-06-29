"use client"; // Add this line
import Image from "next/image";
import React from "react";

const ResaButton2 = () => {
  const handleResaClick = () => {
    const block6Element = document.getElementById("block6");
    if (block6Element) {
      block6Element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button
        className="button-resa p-2 flex items-center custom-button rounded-full"
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
