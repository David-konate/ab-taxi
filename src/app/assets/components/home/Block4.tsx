import React, { useState } from "react";
import Image from "next/image";

const Block4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick2 = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Taxis agréés par la Caisse Primaire d'Assurance Maladie (CPAM)",
      content:
        "Si vous devez effectuer un transport pris en charge par la Sécurité Sociale, assurez-vous de le faire avec un taxi conventionné. Le remboursement de ces trajets se fait selon vos droits, pouvant aller jusqu'à 100% dans la plupart des cas. Dans la majorité des cas, nous pouvons facturer directement votre caisse d'assurance maladie pour faciliter le processus de remboursement.",
    },
    {
      title:
        "Comment bénéficier du service de votre taxi conventionné sécurité sociale?",
      content:
        "Vous pouvez bénéficier d'un remboursement de vos frais de transport pour certains rendez-vous médicaux. Cela concerne les consultations chez un médecin généraliste ou spécialiste, les séances de kinésithérapie, les visites dans un centre médical ou à l'hôpital, à condition que votre état ne nécessite pas une ambulance.",
    },
    {
      title: "Commandez votre taxi conventionné avec remboursement par la CPAM",
      content:
        "Pour tout déplacement pris en charge par la Sécurité Sociale, il est impératif d'utiliser un taxi conventionné. Le bon de transport est obligatoire et doit comporter la mention « taxi ». Vous devez également fournir au chauffeur une attestation de votre centre de sécurité sociale valide depuis moins d’un an ainsi que votre carte vitale. Les remboursements sont soumis à vos droits et peuvent atteindre jusqu'à 100%. Les trajets sont autorisés vers les départements d'Ile-de-France et proximité sans restriction particulière. Pour tout déplacement dépassant 150 km, une autorisation préalable de votre caisse est nécessaire.",
    },
    {
      title: "Nos avantages et pourquoi faire appel à votre taxi conventionné",
      content:
        "Notre service de taxis conventionnés s'étend sur toute l'Île-de-France et les départements limitrophes, vous offrant une couverture complète pour vos déplacements. Que vous soyez à Paris, en banlieue ou dans les environs, nos chauffeurs conventionnés vous accompagnent partout où vous avez besoin d'aller.",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row xl:flex-row xl:p-5">
      <div className="w-full sm:w-1/2 mx-auto sm:text-left mb-5">
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <p className="text-3xl title font-bold underline">
            Taxis agréés par la Caisse Primaire d&#39;Assurance Maladie (CPAM)
          </p>
        </div>
        <div className="flex flex-col py-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-white shadow-md rounded-lg mt-1 overflow-hidden" // Ajout de overflow-hidden pour le border-radius interne
            >
              <button
                onClick={() => handleClick2(index)}
                className="w-full bg-blue px-4 py-3 flex justify-between items-center text-left text-gray-700 hover:bg-gray-100 focus:outline-none relative rounded-t-lg" // Ajout de rounded-t-lg pour arrondir le haut
              >
                <p className="title text-2xl font-bold relative text-white z-10">
                  {item.title}
                </p>
                {openIndex === index ? (
                  <svg
                    className="w-5 h-5 absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
              </button>
              {openIndex === index && (
                <div className="pl-9 bg-gray-50 p-4 mt-2 rounded-b-lg">
                  <p className="text-lg font-bold">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-1/2 xl:w-1/2 flex justify-center items-center">
        <div className="mt-8 mx-auto xl:mt-0 xl:ml-5 flex justify-center items-center rounded-lg bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
          <Image
            src="/AB-taxi.webp"
            width={450}
            height={450}
            alt="Ab-taxi image promotionnelle"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Block4;
