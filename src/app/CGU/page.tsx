import Image from "next/image";
import Footer from "../assets/components/Footer";

const CGU = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center h-full mt-5">
        <Image
          src="/contract.svg"
          width={100}
          height={100}
          alt="Icône de CGU"
          className="custom-image2"
        />
        <p className="title text-gray-800 text-3xl font-bold mt-3">
          Conditions Générales d&rsquo;Utilisation
        </p>
      </div>

      <div className="flex flex-col items-center text-center justify-center h-full mt-5 bg-gradient-to-br from-blue-500 to-blue-800 shadow-md rounded-lg p-8">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Politique de Confidentialité
          </h2>
          <p className="text-white mt-2 p-5">
            Nous attachons une grande importance à la protection de votre vie
            privée. Notre politique de confidentialité décrit quelles données
            nous collectons, comment nous les utilisons et comment nous assurons
            leur sécurité.
          </p>
          <h3 className="mt-4 font-bold text-white">Données Collectées</h3>
          <p className="text-white mt-2 p-5">
            Nous pouvons collecter certaines données personnelles telles que
            votre nom, adresse email, numéro de téléphone et d&rsquo;autres
            informations que vous fournissez volontairement lors de votre
            interaction avec notre site.
          </p>
          <h3 className="mt-4 font-bold text-white">Utilisation des Données</h3>
          <p className="text-white mt-2 p-5">
            Vos données peuvent être utilisées pour assurer un service de
            qualité, vous envoyer des informations sur nos services,
            personnaliser le contenu et améliorer le fonctionnement de notre
            site.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">Cookies</h2>
          <p className="text-white mt-2 p-5">
            Notre site web peut utiliser des cookies pour améliorer votre
            expérience. Dans la section sur les{" "}
            <a href="/cookies" className="text-yellow-400 underline">
              cookies
            </a>
            , vous trouverez des informations sur leur utilisation et comment
            modifier les paramètres dans votre navigateur.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Droits d&rsquo;Auteur
          </h2>
          <p className="text-white mt-2 p-5">
            Tout le contenu de notre site web, sauf indication contraire, est
            protégé par des droits d&rsquo;auteur. Toute utilisation non
            autorisée du matériel est interdite.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Liens vers des Ressources Tiers
          </h2>
          <p className="text-white mt-2 p-5">
            Notre site peut contenir des liens vers des ressources web tierces.
            Nous ne sommes pas responsables du contenu ou des actions de ces
            ressources.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Clause de Non-Responsabilité
          </h2>
          <p className="text-white mt-2 p-5">
            Les informations fournies sur notre site web sont à titre informatif
            uniquement. Nous ne sommes pas responsables des actions entreprises
            sur la base de ces informations.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Conformité au Registre Bloctel
          </h2>
          <p className="text-white mt-2 p-5">
            Nous respectons la réglementation française en matière de démarchage
            téléphonique. Si vous souhaitez exercer vos droits en matière de
            démarchage téléphonique ou si vous souhaitez être retiré de nos
            listes de contacts à des fins de marketing, veuillez nous contacter
            aux coordonnées fournies dans la section &quot;Contact&quot; de nos
            mentions légales.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="text-white mt-2 p-5">
            Si vous avez des questions, des préoccupations ou des commentaires
            concernant notre site web, nos services ou les aspects juridiques,
            veuillez nous contacter aux coordonnées fournies.
            <br />
            Adresse e-mail: a.btaxiservice77@gmail.com
            <br />
            Numéro de téléphone: 06.50.01.73.39
          </p>
          <p className="text-white mt-2 p-5">
            Nous nous engageons à vous répondre dans les plus brefs délais et à
            traiter toutes vos demandes de manière professionnelle et diligente.
          </p>
        </div>
      </div>
      <div className="absolute mt-8 w-full left-0">
        <Footer />
      </div>
    </div>
  );
};

export default CGU;
