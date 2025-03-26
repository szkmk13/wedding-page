"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users } from "lucide-react";
import { Button } from "@/components/extendui/button";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
type Ride = {
  id: number;
  origin: string;
  contact: string;
  passengers: number;
  contact: string;
};

export function RideSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [rides, setRides] = useState<Ride[]>([]); // Zmienna do przechowywania dostępnych przejazdów

  // Fetch available rides when the dialog is opened
  useEffect(() => {
    if (isOpen) {
      // Pobierz dostępne przejazdy z tabeli "rides"
      const fetchRides = async () => {
        const { data, error } = await supabase
          .from("rides") // Upewnij się, że masz tabelę "rides" w Supabase
          .select("*")

        if (error) {
          console.error("Error fetching rides:", error.message);
        } else {
          setRides(data as Ride[]); // Typowanie danych
        }
      };

      fetchRides();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex h-12 w-64 items-center justify-center gap-2 rounded-lg bg-[url('/tlo5.png')] px-4 py-2 text-gray-800 shadow transition sm:w-auto md:w-auto">
          <Users className="h-6 w-6" />
          Szukam z kim mogę pojechać
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Lista gości którzy mają miejsca</DialogTitle>
        <DialogHeader>
          <DialogDescription className="text-center">

          </DialogDescription>
        </DialogHeader>

        {/* Lista dostępnych przejazdów */}
        <div className="space-y-4">
  {rides.length > 0 ? (
    rides.map((ride) => (
      <div
        key={ride.id}
        className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col space-y-1">
          <span className="text-lg font-semibold text-gray-900">Podróż z {ride.origin}</span>
          <span className="text-sm text-gray-500">{ride.contact}</span>
        </div>
        <div className="flex items-center justify-end w-full">
          {/* Wolne miejsca - stała szerokość */}
          <span className="text-sm font-medium text-gray-700 w-36 text-right">
            Wolne miejsca: {ride.passengers}
          </span>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">Brak dostępnych przejazdów</p>
  )}
</div>


      </DialogContent>
    </Dialog>
  );
}
