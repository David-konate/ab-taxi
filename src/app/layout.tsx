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
          name="AB-Taxi, taxi conventionnés Coulommiers VSL et transports de santé agréés - Coulommiers - 24 heures sur 24, 7 jours sur 7"
          content="AB Taxi : transport aéroport, gare et CPAM. Taxis conventionnés VSL et transports de santé agréés. Coulommiers(77). 24 heures sur 24, 7 jours sur 7. Réservez votre taxi conventionné VSL et transports de santé agréés dès maintenant et profitez de nos tarifs compétitifs. Obtenez un devis gratuit."
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
