import { Calendar, Church, Cake, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./extendui/button"

export default function SaveTheDate() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/sesja.jpg"
        alt="Wedding background"
        layout="fill"
        objectFit="background"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl"> {/* Increased max-width */}
          <div className="overflow-hidden rounded-lg bg-white/90 shadow-xl backdrop-blur-sm">
            <div className="bg-gold/90 px-6 py-10 sm:px-10 sm:py-16"> {/* Increased padding */}
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-main sm:text-5xl">Zapisz datę</h1>
                <div className="mt-6 flex items-center justify-center gap-3 text-2xl font-medium text-main">
                  <Calendar className="h-8 w-8" />
                  <p>19.09.2025 | 16:00</p>
                </div>
                <Button variant="outline" className="mt-8 bg-white text-main hover:bg-main hover:text-white text-lg px-6 py-3"> {/* Increased button size */}
                  <Link
                    target="_blank"
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250919T140000Z%2F20250920T020000Z&details=Do%20zobaczenia&location=Karczma%20%C5%81ab%C4%99d%C5%BA%20Hotel%20Mazury%2C%20ul.%20Marsa%202%2C%2014-200%20I%C5%82awa%2C%20Polska&text=Wesele%20Wiktorii%20i%20Szymona%F0%9F%92%92"
                    className="flex items-center gap-3"
                  >
                    <Calendar className="h-5 w-5" />
                    Dodaj do kalendarza
                  </Link>
                </Button>
              </div>
            </div>

            <div className="px-6 py-10 sm:px-10 sm:py-16"> {/* Increased padding */}
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-main sm:text-5xl">Wesele Szymka i Wiki</h2>
                {/* <Heart className="mx-auto mt-6 h-10 w-10 text-red-500" /> */}
                <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto"> {/* Increased font size and max-width */}
                  Zapraszamy Cię do towarzyszenia nam w tym pięknym dniu, będzie to dla nas bardzo ważne jeżeli
                  przyjdziesz.
                </p>
              </div>

              <div className="mt-12 space-y-8"> {/* Increased spacing */}
                <div className="flex items-center gap-6 rounded-lg bg-beige/80 p-6"> {/* Increased padding and gap */}
                  <Church className="h-12 w-12 flex-shrink-0 text-main" /> {/* Increased icon size */}
                  <div>
                    <h3 className="text-xl font-semibold text-main">Ceremonia</h3> {/* Increased font size */}
                    <Link
                      href="https://maps.app.goo.gl/pxnR21dtu5NY3JMr8"
                      className="mt-2 block text-lg text-gray-700 hover:text-main" 
                    >
                      Kościół Rzymskokatolicki pw. Trójcy Przenajświętszej
                      <br />
                      Frednowy, 14-204
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-6 rounded-lg bg-beige/80 p-6"> {/* Increased padding and gap */}
                  <Cake className="h-12 w-12 flex-shrink-0 text-main" /> {/* Increased icon size */}
                  <div>
                    <h3 className="text-xl font-semibold text-main">Przyjęcie</h3> 
                    <Link
                      href="https://maps.app.goo.gl/HmiEkEYh4WYX5ZNy6"
                      className="mt-2 block text-lg text-gray-700 hover:text-main" 
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
  )
}

