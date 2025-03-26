"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@supabase/supabase-js";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Car } from "lucide-react";
import { Button } from "@/components/extendui/button";
import { Input } from "@/components/extendui/input";
import { Label } from "@/components/ui/label";

// 🔥 Połączenie z Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 🎯 Schemat walidacji
const rideShareSchema = z.object({
  origin: z.string().min(2, { message: "Podaj miejsce wyjazdu" }),
  passengers: z
    .string()
    .min(1, { message: "Podaj liczbę miejsc" })
    .max(1, { message: "Liczba miejsc nie może być większa niż 9" }), // Walidacja: liczba nie większa niż 9

  contact: z.string().min(5, { message: "Podaj dane kontaktowe" }),
});

type RideShareValues = z.infer<typeof rideShareSchema>;

export function RideShare() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<RideShareValues>({
    resolver: zodResolver(rideShareSchema),
    defaultValues: {
      origin: "",
      passengers: "",
      contact: "",
    },
  });

  const onSubmit = async (data: RideShareValues) => {
    console.log("Wysyłanie danych do Supabase:", data);
    const { error } = await supabase.from("rides").insert(
      {
        origin: data.origin,
        passengers: parseInt(data.passengers), // Konwersja na liczbę
        contact: data.contact,
      },
    );
    if (error) {
      console.error("Błąd przy dodawaniu przejazdu:", error);
      return;
    }
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex h-12 w-64 items-center justify-center gap-2 rounded-lg bg-[url('/tlo4.png')] px-4 py-2 text-gray-800 shadow transition hover:bg-beige/60 sm:w-auto md:w-auto">
          <Car className="h-6 w-6" />
          Jadę i mam wolne miejsca
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Udostępnij przejazd</DialogTitle>
          <DialogDescription className="text-center">
            Wypełnij formularz, aby inni goście mogli się z Tobą skontaktować.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          autoComplete="off"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="origin">Skąd jedziesz</Label>
            <Input
              id="origin"
              placeholder="Gdańsk"
              {...register("origin")}
            />
            {errors.origin && <p className="text-red-500">{errors.origin.message}</p>}
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="passengers">Ile osób możesz zabrać</Label>
            <Input
              id="passengers"
              type="number"
              placeholder="3"
              {...register("passengers")}
            />
            {errors.passengers && <p className="text-red-500">{errors.passengers.message}</p>}
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="contact">Kontakt</Label>
            <Input
              id="contact"
              placeholder="123456789 / email@example.com"
              {...register("contact")}
            />
            {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
          </div>

          <Button
            type="submit"
            className="hover:bg-color-none w-full bg-[url('/tlo3.png')] text-black hover:shadow-lg"
          >
            Opublikuj przejazd
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
