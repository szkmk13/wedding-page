import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WeddingGifts() {
  return (
    <div className="w-full px-8 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-main mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Prezenty
        </h2>
        <div className="rounded-lg bg-[url('/tlo5.png')] p-4 text-center shadow">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-beige/60 p-3 shadow-sm">
              <Image
                src={"/prezent.png"}
                fill
                alt="asset"
                sizes="16px"
                className="rounded-full object-cover"
              />
            </div>
            <ArrowRight size={32} className="text-black" />
            <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-beige/60 p-3 shadow-sm">
              <Image
                src={"/koperta.png"}
                fill
                alt="asset"
                sizes="16px"
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <p>
            Nie przynoś nam sprzętu sportowego, bo mamy już pełną szafę!
            Wystarczy, że wrzucisz coś na nasz fundusz startowy!
          </p>
        </div>

        <div className="mt-6 rounded-lg bg-[url('/tlo2.png')] p-4 text-center shadow">
          <div className="mb-4 flex justify-center">
            <div className="relative flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-full bg-rose-200 p-3 shadow-sm">
              <Image
                src={"/ernest2.png"}
                fill
                alt="Ernest Hemingway"
                sizes="32px"
                className="rounded-full object-cover"
              />
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
  );
}
