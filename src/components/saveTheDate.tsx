import * as React from "react";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { Church } from "lucide-react";
import { Cake } from "lucide-react";
import { Button } from "./extendui/button";
import { SendingButton } from "./extendui/calender_button";

export default async function SaveTheDate() {
  return (
    <div className="bg-main4 w-full py-4">
      <div className="mx-auto w-full max-w-md bg-beige p-4">
        <div className="bg-main mb-8">
          <div className="flex flex-col items-center justify-center gap-4 bg-gold p-6">
            <h1 className="text-xl font-bold tracking-tight">Save the date</h1>
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="h-6 w-6 text-primary" />
              <p className="text-muted-foreground">19.09.2025 | 16:00</p>
            </div>
            <Button variant="outline">
              <Link
                target="_blank"
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250919T140000Z%2F20250920T020000Z&details=Do%20zobaczenia&location=Karczma%20%C5%81ab%C4%99d%C5%BA%20Hotel%20Mazury%2C%20ul.%20Marsa%202%2C%2014-200%20I%C5%82awa%2C%20Polska&text=Wesele%20Wiktorii%20i%20Szymona%F0%9F%92%92"
              >
                Dodaje do kalendarza
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Wesele Szymka i Wiki
          </h2>
          <p className="text-muted-foreground">
            Zapraszamy Cię do towarzyszenia nam w tym pięknym dniu, będzie to
            dla nas bardzo ważne jeżeli przyjdziesz.
          </p>
          <div className="grid gap-4">
            <div className="flex justify-center items-center gap-2">
              <Church className="h-6 w-6 text-primary flex" />
              <Link
                href="https://maps.app.goo.gl/pxnR21dtu5NY3JMr8"
                className="underline underline-offset-2 hover:text-primary-foreground"
              >
                Kościół Rzymskokatolicki pw. Trójcy Przenajświętszej
                <br />
                Frednowy, 14-204
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Cake className="h-6 w-6 text-primary" />
              <Link
                href="https://maps.app.goo.gl/HmiEkEYh4WYX5ZNy6"
                className="underline underline-offset-2 hover:text-primary-foreground"
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
  );
}
