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

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 ">

<SaveTheDate/>
<WeddingSchedule/>
<GiftPreferences/>
<OrganizationalInfo/>
<ContactFooter/>
          

        </div>
      </main>
    </HydrateClient>
  );
}
