import { Car, BabyIcon as BabyOff, Hotel, Wine, TestTube } from "lucide-react";

const infoItems = [
  {
    icon: Car,
    title: "Transport",
    description:
      "Dojazd z kościoła na salę weselną we własnym zakresie. Zachęcamy do wspólnych przejazdów z innymi gośćmi.",
  },
  {
    icon: Hotel,
    title: "Nocleg",
    description:
      "Dla gości przyjeżdżających spoza Iławy zapewniamy nocleg. Szczegółowe informacje przekażemy indywidualnie.",
  },
  {
    icon: TestTube,
    title: "Alkomat",
    description:
      "Na sali weselnej będzie dostępny alkomat dla wszystkich, którzy chcieliby sprawdzić swoją trzeźwość przed powrotem do domu.",
  },

  {
    icon: Wine,
    title: "Poprawiny",
    description:
      "Następnego dnia zapraszamy chętnych na poprawiny w domu rodzinnym Panny Młodej. Będzie nam bardzo miło spędzić z Wami również ten dzień!",
  },
];


export default function OrganizationalInfo() {
  return (
    <div className="w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-main sm:text-4xl mb-12">
          Kilka spraw organizacyjnych
        </h2>

        <div className="grid gap-4 lg:gap-8 md:grid-cols-2">
          {infoItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 lg:p-6 rounded-lg bg-gold/60">
              <div className={`rounded-full bg-rose/60 p-4 mb-4`}>
                <item.icon className="h-8 w-8 text-main" />
              </div>
              <h3 className="font-semibold text-xl text-main mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}