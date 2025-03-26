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

import { useState } from "react";

export function RideSearch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex h-12 w-64 items-center justify-center gap-2 rounded-lg bg-[url('/tlo5.png')] px-4 py-2 text-gray-800 shadow transition sm:w-auto md:w-auto">
          <Users className="h-6 w-6" />
          Szukam z kim mogę pojechać
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle></DialogTitle>
        <DialogHeader>
          <DialogDescription className="text-center">
            Lista gości którzy mają miejsca
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
