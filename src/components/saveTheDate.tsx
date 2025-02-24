import { Calendar, Church, Cake, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./extendui/button";

export default function SaveTheDate() {
  return (
    <div>
      <Image
        src="/sesja.jpg"
        alt="Wedding background"
        layout="fill"
        // objectFit="background"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center py-2 lg:px-8 lg:py-6">
        <div className="w-full max-w-xl">
          <div className="overflow-hidden rounded-lg bg-white/75 shadow-xl backdrop-blur-sm">
            <div className="bg-gold/70 px-4 py-6 sm:px-10 sm:py-6">
              <div className="text-center">
                <h1 className="text-main text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Zapisz datę
                </h1>
                <div className="mt-4 flex flex-col items-center justify-center">
                  <Image
                    src="/ledon.svg"
                    alt="Ledon"
                    width={150}
                    height={150}
                    quality={100}
                    className="inset-0 z-0"
                  />
                  <div className="text-main mt-4 flex items-center justify-center gap-3 text-xl font-medium">
                    <Calendar className="h-8 w-8" />
                    <p>16:00</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-main hover:bg-main mt-3 bg-white px-6 py-3 text-lg hover:text-rose"
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

            <div className="px-4 py-4 sm:px-10 sm:py-10">
              <div className="text-center">
                <h2 className="text-main text-2xl font-bold tracking-tight lg:text-4xl">
                  Wesele Wiki i Szymka
                </h2>
                <p className="text-l mx-auto mt-2 max-w-2xl text-gray-700 lg:mt-6 lg:text-xl">
                  Zapraszamy Cię do towarzyszenia nam w tym pięknym dniu, będzie
                  to dla nas bardzo ważne jeżeli przyjdziesz.
                </p>
              </div>
              <div className="mt-8 space-y-2 sm:space-y-6">
                <div className="flex items-center gap-2 rounded-lg bg-beige/80 p-2 lg:gap-6 lg:p-6">
                  <Church className="text-main h-8 w-8 flex-shrink-0 lg:h-12 lg:w-12" />
                  <div>
                    <h3 className="text-main text-xl font-semibold lg:text-xl">Ceremonia</h3>
                    <Link
                      href="https://maps.app.goo.gl/pxnR21dtu5NY3JMr8"
                      className="text-m hover:text-main mt-2 block text-gray-700 lg:text-lg"
                    >
                      Kościół Rzymskokatolicki pw. Trójcy Przenajświętszej, Frednowy 14-204
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-beige/80 p-2 lg:gap-6 lg:p-6">
                  <Cake className="text-main h-8 w-8 flex-shrink-0 lg:h-12 lg:w-12" />
                  <div>
                    <h3 className="text-main text-xl font-semibold lg:text-xl">
                      Przyjęcie
                    </h3>
                    <Link
                      href="https://maps.app.goo.gl/HmiEkEYh4WYX5ZNy6"
                      className="text-m hover:text-main mt-2 block text-gray-700 lg:text-lg"
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
