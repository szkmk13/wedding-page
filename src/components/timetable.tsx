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
  Church
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
      activity: "Start dystansu długiego (start ceremonii ślubnej)"
    },
    {
      icon: Building,
      time: "17:15",
      activity: "Otwarcie biura zawodów (przyjazd na salę weselną)"
    },
    {
      icon: Heart,
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
      activity: " (zdjęcia z Parą Młodą)"
    },
    {
      icon: Cake,
      time: "23:00",
      activity: " (tort)"
    },
    {
      icon: Crown,
      time: "00:00",
      activity: "Deokracja najlepszych zawodników (oczepiny)"
    },
    {
      icon: Coffee,
      time: "01:00",
      activity: "Punkt żywieniowy II (ciepły barszcz)"
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
                <td className="py-4 px-4 w-16 align-top">
                  <Icon className="w-6 h-6 text-gray-600" />
                </td>
                <td className="py-4 px-4 w-32 align-top font-medium">
                  {item.time}
                </td>
                <td className="py-4 px-4 align-top">
                  {item.activity}
                </td>
              </tr>
            )})}
        </tbody>
      </table>
    </div>
  );
};

export default WeddingSchedule;