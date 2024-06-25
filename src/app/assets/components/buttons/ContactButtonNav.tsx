"use client"; // Add this line
import Image from "next/image";
import React, { useState, useEffect } from "react"; // Import useState and useEffect

const ContactButtonNav = () => {
  const [isMiageRoute, setIsMiageRoute] = useState(false); // State to track miage route

  useEffect(() => {
    // Check for miage route on component mount and route changes
    const handleRouteChange = () => {
      setIsMiageRoute(window.location.pathname === "/miage"); // Check for "/miage" route
    };

    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange); // Listen for route changes

    return () => window.removeEventListener("popstate", handleRouteChange); // Cleanup
  }, []);

  const handleCallClick = () => {
    window.open("tel:+33650017339");
  };

  return (
    <div>
      <button
        className="button-contact-nav p-2 flex items-center"
        onClick={handleCallClick}
      >
        <div className="flex items-center">
          <Image
            src={isMiageRoute ? "/phone.svg" : "/phoneblue.svg"} // Change src based on miage route
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

export default ContactButtonNav;
