import React from 'react';
import { GiftIcon, Wine, Mail, Flower2Icon, ArrowRight } from 'lucide-react';

export default function WeddingGifts() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-rose-700 mb-2">Prezenty</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kwiaty → Alkohol */}
        <div className="bg-gold/80 rounded-lg p-4 shadow text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Flower2Icon size={64} className="text-rose" />
            <ArrowRight size={32} />
            <Wine size={64} className="text-rose" />
          </div>
          <p className="text-rose-800">Zamiast kwiatów — butelka ulubionego trunku.</p>
        </div>

        {/* Prezent → Koperta */}
        <div className="bg-gold/80 rounded-lg p-4 shadow text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <GiftIcon size={64} className="text-rose" />
            <ArrowRight size={32} />
            <Mail size={64} className="text-rose" />
          </div>
          <p className="text-rose-800">Zamiast prezentu — koperta z niespodzianką.</p>
        </div>
      </div>

      {/* Najważniejszy prezent */}
      <div className="mt-6 text-center bg-gold/90 p-4 rounded-lg shadow">
        <div className="flex justify-center mb-4">
          <div className="bg-rose/70 p-4 rounded-full">
            <GiftIcon size={64}  />
          </div>
        </div>
        <p className="italic font-bold">Dzień bez przyjaciela jest jak dzbanek, w którym nie ma nawet kropelki miodu</p>
        <p>Dlatego Wasza obecność to najcenniejszy dar!</p>
      </div>
    </div>
  );
}
