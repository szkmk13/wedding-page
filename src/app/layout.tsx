import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import { GeistSans } from "geist/font/sans";
import { Allura, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import { type Metadata } from "next";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});
const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});
const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
export const metadata: Metadata = {
  title: "Wesele Wiktorii i Szymona",
  description: "Strona weselna Wiktorii i Szymona",
  icons: [{ rel: "icon", url: "/ledon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${allura.variable} ${cormorant.variable} ${dancingScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
