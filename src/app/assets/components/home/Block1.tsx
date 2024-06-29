import React from "react";
import Image from "next/image";
import ContactButton from "../buttons/ContactButton";
import ResaButton from "../buttons/ResaButton";

const Block1 = () => {
  const trajets = [
    { content: "Service Taxi Conventionné", src: "check.svg" },
    { content: "Trajet Touristique", src: "check.svg" },
    { content: "Trajet Professionnel", src: "check.svg" },
    { content: "Trajet Aéroport/Gare", src: "check.svg" },
    { content: "Demande spéciale", src: "check.svg" },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-col xl:flex-row xl:p-5 ">
      <div className="flex-1 xl:mr-5">
        {/* Textual content */}
        <div className="mb-4 md:mb-0 xl:p-5">
          <p
            className="title text-3xl font-bold underline"
            style={{ color: "white" }}
          >
            Taxis conventionnés VSL et transports de santé agréés
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center xl:p-3">
          <p
            className="text-xl font-bold mt-3 xl:p-2"
            style={{ color: "white" }}
          >
            A.B Taxi Service vous propose un service de transport de qualité en
            Île-de-France. Nous assurons des trajets fiables vers les aéroports,
            les gares et pour vos rendez-vous médicaux CPAM.
          </p>
        </div>
        {/* List of services with checkmarks */}
        <div className="mt-1 flex flex-row items-center justify-between">
          <div className="flex-1 xl:mr-4">
            {trajets.map((trajet, index) => (
              <div key={index} className="flex items-center mb-2">
                <Image
                  src="/check.svg"
                  width={20}
                  height={20}
                  alt={`Icône de validation pour ${trajet.content}, AB Taxi : transport aéroport, gare et CPAM. Taxis conventionnés VSL et transports de santé agréés.`}
                  className="image-vital mr-2"
                />

                <p className="text" style={{ color: "white" }}>
                  {trajet.content}
                </p>
              </div>
            ))}
          </div>
          {/* Convention map */}
          <div className="mt-0 xl:mt-0">
            <a
              href="https://www.ameli.fr/taxi-conventionne"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src="/carteV.png"
                width={200}
                height={90}
                alt="Réprésentation convention"
                className="image-vital"
              />
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-3 xl:mt-4 flex flex-row justify-around items-center">
          <div>
            <ResaButton />
          </div>
          <div className="ml-4">
            <ContactButton />
          </div>
        </div>
      </div>
      {/* Second block image */}
      <div className="mt-8 mx-auto xl:mt-0 xl:ml-5 xl:w-1/2 flex justify-center">
        <div className="w-full md:w-3/4 xl:w-full">
          <Image
            src="/test.png"
            width={500}
            height={500}
            alt="ABV-taxi logo"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Block1;
