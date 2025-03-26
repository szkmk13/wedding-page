import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ContactPerson = {
  role: string;
  name: string;
  contact: string | null;
  image: string | null;
};

export default function ContactFooter() {
  const contacts: ContactPerson[] = [
    {
      role: "Panna młoda",
      name: "Wiktoria Kwiatkowska",
      contact: "XXX XXX XXX",
      image: null,
    },
    {
      role: "Pan młody",
      name: "Szymon Kowalski",
      contact: "XXX XXX XXX",
      image: null,
    },
    {
      role: "Świadkowa",
      name: "Marta Muża",
      contact: null,
      image: null,
    },
    {
      role: "Świadek",
      name: "Karol Rynkowski",
      contact: null,
      image: "/karol.png",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden px-8 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-main mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Kontakt w razie pytań
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-4 rounded-lg bg-[url('/tlo5.png')] p-4 transition-all duration-300 hover:bg-beige/60"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#f9ecdc] transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-md">
                {contact.image ? (
                  <Image
                    src={contact.image}
                    alt="Image"
                    width={150}
                    height={150}
                    quality={100}
                    className="rounded-full group-hover:shadow-md"
                  />
                ) : (
                  <span className="text-main text-xl font-bold">
                    {contact.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-600">{contact.role}</p>
                <p className="text-main font-semibold">{contact.name}</p>

                {contact.contact && (
                  <Link
                    href={`tel:${contact.contact.replace(/\s/g, "")}`}
                    className="hover:text-main mt-1 flex items-center gap-2 text-gray-600"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contact.contact}</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex h-full w-full items-center justify-center">
        <Image
          src="/ledon.svg"
          alt="Ledon"
          width={150}
          height={150}
          quality={100}
        />
      </div>
    </div>
  );
}
