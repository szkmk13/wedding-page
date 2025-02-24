import { Phone, Facebook, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

type ContactPerson = {
  role: string
  name: string
  contact: string|null
}

export default function ContactFooter() {
  const contacts: ContactPerson[] = [
    {
      role: "Panna młoda",
      name: "Wiktoria Kwiatkowska",
      contact: "XXX XXX XXX",
    },
    {
      role: "Pan młody",
      name: "Szymon Kowalski",
      contact: "XXX XXX XXX",
    },
    {
      role: "Świadkowa",
      name: "Marta Muża",
      contact: null
    },
    {
      role: "Świadek",
      name: "Karol Rynkowski",
      contact: null
    },
  ]

  return (
    <div className="relative w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-1 top-1/4 transform rotate-12 opacity-60">
          <Sparkles className="w-24 h-24 text-rose animate-pulse" />
        </div>
        <div className="absolute left-4 bottom-1/4 transform -rotate-12 opacity-60">
          <Sparkles className="w-16 h-16 text-rose animate-pulse" />
        </div>
        <div className="absolute right-1/4 bottom-8 transform rotate-45 opacity-60">
          <Sparkles className="w-20 h-20 text-rose animate-pulse" />
        </div>
        <div className="absolute left-1/3 bottom-64 transform rotate-45 opacity-60">
          <Sparkles className="w-20 h-20 text-rose animate-pulse" />
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-main sm:text-4xl mb-12">
          Kontakt w razie pytań
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-4 rounded-lg bg-beige/60 p-4 transition-all duration-300 hover:bg-rose/20"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-rose/60 transition-all duration-300 group-hover:bg-gold/60">
                <span className="text-2xl font-bold text-main">{contact.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">{contact.role}</p>
                <p className="font-semibold text-main">{contact.name}</p>

                {contact.contact &&  <Link
                    href={`tel:${contact.contact.replace(/\s/g, "")}`}
                    className="mt-1 flex items-center gap-2 text-gray-600 hover:text-main"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contact.contact}</span>
                  </Link>}

                
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-full mt-6">
  <Image
    src="/ledon.svg"
    alt="Ledon"
    width={150}
    height={150}
    quality={100}
  />
</div>
    </div>
  )
}

