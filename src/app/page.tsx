import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import { Button } from "@/components/extendui/button";
import { SendingButton } from "@/components/extendui/calender_button";
import SaveTheDate from "@/components/saveTheDate";
import WeddingSchedule from "@/components/timetable";
import GiftPreferences from "@/components/giftPreferences";
import OrganizationalInfo from "@/components/organizational-info";
import ContactFooter from "@/components/contact-footer";
import Image from "next/image";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-2">
          <SaveTheDate />
          <Image
            src="/ledon.svg"
            alt="Ledon"
            width={200}
            height={200}
            quality={100}
            className="inset-0 z-0"
          />
          <WeddingSchedule />
          <GiftPreferences />
          <OrganizationalInfo />
          <ContactFooter />
        </div>
      </main>
    </HydrateClient>
  );
}
