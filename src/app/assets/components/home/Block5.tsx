"use client";
import React, { useState, useEffect } from "react";

const Block5 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placeDetails, setPlaceDetails] = useState<any>(null);
  const apiKey = "AIzaSyDrH0Iv4IqmewW-ImT72ryU2UBytKZtWe0"; // Replace with your actual Google Maps API key
  const placeId = "ChIJr8TzC0-6N64RyP-iF55yje0";

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

        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`; // Correct the script URL
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
        service.getDetails({ placeId: placeId }, (placeResult, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaceDetails(placeResult);
          } else {
            setError("Place details request failed");
          }
          setIsLoading(false);
        });
      } else {
        setError("Google Maps Places API is not available");
        setIsLoading(false);
      }
    };

    const fetchPlaceDetails = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      if (!apiKey || !placeId) {
        setError("Missing required Google Maps API key or placeId");
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
    return null; // Or some placeholder while loading
  }

  // Render your component with placeDetails
  return (
    <div>
      <h1>{placeDetails.name}</h1>
      <p>{placeDetails.formatted_address}</p>
      <p>Rating: {placeDetails.rating}</p>
      {/* Render other details you need */}
    </div>
  );
};

export default Block5;
