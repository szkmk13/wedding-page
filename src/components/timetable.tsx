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

const WeddingSchedule = () => {
  const scheduleData = [
    {
      icon: Flag,
      time: "10:00-15:00",
      activity: "Otwarcie strefy zmian (zamledowanie w miejscu noclegowym)",
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
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Harmonogram Zawodów Weselnych
      </h1>
      <table className="w-full">
        <tbody>
          {scheduleData.map((item, index) => {
            const Icon = item.icon;
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-rose-100" : "bg-beige/60"}
              >
                <td className="w-8 px-1 py-2 text-center md:w-16 md:px-4 md:py-4">
                  <Icon className="inline h-6 w-6 text-gray-600 md:h-6 md:w-6" />
                </td>
                <td className="w-16 whitespace-nowrap px-1 py-2 text-center text-sm font-medium md:w-32 md:px-4 md:py-4 md:text-base">
                  {item.time}
                </td>
                <td className="px-1 py-2 text-sm leading-tight md:px-4 md:py-4 md:text-base md:leading-normal">
                  {item.activity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WeddingSchedule;
