"use client";

import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const mapInitializedRef = useRef(false);

  useEffect(() => {
    // Jeśli mapa już została zainicjalizowana, nie inicjalizuj ponownie
    if (mapInitializedRef.current) return;

    // Asynchroniczne ładowanie Leaflet
    const initializeMap = async () => {
      if (typeof window === "undefined") return;

      try {
        // Importuj CSS i bibliotekę Leaflet
        await import("leaflet/dist/leaflet.css");
        const L = await import("leaflet");

        // Konfiguracja domyślnej ikony
        const DefaultIcon = L.icon({
          iconUrl:
            "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl:
            "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });
        L.Marker.prototype.options.icon = DefaultIcon;

        const churchPosition = {
          lat: 53.65597270827541,
          lng: 19.689803565103066,
        };
        const venuePosition = {
          lat: 53.61228235756263,
          lng: 19.612065854335807,
        };
        const centerPosition = {
          lat: (churchPosition.lat + venuePosition.lat) / 2,
          lng: (churchPosition.lng + venuePosition.lng) / 2,
        };


        // Sprawdź, czy istnieje już mapa i usuń ją
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        // Inicjalizuj mapę tylko jeśli kontener istnieje i mapa nie jest już zainicjalizowana
        if (mapRef.current && !mapInstanceRef.current) {
          mapInstanceRef.current = L.map(mapRef.current).setView(
            centerPosition,
            12,
          );

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
          }).addTo(mapInstanceRef.current);

          L.marker(churchPosition)
            .addTo(mapInstanceRef.current)
            .bindPopup("Kościół - Uroczystość zaślubin");

          L.marker(venuePosition)
            .addTo(mapInstanceRef.current)
            .bindPopup("Sala Weselna - Tu się widzimy!");

          // Oznacz mapę jako zainicjalizowaną
          mapInitializedRef.current = true;
        }
      } catch (error) {
        console.error("Błąd inicjalizacji mapy:", error);
      }
    };

    initializeMap();

    // Funkcja czyszcząca przy odmontowaniu komponentu
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      mapInitializedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "400px", width: "100%", position: "relative" }}
    />
  );
}
