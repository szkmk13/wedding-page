import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Wesele Wiktorii i Szymona",
  description: "Strona weselna Wiktorii i Szymona",
  icons: [{ rel: "icon", url: "/ledon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
