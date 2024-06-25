import React, { useState } from "react";
import Image from "next/image";
import ResaButton from "../buttons/ResaButton";
import ContactButton from "../buttons/ContactButton";
import ContactButtonNav from "../buttons/ContactButtonNav";

const VosCoordonnees = () => (
  <div className="flex flex-col xl:p-3">
    <div className="py-4">
      <p className="title text-gray-800 text-3xl font-bold">Vos coordonnées</p>
    </div>
    {/* Ajoutez ici les champs du formulaire pour les coordonnées */}
  </div>
);

const VotreTrajet = () => (
  <div className="flex flex-col xl:p-3">
    <div className="py-4">
      <p className="title text-gray-800 text-3xl font-bold">Votre trajet</p>
    </div>
    {/* Ajoutez ici les champs du formulaire pour le trajet */}
  </div>
);

const Confirmation = () => (
  <div className="flex flex-col xl:p-3">
    <div className="py-4">
      <p className="title text-gray-800 text-3xl font-bold">Confirmation</p>
    </div>
    {/* Ajoutez ici les informations de confirmation */}
  </div>
);

const Block6 = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Vos coordonnées",
      content: <VosCoordonnees />,
    },
    {
      title: "Votre trajet",
      content: <VotreTrajet />,
    },
    {
      title: "Confirmation",
      content: <Confirmation />,
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-col xl:flex-row xl:p-5">
      <div className="flex-1 xl:mr-5">
        <div className="mb-4 md:mb-0 xl:p-5">
          <p className="title text-3xl font-bold underline">FORMULAIRE</p>
        </div>
        <div className="flex flex-col xl:p-3">
          <div className="py-4">
            <p className="title text-gray-800 text-3xl font-bold">
              Comment réserver votre taxi ?
            </p>
          </div>
          <p className="text text-2xl font-semibold mt-4">
            1. Demande de réservation
          </p>
          <p className="text text-gray-600 mt-2 px-2">
            Transport événementiel, occasionnel, touristique, ou d affaires, n
            hésitez pas à formuler vos demandes.
          </p>
          <div className="flex justify-around mt-4">
            <ResaButton />
            <ContactButtonNav />
          </div>
          <div className="mt-8">
            <p className="title text-2xl font-semibold">
              2. Pas d argent à avancer
            </p>
            <p className="text font-semibold text-gray-600 mt-2 px-2">
              Vous avez une prescription médicale de transport?
            </p>
            <p className="text text-gray-600 mt-1 px-2">
              Commandez un taxi conventionné qui vous fera bénéficier du tiers
              payant. Vous ne faites pas l avance des frais de votre course. Ils
              vous sont payés par la sécurité sociale.
            </p>
          </div>
          <div className="mt-8 mb-8">
            <p className="text-2xl font-semibold">3. Profitez</p>
            <p className="text-gray-600 mt-1 px-2">
              C est le moment de vous détendre, profitez du confort de nos
              véhicules et relaxez vous.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/test2.png"
            width={500}
            height={80}
            alt="test2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

      {/* Second block image */}
      <div className="mt-8 mx-auto xl:mt-0 xl:ml-5 xl:w-1/2 flex flex-col items-center">
        <div className="w-full md:w-3/4 xl:w-full">
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`flex md:w-full items-center ${
                  index < steps.length - 1
                    ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                    : ""
                } ${
                  index === currentStep
                    ? "text-blue-600 dark:text-blue-500"
                    : ""
                }`}
              >
                <span className="flex items-center">
                  {index === currentStep && (
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                  )}
                  {step.title}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 w-full md:w-3/4 xl:w-full">
          {steps[currentStep].content}
        </div>

        <div className="flex justify-between mt-4 w-full">
          <button
            className={`py-2 px-4 bg-gray-200 text-gray-800 rounded ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Précédent
          </button>
          <button
            className={`py-2 px-4 bg-blue-600 text-white rounded ${
              currentStep === steps.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
            disabled={currentStep === steps.length - 1}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Block6;
