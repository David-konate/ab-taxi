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
        <title>AB Taxi</title>
        <meta
          name="AB-Taxi, taxi conventionnés VSL et transports de santé agréés"
          content="AB Taxi : transport aéroport, gare et CPAM. Taxis conventionnés VSL et transports de santé agréés. Paris et région parisienne. 24 heures sur 24, 7 jours sur 7. Réservez votre taxi conventionnés VSL et transports de santé agréés dès maintenant et profitez de nos tarifs compétitifs. Obtenez un devis gratuit."
        />

        {/* Load Inter font */}
        {/* Add other meta tags and links as needed */}
      </Head>
      <body>
        <NavBar />
        <div className="container mx-auto max-w-7xl p-4">{children}</div>
        {/* Replace YOUR_API_KEY with your actual Google Maps API key */}
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDrH0Iv4IqmewW-ImT72ryU2UBytKZtWe0&libraries=&callback=initMap`}
        ></script>
      </body>
    </html>
  );
};

export default RootLayout;
