import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Head from "next/head";
import NavBar from "./assets/components/NavBar";

const inter = Inter({ subsets: ["latin"] }); // Uncomment to use Inter font

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <Head>
        <title>AB Taxi</title>
        <meta
          name="AB Taxi"
          content="AB Taxi, nous assurons des trajets vers les aéroports, les gares et les transports de santé CPAM.

"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          as="style"
        />{" "}
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
