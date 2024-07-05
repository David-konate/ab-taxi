"use client";
import React, { useState, useEffect } from "react";

const Block5 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placeDetails, setPlaceDetails] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);

  const apiKey = "AIzaSyDrH0Iv4IqmewW-ImT72ryU2UBytKZtWe0"; // Replace with your real Google Maps API key
  const placeId = "ChIJr8TzC0-6N64RyP-iF55yje0"; // Identifier of the place you want to fetch

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
            // Extract and set the first 5 reviews (if available)
            // Handle potential errors and empty reviews gracefully
            if (placeResult.reviews && placeResult.reviews.length > 0) {
              setReviews(placeResult.reviews.slice(0, 5));
            } else {
              console.warn("No reviews found for this place.");
            }
          } else {
            setError("Request for place details failed");
          }
          setIsLoading(false);
        });
      } else {
        setError("Google Maps Places API unavailable");
        setIsLoading(false);
      }
    };

    const fetchPlaceDetails = async () => {
      setIsLoading(true);
      setError(null); // Clear previous errors

      if (!apiKey || !placeId) {
        setError("Missing Google Maps API key or placeId");
        setIsLoading(false);
        return;
      }

      try {
        await loadGoogleMapsScript();
        initializeGoogleMaps();
      } catch (error) {
        console.error("Error loading Google Maps Places library:", error);
        setError("Failed to load Google Maps Places library");
        setIsLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [apiKey, placeId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!placeDetails) {
    return null; // Or a placeholder while loading
  }

  return (
    <div className="p-4">
      <div className="mb-4 sm:mb-0 sm:mr-4">
        <p className="title text-3xl font-bold underline">AVIS</p>
      </div>
      {/* Rendre conditionnellement les avis s'ils sont disponibles */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center space-x-2 mb-4">
                {/* Afficher le nom de l'auteur */}
                <p className="font-bold text-white text-lg">
                  {review.author_name}
                </p>
              </div>

              {/* Afficher la note avec des étoiles en utilisant des composants Tailwind */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    {review.rating > idx ? "★" : "☆"}
                  </span>
                ))}
              </div>

              {/* Afficher le texte de l'avis */}
              <p className="text-blue-800 font-bold text-base bg-white rounded-lg p-4">
                {review.text}
              </p>
            </div>
          ))
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
