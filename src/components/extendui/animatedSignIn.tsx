"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Car } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/extendui/button";
import { Input } from "@/components/extendui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useState } from "react";

const rideShareSchema = z.object({
  origin: z.string().min(2, { message: "Podaj miejsce wyjazdu" }),
  passengers: z
    .string()
    .min(1, { message: "Podaj liczbę dostępnych miejsc" })
    .max(1),
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

  const originValue = watch("origin");
  const passengersValue = watch("passengers");
  const contactValue = watch("contact");

  const onSubmit = (data: RideShareValues) => {
    console.log(data);
    // toast.success(<pre>{JSON.stringify(data, null, 2)}</pre>);
    reset();
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex h-12  w-64 md:w-auto items-center justify-center gap-2 rounded-lg bg-gold/70 px-4 py-2 text-gray-800 shadow transition hover:bg-beige/60 sm:w-auto">
          <Car className="h-6 w-6" />
          Jadę i mam wolne miejsca
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <DialogHeader>
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
              <Label htmlFor="origin" className={`${errors.contact? "text-red-500":""}`}>Skąd jedziesz</Label>
              <Input
                type="string"
                id="origin"
                placeholder="Gdańsk"
                {...register("origin")}
                value={originValue}
                onChange={(e) => setValue("origin", e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="passengers" className={`${errors.contact? "text-red-500":""}`}> Ile osób możesz wziąć</Label>
              <Input
                type="number"
                id="passengers"
                placeholder="3"
                {...register("passengers")}
                value={passengersValue}
                onChange={(e) => setValue("passengers", e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="contact" className={`${errors.contact? "text-red-500":""}`}> Kontakt do Ciebie</Label>
              <Input
              id="contact"
              type="string"
              placeholder="123456789 / email@example.com / fb: jan kowalski"
              {...register("contact")}
              value={contactValue}
              onChange={(e) => setValue("contact", e.target.value)}
              />
            </div>
          
          <Button
            type="submit"
            className="w-full bg-rose-200 text-black hover:bg-color-none hover:shadow-lg"
          >
            Opublikuj przejazd
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
