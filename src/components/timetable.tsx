import React from 'react';
import { 
  Flag, 
  Building, 
  Heart, 
  Utensils, 
  Music, 
  Camera, 
  Cake,
  Crown,
  Gift,
  Coffee,
  Timer,
  Church,
  BookOpen,
  Car,
  Soup
} from 'lucide-react';

const WeddingSchedule = () => {
  const scheduleData = [
    {
      icon: Flag,
      time: "10:00-15:00",
      activity: "Otwarcie strefy zmian (zamledowanie w miejscu noclegowym)"
    },
    {
      icon: Church,
      time: "16:00",
      activity: "Start zawodników kategorii ELITE (start ceremonii ślubnej)"
    },
    {
      icon: Car,
      time: "17:15",
      activity: "Pierwsi zawodnicy w strefie zmian (przyjazd na salę weselną)"
    },
    {
      icon: BookOpen,
      time: "17:30",
      activity: "Odprawa techniczna (składanie życzeń Parze Młodej)"
    },
    {
      icon: Utensils,
      time: "18:00",
      activity: "Punkt żywieniowy I (danie główne obiad)"
    },
    {
      icon: Music,
      time: "19:00",
      activity: "Start biegu głównego (pierwszy taniec i rozpoczęcie zabawy)"
    },
    {
      icon: Camera,
      time: "21:00",
      activity: "Pamiątkowe zdjęcia z najlepszymi zawodnikami (Parą Młodą)"
    },
    {
      icon: Cake,
      time: "23:00",
      activity: "Punkt żywieniowy II (tort)"
    },
    {
      icon: Crown,
      time: "00:00",
      activity: "Dekoracja najlepszych zawodników (oczepiny)"
    },
    {
      icon: Soup,
      time: "01:00",
      activity: "Posiłek regeneracyjny (ciepły barszcz)"
    },
    {
      icon: Timer,
      time: "04:00",
      activity: "Zamknięcie trasy (zakończenie zabawy)"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Harmonogram Zawodów Weselnych</h1>
      <table className="w-full">
        <tbody>
          {scheduleData.map((item, index) => {
            const Icon = item.icon;
            return (
              <tr 
                key={index} 
                className={index % 2 === 0 ? 'bg-pink-50' : 'bg-white'}
              >
                <td className="py-2 px-1 md:py-4 md:px-4 w-8 md:w-16 text-center">
                  <Icon className="w-6 h-6 md:w-6 md:h-6 text-gray-600 inline" />
                </td>
                <td className="py-2 px-1 md:py-4 md:px-4 w-16 md:w-32 font-medium text-sm md:text-base whitespace-nowrap text-center">
                  {item.time}
                </td>
                <td className="py-2 px-1 md:py-4 md:px-4 text-sm md:text-base leading-tight md:leading-normal">
                  {item.activity}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WeddingSchedule;