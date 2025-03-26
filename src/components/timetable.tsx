import React from "react";
import {
  Flag,
  Utensils,
  Music,
  Camera,
  Cake,
  Crown,
  Timer,
  Church,
  BookOpen,
  Car,
  Soup,
} from "lucide-react";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

const WeddingSchedule = () => {
  const scheduleData = [
    {
      icon: Flag,
      time: "10:00-15:00",
      activity: "Otwarcie strefy zmian (zameldowanie w miejscu noclegowym)",
    },
    {
      icon: Church,
      time: "16:00",
      activity: "Start zawodników kategorii ELITE (start ceremonii ślubnej)",
    },
    {
      icon: Car,
      time: "17:15",
      activity: "Pierwsi zawodnicy w strefie zmian (przyjazd na salę weselną)",
    },
    {
      icon: BookOpen,
      time: "17:30",
      activity: "Odprawa techniczna (składanie życzeń Parze Młodej)",
    },
    {
      icon: Utensils,
      time: "18:00",
      activity: "Punkt żywieniowy I (danie główne obiad)",
    },
    {
      icon: Music,
      time: "19:00",
      activity: "Start biegu głównego (pierwszy taniec i rozpoczęcie zabawy)",
    },
    {
      icon: Camera,
      time: "21:00",
      activity: "Pamiątkowe zdjęcia z najlepszymi zawodnikami (Parą Młodą)",
    },
    {
      icon: Cake,
      time: "23:00",
      activity: "Punkt żywieniowy II (tort)",
    },
    {
      icon: Crown,
      time: "00:00",
      activity: "Dekoracja najlepszych zawodników (oczepiny)",
    },
    {
      icon: Soup,
      time: "01:00",
      activity: "Posiłek regeneracyjny (ciepły barszcz)",
    },
    {
      icon: Timer,
      time: "04:00",
      activity: "Zamknięcie trasy (zakończenie zabawy)",
    },
  ];

  return (
    <div className="w-full bg-white/90 px-1 py-8 backdrop-blur-sm sm:py-12 md:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-main mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Harmonogram Zawodów Weselnych
        </h2>
        <Image
          src="/roadmapa.png"
          alt="asset"
          width={768}
          height={1376}
          className="rounded-md"
        />
        {/* <div className="overflow-hidden rounded-xl">
          <Table>
          <TableBody className="divide-y divide-gray-300">
          {scheduleData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <TableRow
                    key={index}
                    className={`${index % 2 === 0 ? "bg-rose-100" : "bg-gold/70"} hover:bg-color-none`}
                  >
                    <TableCell className="w-8 px-1 py-2 text-center md:w-16 md:px-4 md:py-4">
                      <Icon className="inline h-6 w-6 text-gray-600 md:h-6 md:w-6" />
                    </TableCell>
                    <TableCell className="w-16 whitespace-nowrap px-1 py-2 text-center text-xs font-medium md:w-32 md:px-4 md:py-4 md:text-base">
                      {item.time}
                    </TableCell>
                    <TableCell className="px-1 py-2 text-xs leading-tight md:px-4 md:py-4 md:text-base md:leading-normal">
                      {item.activity}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div> */}
      </div>
    </div>
  );
};

export default WeddingSchedule;
