import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google"; // Import des polices
import "./globals.css";

// Configuration de Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuration de Kanit
const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
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
      <body className={`${inter.variable} ${kanit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
