import { Home, Dumbbell, PaintbrushIcon as Paint, CreditCard } from "lucide-react"

export default function GiftPreferences() {
  return (
    <div className="w-full bg-white/90 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-main sm:text-4xl mb-12">
          Zamiast kwiatów, będzie nam miło otrzymać:
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="rounded-full bg-gold/20 p-4">
              <Home className="h-8 w-8 text-main" />
            </div>
            <div>
              <p className="text-lg text-gray-700">
                Marzymy o własnym gniazdku, dlatego będziemy wdzięczni za wsparcie w urządzaniu naszego pierwszego
                wspólnego mieszkania.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="rounded-full bg-gold/20 p-4">
              <Paint className="h-8 w-8 text-main" />
            </div>
            <div>
              <p className="text-lg text-gray-700">
                Planujemy remont i wykończenie mieszkania, każda pomoc w realizacji tego marzenia będzie dla nas
                bezcenna.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="rounded-full bg-gold/20 p-4">
              <Dumbbell className="h-8 w-8 text-main" />
            </div>
            <div>
              <p className="text-lg text-gray-700">
                Sport to nasza pasja, dlatego chcielibyśmy stworzyć małą siłownię w naszym nowym domu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="rounded-full bg-gold/20 p-4">
              <CreditCard className="h-8 w-8 text-main" />
            </div>
            <div>
              <p className="text-lg text-gray-700">
                Jeśli chcielibyście wesprzeć nas w realizacji tych marzeń, będziemy wdzięczni za pomoc w formie przelewu
                na konto:
                <span className="block mt-2 font-medium">XX XXXX XXXX XXXX XXXX XXXX XXXX</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

