// Block3.jsx

import React from "react";
import ContactButton from "../buttons/ContactButton";

const Block3 = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between p-4">
      <div className="relative w-full">
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <p className="title text-3xl font-bold underline text-white">
            RESERVATION
          </p>
        </div>
        <div className="p-5">
          <p className="text-xl font-bold text-center text-white p-8 bg-black bg-opacity-80 mt-2 ">
            Vos besoins en matière de transport sont uniques, et nous le
            comprenons. Notre service de taxi personnalisé répond à vos
            exigences individuelles, que vous voyagiez seul, en famille ou pour
            affaires. Nos chauffeurs sympathiques et attentionnés feront tout
            leur possible pour rendre votre trajet agréable.
          </p>
        </div>
        <div className="flex justify-center mt-4 ">
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default Block3;
