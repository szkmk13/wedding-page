import { ChevronDown, Church, MapPin, PartyPopper } from "lucide-react";

import { Button } from "@/components/extendui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold/60 px-4 py-2 text-gray-800 shadow transition hover:bg-gold/90 sm:w-auto">
          <MapPin className="h-6 w-6" />
          Otwórz w Google Maps
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/pxnR21dtu5NY3JMr8"
              className="flex  items-center gap-2 hover:bg-gold/60"
            >
              <Church className="h-4 w-4" />
              <span>Kościół</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/HmiEkEYh4WYX5ZNy6"
              className="flex w-full items-center gap-2 hover:bg-gold/60"
            >
              <PartyPopper className="h-4 w-4" />
              <span>Sala Weselna</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}