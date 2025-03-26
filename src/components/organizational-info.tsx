import { Car, Hotel, Wine, TestTube } from "lucide-react";
import Image from "next/image";

const infoItems = [
  {
    icon: Car,
    image: "/auto.png",
    title: "Transport",
    description:
      "Dojazd z kościoła na salę weselną we własnym zakresie. Zachęcamy do wspólnych przejazdów z innymi gośćmi.",
  },
  {
    icon: Hotel,
    image: "/hotel.png",
    title: "Nocleg",
    description:
      "Dla gości przyjeżdżających spoza Iławy zapewniamy nocleg. Szczegółowe informacje przekażemy indywidualnie.",
  },
  {
    icon: TestTube,
    image: "/alkomat.png",
    title: "Alkomat",
    description:
      "Na sali weselnej będzie dostępny alkomat dla wszystkich, którzy chcieliby sprawdzić swoją trzeźwość przed powrotem do domu.",
  },

  {
    icon: Wine,
    image: "/alkohol.png",
    title: "Poprawiny",
    description:
      "Następnego dnia zapraszamy chętnych na poprawiny w domu rodzinnym Panny Młodej. Będzie nam bardzo miło spędzić z Wami również ten dzień!",
  },
];

export default function OrganizationalInfo() {
  return (
    <div className="w-full px-8 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-main mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Kilka spraw organizacyjnych
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-[url('/tlo4.png')] p-2 text-center lg:p-6"
            >
              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full p-3 shadow-sm">
                <Image
                  src={item.image}
                  fill
                  alt="asset"
                  sizes="16px"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-main mb-2 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
