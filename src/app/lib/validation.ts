import { z } from "zod";

export const schemaContact1 = z.object({
    nom: z.string().min(1, "Nom est requis"),
    prenom: z.string().min(1, "Prénom est requis"),
    email: z.string().email("Adresse mail invalide"),
    phone: z.string().min(1, "Numéro de téléphone est requis"),
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

  });


export const schemaContact3 = z.object({
  numeroPriseEnCharge: z.string().min(1, "Numéro de prise en charge requis"),
  ruePriseEnCharge: z.string().min(1, "Voie de prise en charge requise"),
  codePostalPriseEnCharge: z
    .string()
    .min(5, "Code postal de prise en charge invalide")
    .max(10, "Code postal de prise en charge invalide")
    .regex(/^\d{5}(?:[-\s]\d{4})?$/, "Code postal de prise en charge invalide"),
  villePriseEnCharge: z.string().min(1, "Ville de prise en charge requise"),

  numeroDestination: z.string().min(1, "Numéro de destination requis"),
  rueDestination: z.string().min(1, "Rue de destination requise"),
  codePostalDestination: z
    .string()
    .min(5, "Code postal de destination invalide")
    .max(10, "Code postal de destination invalide")
    .regex(/^\d{5}(?:[-\s]\d{4})?$/, "Code postal de destination invalide"),
  villeDestination: z.string().min(1, "Ville de destination requise"),
});

  
