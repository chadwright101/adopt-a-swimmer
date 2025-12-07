import { Metadata } from "next";
import { Roboto, Barrio, Caveat } from "next/font/google";

import HeaderWrapper from "./_components/navigation/header/header-wrapper";
import Footer from "./_components/navigation/footer/footer";
import ScrollUpButton from "./_components/navigation/scroll-up-button";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const barrio = Barrio({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barrio",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adoptaswimmer.co.za"),
  title: "Adopt A Swimmer NPO | Plettenberg Bay",
  description:
    "At Adopt a Swimmer, we believe that everyone has the power to make a difference, and we do it through one of our greatest loves and life’s most vital skills – swimming! Based in Plettenberg Bay, South Africa",
  keywords: "Adopt a Swimmer, swimming, NPO, Plettenberg Bay, South Africa",
  openGraph: {
    description:
      "At Adopt a Swimmer, we believe that everyone has the power to make a difference, and we do it through one of our greatest loves and life’s most vital skills – swimming! Based in Plettenberg Bay, South Africa",
    type: "website",
    locale: "en_ZA",
    siteName: "Adopt A Swimmer NPO | Plettenberg Bay",
    images: [
      {
        url: "https://ik.imagekit.io/thewrightdesigns/tr:w-1100,q-70/DSC_1511.jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${barrio.variable} ${caveat.variable}`}>
        <HeaderWrapper />
        {children}
        <ScrollUpButton />
        <Footer />
      </body>
    </html>
  );
}
