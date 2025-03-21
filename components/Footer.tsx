import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/public/assets/svg/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={LogoSvg}
              alt="ES Web Logo"
              width={120}
              height={120}
              className="w-auto h-8"
            />
          </div>

          {/* Liens légaux */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-600">
            <Link
              href="/mentions-legales"
              className="hover:text-sky-600 transition-colors"
            >
              Mentions légales
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <Link
              href="/politique-confidentialite"
              className="hover:text-sky-600 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>© {currentYear}</span>
            <span className="text-slate-600">Made by</span>
            <a
              href="https://elyesasahin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-700 transition-colors"
            >
              Spectre
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
