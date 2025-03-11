"use client";
import React from "react";
import {  Users } from "lucide-react";

import { RideShare } from "./extendui/animatedSignIn";
import { Button } from "./extendui/button";
import { DropdownMenuDemo } from "./directions/directionsDropdown";
// const Map = dynamic(() => import("../app/_components/map"), {
//   ssr: false,
// });
export default function DirectionsMap() {
  return (
    <div className="w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-main sm:text-4xl mb-12">
          Jak dojechać?
        </h2>

        <div className="mb-8 overflow-hidden rounded-lg bg-gold/70 shadow-lg">
          <div className="h-64 sm:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d37851.43404517658!2d19.611485598361487!3d53.634228798072364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x471d6823a1e507cf%3A0x5ba11885bbcf9543!2zS2_Fm2Npw7PFgiBSenltc2tva2F0b2xpY2tpIHB3LiBUcsOzamN5IFByemVuYWrFm3dpxJl0c3plaiwgRnJlZG5vd3ksIDE0LTIwMA!3m2!1d53.6558935!2d19.6897745!4m3!3m2!1d53.6134012!2d19.613871!5e0!3m2!1spl!2spl!4v1741608593730!5m2!1spl!2spl"
              className="h-64 w-full sm:h-96"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <DropdownMenuDemo/>
          <RideShare />

          <Button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold/70 px-4 py-2 text-gray-800 shadow transition hover:bg-beige/60 sm:w-auto">
            <Users className="h-6 w-6" />
            Szukam z kim mogę pojechać
          </Button>
        </div>
      </div>
    </div>
  );
}
