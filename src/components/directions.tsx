"use client";
import React, { useState, useEffect, Suspense } from "react";
import { MapPin, Users, Car, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

import Link from "next/link";
const Map = dynamic(() => import("../app/_components/map"), {
  ssr: false,
  loading: () => <div>Ładowanie...</div>,
});

export default function DirectionsMap() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Jak dojechać?
        </h2>
        <div className="mb-8 overflow-hidden rounded-lg bg-beige/90 shadow-lg">
          <div className="h-64 sm:h-96">
            <Map />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {/* Dropdown z wyborem lokalizacji */}
          <div className="relative order-last w-full sm:order-first sm:w-auto">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold/60 px-4 py-2 text-gray-800 shadow transition hover:bg-gold/90 sm:w-auto"
            >
              <MapPin className="h-6 w-6" />
              Otwórz w Google Maps
              <ChevronDown className="h-4 w-4" />
            </button>

            {showDropdown && (
              <div className="absolute mt-2 w-full rounded-lg bg-beige/40 shadow-lg">
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/pxnR21dtu5NY3JMr8"
                  className="block w-full px-4 py-2 text-left hover:bg-gold/60"
                >
                  Kościół
                </Link>
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/HmiEkEYh4WYX5ZNy6"
                  className="block w-full px-4 py-2 text-left hover:bg-gold/60"
                >
                  Sala Weselna
                </Link>
              </div>
            )}
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold/60 px-4 py-2 text-gray-800 shadow transition hover:bg-gold/90 sm:w-auto">
            <Car className="h-6 w-6" />
            Jadę i mam wolne miejsca
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold/60 px-4 py-2 text-gray-800 shadow transition hover:bg-gold/90 sm:w-auto">
            <Users className="h-6 w-6" />
            Szukam z kim mogę pojechać
          </button>
        </div>
      </div>
    </div>
  );
}
