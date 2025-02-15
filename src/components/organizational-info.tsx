import { Car, BabyIcon as BabyOff, Hotel, Wine } from "lucide-react"

export default function OrganizationalInfo() {
  return (
    <div className="w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-main sm:text-4xl mb-12">
          Kilka spraw organizacyjnych
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Transport */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-beige/20">
            <div className="rounded-full bg-gold/20 p-4 mb-4">
              <Car className="h-8 w-8 text-main" />
            </div>
            <h3 className="font-semibold text-xl text-main mb-2">Transport</h3>
            <p className="text-gray-700">
              Dojazd z kościoła na salę weselną we własnym zakresie. Zachęcamy do wspólnych przejazdów z innymi gośćmi.
            </p>
          </div>

          {/* No Children */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-beige/20">
            <div className="rounded-full bg-gold/20 p-4 mb-4">
              <BabyOff className="h-8 w-8 text-main" />
            </div>
            <h3 className="font-semibold text-xl text-main mb-2">Bez dzieci</h3>
            <p className="text-gray-700">
              Z uwagi na charakter przyjęcia, uprzejmie prosimy o przybycie bez dzieci. Pozwoli nam to wspólnie cieszyć
              się zabawą do białego rana.
            </p>
          </div>

          {/* Accommodation */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-beige/20">
            <div className="rounded-full bg-gold/20 p-4 mb-4">
              <Hotel className="h-8 w-8 text-main" />
            </div>
            <h3 className="font-semibold text-xl text-main mb-2">Nocleg</h3>
            <p className="text-gray-700">
              Dla gości przyjeżdżających spoza Iławy zapewniamy nocleg. Szczegółowe informacje przekażemy indywidualnie.
            </p>
          </div>

          {/* After-party */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-beige/20">
            <div className="rounded-full bg-gold/20 p-4 mb-4">
              <Wine className="h-8 w-8 text-main" />
            </div>
            <h3 className="font-semibold text-xl text-main mb-2">Poprawiny</h3>
            <p className="text-gray-700">
              Następnego dnia zapraszamy na poprawiny we Franciszkowie. Będzie nam bardzo miło spędzić z Wami również
              ten dzień.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

