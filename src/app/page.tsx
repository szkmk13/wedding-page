
import SaveTheDate from "@/components/saveTheDate";
import WeddingSchedule from "@/components/timetable";
import OrganizationalInfo from "@/components/organizational-info";
import ContactFooter from "@/components/contact-footer";
import DirectionsMap from "@/components/directions";
import WeddingGifts from "@/components/giftPreferences";
import Image from "next/image";

export default async function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center">

        <div className="container flex flex-col items-center justify-center gap-8 px-2">        
          {/* <Image
  src="/my2.jpg"
  width={1920}
  height={1080}
  alt="Tło weselne"
  quality={100}
  className="fixed inset-0 object-cover w-full h-full -z-10 "
/> */}
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
