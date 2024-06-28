import React from "react";

type MailProps = {
  mail: {
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
};

const Mail: React.FC<MailProps> = ({ mail }) => {
  return (
    <div className="p-4">
      <p className="text-lg font-bold text-blue-500">
        {mail.service} - Réservation de taxi AB-TAXI
      </p>
      <p>Vous avez effectué une demande de réservation de taxi sur AB-TAXI.</p>
      <p className="font-bold">Vos coordonnées :</p>
      <ul className="list-disc">
        <li className="text-base">Nom : {mail.nom}</li>
        <li className="text-base">Prénom : {mail.prenom}</li>
        <li className="text-base">Email : {mail.email}</li>
        <li className="text-base">Adresse : {mail.adresse}</li>
        <li className="text-base">Téléphone : {mail.phone}</li>
      </ul>
      <p className="font-bold">Vos informations de trajet :</p>
      <ul className="list-disc">
        <li className="text-base">Service : {mail.service}</li>
        <li className="text-base">
          Jours de prise en charge : {mail.joursRdv}
        </li>
        <li className="text-base">
          Heure de prise en charge : {mail.heurePriseEnCharge}
        </li>
        <li className="text-base">Adresse de prise en charge :</li>
        <ul className="list-disc pl-5">
          <li className="text-base">Numéro : {mail.numeroPriseEnCharge}</li>
          <li className="text-base">Rue : {mail.ruePriseEnCharge}</li>
          <li className="text-base">
            Code postal : {mail.codePostalPriseEnCharge}
          </li>
          <li className="text-base">Ville : {mail.villePriseEnCharge}</li>
        </ul>
        <li className="text-base">Adresse de destination :</li>
        <ul className="list-disc pl-5">
          <li className="text-base">Numéro : {mail.numeroDestination}</li>
          <li className="text-base">Rue : {mail.rueDestination}</li>
          <li className="text-base">
            Code postal : {mail.codePostalDestination}
          </li>
          <li className="text-base">Ville : {mail.villeDestination}</li>
        </ul>
      </ul>
      <p className="text-lg font-bold">Cordialement,</p>
      <p className="text-lg font-bold">L&#39;équipe AB-Taxi</p>
    </div>
  );
};

export default Mail;
