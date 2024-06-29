"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  schemaContact1,
  schemaContact2,
  schemaContact3,
} from "@/app/lib/validation";
import ResaButton from "../buttons/ResaButton";
import ContactButtonNav from "../buttons/ContactButtonNav";
import informationDiaolog from "../messages/informationDiaolog";
import InformationDiaolog from "../messages/informationDiaolog";

type FormValues = {
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  phone: string;
  service: string;
  heureRdv: string;
  joursRdv: string;
  heurePriseEnCharge: string;
  numeroPriseEnCharge: string;
  ruePriseEnCharge: string;
  codePostalPriseEnCharge: string;
  villePriseEnCharge: string;
  numeroDestination: string;
  rueDestination: string;
  codePostalDestination: string;
  villeDestination: string;
};

const Block6 = () => {
  const [dialog, setDialog] = useState<{
    title: string;
    message: string;
    isError?: boolean;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);
  const [mail, setMail] = useState<FormValues>({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    phone: "",
    service: "",
    joursRdv: "",
    heureRdv: "",
    heurePriseEnCharge: "",
    numeroPriseEnCharge: "",
    ruePriseEnCharge: "",
    codePostalPriseEnCharge: "",
    villePriseEnCharge: "",
    numeroDestination: "",
    rueDestination: "",
    codePostalDestination: "",
    villeDestination: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(
      currentStep === 0
        ? schemaContact1
        : currentStep === 1
        ? schemaContact2
        : schemaContact3
    ),
    defaultValues: mail, // Initialiser les valeurs du formulaire avec l'état
  });

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const onSubmit = async (data: FormValues) => {
    const formatDate = (dateString: any) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    // Formater la date avant de continuer
    if (data.joursRdv) {
      data.joursRdv = formatDate(data.joursRdv);
    }

    if (currentStep < steps.length - 1) {
      setMail((prevMail) => ({
        ...prevMail,
        ...data,
      }));
      setCurrentStep(currentStep + 1);
    } else if (currentStep === steps.length - 1) {
      const updatedMail = {
        ...mail,
        ...data,
      };
      setMail(updatedMail);

      const emailData = {
        from: `a.btaxiservice77@gmail.com <onboarding@resend.dev>`,
        to: "a.btaxiservice77@gmail.com",
        subject: `Demande de réservation de taxi par ${updatedMail.email}`,
        html: `
          <div class="p-4">
            <p class="text-lg font-bold text-blue-500">
              ${updatedMail.service} - Réservation de taxi 
            </p>
          
            <p class="font-bold">Coordonnées :</p>
            <ul class="list-disc">
              <li class="text-base">Nom : ${updatedMail.nom}</li>
              <li class="text-base">Prénom : ${updatedMail.prenom}</li>
              <li class="text-base">Email : ${updatedMail.email}</li>
              <li class="text-base">Téléphone : ${updatedMail.phone}</li>
            </ul>
            <p class="font-bold">Informations de trajet :</p>
            <ul class="list-disc">
              <li class="text-base">Service : ${updatedMail.service}</li>
              <li class="text-base">
                Jours de prise en charge : ${updatedMail.joursRdv}
              </li>
              <li class="text-base">
                Heure de prise en charge : ${updatedMail.heurePriseEnCharge}
              </li>
              <li class="text-base">
                Heure du RDV : ${updatedMail.heureRdv}
              </li>
              <li class="text-base">Adresse de prise en charge :</li>
              <ul class="list-disc pl-5">
                <li class="text-base">Numéro : ${updatedMail.numeroPriseEnCharge}</li>
                <li class="text-base">Rue : ${updatedMail.ruePriseEnCharge}</li>
                <li class="text-base">
                  Code postal : ${updatedMail.codePostalPriseEnCharge}
                </li>
                <li class="text-base">Ville : ${updatedMail.villePriseEnCharge}</li>
              </ul>
              <li class="text-base">Adresse de destination :</li>
              <ul class="list-disc pl-5">
                <li class="text-base">Numéro : ${updatedMail.numeroDestination}</li>
                <li class="text-base">Rue : ${updatedMail.rueDestination}</li>
                <li class="text-base">
                  Code postal : ${updatedMail.codePostalDestination}
                </li>
                <li class="text-base">Ville : ${updatedMail.villeDestination}</li>
              </ul>
            </ul>
          </div>
        `,
      };

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailData }),
        });

        if (!response.ok) {
          throw new Error(`Erreur : ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Email envoyé avec succès!", result);
        setDialog({ title: "Succès", message: "Email envoyé avec succès!" });
        setIsDialogOpen(true);

        // Réinitialiser le formulaire et remettre currentStep à 0
        reset(); // Réinitialise les champs du formulaire
        setCurrentStep(0); // Remet l'étape actuelle à 0
      } catch (err) {
        console.error("Erreur lors de l'envoi de l'email:", err);
        setDialog({
          title: "Erreur",
          message: `Erreur lors de l'envoi de l'email. / ${err}`,
          isError: true,
        });
        setIsDialogOpen(true);
      }
    }
  };

  const VosCoordonnees = () => (
    <div className="flex flex-col xl:p-3">
      <div className="py-4">
        <p className="title text-gray-800 text-3xl font-bold">
          Vos coordonnées
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <input
          {...register("nom")}
          placeholder="Nom"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.nom && (
          <p className="text-red-500">
            {(errors.nom as any)?.message || "Nom est requis"}
          </p>
        )}

        <input
          {...register("prenom")}
          placeholder="Prénom"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.prenom && (
          <p className="text-red-500">
            {(errors.prenom as any)?.message || "Prénom est requis"}
          </p>
        )}

        <input
          {...register("email")}
          type="email"
          placeholder="Adresse mail"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="text-red-500">
            {(errors.email as any)?.message || "Adresse mail invalide"}
          </p>
        )}

        <input
          {...register("phone")}
          type="tel" // Utilisez 'tel' pour les numéros de téléphone
          placeholder="Votre numéro"
          className="p-2 border border-gray-300 rounded"
        />

        {errors.phone && (
          <p className="text-red-500">
            {(errors.phone as any)?.message || "Un numéro est requis"}
          </p>
        )}
      </div>
    </div>
  );

  const VotreTrajet = () => (
    <div className="flex flex-col xl:p-3">
      <div className="py-4">
        <p className="title text-gray-800 text-3xl font-bold text-white">
          Votre trajet
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center">
          {" "}
          {/* Utilisation de 'items-center' pour centrer verticalement le contenu */}
          <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-5 inline-flex">
            {[
              "Trajet professionnel",
              "Trajet aéroport / gare",
              "Demande spéciale",
              "Taxi conventionné 65%",
              "Taxi conventionné 100%",
              "Autre",
            ].map((service) => (
              <label key={service} className="block">
                <input
                  {...register("service")}
                  type="radio"
                  id={service}
                  name="service"
                  value={service}
                  className="mr-2"
                />
                {service === "Taxi conventionné 65%"
                  ? "Taxi conventionné 65%"
                  : service === "Taxi conventionné 100%"
                  ? "Taxi conventionné 100%"
                  : service}
              </label>
            ))}
          </div>
        </div>

        {errors.service && (
          <p className="text-red-500">
            {(errors.service as any)?.message || "Service est requis"}
          </p>
        )}

        {/* Autres champs du formulaire */}
        {/* Exemple d'autres champs */}
        <span
          className="text text-white underline"
          style={{ marginTop: "40px" }}
        >
          Jours de prise en charge
        </span>
        <input
          {...register("joursRdv")}
          type="date"
          placeholder="Jours de prise en charge"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.joursRdv && (
          <p className="text-red-500">
            {(errors.joursRdv as any)?.message ||
              "Jours de prise en charge est requis"}
          </p>
        )}
        <span className="text text-white underline">
          Heure de prise en charge
        </span>
        <input
          {...register("heurePriseEnCharge")}
          type="time"
          placeholder="Heure de prise en charge"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.heurePriseEnCharge && (
          <p className="text-red-500">
            {(errors.heurePriseEnCharge as any)?.message ||
              "Heure de prise en charge est requise"}
          </p>
        )}
        <p className="text text-white underline ">Heure du RDV</p>
        <input
          {...register("heureRdv")}
          type="time"
          placeholder="Heure de RDV"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.heureRdv && (
          <p className="text-red-500">
            {(errors.heureRdv as any)?.message || "Heure de RDV est requise"}
          </p>
        )}
      </div>
    </div>
  );

  const VotrePrise = () => (
    <div className="flex flex-col xl:p-3 w-full">
      <div className="py-4">
        <p className="title text-gray-800 text-3xl font-bold text-white">
          Prise en charge et Destination
        </p>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-5 w-full">
            <span className="text-gray-800 text-xl font-bold w-full">
              Lieu de prise en charge
            </span>
            <label className="block w-full">
              <input
                {...register("numeroPriseEnCharge")}
                type="number"
                placeholder="Numéro"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.numeroPriseEnCharge && (
                <p className="text-red-500">
                  {errors.numeroPriseEnCharge?.message || "Numéro requis"}
                </p>
              )}
            </label>
            <label className="block w-full">
              <input
                {...register("ruePriseEnCharge")}
                type="text"
                placeholder="Voie"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.ruePriseEnCharge && (
                <p className="text-red-500">
                  {errors.ruePriseEnCharge?.message || "Rue requise"}
                </p>
              )}
            </label>
            <label className="block w-full">
              <input
                {...register("codePostalPriseEnCharge")}
                type="text"
                placeholder="Code postal"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.codePostalPriseEnCharge && (
                <p className="text-red-500">
                  {errors.codePostalPriseEnCharge?.message ||
                    "Code postal requis"}
                </p>
              )}
            </label>
            <label className="block w-full">
              <input
                {...register("villePriseEnCharge")}
                type="text"
                placeholder="Ville"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.villePriseEnCharge && (
                <p className="text-red-500">
                  {errors.villePriseEnCharge?.message || "Ville requise"}
                </p>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 gap-4 rounded-lg bg-white p-5 w-full">
            <span className="text-gray-800 text-xl font-bold w-full">
              Lieu de destination
            </span>
            <label className="block w-full">
              <input
                {...register("numeroDestination")}
                type="number"
                placeholder="Numéro"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.numeroDestination && (
                <p className="text-red-500">
                  {errors.numeroDestination?.message || "Numéro requis"}
                </p>
              )}
            </label>
            <label className="block w-full">
              <input
                {...register("rueDestination")}
                type="text"
                placeholder="Voie"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.rueDestination && (
                <p className="text-red-500">
                  {errors.rueDestination?.message || "Rue requise"}
                </p>
              )}
            </label>
            <label className="block w-full">
              <input
                {...register("codePostalDestination")}
                type="text"
                placeholder="Code postal"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.codePostalDestination && (
                <p className="text-red-500">
                  {errors.codePostalDestination?.message ||
                    "Code postal requis"}
                </p>
              )}
            </label>
            <label className="block w-full">
              <input
                {...register("villeDestination")}
                type="text"
                placeholder="Ville"
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.villeDestination && (
                <p className="text-red-500">
                  {errors.villeDestination?.message || "Ville requise"}
                </p>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );

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
      title: "Prise en charge",
      content: <VotrePrise />,
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-col xl:flex-row xl:p-5 ">
      {dialog && (
        <InformationDiaolog
          title={dialog.title}
          message={dialog.message}
          isError={dialog.isError}
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
        />
      )}

      <div
        className="flex-1 xl:mr-5 bg-blue-100 rounded-lg p-5"
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
      >
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
            Transport événementiel, occasionnel, touristique, ou d&#39;affaires,
            n&#39;hésitez pas à formuler vos demandes.
          </p>
          <div className="flex justify-around mt-4">
            <ResaButton />
            <ContactButtonNav />
          </div>
          <div className="mt-8">
            <p className="title text-2xl font-semibold">
              2. Pas d&#39;argent à avancer
            </p>
            <p className="text font-semibold text-gray-600 mt-2 px-2">
              Vous avez une prescription médicale de transport?
            </p>
            <p className="text text-gray-600 mt-1 px-2">
              Commandez un taxi conventionné qui vous fera bénéficier du tiers
              payant. Vous ne faites pas l&#39;avance des frais de votre course.
              Ils vous sont payés par la sécurité sociale.
            </p>
          </div>
          <div className="mt-8 mb-8">
            <p className="text-2xl font-semibold">3. Profitez</p>
            <p className="text-gray-600 mt-1 px-2">
              C&#39;est le moment de vous détendre, profitez du confort de nos
              véhicules et relaxez-vous.
            </p>
          </div>
        </div>
      </div>

      {/* Second block image */}
      <div
        className="mt-8 mx-auto xl:mt-0 xl:ml-5 xl:w-1/2 w-full  
       flex flex-col items-center justify-center rounded-lg bg-blue-100 box-shadow p-5"
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full  xl:w-full overflow-y-auto flex flex-col h-full"
        >
          <ol className="flex mx-auto justify-center items-center w-full text-sm font-medium text-center text-white dark:text-white sm:text-base">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`flex items-center ${
                  index < steps.length - 1
                    ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                    : ""
                } ${
                  index === currentStep
                    ? "text-orange-600 dark:text-orange-500"
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

          <div className="mt-2 w-full">
            {currentStep === 0 && <VosCoordonnees />}
            {currentStep === 1 && <VotreTrajet />}
            {currentStep === 2 && <VotrePrise />}
          </div>

          <div className="flex justify-between mt-4 w-full">
            <button
              type="button"
              className={`py-2 px-4 bg-white text-gray-800 rounded ${
                currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              disabled={currentStep === 0}
            >
              Précédent
            </button>
            <button
              type="submit"
              className={`py-2 px-4 bg-blue-600 text-white rounded `}
            >
              {currentStep === steps.length - 1 ? "Soumettre" : "Suivant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Block6;
