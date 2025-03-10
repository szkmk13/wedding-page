import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import { Button } from "@/components/extendui/button";
import { SendingButton } from "@/components/extendui/calender_button";
import SaveTheDate from "@/components/saveTheDate";
import WeddingSchedule from "@/components/timetable";
import OrganizationalInfo from "@/components/organizational-info";
import ContactFooter from "@/components/contact-footer";
import Image from "next/image";
import DirectionsMap from "@/components/directions";
import WeddingGifts from "@/components/giftPreferences";

export default async function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-2">
          <SaveTheDate />
          <WeddingSchedule />
          <DirectionsMap/>
          <WeddingGifts />
          <OrganizationalInfo />
          <ContactFooter />
        </div>
      </main>
  );
}
