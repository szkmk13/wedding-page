"use client";
import React from "react";

import { RideShare } from "./directions/rideShare";
import { DropdownMenuDemo } from "./directions/directionsDropdown";
import { RideSearch } from "./directions/rideSearch";

export default function DirectionsMap() {
  return (
    <div className="w-full py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-main mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Jak dojechać?
        </h2>

        <div className="mb-8 overflow-hidden rounded-lg bg-[url('/tlo5.png')] shadow-lg">
          <div className="h-64 sm:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d37851.43404517658!2d19.611485598361487!3d53.634228798072364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x471d6823a1e507cf%3A0x5ba11885bbcf9543!2zS2_Fm2Npw7PFgiBSenltc2tva2F0b2xpY2tpIHB3LiBUcsOzamN5IFByemVuYWrFm3dpxJl0c3plaiwgRnJlZG5vd3ksIDE0LTIwMA!3m2!1d53.6558935!2d19.6897745!4m3!3m2!1d53.6134012!2d19.613871!5e0!3m2!1spl!2spl!4v1741608593730!5m2!1spl!2spl"
              className="h-full w-full sm:h-96"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <DropdownMenuDemo />
          <RideShare />
          <RideSearch />
        </div>
      </div>
    </div>
  );
}
