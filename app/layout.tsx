import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google"; // Import des polices
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
        className={`${inter.variable} ${instrumentSans.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
