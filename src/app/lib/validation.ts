import { z } from "zod";

export const schemaContact1 = z.object({
    nom: z.string().min(1, "Nom est requis"),
    prenom: z.string().min(1, "Prénom est requis"),
    email: z.string().email("Adresse mail invalide"),
    phone: z.string().min(1, "Numéro de téléphone est requis"),
    adresse: z.string().min(1, "Adresse est requise"),
  });
  
export const schemaContact2 = z.object({
    service: z.enum(["Trajet professionnel",
              "Trajet aéroport / gare",
              "Demande spéciale",
              "Taxi conventionné 65%",
              "Taxi conventionné 100%",
              "Autre",]),
    joursRdv: z.string().min(1, "Le jours du RDV est requis"),
    heureRdv: z.string().min(1, "L'heure de RDV est requise"),
    heurePriseEnCharge: z.string().min(1, "Heure de prise en charge est requise"),
    adressePriseEnCharge: z.string().min(1, "Adresse de prise en charge est requise"),
    adresseDestination: z.string().min(1, "Adresse de destination est requise"),
  });
  
