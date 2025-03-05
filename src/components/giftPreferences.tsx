import React from 'react';
import { GiftIcon, Wine, Mail, Flower2Icon, ArrowRight, Users } from 'lucide-react';

export default function WeddingGifts() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/90">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Prezenty</h2>
      </div>

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
    </div>
  );
}
