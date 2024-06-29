import Image from "next/image";
import Footer from "../assets/components/Footer";

const Cookies = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center h-full mt-5">
        <Image
          src="/cookie.svg"
          width={100}
          height={100}
          alt="Icône de téléphone"
          className="custom-image2"
        />
        <p className="title text-gray-800 text-3xl font-bold mt-3">Cookies</p>
      </div>

      <div className="flex flex-col items-center text-center justify-center h-full mt-5 bg-gradient-to-br from-blue-500 to-blue-800 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white">
          Politique d&#39;utilisation des cookies
        </h1>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Qu&#39;est-ce qu&#39;un « COOKIE » ?
          </h2>

          <p className="text-white mt-2 p-5">
            Un Cookie ou traceur est un fichier électronique déposé sur un
            terminal (ordinateur, tablette, smartphone...) et lu par exemple
            lors de la consultation d&#39;un site internet, de la lecture
            d&#39;un courrier électronique, de l&#39;installation ou de
            l&#39;utilisation d&#39;un logiciel ou d&#39;une application mobile
            et ce quel que soit le type de terminal utilisé. En naviguant sur ce
            site, des cookies émanant de la société responsable du site concerné
            et/ou des sociétés tiers pourront être déposés sur votre terminal.
            Lors de la première navigation sur ce site, une bannière explicative
            sur l&#39;utilisation des cookies apparaîtra. Dès lors, en
            poursuivant la navigation, le client et/ou prospect sera réputé
            informé et avoir accepté l&#39;utilisation desdits cookies. Le
            consentement donné sera valable pour une période de treize (13)
            mois. L&#39;utilisateur a la possibilité de désactiver les cookies à
            partir des paramètres de son navigateur. Toutes les informations
            collectées ne seront utilisées que pour suivre le volume, le type et
            la configuration du trafic utilisant ce site, pour en développer la
            conception et l&#39;agencement et à d&#39;autres fins
            administratives et de planification et plus généralement pour
            améliorer le service que nous vous offrons. Les cookies suivants
            sont présents sur ce site:
          </p>

          <ul className="list-disc list-inside mt-4 text-white">
            <li>
              Cookies Google Google analytics: permet de mesurer l&#39;audience
              du site.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Politique d&#39;utilisation des cookies
          </h2>

          <p className="text-white mt-2 p-5">
            Notre site internet utilise des cookies, comme la plupart des sites,
            afin de nous aider à améliorer votre expérience lorsque vous
            naviguez sur notre site. Les cookies sont de petits fichiers texte
            qui sont enregistrés sur votre ordinateur ou votre téléphone lorsque
            vous naviguez sur internet.
          </p>

          <h3 className="mt-4 font-bold text-white">
            Nous utilisons des cookies pour
          </h3>

          <ul className="list-disc list-inside mt-4 text-white">
            <li>Faire fonctionner notre site le mieux possible</li>
            <li>
              Vous identifier lorsque vous vous connectez à notre site web
            </li>
            <li>Mémoriser vos préférences de navigation</li>
            <li>Améliorer la rapidité et la sécurité de notre site</li>
            <li>
              Vous permettre de partager des articles sur les réseaux sociaux
              tels que Facebook
            </li>
            <li>Améliorer en permanence notre site web</li>
          </ul>

          <h3 className="mt-4 font-bold text-white">
            Nous n&#39;utilisons pas de cookies pour
          </h3>

          <ul className="list-disc list-inside mt-4 text-white">
            <li>
              Recueillir sans votre autorisation des informations personnelles
              qui permettraient de vous identifier
            </li>
            <li>Recueillir sans votre autorisation des données sensibles.</li>
            <li>Transmettre vos données à des réseaux publicitaires</li>
            <li>Transmettre vos données personnelles à un tiers</li>
          </ul>

          <h3 className="mt-4 font-bold text-white">Cookies de statistiques</h3>
          <p className="text-white mt-2 p-5">
            Nous utilisons des cookies afin de collecter des données concernant
            l&#39;audience de notre site : sa fréquentation, la technologie
            utilisée pour y accéder, le temps que passent les visiteurs sur le
            site, les pages qu&#39;ils visitent, etc. Cela nous permet
            d&#39;améliorer en permanence notre site.
          </p>

          <p className="text-white mt-2 p-5">
            Notre site utilise Google Analytics, un service d&#39;analyse de
            site internet proposé par Google, Inc. (‘Google’). Google Analytics
            utilise des cookies pour permettre au site d&#39;analyser la manière
            dont les utilisateurs y naviguent. L&#39;information émise par le
            cookie concernant votre utilisation du site (y compris votre adresse
            IP) est transmise et enregistrée par Google sur ses serveurs aux
            Etats-Unis.
          </p>

          <p className="text-white mt-2 p-5">
            Google utilise ces informations pour évaluer votre utilisation du
            site, générer des rapports à destination des opérateurs de site
            internet sur les interactions des utilisateurs avec le site et pour
            fournir d&#39;autres services liés à l&#39;activité du site et à
            l&#39;utilisation d&#39;internet. Google est également susceptible
            de transmettre ces informations à un tiers lorsque la loi le
            requiert, ou lorsqu&#39;il s&#39;agit d&#39;un tiers sous-traitant
            les informations pour Google.
          </p>

          <p className="text-white mt-2 p-5">
            Google n&#39;associe pas votre adresse IP avec d&#39;autres données
            détenues par Google. Vous pouvez refuser l&#39;activation des
            cookies en modifiant les paramètres de votre navigateur, cependant
            il est possible que cela vous empêche d&#39;accéder à
            l&#39;intégralité des fonctions de notre site internet. En utilisant
            ce site internet, vous consentez à ce que Google procède au
            traitement de vos données selon les conditions énoncées ci-dessus.
          </p>

          <h3 className="mt-4 font-bold text-white">Pour paramétrer :</h3>
          <p className="text-white mt-2 p-5">
            Vous pouvez désactiver complètement les cookies dans votre
            navigateur. Dans ce cas, notre site ne fonctionnera plus normalement
            mais vous pourrez quand même effectuer des actions basiques.
          </p>

          <p className="text-white mt-2 p-5">
            <strong>1/ si vous utilisez le navigateur Google Chrome</strong>
            <br />
            – Cliquez sur le menu Chrome dans la barre d’outils du navigateur.
            <br />
            – Sélectionnez « Paramètres ».
            <br />
            – Cliquez sur « Afficher les paramètres avancés ».
            <br />
            – Dans la section « Confidentialité », cliquez sur le bouton «
            Paramètres de contenu ».
            <br />– Dans la section « Cookies », sélectionnez « Interdire à tous
            les sites de stocker des données » et cochez la case « Bloquer les
            cookies et les données de site tiers », puis cliquez sur OK.
          </p>

          <p className="text-white mt-2 p-5">
            <strong>2/ si vous utilisez le navigateur Firefox</strong>
            <br />
            – Allez dans le menu « Outils » du navigateur puis sélectionnez le
            menu « Options »<br />– Cliquez sur l’onglet « vie privée »,
            décochez la case « Accepter les cookies » puis cliquez sur OK.
          </p>

          <p className="text-white mt-2 p-5">
            <strong>3/ si vous utilisez le navigateur Safari</strong>
            <br />
            – Dans votre navigateur, choisissez le menu « Édition » puis
            sélectionnez « Préférences ».
            <br />
            – Cliquez sur « Confidentialité ».
            <br />– Positionnez le réglage « Bloquer les cookies » sur «
            Toujours » puis cliquez sur OK.
          </p>

          <p className="text-white mt-2 p-5">
            <strong>4/ si vous utilisez le navigateur Internet Explorer</strong>
            <br />
            – Dans Internet Explorer, cliquez sur le bouton « Outils », puis sur
            « Options Internet ».
            <br />– Sous l’onglet Confidentialité déplacez le curseur vers le
            haut pour bloquer tous les cookies ou vers le bas pour autoriser
            tous les cookies, puis cliquez sur OK.
          </p>
        </div>
      </div>
      <div className="absolute mt-8 w-full left-0">
        <Footer />
      </div>
    </div>
  );
};

export default Cookies;
