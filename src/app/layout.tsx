"use client";
import { Inter } from "next/font/google";
import "./globals.scss";
import Head from "next/head";
import NavBar from "./assets/components/NavBar";

const inter = Inter({ subsets: ["latin"] }); // Uncomment to use Inter font

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr" className="min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>AB Taxi</title>

        <meta
          name="Taxi Coulommiers - Réservation en Ligne
                Service de Taxi 24/7 à Coulommiers
                Taxi Aéroport et Gare Coulommiers
                Chauffeur Privé Coulommiers - Taxi Premium
                Taxi Écologique et Confortable"
          content="Réservez votre taxi à Coulommiers en ligne. Service rapide et fiable 24/7 pour tous vos déplacements.
                  Besoin d’un taxi à Coulommiers ? Réservez en ligne pour un service de qualité, disponible jour et nuit.
                  Taxi Coulommiers : transferts aéroport et gare, services professionnels et privés. Réservez maintenant !
                  Chauffeur privé à Coulommiers : profitez d’un service premium et écologique pour tous vos trajets.
                  Taxi Coulommiers : confort, sécurité et rapidité. Réservez votre course en quelques clics."
        />

        {/* Load Inter font */}
        {/* Add other meta tags and links as needed */}
      </Head>
      <body>
        <NavBar />
        <div className="container mx-auto max-w-7xl p-4">{children}</div>
        {/* Replace YOUR_API_KEY with your actual Google Maps API key */}
      </body>
    </html>
  );
};

export default RootLayout;
