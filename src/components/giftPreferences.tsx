import React from 'react';
import { GiftIcon, Wine, Mail, Flower2Icon, ArrowRight, Users } from 'lucide-react';

export default function WeddingGifts() {
  return (
    // <div className="overflow-hidden rounded-lg bg-white/75 shadow-xl backdrop-blur-sm">
    <div className="w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
      <h2 className="text-center text-3xl font-bold tracking-tight text-main sm:text-4xl mb-12">
      Prezenty
      
      </h2>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kwiaty → Alkohol */}
        <div className="bg-gold/60 rounded-lg p-4 shadow text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Flower2Icon size={64} />
            <ArrowRight size={32}className="text-rose-200"  />
            <Wine size={64} />
          </div>
          <p>Zamiast kwiatów — butelka ulubionego trunku.</p>
        </div>

        {/* Prezent → Koperta */}
        <div className="bg-gold/60 rounded-lg p-4 shadow text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <GiftIcon size={64} />
            <ArrowRight size={32} className="text-rose-200" />
            <Mail size={64} />
          </div>
          <p>Zamiast prezentu — koperta z niespodzianką.</p>
        </div>
      </div>

      {/* Najważniejszy prezent */}
      <div className="mt-6 text-center bg-gold/60 p-4 rounded-lg shadow">
        <div className="flex justify-center mb-4">
          <div className="bg-rose/70 p-4 rounded-full">
            <Users size={64}  />
          </div>
        </div>
        <p className="italic font-bold">„Kochać to chcieć przemierzyć cały świat we dwoje, po to, by nie było miejsca na Ziemi wolnego od wspólnych wspomnień”.</p>
        <p>Ernest Hemingway</p>
      </div>
    </div></div>
    // </div>
  );
}
