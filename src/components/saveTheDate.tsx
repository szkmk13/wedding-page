import { Calendar, Church, Cake, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./extendui/button";

export default function SaveTheDate() {
  return (
    <div className="sm:py-8 md:py-4">
      <div className="relative z-10 flex items-center justify-center md:px-4 lg:px-8 lg:py-6">
        <div className="mx-auto w-full max-w-3xl">
          <div className="overflow-hidden bg-white/80 backdrop-blur-sm md:rounded-2xl md:shadow-xl">
            <div className="bg-[url('/tlo.png')] bg-cover bg-center bg-no-repeat px-6 py-8 sm:px-10">
              {" "}
              <div className="text-center">
                <h1 className="text-main text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Zapisz datę
                </h1>
                <div className="mt-6 flex flex-col items-center justify-center">
                  <div className="relative">
                    <Image
                      src="/ledon.svg"
                      alt="Monogram Wiki i Szymka"
                      width={180}
                      height={180}
                      quality={100}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="text-main mt-6 flex items-center justify-center gap-3 text-xl font-medium">
                    <Clock className="h-8 w-8" />
                    <p className="text-2xl">16:00</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-main hover:bg-color-none mt-6 border-[4px] border-yellow-400/30 bg-neutral-50 px-6 py-3 text-lg font-medium shadow-inner transition-all hover:shadow-lg"
                >
                  <Link
                    target="_blank"
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250919T140000Z%2F20250920T020000Z&details=Do%20zobaczenia&location=Karczma%20%C5%81ab%C4%99d%C5%BA%20Hotel%20Mazury%2C%20ul.%20Marsa%202%2C%2014-200%20I%C5%82awa%2C%20Polska&text=Wesele%20Wiktorii%20i%20Szymona%F0%9F%92%92"
                    className="flex items-center gap-3"
                  >
                    <Calendar className="h-5 w-5" />
                    Dodaję do kalendarza
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dolna sekcja z informacjami */}
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="text-center">
                <h2 className="text-main text-3xl font-bold tracking-tight lg:text-4xl">
                  Wesele Wiki i Szymka
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 lg:mt-6 lg:text-xl">
                  Zapraszamy Cię do towarzyszenia nam w tym pięknym dniu, będzie
                  to dla nas bardzo ważne jeżeli przyjdziesz.
                </p>
              </div>

              <div className="mt-10 space-y-4 sm:space-y-6">
                <div className="group flex items-center gap-4 rounded-xl bg-[url('/tlo.png')] p-4 shadow-sm transition-all duration-300 hover:bg-beige/60 hover:shadow-md lg:gap-6 lg:p-6">
                  <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full p-3 shadow-sm transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-md">
                    {/* <Church className="text-main h-8 w-8 lg:h-10 lg:w-10" /> */}
                    <Image
                      src={"/kosciol.png"}
                      fill
                      alt="asset"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-main text-xl font-semibold lg:text-2xl">
                      Ceremonia
                    </h3>
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/pxnR21dtu5NY3JMr8"
                      className="mt-2 block text-lg text-gray-700 transition-colors hover:text-gray-900 lg:text-lg"
                    >
                      Kościół Rzymskokatolicki pw. Trójcy Przenajświętszej
                      <br />
                      Frednowy 14-204
                    </Link>
                  </div>
                </div>

                <div className="group relative flex items-center gap-4 overflow-hidden rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md lg:gap-6 lg:p-6">
                  <div className="absolute inset-0 -z-10 rotate-180 bg-[url('/tlo.png')]"></div>
                  <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full p-3 shadow-sm transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-md">
                    <Image
                      src="/ciasto.png"
                      alt="asset"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-main text-xl font-semibold lg:text-2xl">
                      Przyjęcie
                    </h3>
                    <Link
                      target="_blank"
                      href="https://maps.app.goo.gl/HmiEkEYh4WYX5ZNy6"
                      className="mt-2 block text-lg text-gray-700 transition-colors hover:text-gray-900 lg:text-lg"
                    >
                      Karczma Łabędź Hotel Mazury
                      <br />
                      ul. Marsa 2, 14-200 Iława
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
