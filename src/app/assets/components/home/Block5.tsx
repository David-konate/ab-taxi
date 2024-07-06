import React, { useState, useEffect } from "react";

const Block5 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placeDetails, setPlaceDetails] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const apiKey = "AIzaSyDrH0Iv4IqmewW-ImT72ryU2UBytKZtWe0"; // Replace with your real Google Maps API key
  const placeId = "ChIJr8TzC0-6N64RyP-iF55yje0"; // Identifier of the places

  useEffect(() => {
    const loadGoogleMapsScript = async () => {
      return new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector(
          `script[src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places"]`
        );
        if (existingScript) {
          existingScript.addEventListener("load", () => resolve());
          existingScript.addEventListener("error", () =>
            reject(new Error("Failed to load Google Maps script"))
          );
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Failed to load Google Maps script"));
        document.head.appendChild(script);
      });
    };

    const initializeGoogleMaps = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        const service = new window.google.maps.places.PlacesService(
          document.createElement("div")
        );
        service.getDetails({ placeId }, (placeResult: any, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaceDetails(placeResult);
            if (placeResult.reviews && placeResult.reviews.length > 0) {
              setReviews(placeResult.reviews.slice(0, 5));
            } else {
              console.warn("Aucun avis trouvé pour cet endroit.");
            }
          } else {
            setError("Échec de la requête pour les détails du lieu");
          }
          setIsLoading(false);
        });
      } else {
        setError("API Google Maps Places non disponible");
        setIsLoading(false);
      }
    };

    const fetchPlaceDetails = async () => {
      setIsLoading(true);
      setError(null);

      if (!apiKey || !placeId) {
        setError("Clé API Google Maps ou placeId manquant");
        setIsLoading(false);
        return;
      }

      try {
        await loadGoogleMapsScript();
        initializeGoogleMaps();
      } catch (error) {
        console.error(
          "Erreur lors du chargement de la bibliothèque Google Maps Places:",
          error
        );
        setError("Échec du chargement de la bibliothèque Google Maps Places");
        setIsLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [apiKey, placeId]);

  useEffect(() => {
    const startInterval = () => {
      const id = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000);
      setIntervalId(id);
    };

    if (reviews.length > 0) {
      startInterval();
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [reviews.length]);

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? reviews.length - 1 : newIndex;
    });
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePause = () => {
    if (intervalId) clearInterval(intervalId);
  };

  const handleResume = () => {
    const id = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    setIntervalId(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!placeDetails) {
    return null;
  }

  return (
    <div className="max-w-lg mx-auto bg-blue-100 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Avis Clients</h2>
        <div className="flex space-x-4">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            onClick={handlePreviousReview}
          >
            <svg
              className="fill-current text-gray-700 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 10-20 0 10 10 0 0020 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            onClick={handleNextReview}
          >
            <svg
              className="fill-current text-gray-700 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 10-20 0 10 10 0 0020 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="p-4 bg-gray-50 rounded-lg"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onTouchStart={handlePause}
        onTouchEnd={handleResume}
      >
        {reviews.length > 0 ? (
          <div className="bg-blue p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <div className="flex items-center space-x-2 mb-4">
              <p className="font-bold text-white text-lg">
                {reviews[currentReviewIndex].author_name}
              </p>
            </div>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className="text-yellow-400 text-lg">
                  {reviews[currentReviewIndex].rating > idx ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p className="text-blue-800 font-bold text-base bg-white rounded-lg p-4">
              {reviews[currentReviewIndex].text}
            </p>
          </div>
        ) : (
          <p className="text-white text-lg">
            Aucun avis trouvé pour cet endroit.
          </p>
        )}
      </div>
    </div>
  );
};

export default Block5;
