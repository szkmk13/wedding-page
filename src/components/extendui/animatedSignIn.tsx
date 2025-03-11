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
  consent: z.boolean().refine((val) => val === true, {
    message: "Musisz wyrazić zgodę na kontakt",
  }),
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
      consent: false,
    },
  });

  const originValue = watch("origin");
  const passengersValue = watch("passengers");
  const contactValue = watch("contact");
  const consentValue = watch("consent");

  const onSubmit = (data: RideShareValues) => {
    console.log(data);
    // toast.success(<pre>{JSON.stringify(data, null, 2)}</pre>);
    reset();
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold/60 px-4 py-2 text-gray-800 shadow transition hover:bg-gold/90 sm:w-auto">
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
          <div className="space-y-2">
            <Input
              id="origin"
              type="string"
              placeholder="Gdańsk"
              {...register("origin")}
              value={originValue}
              onChange={(e) => setValue("origin", e.target.value)}
            >
              <Input.Group>
                <Input.Label>
                  Skąd jedziesz
                </Input.Label>
                <Input.ClearButton onClick={() => setValue("origin", "")} />
              </Input.Group>
            </Input>
          </div>
          <div className="space-y-2">
            <Input
              id="passengers"
              type="number"
              placeholder="3"
              {...register("passengers")}
              value={passengersValue}
              onChange={(e) => setValue("passengers", e.target.value)}
            >
              <Input.Group>
                <Input.Label
                  className={errors.passengers ? "text-red-500" : ""}
                >
                  Ile osób możesz wziąć
                </Input.Label>
                <Input.ClearButton onClick={() => setValue("passengers", "")} />
              </Input.Group>
            </Input>
          </div>
          <div className="space-y-2">
            <Input
              id="contact"
              type="string"
              placeholder="123456789 / email@example.com / fb: jan kowalski"
              {...register("contact")}
              value={contactValue}
              onChange={(e) => setValue("contact", e.target.value)}
            >
              <Input.Group>
                <Input.Label className={errors.contact ? "text-red-500" : ""}>
                  Kontakt do Ciebie
                </Input.Label>
                <Input.ClearButton onClick={() => setValue("contact", "")} />
              </Input.Group>
            </Input>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                checked={consentValue}
                onCheckedChange={(checked) =>
                  setValue("consent", checked as boolean)
                }
                {...register("consent")}
              />
              <Label
                htmlFor="consent"
                className={`text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  errors.consent ? "text-red-500" : ""
                }`}
              >
                Wyrażam zgodę na kontakt w sprawie przejazdu
              </Label>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-rose-200 text-black hover:bg-none"
          >
            Opublikuj przejazd
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
