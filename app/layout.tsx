import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Sans } from "next/font/google";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// Configuration de Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuration de Instrument Sans
const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-instrument_sans",
});

// Configuration de Syne
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "ES Web",
  description: "ES Web - Votre description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${instrumentSans.variable} ${syne.variable} font-sans  overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
