// ContactButton.js
"use client"; // Add this line
import Image from "next/image";
import React from "react";

const ContactButton = () => {
  const handleCallClick = () => {
    window.open("tel:+33650017339");
  };

  return (
    <div>
      <button
        className="button-contact p-2 flex items-center"
        onClick={handleCallClick}
      >
        <div className="flex items-center">
          <Image
            src="/phone.svg"
            width={20}
            height={20}
            alt="Icône de téléphone"
            className="custom-image2"
          />
          <span className="ms-2">06.50.01.73.39</span>
        </div>
      </button>
    </div>
  );
};

export default ContactButton;
