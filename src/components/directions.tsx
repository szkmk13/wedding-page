"use client";
import React from 'react';
import { MapPin, Train, Car, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in react-leaflet
// This addresses a common issue where marker icons don't display correctly
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  L.Marker.prototype.options.icon = DefaultIcon;

export default function DirectionsMap() {
  // Example coordinates - replace with your actual locations
  
  const stationPosition = {"lat":53.65590287223521, "lng": 19.689747220782298}; // Train station coordinates
  const venuePosition = {"lat":53.61228235756263,  "lng": 19.612065854335807};   // Wedding venue coordinates
  const centerPosition = [(stationPosition.lat + venuePosition.lat)/2,(stationPosition.lng + venuePosition.lng)/2]
  
  // Example route between the two points - you can add waypoints as needed
  const routePositions = [
    stationPosition,
    // {"lat":52.229176, "lng": 21.007229}, // Example waypoint
    venuePosition
  ];

  return (
    <div className="w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-main sm:text-4xl mb-12">
          JAK DOTRZEĆ
        </h2>

        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mb-8">
          <div className="h-64 sm:h-96">
            <MapContainer 
              center={centerPosition} // Center between the two points
              zoom={12} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {/* Train station marker */}
              <Marker position={stationPosition}>
                <Popup>Dworzec PKP/PKS</Popup>
              </Marker>
              
              {/* Wedding venue marker */}
              <Marker position={venuePosition}>
                <Popup>Sala Weselna</Popup>
              </Marker>
              
              {/* Route between the points */}
              <Polyline 
                positions={routePositions} 
                color="#4f46e5" 
                dashArray="10,5"
                weight={4}
              />
            </MapContainer>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="rounded-full bg-gold/20 p-4">
              <Train className="h-8 w-8 text-main" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Z dworca PKP/PKS</h3>
              <p className="text-lg text-gray-700">
                Z dworca głównego możesz dotrzeć do naszej sali weselnej pieszo (około 15 minut) lub taksówką (około 5 minut).
                Podążaj ulicą Dworcową prosto, następnie skręć w prawo w ulicę Weselną i idź prosto aż do numeru 123.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="rounded-full bg-gold/20 p-4">
              <Car className="h-8 w-8 text-main" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Samochodem</h3>
              <p className="text-lg text-gray-700">
                Przy sali znajduje się bezpłatny parking dla gości. Z drogi głównej nr 7 zjedź zjazdem na "Centrum", 
                następnie kieruj się ulicą Główną, skręć w lewo w ulicę Weselną i jedź prosto aż do numeru 123.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="rounded-full bg-gold/20 p-4">
              <Navigation className="h-8 w-8 text-main" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Współrzędne GPS</h3>
              <p className="text-lg text-gray-700">
                Aby skorzystać z nawigacji, wprowadź współrzędne:
                <span className="block mt-2 font-medium">52.229676, 21.012229</span>
                Lub wpisz w wyszukiwarkę: &quot;Sala Weselna Radosna, ul. Weselna 123&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}