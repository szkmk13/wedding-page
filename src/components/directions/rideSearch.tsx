"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Users } from "lucide-react";
import { Button } from "@/components/extendui/button";
import { useState, useEffect } from "react";
import supabase from "@/app/api/supabase";

type Ride = {
  id: number;
  origin: string;
  contact: string;
  passengers: number;
};

export function RideSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [rides, setRides] = useState<Ride[]>([]); 

  useEffect(() => {
    if (isOpen) {
      const fetchRides = async () => {
        const { data, error } = await supabase
          .from("rides") 
          .select("*");

        if (error) {
          console.error("Error fetching rides:", error.message);
        } else {
          setRides(data as Ride[]);
        }
      };

      void fetchRides();
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
      <DialogContent className="max-w-[425px] max-h-full md:max-w-2xl md:max-h-[500px]">
        <DialogTitle>Lista gości którzy mają miejsca</DialogTitle>
        {/* <DialogHeader> */}
          {/* <DialogDescription className="text-center"></DialogDescription> */}
        {/* </DialogHeader> */}

        <div className="max-h-[500px] md:max-h-[400px] space-y-4 overflow-y-auto">

          {rides.length > 0 ? (
            rides.map((ride) => (
              <div
                key={ride.id}
                className="flex items-center justify-between rounded-lg bg-[#f9ecdc]/30 p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col space-y-2 w-auto">
                  <span className="text-lg font-semibold text-gray-900">
                    Podróż z {ride.origin}
                  </span>
                  <span className="text-sm text-gray-500">{ride.contact}</span>
                </div>
                <div className="flex w-[115px] items-center justify-end">
                  <span className="w-36 text-right text-sm font-medium text-gray-700">
                    Wolne miejsca: <b>{ride.passengers}</b>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Brak dostępnych przejazdów
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
