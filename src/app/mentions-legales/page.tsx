import Image from "next/image";
import Footer from "../assets/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 py-12 rounded-lg h-full mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/privacy.svg"
              width={100}
              height={100}
              alt="Ic&#244;ne l&#233;gale"
              className="custom-image2"
            />
            <p className="text-white text-3xl font-bold mt-3">
              Mentions l&#233;gales
            </p>
          </div>

          <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2">
            <div className="bg-white shadow-md rounded-lg p-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Propri&#233;taire du site
              </h2>
              <p className="text-gray-600">
                <strong>D&#233;nomination ou raison sociale:</strong> A.B TAXI
                SERVICE
                <br />
                <strong>Immatriculation au RCS, num&#233;ro:</strong> 908 177
                710 R.C.S.
                <br />
                <strong>Si&#232;ge:</strong> Coulommiers
                <br />
                <strong>SIRET (Si&#232;ge):</strong> 980 442 594 00019
                <br />
                <strong>Num&#233;ro TVA intracommunautaire:</strong> ????????
                <br />
                <strong>Date d&#8217;immatriculation:</strong> 01/01/2024
                <br />
                <strong>Activit&#233;s principales:</strong> Transports de
                voyageurs par taxis - ( 49.32Z )
                <br />
                <strong>Nom:</strong> BENNA
                <br />
                <strong>Pr&#233;nom:</strong> Ayache
                <br />
                <strong>T&#233;l&#233;phone:</strong> 06.50.01.73.39
                <br />
                <strong>Email:</strong> a.btaxiservice77@gmail.com
                <br />
                <strong>Forme juridique:</strong> Soci&#233;t&#233; par actions
                simplifi&#233;e
                <br />
                <strong>Capital social:</strong> ???,00 Euros
                <br />
                <strong>Adresse de l&#8217;&#233;tablissement:</strong> 13 Rue
                Pierre Curie 77120 Coulommiers
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                H&#233;bergeur du site
              </h2>
              <p className="text-gray-600">
                <strong>Soci&#233;t&#233;:</strong> Vercel
                <br />
                <strong>Adresse:</strong>{" "}
                https://ab-taxi-678a4bx7m-david-konates-projects.vercel.app
                <br />
                <strong>Nom de domaine:</strong> OVH
                <br />
                <strong>Adresse:</strong> 2 Rue Kellermann, 59100 Roubaix,
                France
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mt-8 w-full left-0">
        <Footer />
      </div>
    </div>
  );
};

export default MentionsLegales;
