import ResaButton2 from "../buttons/ResaButton2";

const Block2 = () => {
  const services = [
    {
      title: "Taxi conventionné",
      description:
        "Profitez d'un transport sûr et confortable pour vos trajets médicaux avec notre service de taxi conventionné.",
      image: "/cpam.webp",
    },
    {
      title: "Transfert aéroport",
      description:
        "Gagnez du temps et de la tranquillité d'esprit en confiant votre transfert aéroport à notre service professionnel.",
      image: "/aeroport.webp",
    },
    {
      title: "Transfert gare",
      description:
        "Un transfert gare ponctuel et confortable ? C'est possible avec notre service professionnel et sur mesure.",
      image: "/train.webp",
    },
    {
      title: "Transport professionnel",
      description:
        "Un service de transport haut de gamme et inimitable, où l'élégance, la ponctualité et la discrétion sont nos maîtres-mots.",
      image: "/reunion.webp",
    },
    {
      title: "Transport de l'hôtel",
      description:
        "Plus besoin de chercher un taxi, TAXI-AB vous attend à la sortie de l'aéroport ou de la gare pour vous conduire à votre hôtel.",
      image: "/hotel.webp",
    },
    {
      title: "Demande spéciale",
      description:
        "Plus qu'un simple voyage, une expérience inoubliable sur mesure avec notre service de demande spéciale, fait pour vous.",
      image: "/special.webp",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between p-4">
      <div>
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <p className="title text-3xl font-bold underline">NOS SERVICES</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg w-full shadow-md service-item flex flex-col"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundClip: "padding-box",
              }}
            >
              <div className="p-4 bg-white bg-opacity-70 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="title text-lg font-bold">{service.title}</h3>
                  <p className="text-gray-700 font-bold mt-3">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center justify-end w-full mt-5">
                  <ResaButton2 />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Block2;
