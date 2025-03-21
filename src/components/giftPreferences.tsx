import React from "react";
import {
  GiftIcon,
  Wine,
  Mail,
  Flower2Icon,
  ArrowRight,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function WeddingGifts() {
  return (
    // <div className="overflow-hidden rounded-lg bg-white/75 shadow-xl backdrop-blur-sm">
    <div className="w-full bg-white/90 px-8 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-main mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Prezenty
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Kwiaty → Alkohol */}
          <div className="rounded-lg bg-gold/70 p-4 text-center shadow">
            <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-beige/60 p-3 shadow-sm">
            <Flower2Icon size={64} />              </div>

              <ArrowRight size={32} className="text-black" />
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-beige/60 p-3 shadow-sm">
              <Wine size={64} />              </div>

            </div>
            <p>Zamiast kwiatów — butelka ulubionego trunku.</p>
          </div>

          {/* Prezent → Koperta */}
          <div className="rounded-lg bg-gold/70 p-4 text-center shadow">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-beige/60 p-3 shadow-sm">
                <GiftIcon size={64} />
              </div>
              <ArrowRight size={32} className="text-black" />
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-beige/60 p-3 shadow-sm">
                <Mail size={64} />
              </div>
            </div>
            <p>Zamiast prezentu — koperta z niespodzianką.</p>
          </div>
        </div>

        {/* Najważniejszy prezent */}
        <div className="mt-6 rounded-lg bg-gold/70 p-4 text-center shadow">
          <div className="mb-4 flex justify-center">
          <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-rose-200 p-3 shadow-sm relative">
          {/* <Users size={64} /> */}
          <Image src={"/ernest.jpg"} fill alt="Ernest Hemingway" className="object-cover rounded-full" />
            </div>
          </div>
          <p className="font-bold italic">
            „Kochać to chcieć przemierzyć cały świat we dwoje, po to, by nie
            było miejsca na Ziemi wolnego od wspólnych wspomnień”.
          </p>
          <p>Ernest Hemingway</p>
        </div>
      </div>
    </div>
    // </div>
  );
}
